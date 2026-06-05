import CoordinateLog from "../CoordinateLog";

function LogPage({ logs }) {
    return (
        <div className="log-page">
            <CoordinateLog logs={logs} />
        </div>
    );
}

export default LogPage;