export default function TerminalCommand({ command = "", children }) {
  return (
    <div>
      <span className="text-yellow-500"> web@plajta.eu</span> %{" "}
      <span className="text-purple-500/90">~</span> {command}
      {children}
    </div>
  );
}
