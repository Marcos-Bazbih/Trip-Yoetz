const ItemActivityHours = ({ activityHours, price }) => {
    return (
        <div className="activities-hours-wrapper">
            <h1 className="activities-hours-title">Activity Hours</h1>
            <div className="activities-hours">
                {
                    activityHours ?
                        activityHours.split("PM").map((item, i) =>
                            i < 7 &&
                            <p key={i}>{item} PM</p>
                        )
                        :
                        null
                }
            </div>
            <h1 className="item-prices">
                {
                    price && price.length >= 1
                        ?
                        `${price[0]}$ - ${price[1]}$`
                        :
                        "No price info"
                }
            </h1>
        </div>
    );
};

export default ItemActivityHours;