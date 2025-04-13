"use client";

import InterviewScheduleUI from "@/components/InterviewScheduleUI";
import Loader from "@/components/Loader";
import { useUserRoll } from "@/hooks/useUserRoll";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const { isLoading, isInterviewer } = useUserRoll();
  if (isLoading) return <Loader />;
  if (!isInterviewer) router.push("/home");
  return <InterviewScheduleUI />;
}

export default Page;
