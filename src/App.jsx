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
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => {
    const white = "#fff";
    const black = "#000";
    const body = document.querySelector(".body");

    if (darkMode ) {
      body.style.color = white;
      body.style.transform = "scale(1.5)";
    } else {
      body.style.color = black;
      body.style.transform = "scale(1)";

    }

    setDarkMode(!darkMode )
  };

  return (
    <>
      <DarkMode />
      <div className="w-96 App h-[600px] p-3 px-3 flex flex-col items-center justify-evenly rounded-3xl">
        <div className="px-1">
          <img
            className="cover rounded-xl"
            src="https://images.unsplash.com/photo-1617994452722-4145e196248b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        <div className="flex fle-row w-full justify-between items-center px-3">
          <div>
            <h1 className="font-semibold">Before I Forget</h1>
            <p className="text-xs">Slipknot</p>
          </div>
          <div className="body" onClick={handleMode}>
            <AiFillHeart />
          </div>
        </div>
        <div className="w-full h-12 flex flex-col justify-between">
          <div className="px-2 w-full">
            <ProgressBar />
          </div>
          <div className="w-full flex flex-col items-end px-2">3:56</div>
        </div>
        <div className="w-full px-2 h-12 flex flex-row justify-between items-center">
          <FaRandom />
          <div className="flex flex-row justify-evenly w-2/3 items-center text-2xl">
            <CgPlayTrackPrevO />
            <div className="text-5xl">
              <CgPlayPauseO />
            </div>
            <CgPlayTrackNextO />
          </div>
          <RxLoop />
        </div>
        <div>
          <FaShareAlt />
        </div>
      </div>
    </>
  );
}

export default App;
