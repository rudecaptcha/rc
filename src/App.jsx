import React, { useRef, useEffect, useState, useCallback } from "react";
import { lazy, Suspense } from "react";

// Lazy load components
const Faq = lazy(() => import("./components/faq"));
const IntroOverlay = lazy(() => import("./components/introoverlay"));
const NotARobotModal = lazy(() => import("./components/notarobotmodal"));
const IconButton = lazy(() => import("./components/iconbutton"));
const Modal = lazy(() => import("./components/modal"));

import { urls } from "../utilites/urls";

const fp = window.fp;
const handpose = window.handpose;

const loadGestures = () =>
  Promise.all([
    import("../utilites/middleFingerUpGesture").then((module) => ({
      middleFingerUpGesture: module.middleFingerUpGesture,
    })),
    import("../utilites/vSign").then((module) => ({ vSign: module.vSign })),
    import("../utilites/thumbsUpGesture").then((module) => ({
      thumbsUpGesture: module.thumbsUpGesture,
    })),
    import("../utilites/thumbsDownGesture").then((module) => ({
      thumbsDownGesture: module.thumbsDownGesture,
    })),
    import("../utilites/closedFistGesture").then((module) => ({
      closedFistGesture: module.closedFistGesture,
    })),
    import("../utilites/closedFistNoFingersGesture").then((module) => ({
      closedFistNoFingersGesture: module.closedFistNoFingersGesture,
    })),
    import("../utilites/moutzaGesture").then((module) => ({
      moutzaGesture: module.moutzaGesture,
    })),
    import("../utilites/middleFingerDown").then((module) => ({
      middle_finger_down: module.middle_finger_down,
    })),
  ]).then((modules) => Object.assign({}, ...modules));

