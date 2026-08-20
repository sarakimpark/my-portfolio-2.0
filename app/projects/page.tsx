import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects | Sara Park",
  description: "Selected web and mobile projects by Sara Park.",
};

export default function ProjectsPage() {
  return <Projects />;
}
