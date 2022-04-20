export const getAvgRating = (ratingArray) => {
    if (ratingArray.length >= 1) {
        let avg = 0;
        let sum = 0;
        for (const ratingItem of ratingArray) {
            sum += Number(ratingItem.rate);
        }
        avg = sum / ratingArray.length;
        return avg.toString().substring(0,3);
    }
}