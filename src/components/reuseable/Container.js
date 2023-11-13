export default function Container({ children, className, outerClass }) {
  return (
    <div className={`sm:px-10 px-0 py-2 ${outerClass}`}>
      <div className={`mx-auto max-w-7xl ${className}`}>{children}</div>
    </div>
  );
}
