import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-[10px] p-[30px] bg-white rounded-[8px]">
      {children}
    </div>
  );
}
