/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsX } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Typography from "@/components/reuseable/Typography";
import Button from "@/components/reuseable/Button";
import * as yup from "yup";
import LoadingButton from "@/components/reuseable/LoadingButton";
import { sendEmail } from "@/pages/api/sendEmail";

export default function EditDialog({
  open,
  handleClose,
  setFailed,
  setSnackbarOpen,
  data,
}) {
  //set loading state for api cal
  const [isLoading, setIsLoading] = useState(false);
  const updateId = data?._id;

  // fucntion to post to mongodb
  const UpdateAttendance = async (id, data) => {
    setIsLoading(true);
    if (typeof window !== "undefined") {
      try {
        const response = await fetch("/api/wedding", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, data }),
        });

        if (response.ok) {
          setIsLoading(false);
          setFailed(false);

          console.log("Data Updated successfully!");
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
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    attendance: yup.string().required("Attendance is required"),
  });

  const defaultValues = {
    name: data.name,
    email: data.email,
    phoneNumber: data.phoneNumber,
    attendance: data.attendance ? "true" : "false",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues, // Set default values for the form fields
  });

  //set the default value for the input,(need to do this since default value only take the first render)
  useEffect(() => {
    reset(defaultValues);
  }, [data]);
  const onSubmit = async (data) => {
    try {
      // Assuming sendAttendance returns a Promise
      await UpdateAttendance(updateId, data);
      //   if (data.attendance) {
      //     await sendEmail(data.name, data.email);
      //   }

      // Only if sendAttendance is successful
      handleClose();
      //   reset({ name: "", email: "", phoneNumber: "", attendance: "" });
      setSnackbarOpen();
    } catch (error) {
      // Handle error if sendAttendance fails
      console.error("Error sending attendance:", error);
      setSnackbarOpen();
    }
  };

  const fakeHandleClose = () => {
    return null;
  };
  //   const handleClose = () => {
  //     handleClose(); // Close the dialog
  //     reset({ name: "", email: "", phoneNumber: "", attendance: "" });
  //   };

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
                      Edit this user detail
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
                      <div>
                        <Typography variant="body" className="font-semibold">
                          Name
                        </Typography>
                        <input
                          {...register("name")}
                          //   placeholder="E.g The date of making Will/Wasiat is not stated"
                          className="px-2 py-1  border border-[#bc8c53] w-full rounded  appearance-none outline-none "
                        />
                        <Typography className="text-[#FF0000]" variant="sub">
                          {errors.name?.message}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body" className="font-semibold">
                          Email
                        </Typography>
                        <input
                          {...register("email")}
                          //   placeholder="E.g The date of making Will/Wasiat is not stated"
                          className="px-2 py-1  border border-[#bc8c53] w-full rounded  appearance-none outline-none "
                        />
                        <Typography className="text-[#FF0000]" variant="sub">
                          {errors.email?.message}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body" className="font-semibold">
                          Phone number
                        </Typography>
                        <input
                          {...register("phoneNumber")}
                          //   placeholder="E.g The date of making Will/Wasiat is not stated"
                          className="px-2 py-1  border border-[#bc8c53] w-full rounded  appearance-none outline-none "
                        />
                        <Typography className="text-[#FF0000]" variant="sub">
                          {errors.phoneNumber?.message}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body" className="font-semibold">
                          Are you coming?
                        </Typography>
                        <select
                          {...register("attendance")}
                          className="px-2 py-1 border border-[#bc8c53] w-full rounded  outline-none "
                        >
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                        <Typography className="text-[#FF0000]" variant="sub">
                          {errors.attendance?.message}
                        </Typography>
                      </div>
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
                          onClick={handleSubmit(onSubmit)}
                          variant="contained"
                          width="w-2/4"
                          styles=" flex justify-center items-center"
                        >
                          {isLoading ? <LoadingButton /> : "Submit"}
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
