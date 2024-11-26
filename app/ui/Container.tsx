import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-[10px] p-[20px] bg-white">{children}</div>
  );
}
