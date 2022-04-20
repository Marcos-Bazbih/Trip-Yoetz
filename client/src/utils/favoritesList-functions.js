export const verifyUserFavorites = (user) => {
    if (!user.isLogin) return true;
    if (user.isAdmin) return true;
    return false;
};

export const addClassToHeart = (user, favorites, item) => {
    if (!user.isLogin) return '';
        if (favorites && favorites.length >= 1) {
            for (const fav of favorites) {
                if (fav._id === item._id) return 'item-liked';
            }
            return '';
        };
};

export const addItemToFavorites = (item) => {
    if (!localStorage.favorites) {
        const localFavorites = [item];
        localStorage.setItem('favorites', JSON.stringify(localFavorites));
    }
    else {
        const localFavorites = JSON.parse(localStorage.getItem("favorites"));
        localFavorites.push(item);
        localStorage.setItem('favorites', JSON.stringify(localFavorites));
    }
};

export const removeItemToFavorites = (item) => {
    let localFavorites = JSON.parse(localStorage.getItem("favorites"));
    let filteredFavorites = localFavorites.filter(fav => fav._id !== item._id);
    localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
};

export const activateHeartIcon = (heartIcon, item) => {
    if (heartIcon.current.classList.contains("item-liked")) {
        heartIcon.current.classList.remove("item-liked");
        removeItemToFavorites(item);
    }
    else {
        heartIcon.current.classList.add("item-liked");
        addItemToFavorites(item);
    }
};