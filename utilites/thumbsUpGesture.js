export let thumbsUpGesture = null;

if (typeof window !== "undefined" && window.fp) {
  const { Finger, FingerCurl, FingerDirection, GestureDescription } = window.fp;

  // Define the "Thumbs Up" Gesture
  thumbsUpGesture = new GestureDescription("thumbs_up");

  // Thumb
  // The thumb should be extended and not curled, with reduced confidence to allow for some flexibility
  thumbsUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.75);
  // The direction of the thumb can vary since it's not strictly vertical or horizontal when giving a thumbs up
  thumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);
  thumbsUpGesture.addDirection(
    Finger.Thumb,
    FingerDirection.HorizontalLeft,
    0.75
  );
  thumbsUpGesture.addDirection(
    Finger.Thumb,
    FingerDirection.HorizontalRight,
    0.75
  );

  // Other Fingers (Index, Middle, Ring, and Pinky)
  // The other fingers should be curled for a thumbs-up gesture
  for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    thumbsUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  }
}
