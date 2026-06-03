function PeasantCard ({ peasant }) {
    return (
        <div className="peasant-card">
            <h2>{peasant.name}</h2>
            <p>Status: {peasant.status}</p>
        </div>
    );
}

export default PeasantCard;