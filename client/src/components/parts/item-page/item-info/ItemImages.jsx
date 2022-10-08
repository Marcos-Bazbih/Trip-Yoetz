import { useState } from "react";
import ImageModal from "./imageModal";

const ItemImages = ({ images, name }) => {
    const [toggle, setToggle] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const modalProps = {
        image: modalImage, 
        name, 
        toggle, 
        setToggle
    };
    const handleOpenModal = (image) => {
        setModalImage(image)
        setToggle(true);
    };

    return (
        images && images.length >= 1
            ?
            <>
                <div className="item-images-wrapper">
                    <img onClick={() => handleOpenModal(images[0])} className="main-img" src={images[0]} alt={`${name} img`} />
                    <img onClick={() => handleOpenModal(images[1])} className="second-img" src={images[1]} alt={`${name} img`} />
                    <img onClick={() => handleOpenModal(images[2])} className="third-img" src={images[2]} alt={`${name} img`} />
                </div>
                {
                    toggle && <ImageModal {...modalProps} />
                }
            </>
            :
            null
    );
};

export default ItemImages;