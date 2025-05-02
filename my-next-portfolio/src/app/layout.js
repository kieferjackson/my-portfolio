import { Micro_5, Orbitron, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import NavBar from "./components/navbar";

const orbitron = Orbitron({ 
  variable: "--font-orbitron",
  subsets: ['latin'] 
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
});

/** NOTE: The path is relative to the file where the local font is called */
const nicoMoji = localFont({ 
  src: [{
    path: "../../public/fonts/nicomoji/nicomoji.woff2",
    weight: '400',
    style: 'normal'
  }],
  variable: "--font-nico-moji",
  subsets: ["latin"]
});

const usedFontVars = [
  orbitron.variable,
  dmSans.variable,
  nicoMoji.variable,
];

export const metadata = {
  title: "Kiefer Jackson - Portfolio",
  description: "Web portfolio for Kiefer Jackson, detailing his skills and past projects."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={usedFontVars.join(' ')}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
