import { Link } from "react-router-dom";    
import ItemCard from "../ItemCard";

const items = [
    {id: 1, name: "Potion of Health", cost: 100, effect: "Recovers 100 Health"},
    {id: 2, name: "Potion of Mana", cost: 75, effect: "Recovers 75 Mana"},
    {id: 3, name: "Potion of Restoration", cost: 200, effect: "Recovers 150 Health, and 100 Mana"},
];

function ItemsPage() {
    return (
        <div className="items-page">
            <Link to="/">Back</Link>
            <h2>Items</h2>
            <div className="items-list">
                {items.map (function(item) {
                    return <ItemCard key={item.id} item={item} />
                })}
            </div>
        </div>
    );
}

export default ItemsPage;