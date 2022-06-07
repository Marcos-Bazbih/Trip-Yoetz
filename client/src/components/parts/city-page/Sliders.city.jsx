import Slider from "./Slider.city";
import { useContext } from "react";
import { MainContext } from "../../../contexts/data-context";
const Sliders = () => {
    const { city, restaurants, hotels, activities } = useContext(MainContext);

    return (
        <>
            <Slider
                category="restaurants" name="Eat"
                info={`Quintessential ${city.name} restaurants, bars, and beyond.`}
                items={restaurants} />
            <Slider
                category="hotels" name="Stay"
                info={"A mix of the charming, iconic, and modern."}
                items={hotels} />
            <Slider
                category="activities" name="Do"
                info={`Places to see, ways to wander, and signature experiences that define ${city.name}.`}
                items={activities} />
        </>
    );
};

export default Sliders;