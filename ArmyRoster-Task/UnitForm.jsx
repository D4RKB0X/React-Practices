import { useState } from "react";

function UnitForm({ onAdd }) {
    const [name, setName] = useState("");
    const [health , setHealth] = useState("");
    const [damage, setDamage] = useState("");

    const handleSubmit = () => {
        if(!name || !health || !damage) {
            alert("Please fill all of the fields!");
            return;
        }

        onAdd({
            id: Date.now(),
            name: name,
            health: parseInt(health),
            damage: parseInt(damage)
        });

        setName("");
        setHealth("");
        setDamage("");
    };

    return (
        <div className="unit-form">
            <h3>Add Unit</h3>
            <input 
                type="text" 
                placeholder="Unit Name"
                value={name}
                onChange={(now) => setName(now.target.value)}
            />

            <input 
                type="number" 
                placeholder="Unit Health"
                value={health}
                onChange={(now) => setHealth(now.target.value)}
            />

            <input 
                type="number" 
                placeholder="Unit Damage"
                value={damage}
                onChange={(now) => setDamage(now.target.value)}
            />

            <button onClick={handleSubmit}>Add Unit</button>
        </div>
    );
}

export default UnitForm;