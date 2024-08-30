// import Image from "next/image";
import { useState } from "react";
const Faq = ({ toggleFaq }) => {
  const [clipboardState, setClipboardState] = useState({
    text: "Clipboard",
    icon: "content_copy",
  });
  const handleCopyToClipboard = () => {
    const textToCopy = "Check out this great site!";
    const urlToCopy = "https://rudecaptcha.xyz";
    const fullText = `${textToCopy} ${urlToCopy}`;

    navigator.clipboard
      .writeText(fullText)
      .then(() => setClipboardState({ text: "Copied", icon: "check_circle" }))
      .catch((err) => console.error("Failed to copy text to clipboard", err));
  };
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-[1000] flex justify-center p-8 ">
      <div className="fixed top-0 bg-blue-500 opacity-90 w-full p-4 flex items-center justify-center">
        <div className="flex items-center justify-between w-full md:w-2/3 px-4 ">
          <a
            href="https://tawk.to/chat/6627a60ea0c6737bd12f5a90/1hs5e1aaa"
            target="_blank"
            rel="noopener noreferrer"
            className="md:pl-10 "
          >
            <span className="material-icons text-white text-2xl md:text-3xl hover:text-gray-200 hover:animate-pulse">
              mail
            </span>
          </a>
          <h2 className="text-white font-bold">rudeCAPTCHA</h2>
          <button onClick={toggleFaq} className="md:pr-10">
            <span className="material-icons text-red-500 text-2xl md:text-3xl hover:text-red-700 hover:animate-pulse">
              cancel
            </span>
          </button>
        </div>
      </div>
      {/* <button onClick={toggleFaq} className="fixed top-5 right-5">
        <span className="material-icons text-red-500 text-2xl md:text-3xl hover:text-red-700 hover:animate-pulse">
          cancel
        </span>
      </button> */}
      <article className="prose pt-10">
        <h2 className="pt-8">How to use it?</h2>

        <p>1. Make sure your webcam/ front facing camera is on</p>
        <p>
          2. Copy the obscene hand gesture in the top right in front of the
          camera
        </p>
        {/* <Image
          src="/makeGesture.jpeg" // Assuming '/makeGesture.jpeg' is correctly placed in your 'public' folder
          alt="make gesture"
          width={500} // Specify the width
          height={300} // And the height
          layout="responsive" // This makes the image scale nicely to the parent element's width
        /> */}

        <img
          src="/makeGesture.jpg"
          alt="How to use rude captcha make gesture"
          width="500"
          height="300"
          loading="lazy"
          className="w-full h-auto"
        />

        <p>
          3. Sometimes the AI can&apos;t detect it straight away so move your
          hand a bit.
        </p>
        <p>4. You will be asked to perform a new gesture</p>
        <h2>FAQ</h2>
        <h4>Why did you make this?</h4>
        <p>
          When you complete a CAPTCHA you are performing unpaid labor for a
          globalized megacorp training an AI that will replace you.
        </p>
        <p>AI can defeat traditional CAPTCHA.</p>
        <p>What it can&#39;t do is be offensive.</p>
        <h4>It doesn&apos;t work</h4>
        <p>
          Sometimes it takes a while for the AI model to load. Mobile problems
          are often solved by turning off low power mode
        </p>
        <h4>Can you add a gesture from my country?</h4>
        <p>
          Yes. Please contact me via the link below.it&#39;s interesting to
          break down language barriers and learn how to insult people from all
          over the world
        </p>
        <h4>Do you really think this will replace CAPTCHAs?</h4>
        <p>No</p>
        <h4>How does this work?</h4>
        <p>
          It uses the Tensorflow.js and the handpose and fingerpose libraries to
          detect which handgesture you are making. Many thanks to the developers
          of those libraries.
        </p>

        <h2>Share</h2>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://rudecaptcha.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 m-2 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded no-underline hover:underline shadow-lg"
        >
          Share on Facebook
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=https://rudecaptcha.xyz&text=Rude%20captcha%20uses%20AI%20to%20check%20if%20you're%20human"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 m-2 text-white bg-black hover:bg-gray-600 font-medium rounded no-underline hover:underline shadow-lg"
        >
          Share on <span className="font-bold font-serif">X</span>
        </a>
        <button
          className="inline-block px-6 py-2 m-2 text-white bg-red-500 hover:bg-red-600 font-medium rounded no-underline hover:underline shadow-lg"
          onClick={handleCopyToClipboard}
        >
          <span className="material-icons text-sm mr-2">
            {clipboardState.icon}
          </span>
          {clipboardState.text}
        </button>
        <h3>How to share on TikTok/Reels</h3>
        <p>Please take a screen recording and then share it</p>

        <h4>on iOS:</h4>
        <p>
          Go to{" "}
          <span className="font-semibold">Settings &gt; Control Centre</span>{" "}
          tap the Add button next to Screen Recording. Open Control Centre on
          your iPhone, then wait for the three-second countdown. Exit Control
          Centre to record your screen.
        </p>
        <h2>Contact</h2>
        <p>Got a question or comment? Want to make content about rudeCAPTCHA</p>
        <a
          href="https://tawk.to/chat/6627a60ea0c6737bd12f5a90/1hs5e1aaa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-blue-100 rounded p-2 text-blue-500"
        >
          <span className="material-icons text-xl">mail</span>Click here to
          Contact me
        </a>
        <div className=" flex items-center justify-center">
          <button
            onClick={toggleFaq}
            className=" flex items-center justify-center mb-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <span className="text-white material-icons mr-2 text-xl">
              cancel
            </span>
            CLOSE FAQ
          </button>
        </div>
      </article>
    </div>
  );
};

export default Faq;
