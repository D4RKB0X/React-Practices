import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1>WC3 Shop</h1>
            <p>Welcome to the Goblin Shop</p>
            <nav>
                <Link to="/items">Items</Link>
                <Link to="/units">Units</Link>
            </nav>
        </div>
    );
}

export default Home;