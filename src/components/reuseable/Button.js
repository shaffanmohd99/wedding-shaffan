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
        className={`${className} ${width} ${padding} ${height}  bg-primary disabled:bg-disablebBg disabled:text-lightGrayText sm:text-lg text-md hover:bg-redSecondary  text-mainBg rounded-md`}
      >
        {children}
      </button>
    );
  if (variant === "outlined")
    return (
      <button
        {...rest}
        className={`${className} ${width} ${padding} ${height}  border border-primary sm:text-lg text-md bg-mainBg hover:bg-defaultBg text-primary rounded-md `}
      >
        {children}
      </button>
    );
  if (variant === "contained_lain")
    return (
      <button
        {...rest}
        className={`${className} ${width} ${padding} ${height}  bg-[#dfb692] disabled:bg-disablebBg disabled:text-lightGrayText sm:text-lg text-md hover:bg-redSecondary  text-mainBg rounded-md`}
      >
        {children}
      </button>
    );
}
