const ImageModal = ({ image, name, setToggle }) => {
    return (
        <dialog className="image-modal">
            <img src={image} alt={`${name} img`} />
            <button onClick={() => { setToggle(false) }}>
                X
            </button>
        </dialog>
    );
};

export default ImageModal;