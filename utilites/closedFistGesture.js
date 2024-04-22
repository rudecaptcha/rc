export let closedFistGesture = null;
if (typeof window !== "undefined" && window.fp) {
  const { Finger, FingerCurl, GestureDescription } = window.fp;
  closedFistGesture = new GestureDescription("closed_fist");
  // Define the "Closed Fist" Gesture

  // Thumb
  // For a closed fist, the thumb is also curled
  closedFistGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

  // Other Fingers (Index, Middle, Ring, and Pinky)
  // All other fingers should be fully curled for a closed fist gesture
  for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    closedFistGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  }
}
