module.exports = {
    isAdmin(req, res, next) {
        if (req.user && req.user.Role == 'admin') {
            return next();
        }
        res.status(401).send('Not authorised');
    },
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
}