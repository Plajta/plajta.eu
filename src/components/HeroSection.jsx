import { Terminal as TerminalIcon } from "lucide-react";
import { Link } from "react-router-dom";
import TerminalCommand from "./TerminalCommand";

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
      px-4 py-2
      "
    >
      <div
        className="
        text-white p-1 sm:p-2
        "
      >
        <TerminalIcon />
      </div>
      <p className="text-gray-400 my-auto font-semibold text-xl sm:text-2xl">
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
    <div className="text-gray-300 text-base xs:text-lg sm:text-2xl text-left font-mono m-4 sm:m-10">
      <TerminalCommand command="cat ./whoarewe.txt">
        <div>
          We're a student team that makes crazy ideas happen - in 48 hours or
          less, be it hardware or software.
        </div>
      </TerminalCommand>

      <TerminalCommand command="cat ./whatwedo.txt">
        <div>
          Open-source hardware, software, robotics, embedded systems - either
          for profit or humanitarian applications we have our fingers in a lot
          of stuff
          <ul className="list-inside space-y-1">
            <li className="list-dash">
              <Link
                to="/plajtime"
                className="text-white hover:text-purple-400 transition-colors"
              >
                PlajTime
              </Link>{" "}
              - Stylish open-source smartwatch with a beautiful screen, and our
              most complicated project yet
            </li>
            <li className="list-dash">
              <a
                href="https://github.com/Plajta/sisyphus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Sisyphus
              </a>{" "}
              - Accessibility soundboard built to order for a local school,
              could be broadly useful
            </li>
            <li className="list-dash">
              Prometheus - Smart pillbox built for maximum user ease of use and
              convenience, work deeply in progress
            </li>
            <li className="list-dash">
              And a bunch of hackathon projects! You can look them up on our{" "}
              <a
                href="https://github.com/Plajta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors pt-1"
                aria-label="GitHub"
              >
                GitHub
              </a>
              .
            </li>
          </ul>
        </div>
      </TerminalCommand>

      <TerminalCommand>
        <span className="ml-1 inline-block animate-blink"> █</span>
      </TerminalCommand>
    </div>
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
