import { useContext } from "react";
import { StyledItemInfo } from "../../../styles/parts/StyledItemInfo";
import { ThemeContext } from "../../../../contexts/theme-context";
import ItemDetails from "./ItemDetails";
import ItemImages from "./ItemImages";
import ItemActivityHours from "./ItemActivityHours";
import ItemDescription from "./ItemDescription";

const ItemInfo = ({ item }) => {
    const { mode } = useContext(ThemeContext);

    return (
        <StyledItemInfo mode={mode}>
            <ItemDetails item={item} />
            <ItemImages images={item.images} name={item.name} />
            <ItemActivityHours activityHours={item.activityHours} price={item.price} />
            <ItemDescription description={item.description} />
        </StyledItemInfo>
    );
};

export default ItemInfo;