import { Link } from "react-router-dom";
import TerminalCommand from "../components/TerminalCommand";
import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="relative min-h-dvh min-w-dvw z-10 flex
        flex-col items-center justify-center"
      >
        <Terminal title="Termuwu">
          <TerminalCommand command="cat ./whoarewe.txt">
            <div>
              We're a student team that makes crazy ideas happen - in 48 hours
              or less, be it hardware or software.
            </div>
          </TerminalCommand>

          <TerminalCommand command="cat ./whatwedo.txt">
            <div>
              Open-source hardware, software, robotics, embedded systems -
              either for profit or humanitarian applications we have our fingers
              in a lot of stuff
              <ul className="list-inside space-y-1">
                <li className="list-dash">
                  <Link
                    to="/plajtime"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    PlajTime
                  </Link>{" "}
                  - Stylish open-source smartwatch with a beautiful screen, and
                  our most complicated project yet
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
                  Prometheus - Smart pillbox built for maximum user ease of use
                  and convenience, work deeply in progress
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
        </Terminal>
      </section>
    </main>
  );
}
