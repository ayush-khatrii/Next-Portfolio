"use client";

import dynamic from "next/dynamic";

const Age = dynamic(() => import("@/components/Age"), { ssr: false });

export default Age;