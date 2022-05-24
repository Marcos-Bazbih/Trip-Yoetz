export const logoutAndClearLocalStorage = (setUser, navigate) => {
    if (localStorage.tripYoetz_token) {
        if (window.confirm("Are you sure you want to logout ?")) {
            localStorage.removeItem("tripYoetz_token");
            setUser({});
            alert("Hope to see you again !");
            navigate('/');
        };
    };
};