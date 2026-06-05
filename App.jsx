import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Coordinate-Task/Pages/Home";
import MapPage from "./Coordinate-Task/Pages/MapPage";
import LogPage from "./Coordinate-Task/Pages/LogPage";
import "./App.css";

function App() {
    const [unit, setUnit] = useState({
        name: "Peon",
        x: 0,
        y: 0
    });

    const [logs, setLogs] = useState([]);

    function onMove(dx, dy) {
        const newX = unit.x + dx;
        const newY = unit.y + dy;

        if(newX > 2 || newX < -2 || newY > 2 || newY < -2) {
            alert("Cannot go beyond the map!");
            return;
        }

        setUnit(function(prev) {
            return {...prev, x: newX, y: newY};
        });

        setLogs(function(prev) {
            return [...prev, `${unit.name} moved to (${newX}, ${newY})`];
        });
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<MapPage unit={unit} onMove={onMove} />} />
                <Route path="/log" element={<LogPage logs={logs} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;