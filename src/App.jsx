import "./App.css";
import { useState } from "react";
import { FaShareAlt, FaRandom } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { RxLoop } from "react-icons/rx";
import {
  CgPlayButtonO,
  CgPlayPauseO,
  CgPlayTrackPrevO,
  CgPlayTrackNextO,
} from "react-icons/cg";
import ProgressBar from "./components/progress-bar/ProgressBar.conponent";
import DarkMode from "./components/darkmode/DarkMode.component";

function App() {
  const [darkMode, setDarkMode] = useState("#000");

  const handleMode = () => {
    const body = document.querySelector(".heart");
    body.style.color = darkMode ? "#000" : "#ff0000";
    setDarkMode(!darkMode);
  };

  const [mode, setMode] = useState("#fff");

  const handleDarkMode = () => {
    const body = document.querySelector("body");
    const artist = document.querySelector(".artist");
    const player = document.querySelector(".player");

    body.style.backgroundColor = mode ? "#000" : "#fff";
    artist.style.color = mode ? "#fff" : "#000";
    player.style.color = mode ? "#fff" : "#000";
    setMode(!mode);
  };

  return (
    <body>
      <DarkMode props={handleDarkMode} />
      <div className="App w-96 h-[600px] p-3 px-3 flex flex-col items-center justify-evenly rounded-3xl">
        <div className="px-1">
          <img
            className="cover rounded-xl"
            src="https://images.unsplash.com/photo-1617994452722-4145e196248b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        <div className="flex fle-row w-full justify-between items-center px-3">
          <div className="artist">
            <strong className="text-2xl">Before I Forget</strong>
            <p className="text-base">Slipknot</p>
          </div>
          <div
            className="heart text-black scale-100 ease-in-out"
            onClick={handleMode}
          >
            <AiFillHeart />
          </div>
        </div>
        <div className="w-full h-12 flex flex-col justify-between">
          <div className="px-2 w-full">
            <ProgressBar />
          </div>
          <div className="w-full flex flex-col items-end px-2">3:56</div>
        </div>
        <div className="player flex flex-col w-full justify-evenly items-center h-28">
          <div className="w-full px-5 h-12 flex flex-row justify-between items-center">
            <FaRandom className="text-2xl hover:text-black/80" />
            <div className="flex flex-row justify-evenly w-2/3 items-center text-3xl">
              <CgPlayTrackPrevO className="hover:text-black/80" />
              <div className="text-6xl hover:text-black/80">
                <CgPlayPauseO />
              </div>
              <CgPlayTrackNextO className="hover:text-black/80" />
            </div>
            <RxLoop className="text-2xl hover:text-black/80" />
          </div>
          <FaShareAlt className="hover:text-black/80" />
        </div>
      </div>
    </body>
  );
}

export default App;
