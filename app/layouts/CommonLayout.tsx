import Header from "~/ui/Header";
import { PropsWithChildren } from "react";

export default function CommonLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[500px] m-auto relative">
      <Header isAuthPage />
      <main className="pt-[80px] p-[20px]">{children}</main>
    </div>
  );
}
