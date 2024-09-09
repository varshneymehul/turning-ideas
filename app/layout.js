import { Bricolage_Grotesque, Smooch, Forum } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


const smooch = Smooch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-smooch",
});
const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata = {
  title:
    "TurningIdeas Ventures - Co-building startups and Helping Enterprises Innovate",
  description:
    "We help startups with complementing skills in building their ventures from Ideation to scale and consult enterprises for growth and innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.className} ${smooch.variable} ${forum.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
