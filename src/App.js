import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Good Bye 2023👋", "dan", "Besarkan volumenya🎶", "yah nungguin yah😅", "setia banget sih nungguin akuwh🥰", "kalo gak kuat bobok ajah😴💤"]);

  const particlesInit = async (preset) => {
    await loadFireworksPreset(preset);
  };

  const timeLeft = () => {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = newYearDate - now;
    return difference;
  };

  return (
    <>
      <Particles init={particlesInit} options={{ preset: "fireworks" }} />
      <div className="flex justify-center items-center min-h-screen flex-col gap-4">
        <span className="text-white font-bold text-4xl text-center px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursor
            cursorStyle={"_"}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div className="text-white font-bold text-2xl z-50 ">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage([
                "yey🥳 selamat tahun baru🎉",
                "gak kerasa",
                "nungguin ini satu tahun😅",
                "yah pokoknya apa yang kita inginkan terjadi di 2024 amin✨",
                "dan yang tidak kita inginkan tidak terjadi di 2024 amin✨",
                "✨HAPPY NEW YEAR 2024✨", 
                "ehek🥰💖",
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
