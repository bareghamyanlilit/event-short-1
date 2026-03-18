import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Սուրբ Մկրտության հրավեր",
  description: "Սուրբ Մկրտության հրավեր",
  openGraph: {
    title: "Սուրբ Մկրտության հրավեր",
    description: "Սիրով հրավիրում եմ․․․",
    url: "https://event-short-է.vercel.app/",
    siteName: "Սուրբ Մկրտության հրավեր",
    images: [
      {
        url: "/first.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
