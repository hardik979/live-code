import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeXmlIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./Dashboardbtn";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

function Navbar() {
  return (
    <nav className="border-b bg-white/80 dark:bg-black/50 backdrop-blur-lg transition-all duration-300">
      <div className={montserrat.className}>
        <div className="flex h-16 items-center px-4 container mx-auto">
          {/* LEFT SIDE - LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl mr-6 transition-all duration-300 hover:scale-105"
          >
            <CodeXmlIcon className="size-8 text-purple-500 dark:text-purple-400 drop-shadow-md" />
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
              Live Code
            </span>
          </Link>

          {/* RIGHT SIDE - ACTIONS */}
          <SignedIn>
            <div className="flex items-center space-x-4 ml-auto">
              <DasboardBtn />
              <ModeToggle />
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
