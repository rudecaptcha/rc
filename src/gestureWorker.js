// gestureWorker.js
import * as fp from "fingerpose";
import * as handpose from "@tensorflow-models/handpose";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";

let net;
let gestures;

self.addEventListener("message", async (event) => {
  if (event.data.type === "INIT") {
    await tf.setBackend("webgl");
    net = await handpose.load();
    gestures = event.data.gestures;
    self.postMessage({ type: "READY" });
  } else if (event.data.type === "DETECT") {
    if (!net) {
      self.postMessage({ type: "ERROR", message: "Model not loaded" });
      return;
    }

    const hand = await net.estimateHands(event.data.image);

    if (hand.length > 0) {
      const GE = new fp.GestureEstimator(Object.values(gestures));
      const gesture = await GE.estimate(hand[0].landmarks, 4);

      if (gesture.gestures && gesture.gestures.length > 0) {
        const sortedGestures = gesture.gestures.sort(
          (a, b) => b.score - a.score
        );
        self.postMessage({
          type: "RESULT",
          result: {
            detecting: true,
            answer: sortedGestures[0].name,
            answer2: sortedGestures[1]
              ? sortedGestures[1].name
              : "no second answer",
          },
        });
      } else {
        self.postMessage({
          type: "RESULT",
          result: {
            detecting: true,
            answer: "no answer yet",
            answer2: "no answer yet",
          },
        });
      }
    } else {
      self.postMessage({
        type: "RESULT",
        result: { detecting: false },
      });
    }
  }
});
