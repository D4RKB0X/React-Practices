import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="home">
            <h1>Peon Map</h1>
            <p>Control your Peon on the Map</p>
            <nav>
                <Link to="/map">Go to Map</Link>
                <Link to="/log">Go to Log</Link>
            </nav>
        </div>
    );
}

export default Home;