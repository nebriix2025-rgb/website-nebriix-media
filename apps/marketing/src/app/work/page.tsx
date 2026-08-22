import type { Metadata } from "next";

import { WorkGrid } from "@/components/sections/work-grid";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Ten AI automation, content, lead generation and product builds — with the outcome each one delivered.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work"
        description="Ten builds across automation, content, lead generation and product. Filter by what you need."
      />
      <WorkGrid />
    </>
  );
}
