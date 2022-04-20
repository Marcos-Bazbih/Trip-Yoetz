export const verifyUserAccess = (user) => {
    if (user.isLogin && !user.isAdmin) {
        return false;
    };
    return true;
};