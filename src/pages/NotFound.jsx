import { Link, useLocation } from "react-router-dom";
import TerminalCommand from "../components/TerminalCommand";
import Terminal from "../components/Terminal";

export default function NotFound() {
  const location = useLocation();
  // Ensure path starts with a / but format it nicely as a relative-looking file
  const displayPath = `.${location.pathname}`;

  return (
    <main>
      <section
        id="hero"
        className="relative min-h-dvh min-w-dvw z-10 flex
        flex-col items-center justify-center"
      >
        <Terminal title="Termuwu">
          <TerminalCommand command={`cat ${displayPath}`}>
            <div className="text-red-400">
              cat: {displayPath}: No such file or directory
            </div>
          </TerminalCommand>

          <TerminalCommand command="help">
            <div>
              Looking for something? Here are some valid pages:
              <ul className="list-inside space-y-1">
                <li className="list-dash">
                  <Link
                    to="/"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    Home (/)
                  </Link>
                </li>
                <li className="list-dash">
                  <Link
                    to="/plajtime"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    PlajTime (/plajtime)
                  </Link>
                </li>
              </ul>
            </div>
          </TerminalCommand>
        </Terminal>
      </section>
    </main>
  );
}
