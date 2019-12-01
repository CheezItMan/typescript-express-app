"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
;
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
};
exports.router = express_1.Router();
var UNAUTHORIZED = 401;
var UNPROCESSABLE_ENTITY = 422;
exports.router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>\n      <h2>You are logged in!</h2>\n      <p><a href=\"/logout\">Logout</a></p>\n    </div>\n    ");
    }
    else {
        res.send("\n    <div>\n      <h1>Heya</h1>\n      <p>Please login with <a href=\"/login\">This link</a></p>\n    </div>\n    ");
    }
});
exports.router.get('/login', function (req, res) {
    res.send("\n  <div>\n    <h1>Login form</h1>\n    <div>\n    <form method=\"POST\">\n      <div>\n        <label for=\"email\">Email</label>\n        <input type=\"email\" name=\"email\" id=\"email\" />\n      </div>\n      <div>\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" id=\"password\" />\n      </div>\n      <div>\n        <input type=\"submit\" value=\"login\" id=\"submit-btn\" name=\"submit-btn\" class=\"btn submit primary\" />\n      </div>\n    </form>\n    </div>\n  </div>\n  ");
});
exports.router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password &&
        email === 'bob@bob.com' && password === 'password') {
        req.session = {
            loggedIn: true,
        };
        res.redirect('/');
    }
    else if (email && password) {
        res.status(UNAUTHORIZED);
        res.send("\n    <div>\n      <h2>Unauthorized</h2>\n    </div>\n    ");
    }
    else {
        res.status(UNPROCESSABLE_ENTITY);
        res.send("\n    <div>\n      <h2>You need to submit both an email & body</h2>\n    </div>\n    ");
    }
});
exports.router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.loggedIn = false;
    }
    res.redirect('/');
});
exports.router.get('/protected', requireAuth, function (req, res) {
    res.send("\n  <div>\n    <h2>Welcome to protected stuff</h2>\n  </div>\n  ");
});
//# sourceMappingURL=loginRoutes.js.map