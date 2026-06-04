function UnitCard({ unit, onRemove }) {
    return (
        <div className="unit-card">
            <h3>{unit.name}</h3>
            <p>Health: {unit.health}</p>
            <p>Damage: {unit.damage}</p>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}

export default UnitCard;