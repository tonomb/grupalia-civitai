import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ImageGrid from "./components/ImageGrid/ImageGrid";

function App() {
  return (
    <div className="bg-[#1A1C1E] min-h-screen max-w-full">
      <Navbar />
      <ImageGrid />
    </div>
  );
}

export default App;
