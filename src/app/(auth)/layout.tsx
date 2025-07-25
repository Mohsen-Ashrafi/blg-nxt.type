import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-full max-w-md p-2">{children}</div>
    </div>
  );
}

export default Layout;
