module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    if (req.user.role.toString() !== 'admin') {
        return res.redirect('/shop');
    }
    next();
}