export let middle_finger_down = null;

if (typeof window !== "undefined" && window.fp) {
  const { Finger, FingerCurl, FingerDirection, GestureDescription } = window.fp;

  // Define the custom gesture, you can name it "Four Up One Down"
  middle_finger_down = new GestureDescription("middle_finger_down");

  // Loop through all fingers except the middle finger and set them to be extended
  for (let finger of [Finger.Thumb, Finger.Index, Finger.Ring, Finger.Pinky]) {
    middle_finger_down.addCurl(finger, FingerCurl.NoCurl, 1.0);
    middle_finger_down.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  }

  // Set the middle finger to be curled
  middle_finger_down.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
}
