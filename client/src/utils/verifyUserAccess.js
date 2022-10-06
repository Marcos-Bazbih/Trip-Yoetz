export const verifyUserAccess = (user) => {
    if (!user.isLogin || user.isAdmin) return true;
    return false;
};