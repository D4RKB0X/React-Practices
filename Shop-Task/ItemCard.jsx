function ItemCard ({ item }) {
    return (
        <div className="item-card">
            <h3>{item.name}</h3>
            <p>Cost: {item.cost} gold</p>
            <p>Effect: {item.effect}</p>
        </div>
    );
}

export default ItemCard;