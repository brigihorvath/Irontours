function isLoggedIn(req, res, next) {
  if (req.session.currentUser) {
    return next();
  }
  return res.redirect('/login');
}

function isLoggedOut(req, res, next) {
  if (!req.session.currentUser) {
    return next();
  }
  return res.redirect('/profile');
}

function isAdmin(req, res, next) {
  if(req.session.currentUser.role === "admin") {
    return next();
  }
  return res.redirect('/profile');
}

module.exports = { isLoggedIn, isLoggedOut, isAdmin };
