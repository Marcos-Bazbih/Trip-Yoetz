const Images = ({ images }) => {
    return (
        <article className="city-images-wrapper">
            {
                images && images.length >= 1 &&
                <>
                    <img className="city-img main-img" src={images[0]} alt={`main img`} />
                    <img className="city-img one" src={images[1]} alt={`city img`} />
                    <img className="city-img two" src={images[2]} alt={`city img`} />
                </>
            }
        </article>
    );
};

export default Images;