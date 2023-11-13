export default function Typography({ children, className, variant = "subtitle" }) {
  if (variant === "h1") {
    return (
      <h1
        className={`font-instrument sm:text-8xl text-3xl text-gray-900 dark:text-white ${className}`}
      >
        {children}
      </h1>
    );
  }
  if (variant === "h3") {
    return (
      <h3
        className={`font-instrument sm:text-6xl text-xl text-gray-900 dark:text-white ${className}`}
      >
        {children}
      </h3>
    );
  }
  if (variant === "h5") {
    return (
      <h1
        className={`sm"text-2xl text-lg   text-gray-900 dark:text-white ${className}`}
      >
        {children}
      </h1>
    );
  }

   if (variant === "subtitle") {
     return (
       <h1
         className={`font-normal sm:text-lg text-md text-gray-700 dark:text-gray-400 ${className}`}
       >
         {children}
       </h1>
     );
   }
}
