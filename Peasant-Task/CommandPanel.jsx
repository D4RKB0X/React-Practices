function CommandPanel({ onMove, onMine, onHarvest }) {
    return (
        <div className="command-panel">
            <h3>Commands</h3>
            <button onClick={onMove}>Move</button>
            <button onClick={onMine}>Mine Gold</button>
            <button onClick={onHarvest}>Harvest Lumber</button>
        </div>
    );
}

export default CommandPanel;