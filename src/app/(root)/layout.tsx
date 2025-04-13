import StreamClientProvider from "@/components/ui/providers/StreamClientProvider";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <StreamClientProvider>{children}</StreamClientProvider>;
}

export default Layout;
