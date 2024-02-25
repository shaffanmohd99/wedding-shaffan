/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import {
  BsCheckCircleFill,
  BsXLg,
  BsFillExclamationCircleFill,
} from "react-icons/bs";

export default function Snackbar({
  show,
  close,
  message = "Status updated",
  failed,
}) {
  // Effect to hide the Snackbar after a timeout
  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(() => {
        close();
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timeoutId); // Cleanup the timeout when the component unmounts or when 'show' changes
    }
  }, [show]);
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 z-50 flex  px-4 py-20 items-start sm:p-12"
      >
        <div className="flex w-full flex-col items-center space-y-4">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="  pointer-events-auto overflow-hidden rounded-lg  bg-[#774831] shadow-lg">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {failed ? (
                      <BsFillExclamationCircleFill
                        className="h-6 w-6 text-red-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsCheckCircleFill
                        className="h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="ml-3  flex-1 pt-0.5">
                    <p className="text-sub1  text-textLight">{message}</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      className=" inline-flex rounded-md text-textLight  focus:outline-none  "
                      // onClick={() => {
                      //   setShow(false);
                      // }}
                      onClick={close}
                    >
                      <span className="sr-only">Close</span>
                      <BsXLg className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
