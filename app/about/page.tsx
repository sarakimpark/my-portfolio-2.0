import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About | Sara Park",
  description: "About Sara Park — full stack software engineer based in Los Angeles.",
};

export default function AboutPage() {
  return <About />;
}
