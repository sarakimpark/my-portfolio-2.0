import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Sara Park",
  description: "Get in touch with Sara Park.",
};

export default function ContactPage() {
  return <Contact />;
}
