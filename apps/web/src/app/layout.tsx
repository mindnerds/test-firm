import type { Metadata } from "next";
import "../../packages-ui-styles.css";

export const metadata: Metadata = {
  title: "Test Firm",
  description: "A test website for WebWorks agent deployment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
