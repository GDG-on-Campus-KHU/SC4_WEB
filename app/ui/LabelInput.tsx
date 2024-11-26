type LabelInputProps = {
  label: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function LabelInput({
  label,
  type = "text",
  className,
  ...props
}: LabelInputProps) {
  return (
    <div className="flex flex-col gap-[10px]">
      <label>{label}</label>
      <input className={`${className} border`} type={type} {...props} />
    </div>
  );
}
