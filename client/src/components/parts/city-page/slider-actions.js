export const disableBtn = (width, left) => {
    switch (true) {
        case width <= 376 && left === 162:
        case width <= 551 && left === 150:
        case width <= 768 && left === 76:
        case width > 768 && left === 36:
            return true;
        default:
            return false;
    }
};

export const handleSliderBtn = (direction, width, left, setLeft) => {
    switch (true) {
        case width <= 376:
            if (direction === 'prev') setLeft(left - 54);
            if (direction === 'next') setLeft(left + 54);
            break;
        case width <= 550:
            if (direction === 'prev') setLeft(left - 50);
            if (direction === 'next') setLeft(left + 50);
            break;
        case width <= 768:
            if (direction === 'prev') setLeft(left - 19);
            if (direction === 'next') setLeft(left + 19);
            break;
        default:
            if (direction === 'prev') setLeft(left - 12);
            if (direction === 'next') setLeft(left + 12);
            break;
    };
};