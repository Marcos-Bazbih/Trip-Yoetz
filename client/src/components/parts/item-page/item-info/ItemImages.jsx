const ItemImages = ({ images, name }) => {
    return (
        images && images.length >= 1
            ?
            <div className="item-images-wrapper">
                <img className="item-main-img" src={images[0]} alt={`${name} img`} />
                <img className="item-one" src={images[1]} alt={`${name} img`} />
                <img className="item-two" src={images[2]} alt={`${name} img`} />
            </div>
            :
            null
    );
};

export default ItemImages;