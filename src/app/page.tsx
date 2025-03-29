"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const loadComponents = async () => {
      // Load the scripts directly
      const script1 = document.createElement("script");
      script1.src =
        "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
      script1.type = "module";

      const script2 = document.createElement("script");
      script2.src =
        "https://unpkg.com/@lottiefiles/dotlottie-wc@0.3.0/dist/dotlottie-wc.js";
      script2.type = "module";

      document.body.appendChild(script1);
      document.body.appendChild(script2);
    };

    loadComponents();
  }, []);

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Lottie Animations Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            First Animation
          </h2>
          <div className="w-[300px] h-[300px]">
            <dotlottie-player
              src="https://lottie.host/d8d0ddc7-ea4c-492c-a548-0f29c8235ee4/DQRRzY6H3y.lottie"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            />
          </div>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Second Animation
          </h2>
          <div className="w-[300px] h-[300px]">
            <dotlottie-wc
              src="https://lottie.host/64c92a5b-793c-450a-95d4-9854e17043ea/NUI5i5bR6v.lottie"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            />
          </div>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Third Animation
          </h2>
          <div className="w-[300px] h-[300px]">
            <DotLottieReact
              src="https://lottie.host/1df37730-55ba-40c8-bb83-f0416061abe0/whEJyq6SPQ.lottie"
              loop
              autoplay
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Fourth Animation
          </h2>
          <div className="w-[300px] h-[300px]">
            <DotLottieReact
              src="https://lottie.host/c8c2c2b2-3639-47fa-a02a-87ff90eb6c0f/lEBDZxecfH.lottie"
              loop
              autoplay
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
