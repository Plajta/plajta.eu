import { Terminal as TerminalIcon } from "lucide-react";
function Terminal() {
  return (
    <div className="border border-gray-700 rounded-lg flex flex-col items-start justify-items-start max-w-7xl">
      <div className="bg-gray-900 z-20 w-full rounded-t-lg p-4 flex justify-between align-items-center px-8">
        <div className="bg-black w-12 h-12 text-white p-2 rounded-lg">
          <TerminalIcon />
        </div>
        <p className="text-gray-400 text-2xl my-auto font-bold">Termuwu</p>
        <div className="flex h-fit my-auto gap-3">
          <div className="bg-green-400 h-5 w-5 rounded-full"></div>
          <div className="bg-yellow-400 h-5 w-5 rounded-full"></div>
          <div className="bg-red-400 h-5 w-5 rounded-full"></div>
        </div>
      </div>
      <p className="text-gray-300 text-2xl text-left font-mono m-10">
        <span className="text-yellow-500"> dumb@plajta.eu</span> %{" "}
        <span className="text-cyan-500">~</span> cat ./whoawe.txt <br />
        We team that do bullshit like, Open-source hardware and software
        solutions for robotics, embedded systems, and humanitarian applications.
        <br />
        <span className="text-yellow-500"> dumb@plajta.eu</span> %{" "}
        <span className="text-cyan-500">~</span>
        <span className="ml-1 inline-block animate-blink"> █</span>
      </p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-dvh min-w-dvw z-10 flex flex-col items-center justify-center"
    >
      <Terminal />
    </section>
  );
}
