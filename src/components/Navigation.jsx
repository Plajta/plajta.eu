import LogoMonochrome from "../assets/logo_monochrome";
import PageContainer from "./containers/PageContainer";

function Logo() {
  return (
    <a
      href="https://github.com/Plajta"
      className="flex items-center-safe select-none"
    >
      <LogoMonochrome className="h-12 w-12" />
      <div className="text-white font-mono text-2xl pt-2">Plajta</div>
    </a>
  );
}

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-center bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <PageContainer>
        <Logo />
      </PageContainer>
    </div>
  );
}
