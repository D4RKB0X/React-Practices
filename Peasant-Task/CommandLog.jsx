function CommandLog({ logs }) {
    return (
        <div className="command-log">
            <h3>Command Log</h3>
            {logs.length === 0 && <p>No commands issued yet...</p>}
            {logs.map((log, index) => (
                <p key={index}>{log}</p>
            ))}
        </div>
    );
}

export default CommandLog;