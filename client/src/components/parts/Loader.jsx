const Loader = () => {
    return (
        <dialog className="loader-modal">
            <img src={"/images/loader_gif.gif"}
                alt="loader"
                className='loader-gif' />
        </dialog>
    );
};

export default Loader;