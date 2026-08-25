const Button = ({ children, size = "default", className = "",type }) => {
  const baseClasses =
    "bg-primary text-primary-foreground  cursor-pointer shadow-lg shadow-primary/30 rounded-full font-semibold hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  const buttonSizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <button className={`${baseClasses} ${buttonSizes[size]} ${className}`}  type={type}>
      {children}
    </button>
  );
};

export default Button;
