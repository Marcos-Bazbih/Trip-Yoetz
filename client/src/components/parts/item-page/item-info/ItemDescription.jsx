const ItemDescription = ({ description }) => {
    return (
        <div className="item-description-wrapper">
            <h2 className="item-description-title">About</h2>
            <p className="item-description">{description}</p>
        </div>
    );
};

export default ItemDescription;