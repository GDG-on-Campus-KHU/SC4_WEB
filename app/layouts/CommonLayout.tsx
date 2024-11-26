import Header from "~/ui/Header";
import { PropsWithChildren } from "react";

export default function CommonLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isAuthPage />
      <main className="pt-[50px]">{children}</main>
    </>
  );
}
