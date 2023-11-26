export default function Button({
  children,
  variant,
  className,
  width = "w-full ",
  height = "45px",
  padding = "px-4 py-2",
  ...rest
}) {
  if (variant === "contained")
    return (
      <button
        {...rest}
        className={`${className} ${width} ${padding} ${height}  bg-[#bc8c53] disabled:bg-[#EEEEEE] disabled:text-lightGrayText sm:text-lg text-md hover:bg-redSecondary  text-[#faf7f2] rounded-md`}
      >
        {children}
      </button>
    );
  if (variant === "outlined")
    return (
      <button
        {...rest}
        className={`${className} ${width} ${padding} ${height}  border border-[#bc8c53] sm:text-lg text-md bg-[#faf7f2] hover:bg-defaultBg text-[#bc8c53] rounded-md `}
      >
        {children}
      </button>
    );
  if (variant === "contained_lain")
    return (
      <button
        {...rest}
        className={`${className} ${width} ${padding} ${height}  bg-[#dfb692] disabled:bg-[#EEEEEE] disabled:text-lightGrayText sm:text-lg text-md hover:bg-redSecondary  text-[#faf7f2] rounded-md`}
      >
        {children}
      </button>
    );
}
