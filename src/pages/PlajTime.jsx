import PageContainer from "../components/PageContainer";
import {
  Zap,
  Cpu,
  Watch,
  Euro,
  Layers,
  MousePointer2,
  Code2,
} from "lucide-react";

export default function PlajTime() {
  return (
    <div className="bg-black text-gray-300 overflow-y-auto scroll-smooth h-screen snap-y snap-mandatory [@media(max-height:500px)]:h-auto [@media(max-height:500px)]:snap-none">
      {/* --- Hero Section --- */}
      <section
        id="plajtime"
        className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center pt-20 sm:pt-24 snap-start [@media(max-height:500px)]:py-18"
      >
        <PageContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl min-[32rem]:text-6xl sm:text-8xl font-syncopate text-white mb-4 sm:mb-8">
              PlajTime
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl font-light text-purple-400 mb-4 sm:mb-6">
              Open source smartwatch done the right way
            </p>
            <p className="text-base sm:text-xl text-gray-400 leading-relaxed mb-8 sm:mb-12">
              A sleek wearable exploring what happens when hardware is truly
              transparent. <br className="hidden sm:block" />
              Every wire and line of code shared freely, with the future in
              mind.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 text-left">
              <div className="bg-gray-900/50 border border-purple-500/20 p-5 sm:p-8 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <Watch className="text-purple-400" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Classic Aesthetics
                  </h2>
                </div>
                <p className="text-gray-400">
                  Inspired by the elegance of traditional mechanical watches. A
                  slim profile featuring hidden strap mounts, taken into the
                  future with an OLED display.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-purple-500/20 p-5 sm:p-8 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <Euro className="text-yellow-500" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Hardware Integrity
                  </h2>
                </div>
                <p className="text-gray-400">
                  We believe in knowing your hardware. Sourcing locally within
                  the EU allows for a reliable, high-quality supply chain with
                  fully documented hardware.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* --- Architecture Section --- */}
      {/* I hate the contents but the style could be useful */}
      {/* <section className="relative min-h-screen w-full flex flex-col items-center justify-center snap-start overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-2/5 w-full h-full opacity-10 pointer-events-none">
          <img
            src="/plajtime-pcb.png"
            alt=""
            className="w-full h-full object-contain scale-80 translate-x-1/4"
          />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-3/5 w-full h-full opacity-10 pointer-events-none">
          <img
            src="/plajtime-pcb-aux.png"
            alt=""
            className="w-full h-full object-contain scale-40 -translate-x-1/4 -rotate-12"
          />
        </div>

        <PageContainer className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 mb-6">
              <Layers className="text-purple-400" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Dual-Chip Architecture
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
              A sophisticated power-management strategy that separates
              background efficiency from high-performance computing tasks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="flex gap-4">
                <div className="bg-green-500/20 p-3 h-fit rounded-lg text-green-400 shrink-0 border border-green-500/10">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    nRF52833 (Always-on)
                  </h4>
                  <p className="text-gray-400">
                    Handles background tasks, BLE connectivity, and continuous
                    sensor monitoring with ultra-low power draw.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-500/20 p-3 h-fit rounded-lg text-blue-400 shrink-0 border border-blue-500/10">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    RP2350 (Performance)
                  </h4>
                  <p className="text-gray-400">
                    A powerful core that activates only for smooth UI rendering
                    and heavy computational workloads.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 inline-block mx-auto">
              <ul className="flex flex-wrap justify-center gap-8 font-mono text-sm">
                <li className="flex items-center gap-2 text-green-400/80">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  Low sleep consumption
                </li>
                <li className="flex items-center gap-2 text-blue-400/80">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Snappy LVGL interface
                </li>
                <li className="flex items-center gap-2 text-purple-400/80">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Dual-Chip firmware
                </li>
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>*/}

      {/* --- Innovation Section --- */}
      {/* <section className="relative min-h-screen w-full flex flex-col items-center justify-center snap-start bg-linear-to-b from-black to-gray-900/20">
        <PageContainer>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-green-500/10 rounded-2xl border border-green-500/20 mb-6">
              <MousePointer2 className="text-green-400" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Capacitive Slider Encoder
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Redefining interaction. By replacing mechanical crowns with a
              touch-sensitive edge sensor, we achieve a cleaner design and
              enhanced durability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-white mb-2 text-lg">
                  Water Resistance
                </h4>
                <p className="text-sm text-gray-500">
                  A seamless chassis without mechanical openings or seals.
                </p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-white mb-2 text-lg">
                  Haptic Feedback
                </h4>
                <p className="text-sm text-gray-500">
                  LRA motors provide instant, precise tactile confirmation.
                </p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-white mb-2 text-lg">
                  Unobstructed View
                </h4>
                <p className="text-sm text-gray-500">
                  Navigate the UI without covering the display with your finger.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>*/}

      {/* --- Software Section --- */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center snap-start text-center bg-black">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <Code2 className="text-purple-400 mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Open Source. No Compromises.
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              From custom peripheral drivers to the LVGL-based graphics stack,
              everything is built for transparency and long-term support. No
              NDAs. No license traps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Plajta/PlajTime"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-purple-400 transition-colors"
              >
                Explore Source Code
              </a>
            </div>
          </div>
          <div className="absolute bottom-1 right-2">More coming soon</div>
        </PageContainer>
      </section>
    </div>
  );
}
