/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsX } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Typography from "@/components/reuseable/Typography";
import Button from "@/components/reuseable/Button";
import * as yup from "yup";
import LoadingButton from "@/components/reuseable/LoadingButton";
import { sendEmail } from "@/pages/api/sendEmail";

export default function DeleteDialog({
  open,
  handleClose,
  data,
  setSnackbarOpen,
  setFailed,
}) {
  //set loading state for api cal
  const [isLoading, setIsLoading] = useState(false);

  const fakeHandleClose = () => {
    return null;
  };
  const DeleteAttendance = async (id) => {
    setIsLoading(true);
    if (typeof window !== "undefined") {
      try {
        const response = await fetch(`/api/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          setIsLoading(false);
          setFailed(false);

          console.log("Data deleted successfully!");
        } else {
          setIsLoading(false);
          setFailed(true);

          console.log("Something went wrong!");
        }
      } catch (error) {
        setIsLoading(false);
        setFailed(true);

        console.error("Error making API call:", error);
      }
    }
  };

  const onSubmit = async () => {
    try {
      // Assuming sendAttendance returns a Promise
      await DeleteAttendance(data.id);
      // Only if sendAttendance is successful
      handleClose();
      setSnackbarOpen();
    } catch (error) {
      // Handle error if sendAttendance fails
      console.error("Error sending attendance:", error);
      setSnackbarOpen();
    }
  };

  return (
    <Transition.Root show={Boolean(open)} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={fakeHandleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:Typography-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block  bg-[#faf7f2] rounded-lg  text-left overflow-hidden shadow-xl align-middle transform transition-all w-full sm:w-[50%]">
              <div className="w-full ">
                <div className="border-grayLine border-b">
                  <div className="w-full flex justify-between items-center py-4 px-8  ">
                    <Typography
                      variant="body"
                      className="text-[#332117] font-bold "
                    >
                      Delete attendee
                    </Typography>
                    <BsX
                      onClick={handleClose}
                      className="text-darkText hover:text-redPrimary"
                      size={24}
                    />
                  </div>
                </div>
                <div className="px-8 w-full">
                  <div className="w-full">
                    <div className="w-full flex flex-col gap-4">
                      <Typography variant="body" className="font-semibold">
                        {` Are you sure you want to delete ${data?.name}?`}
                      </Typography>
                    </div>

                    <div className="flex w-full justify-end py-[30px]">
                      <div className="flex w-full gap-2 justify-end">
                        <Button
                          width=""
                          onClick={handleClose}
                          variant="outlined"
                          styles=" flex justify-center items-center"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={onSubmit}
                          variant="contained"
                          width="w-[200px]"
                          styles=" flex justify-center items-center"
                        >
                          {isLoading ? <LoadingButton /> : "Delete"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
