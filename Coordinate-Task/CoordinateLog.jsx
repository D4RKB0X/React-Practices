function CoordinateLog({ logs }) {
    return (
        <div className="coordinate-log">
            <h3>Coordinate Log</h3>
            {logs.length === 0 && <p>No coordinate issued yet...</p>}
            {logs.map(function(log, index) {
                return ( <p key={index}>{log}</p> );
            })}
        </div>
    );
}

export default CoordinateLog;