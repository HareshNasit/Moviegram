
// Our own express middleware to check for
// an active user on the session cookie (indicating a logged in user.)
const authenticate = (req, res, next) => {
	if (req.session.user) {
		User.findById(req.session.user).then((user) => {
			if (!user) {
				return Promise.reject()
			} else {
				req.user = user
				next()
			}
		}).catch((error) => {
			res.status(401).send("Unauthorized")
		})
	} else {
		res.status(401).send("Unauthorized")
	}
}

const sessionCheckerRequestUsername = (req, res, next) => {
    if (req.session.user == req.username) {
        res.redirect('/'); // redirect to dashboard if logged in.
    } else {
        next(); // next() moves on to the route.
    }
};



module.exports = { sessionCheckerRequestUsername, authenticate}