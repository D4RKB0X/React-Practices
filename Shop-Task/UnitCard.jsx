function UnitCard ({ unit }) {
    return (
        <div className="unit-card">
            <h3>{unit.name}</h3>
            <p>Health: {unit.health}</p>
            <p>Damage: {unit.damage}</p>
        </div>
    );
}

export default UnitCard;