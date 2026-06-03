import { use, useState } from "react";
import PeasantCard from "./Peasant-Task/PeasantCard";
import CommandLog from "./Peasant-Task/CommandLog";
import CommandPanel from "./Peasant-Task/CommandPanel";
import "./App.css";

function App() {
  const [peasant, setPeasant] = useState ({
    name: "Peon",
    status: "Idle"
  });
  
  const [logs, setLogs] = useState([]);

  const addLog = (message, newStatus) => {
    setLogs(prev => [...prev, message]);
    setPeasant(prev => ({...prev, status: newStatus}));
  };

  const handleMove = () => addLog(`${peasant.name} is moving to the location...`, "Moving");
  const handleMine = () => addLog(`${peasant.name} is mining gold!`, "Mining");
  const handleHarvest = () => addLog(`${peasant.name}is chopping trees!`, "Harvesting Lumber");

  return (
    <div className="app">
      <h1>Peasant Commands</h1>

      <PeasantCard peasant={peasant}/>

      <CommandPanel
        onMove={handleMove}
        onMine={handleMine}
        onHarvest={handleHarvest}
      />

      <CommandLog logs={logs}/>
    </div>
  );
}

export default App
