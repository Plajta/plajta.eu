import { Terminal as TerminalIcon } from "lucide-react";
import TerminalCommand from "./TerminalCommand";

function WindowButton({ className = "" }) {
  return (
    <div
      className={`rounded-full my-auto aspect-square w-4 sm:w-5 ${className}`}
    ></div>
  );
}

function TerminalBar({ title = "Terminal" }) {
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
        {title}
      </p>
      <div className="flex h-fit my-auto gap-3">
        <WindowButton className="bg-green-400" />
        <WindowButton className="bg-yellow-400" />
        <WindowButton className="bg-red-400" />
      </div>
    </div>
  );
}

function TerminalContent({ children }) {
  return (
    <div className="text-gray-300 text-base xs:text-lg sm:text-2xl text-left font-mono m-4 sm:m-10">
      {children}

      <TerminalCommand>
        <span className="ml-1 inline-block animate-blink"> █</span>
      </TerminalCommand>
    </div>
  );
}

export default function Terminal({ title = "", children }) {
  return (
    <div
      className="
      border border-gray-700 rounded-lg flex flex-col items-start
      justify-items-start max-w-7xl min-h-[40vh] mx-3 sm:mx-10
      "
    >
      <TerminalBar title={title} />
      <TerminalContent> {children} </TerminalContent>
    </div>
  );
}
