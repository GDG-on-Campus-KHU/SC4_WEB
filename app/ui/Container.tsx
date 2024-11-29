import { PropsWithChildren } from "react";

type ContainerProps = { className?: string } & PropsWithChildren;

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`flex flex-col gap-[10px] p-[30px] bg-white rounded-[8px] ${className}`}
    >
      {children}
    </div>
  );
}
