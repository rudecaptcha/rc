import React, { useCallback, memo } from "react";

const RudeCaptchaSVG = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="20"
    height="20"
    aria-hidden="true"
  >
    <path
      d="M98.78 62.95c1.4 6.28.71 36.04-3.03 41.8-6.34 9.7-14.34 8.04-18.36 9.69 0 0-5.39 2.15-12.33 1.39 0 0-5.71.89-15.12-2.93-5.81-2.37-12.65-4.16-18.06-18.45-3.69-9.73-3.76-10.63-1.39-14.03 0 0 1.77-3.22 3.58-3.48.76-.11 2.69-.85 3.39-2.23-.56 1.27-1.5 1.57-1.5 1.57s-2.83 8.4 3.41 10.98c4.95 2.04 1.2-4.8-1.77-12.85v-.01c.09-.28.13-.59.1-.92-.41-4.93-2.43-14.68 3.18-19.78 3.21-2.9 6.06-2.13 8.58-1.8 0 0 3.5 1.32 4.13-3.45.76-5.86-1.72-37.27 1.07-43.95 1.97-4.75 8.56-5.1 11.5-1.33 3.06 3.92 2.28 10.93 3.08 35.58.3 9.08.34 12.39 1.63 13.09 2.46 1.36 3.36-2.56 10.68.62 1.11.51 2.66 2.43 3.03 3.09.66 1.11 1.32 2.94 4.27 2.23 1.44-.34 8.38-1.81 9.93 5.17z"
      fill="#3b82f6"
    />
    <path
      d="M37.6 74.4c2.97 8.05 6.72 14.89 1.77 12.85-6.24-2.57-3.41-10.98-3.41-10.98s.94-.29 1.5-1.57c.01-.03.03-.06.04-.09.04-.07.06-.13.1-.21z"
      fill="#3b82f6"
    />
    <path
      d="M37.6 74.39v.01c-.04.08-.06.14-.1.22.04-.08.06-.15.09-.24l.01.01z"
      fill="#3b82f6"
    />
    <path
      d="M42.9 109.66s3.47 2.07 3.47 5.8v6.26a5.84 5.84 0 0 0 5.84 5.84h33.86c3.26 0 5.89-2.67 5.83-5.93-.04-2.43-.07-4.91-.07-5.91 0-5.79 4.3-11.68 4.3-11.68l-53.23 5.62z"
      fill="#3b82f6"
    />
    <path d="M.03 0h127.94v128H.03z" fill="none" />
  </svg>
));

const NotARobotModal = memo(({ setShowNotARobotModal, net }) => {
  const handleClose = useCallback(() => {
    if (net) {
      console.log("closing");
      setShowNotARobotModal(false);
    } else {
      console.log("no net");
    }
  }, [net, setShowNotARobotModal]);

  const isNetReady = net !== null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white p-5 rounded-lg shadow-lg relative max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">
          <div className="prose mx-2 mb-4">
            <div className="bg-gray-100 py-6 px-4 rounded flex items-center shadow-2xl">
              <label
                htmlFor="robot"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="robot"
                  className="sr-only"
                  onChange={handleClose}
                  aria-label="I'm not a robot checkbox"
                />
                <div className="w-5 h-5 mr-2 flex items-center justify-center bg-white border-2 border-gray-300 rounded">
                  🖕
                </div>
                <span className="text-xl tracking-wide text-gray-700 pl-2">
                  I'm not a robot
                </span>
              </label>
              <div className="pl-12 flex flex-col items-center justify-center">
                <div className="bg-blue-200 p-3 rounded-full">
                  <RudeCaptchaSVG />
                </div>
                <span className="text-xs text-gray-400 mt-1">rudeCAPTCHA</span>
              </div>
            </div>
            <h3 id="modal-title" className="capitalize text-center mb-4">
              A new way to prove you're human
            </h3>
            <div>
              <p>
                The AI bots infesting the internet aren't allowed to be
                offensive.
              </p>
              <p>Verify your humanity by swearing at the camera</p>
              <p>Copy the rude gesture in the top right at the camera</p>
              <p class="block md:hidden">
                Loading slowly? rudeCAPTCHA works better on desktop
              </p>
            </div>
            <button
              className={`w-full py-2 rounded shadow text-white text-xl font-bold ${
                isNetReady ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400"
              }`}
              onClick={handleClose}
              disabled={!isNetReady}
            >
              {isNetReady ? "OK" : "AI Model Loading..."}
              {!isNetReady && (
                <span className="material-icons text-xl animate-spin text-white ml-2">
                  rotate_right
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NotARobotModal;
