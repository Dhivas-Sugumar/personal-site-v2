type ButtonProps = {
  label: string;
  className?: string;
};
export const Button: React.FC<ButtonProps> = ({ label, className }) => {
  return (
    <button
      type="button"
      className={`py-2.5 px-5 text-sm font-medium text-accent300 rounded-lg border border-gray-200 hover:animate-pulse bg-gradient-to-r hover:from-primary200 hover:to-tertiary100  ${className}`}
    >
      {label}
    </button>
  );
};
