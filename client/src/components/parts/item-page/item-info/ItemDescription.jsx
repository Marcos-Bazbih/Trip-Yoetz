const ItemDescription = ({ description }) => {
    return (
        <div className="item-description-wrapper">
            <h2>About</h2>
            <p>{description}</p>
        </div>
    );
};

export default ItemDescription;