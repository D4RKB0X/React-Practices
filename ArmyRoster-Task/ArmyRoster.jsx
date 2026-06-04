import { useState } from "react";
import UnitCard from "./UnitCard";
import UnitForm from "./UnitForm";

function ArmyRoster() {
    const [units, setUnits] = useState([]);

    const handleAdd = (newUnit) => {
        setUnits(prev => [...prev, newUnit]);
    };

    const handleRemove = (id) => {
        setUnits(prev => prev.filter(unit => unit.id !== id));
    };

    return (
        <div className="army-roster">
            <h1>Army Roster</h1>
            <UnitForm onAdd={handleAdd}/>
            <div className="unit-list">
                {units.length === 0 && <p>No units in roster yet...</p>}
                {units.map(unit => (
                    <UnitCard
                        key={unit.id}
                        unit={unit}
                        onRemove={() => handleRemove(unit.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ArmyRoster;