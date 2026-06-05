function MapGrid({ unit, onMove }) {
    const range = [-2, -1, 0, 1, 2];

    return (
        <div className="map-grid">
            <div className="grid">
                {range.map(function(y) {
                    return (
                        <div key={y} className="grid-row">
                            {range.map(function(x) {
                                return (
                                    <div key={x}
                                    className={`grid-cell ${unit.x === x && unit.y === y ? "peon" : ""}`}
                                    >
                                        {unit.x === x && unit.y === y ? "P" : ""}
                                    </div>
                            )})}
                        </div>
                    )})}
            </div>

            <div className="controls">
                <div className="controls-row">
                    <button onClick={() => onMove(0, 1)}>North</button>
                </div>

                <div className="controls-row">
                    <button onClick={() => onMove(-1, 0)}>West</button>
                    <span>({unit.x}, {unit.y})</span>
                    <button onClick={() => onMove(1, 0)}>East</button>
                </div>

                <div className="controls-row">
                    <button onClick={() => onMove(0, -1)}>South</button>
                </div>
            </div>

        </div>
    );
}

export default MapGrid;