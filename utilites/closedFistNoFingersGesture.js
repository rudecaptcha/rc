export let closedFistNoFingersGesture = null;
if (typeof window !== "undefined" && window.fp) {
  const { Finger, FingerCurl, GestureDescription } = window.fp;

  // Define the "Closed Fist" Gesture (no fingers showing)
  closedFistNoFingersGesture = new GestureDescription("closed_fist_no_fingers");

  // Loop through all fingers and fully curl them
  for (let finger of [
    Finger.Thumb,
    Finger.Index,
    Finger.Middle,
    Finger.Ring,
    Finger.Pinky,
  ]) {
    closedFistNoFingersGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  }
}