export default function Main() {
  const [webcamLoading, setWebcamLoading] = useState(true);
  const [startDetection, setStartDetection] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const isDetectionActiveRef = useRef(false);
  const [showNotARobotModal, setShowNotARobotModal] = useState(false);
  const [net, setNet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showOnboard, setShowOnboard] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showStartButton, setShowStartButton] = useState(true);

  const [i, setI] = useState(0);
  const iRef = useRef(i);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  const webcamRef = useRef(null);

  useEffect(() => {
    iRef.current = i;
  }, [i]);

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
    toggleDetection();
  }, []);

  const toggleDetection = useCallback(() => {
    isDetectionActiveRef.current = !isDetectionActiveRef.current;
    console.log("Detection toggled to:", isDetectionActiveRef.current);
  }, []);

  const toggleFaq = useCallback(() => {
    toggleDetection();
    setShowFaq((prev) => !prev);
  }, []);

  const handleGestureRecognition = useCallback(
    (answer, answer2) => {
      if (isDetectionActiveRef.current) {
        if (
          urls[iRef.current].GestureDescription === answer ||
          urls[iRef.current].GestureDescription === answer2
        ) {
          toggleDetection();
          setShowTick(true);
          console.log("success");
          setTimeout(() => {
            setShowTick(false);
            toggleDetection();
            console.log("Detection re-enabled.");
          }, 1500);
          const nextIndex =
            iRef.current < urls.length - 1 ? iRef.current + 1 : 0;
          setI(nextIndex);
          console.log("Index updated to:", nextIndex);
        }
      }
    },
    [toggleDetection]
  );

  const detect = useCallback(
    async (net, gestures) => {
      if (webcamRef.current && net && isDetectionActiveRef.current) {
        const hand = await net.estimateHands(webcamRef.current);

        if (hand.length > 0) {
          // setDetectingHand(true);
          console.log("hand");
          const GE = new fp.GestureEstimator([
            gestures.middleFingerUpGesture,
            gestures.vSign,
            gestures.thumbsUpGesture,
            gestures.thumbsDownGesture,
            gestures.closedFistGesture,
            gestures.closedFistNoFingersGesture,
            gestures.moutzaGesture,
            gestures.middle_finger_down,
          ]);

          const gesture = await GE.estimate(hand[0].landmarks, 4);
          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
            const sortPredictions = gesture.gestures.sort(
              (a, b) => b.score - a.score
            );

            // setAnswer(sortPredictions[0].name);

            if (sortPredictions.length > 1) {
              // setAnswer2(sortPredictions[1].name);
              handleGestureRecognition(
                sortPredictions[0].name,
                sortPredictions[1].name
              );
            } else {
              // setAnswer2("no second answer");
              handleGestureRecognition(
                sortPredictions[0].name,
                "no second answer"
              );
            }
            console.log("calling");
          } else {
            // setAnswer("no answer yet");
            // setAnswer2("no answer yet");
          }
        } else {
          // setDetectingHand(false);
          console.log("no fingerpose yet");
        }
      }
    },
    [webcamRef, isDetectionActiveRef, handleGestureRecognition]
  );

  const runHandpose = useCallback(
    async (net) => {
      console.log("running handpose");
      const gestures = await loadGestures();
      setInterval(() => {
        detect(net, gestures);
      }, 300);
    },
    [detect]
  );

  useEffect(() => {
    async function setupWebcamAndModels() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          frameRate: { ideal: 15, max: 30 },
          width: { ideal: 640 },
          height: { ideal: 1138 },
          aspectRatio: { ideal: 9 / 16 },
        });
        webcamRef.current.srcObject = stream;

        const loadedNet = await handpose.load();
        setNet(loadedNet);

        console.log("Setup complete.");
      } catch (error) {
        console.error("Error setting up webcam or loading models:", error);
      }
    }

    if (typeof window !== "undefined" && navigator.mediaDevices) {
      setupWebcamAndModels();
    }
  }, []);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedNet = await handpose.load();
        setNet(loadedNet);
        console.log("Handpose model loaded.");
      } catch (error) {
        console.error("Failed to load the Handpose model:", error);
      }
    };

    loadModel();
  }, []);

  useEffect(() => {
    const video = webcamRef.current;
    if (video) {
      const handleCanPlay = () => {
        setWebcamLoading(false);
        setVideoPlaying(true);
        console.log("Video is ready to play.");
      };
      const handlePlaying = () => {
        setVideoPlaying(true);
        console.log("Video is playing.");
      };
      const handlePause = () => {
        setVideoPlaying(false);
        console.log("Video is paused.");
      };

      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("playing", handlePlaying);
      video.addEventListener("pause", handlePause);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("playing", handlePlaying);
        video.removeEventListener("pause", handlePause);
      };
    }
  }, [webcamRef, net]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setShowNotARobotModal(true);
    }, 5000);

    if (!webcamLoading) {
      clearTimeout(timer);
      setShowIntro(false);
      console.log("Webcam finished loading, set showIntro to false");
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("videoPlaying", videoPlaying);

    if (!startDetection && videoPlaying && net) {
      console.log("start detection");
      runHandpose(net);
      setStartDetection(true);
    }
  }, [videoPlaying, net, runHandpose, startDetection]);

  // The return statement and JSX would go here
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center md:flex-row bg-white p-4 md:p-0 overflow-hidden">
      <p className="absolute top-0 z-[5000]">
        {showNotARobotModal && (
          <Suspense fallback={<div>Loading...</div>}>
            <NotARobotModal
              net={net}
              setShowNotARobotModal={setShowNotARobotModal}
            />
          </Suspense>
        )}
      </p>
      {showOnboard && <Onboard setShowOnboard={setShowOnboard} />}

      {showIntro && (
        <Suspense fallback={<div>Loading...</div>}>
          <IntroOverlay showIntro={showIntro} />
        </Suspense>
      )}
      {/* {showFaq && <Faq toggleFaq={toggleFaq} />} */}
      {showFaq && (
        <Suspense fallback={<div>Loading...</div>}>
          <Faq toggleFaq={toggleFaq} />
        </Suspense>
      )}

      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <Modal
            toggleModal={toggleModal}
            toggleDetection={toggleDetection}
            setShowModal={setShowModal}
          />
        </Suspense>
      )}

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden ">
          {showDebug ? (
            <div className="absolute top-0 ">
              <p className="text-sm capitalize">debug</p>
              <div className="flex-row flex items-center justify-center">
                <p
                  className={`text-s ${
                    isDetectionActiveRef.current
                      ? "text-blue-600 "
                      : "text-red-600"
                  }`}
                >
                  {isDetectionActiveRef.current
                    ? "isDetectionActiveRef.current |"
                    : "not isDetectionActiveRef.current |"}
                </p>
                <p
                  className={`text-s ${
                    net !== null ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {net !== null ? " net|" : " no net|"}
                </p>
                <p
                  className={`text-s ${
                    startDetection ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {startDetection
                    ? "startDetection"
                    : "no       startDetection"}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="absolute top-0 hover:text-black text-transparent hover:underline"
              onClick={() => setShowDebug(true)}
            >
              Show debug menu
            </div>
          )}
          {i > 5 && <div>finished {i}</div>}
          <div
            className="flex justify-between items-center p-4 bg-blue-500"
            style={{ minHeight: "4rem" }}
          >
            <div>
              <h4 className="text-gray-100 text-sm ">
                {webcamLoading || showTick
                  ? "Loading..."
                  : showStartButton
                  ? "Get Ready"
                  : "Make the Gesture"}
              </h4>
              <h4 className="text-xl font-bold text-white">
                {webcamLoading || showStartButton
                  ? "rudeCAPTCHA"
                  : showTick
                  ? "Correct"
                  : urls[i].description}
              </h4>
            </div>
            {webcamLoading || showTick ? (
              <div className="h-24  flex items-center justify-center">
                <div className="pr-4">
                  {/* <LoadingSpinner /> */}

                  <p className="material-icons text-xl animate-spin">
                    <span className="material-symbols-outlined text-2xl text-white">
                      rotate_right
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <img
                src={urls[i].url}
                alt={urls[i].description}
                className={`h-24 border-white border-2 ${
                  showStartButton && "invisible"
                }`}
              />
            )}
          </div>

          {/* Existing video and grid overlay */}
          <div className="relative h-64 bg-gray-100">
            {webcamLoading && (
              <div className="h-full flex flex-col items-center justify-center prose">
                <h3>LOADING...</h3>
                <h5>Initializing webcam...</h5>
                <h5>Loading AI model...</h5>

                <p className="material-icons  animate-spin ">
                  <span className="material-symbols-outlined text-5xl">
                    rotate_right
                  </span>
                </p>
              </div>
            )}
            {showTick && (
              <div
                className="absolute top-0 left-0 w-full h-full bg-transparent flex items-center justify-center  "
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <div className="bg-white/50 h-24 w-24 flex items-center justify-center rounded-full  ">
                  <p className="text-green-500 text-5xl ">✓</p>
                </div>
              </div>
            )}

            <video
              ref={webcamRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover z-100"
            />
            {!webcamLoading && (
              <div className="absolute top-0 left-0 w-full h-full bg-transparent grid grid-cols-4 grid-rows-4 border border-transparent z-10">
                {Array.from({ length: 16 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="border border-white"
                    style={{ minHeight: "1px" }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content block */}
          <div className="p-4">
            <p
              className={` text-base overflow-hidden   ${
                showTick ? "text-white" : "text-gray-700"
              }`}
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
            >
              {webcamLoading ? (
                "Sick of having to prove to a robot you're human? AI isn't allowed to be offensive so won't be able to break this Captcha."
              ) : showStartButton ? (
                <React.Fragment>
                  Make the obscene gesture indicated in the top right. Make sure
                  your hand is visible to the webcam. Press Start to begin . ↘
                </React.Fragment>
              ) : (
                urls[i].blurb || <div className="h-14"></div>
              )}
            </p>
          </div>

          {/* Buttons */}
          <div className="px-4 pt-4 pb-2 flex justify-start space-x-3">
            <Suspense fallback={<div>Loading...</div>}>
              <IconButton
                showTick={showTick}
                icon={"help"}
                onClick={toggleFaq}
              />
              <IconButton
                showTick={showTick}
                icon={" ios_share"}
                onClick={toggleModal}
              />
              {startDetection && (
                <IconButton
                  showTick={showTick}
                  icon={"autorenew"}
                  onClick={() => {
                    i > 0 ? setI(i - 1) : setI(urls.length - 1);
                  }}
                />
              )}
            </Suspense>
            <div className=" w-full flex justify-end">
              {startDetection && showStartButton && (
                <button
                  onClick={() => {
                    toggleDetection();
                    setShowStartButton(false);
                  }}
                  type="button"
                  className=" focus:outline-none hover:underline text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Start
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
