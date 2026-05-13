import { Link } from "react-router-dom";
import LogoGithub from "../assets/logo_github";
import LogoMonochrome from "../assets/logo_monochrome";
import PageContainer from "./PageContainer";
import "@fontsource/syncopate/700.css";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center-safe select-none text-white hover:text-purple-400 transition-colors"
    >
      <LogoMonochrome className="h-12 w-12" />
      <div className="font-syncopate text-2xl pt-2">Plajta</div>
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-center bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <PageContainer>
        <div className="flex justify-between items-center w-full">
          <Logo />
          <div className="flex items-center gap-8">
            <Link
              to="/plajtime"
              className="text-white hover:text-purple-400 transition-colors font-medium text-lg pt-1"
            >
              PlajTime
            </Link>
            <a
              href="https://github.com/Plajta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors pt-1"
              aria-label="GitHub"
            >
              <LogoGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </PageContainer>
    </nav>
  );
}
