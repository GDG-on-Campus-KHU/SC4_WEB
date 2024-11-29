import Header from "~/ui/Header";
import { PropsWithChildren } from "react";

export default function CommonLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray h-screen">
      <div className="max-w-[390px] m-auto relative bg-white h-screen">
        <Header isAuthPage />
        <main className="pt-[80px] p-[20px]">{children}</main>
      </div>
    </div>
  );
}
