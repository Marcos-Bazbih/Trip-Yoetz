import GreetUser from "../home/GreetUser.home";
import AutocompleteForm from "./AutocompleteForm";

const SearchForm = () => {
    return (
        <div className="home-search-form">
            <GreetUser />
            <AutocompleteForm />
        </div>
    );
};

export default SearchForm;