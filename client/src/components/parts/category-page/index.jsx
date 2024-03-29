import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import Navbar from "../../layout/navbar";
import { StyledCategoryPage } from "../../styles/pages/CategoryPage.styled";
import ItemCard from "./ItemCard";
import { selectOptions } from "./selectedOptions";

const CategoryPage = (categoryInfo) => {
    const { mode } = useContext(ThemeContext);
    const { categoryName, categoryArray, selected, selectOnChange } = categoryInfo;

    return (
        <StyledCategoryPage mode={mode}>
            <Navbar />
            <div className="category-name-grid">
                <h1>{categoryName}</h1>
            </div>
            <div className='sort-grid'>
                <select value={selected} onChange={selectOnChange}>
                    {selectOptions.map((option, i) => (
                        <option key={i} value={option.value} hidden={i === 0}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>
            <section className='items-container-grid'>
                {categoryArray.length >= 1 ?
                    categoryArray.map(product =>
                        <ItemCard product={product} key={product._id} />
                    )
                    :
                    <h1>No {categoryName} found</h1>
                }
            </section>
        </StyledCategoryPage>
    )
};

export default CategoryPage;