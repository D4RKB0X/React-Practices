function UnitDisplay({ unit }) {
    return (
        <div className="unit-display">
            <h2>{unit.name}</h2>
            <p>X: {unit.x}</p>
            <p>Y: {unit.y}</p>
        </div>
    );
}

export default UnitDisplay;