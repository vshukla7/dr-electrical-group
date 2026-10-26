import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DR Electrical Group | Complete Electrical, Plumbing, AC Repair & Solar Solutions",
  description:
    "DR Electrical Group delivers end-to-end electrical work, plumbing, air conditioner repair, electrical appliance repair, water pump services, solar systems, and panel repair across West Champaran, Bihar & all India. Directed by Radheshyam Yadav.",
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,400;0,600;0,700;1,300&family=Rajdhani:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
