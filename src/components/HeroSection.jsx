import { Terminal as TerminalIcon } from "lucide-react";

function WindowButton({ className = "" }) {
  return (
    <div
      className={`rounded-full my-auto aspect-square w-4 sm:w-5 ${className}`}
    ></div>
  );
}

function TerminalBar() {
  return (
    <div
      className="
      bg-gray-900 z-20 w-full rounded-t-lg select-none
      flex justify-between items-center
      px-4 py-2 sm:px-8 sm:py-4
      "
    >
      <div
        className="
        bg-black text-white rounded-lg
        w-10 h-10 p-1
        sm:w-12 sm:h-12 sm:p-2
        "
      >
        <TerminalIcon />
      </div>
      <p className="text-gray-400 my-auto font-bold text-xl sm:text-2xl">
        Termuwu
      </p>
      <div className="flex h-fit my-auto gap-3">
        <WindowButton className="bg-green-400" />
        <WindowButton className="bg-yellow-400" />
        <WindowButton className="bg-red-400" />
      </div>
    </div>
  );
}

function TerminalContent() {
  return (
    <p className="text-gray-300 text-base xs:text-lg sm:text-2xl text-left font-mono m-4 sm:m-10 ">
      <span className="text-yellow-500"> dumb@plajta.eu</span> %{" "}
      <span className="text-cyan-500">~</span> cat ./whoarewe.txt <br />
      We're a student team that does things like, Open-source hardware and
      software, robotics, embedded systems and humanitarian applications.
      <br />
      <span className="text-yellow-500"> dumb@plajta.eu</span> %{" "}
      <span className="text-cyan-500">~</span>
      <span className="ml-1 inline-block animate-blink"> █</span>
    </p>
  );
}

function Terminal() {
  return (
    <div
      className="
      border border-gray-700 rounded-lg flex flex-col items-start
      justify-items-start max-w-7xl min-h-[40vh] mx-3 sm:mx-10
      "
    >
      <TerminalBar />
      <TerminalContent />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-dvh min-w-dvw z-10 flex
      flex-col items-center justify-center"
    >
      <Terminal />
    </section>
  );
}
