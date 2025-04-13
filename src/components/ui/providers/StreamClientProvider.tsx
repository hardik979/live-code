"use client";
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import Loader from "@/components/Loader";
import { streamTokenProvider } from "@/actions/stream.action";
function StreamClientProvider({ children }: { children: ReactNode }) {
  const [streamVideoClient, setStreamVideoClient] =
    useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (!isLoaded || !user) return;
    const client = new StreamVideoClient({
      apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
      user: {
        id: user?.id,
        name: user?.firstName || "" + " " + user?.lastName || "" || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider: streamTokenProvider,
    });
    setStreamVideoClient(client);
  }, [user, isLoaded]);
  if (!streamVideoClient) return <Loader />;
  return <StreamVideo client={streamVideoClient}>{children}</StreamVideo>;
}

export default StreamClientProvider;
