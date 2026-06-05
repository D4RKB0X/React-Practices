import UnitDisplay from "../UnitDisplay";
import MapGrid from "../MapGrid";

function MapPage ({ unit, onMove }) {
    return (
        <div className="map-page">
            <UnitDisplay unit={unit} />
            <MapGrid unit={unit} onMove={onMove} />
        </div>
    );
}

export default MapPage;