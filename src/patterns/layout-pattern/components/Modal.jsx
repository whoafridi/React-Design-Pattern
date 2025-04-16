import { useState } from "react";

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white hover:text-amber-50 rounded-full cursor-pointer"
        onClick={() => setShow(true)}
      >
        Show Modal
      </button>

      {show && (
        <>
          <div
            className={`fixed inset-0 z-50 bg-transparent bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
              show ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setShow(false)}
          >
            {/* Modal Content */}
            <div
              className={`fixed top-1/4 left-1/4 w-1/2 h-1/2 bg-white p-6 rounded-lg z-50 shadow-xl transition-all duration-300 ease-in-out ${
                show ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-2 right-2 text-2xl bg-transparent border-none cursor-pointer"
              >
                ×
              </button>

              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
