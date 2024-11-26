type ButtonVariants = "default" | "white";

type ButtonProps = {
  label: string;
  variants?: ButtonVariants;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  label,
  variants = "default",
  ...props
}: ButtonProps) {
  const buttonStyle = getButtonStyle(variants);
  return (
    <button
      className={`${buttonStyle} w-full p-[10px] rounded-[20px]`}
      {...props}
    >
      {label}
    </button>
  );
}

function getButtonStyle(variants: ButtonVariants) {
  switch (variants) {
    case "white":
      return "bg-white";
    default:
      return "bg-yellow";
  }
}
