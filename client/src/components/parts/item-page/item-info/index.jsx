import { useContext } from "react";
import { StyledItemInfo } from "../../../styles/parts/StyledItemInfo";
import { ThemeContext } from "../../../../contexts/theme-context";
import ItemDetails from "./ItemDetails";
import ItemImages from "./ItemImages";
import ItemActivityHours from "./ItemActivityHours";
import ItemDescription from "./ItemDescription";
import { DataContext } from "../../../../contexts/data-context";

const ItemInfo = () => {
    const { mode } = useContext(ThemeContext);
    const { item } = useContext(DataContext);

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