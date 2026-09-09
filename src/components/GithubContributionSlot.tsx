"use client";

import dynamic from "next/dynamic";

const GithubContribution = dynamic(
  () => import("@/components/GithubContribution"),
  { ssr: false },
);

export default GithubContribution;