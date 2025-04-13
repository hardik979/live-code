"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Settings2Icon, SparkleIcon } from "lucide-react";
import { useUserRoll } from "@/hooks/useUserRoll";

function Dashboardbtn() {
  const { isCandidate, isLoading } = useUserRoll();
  if (isCandidate || isLoading) return null;
  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <Settings2Icon className="size-4 " />
        Dashboard
      </Button>
    </Link>
  );
}

export default Dashboardbtn;
