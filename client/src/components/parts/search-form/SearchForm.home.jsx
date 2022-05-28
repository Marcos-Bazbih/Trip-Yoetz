import { useContext } from "react";
import { MainContext } from "../../../contexts/data-context";
import GreetUser from "../home/GreetUser.home";
import AutocompleteForm from "./AutocompleteForm";

const SearchForm = () => {
    const { user } = useContext(MainContext);

    return (
        <div className="search-form">
            {user.isLogin && <GreetUser user={user} />}
            <AutocompleteForm />
        </div>
    );
};

export default SearchForm;