import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title:
    "TurningIdeas Ventures - Co-building startups and Helping Enterprises Innovate",
  description:
    "We help startups with complementing skills in building their ventures from Ideation to scale and consult enterprises for growth and innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
