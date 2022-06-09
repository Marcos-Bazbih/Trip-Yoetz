import { useState, useEffect, useContext } from 'react';
import { DataContext } from "../../../contexts/data-context";

const GreetUser = () => {
    const [greetUser, setGreetUser] = useState("");
    const { user } = useContext(DataContext);

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 6 && hours <= 11) setGreetUser("Good morning ");
        else if (hours >= 12 && hours <= 17) setGreetUser("Good afternoon ");
        else if (hours >= 18 && hours <= 21) setGreetUser("Good evening ");
        else { setGreetUser("Good night "); }
    }, []);

    return (
        <h1 className="greet-user">
            {greetUser}
            {
                user.isLogin &&
                <span>{user.firstName} {user.lastName}</span>
            }
        </h1>
    );
};

export default GreetUser;