import type { Metadata } from "next";
import { Timeline } from "@/components/sections/Timeline";

export const metadata: Metadata = {
  title: "Experience | Sara Park",
  description: "Work experience, education, and milestones — Sara Park.",
};

export default function ExperiencePage() {
  return <Timeline />;
}
