import { Link } from "react-router-dom";
import UnitCard from "../UnitCard";

const units = [
    {id: 1, name: "Footman", health: 100, damage: 10},
    {id: 2, name: "Archer", health: 75, damage: 15},
    {id: 3, name: "Knight", health: 200, damage: 20},
];

function UnitsPage() {
    return (
        <div className="units-page">
            <Link to="/">Back</Link>
            <h2>Units</h2>
            <div className="units-list">
                {units.map (function(unit) {
                    return <UnitCard key={unit.id} unit={unit} />
                })}
            </div>
        </div>
    );
}

export default UnitsPage;