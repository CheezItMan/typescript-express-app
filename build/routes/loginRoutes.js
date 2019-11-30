"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/', function (req, res) {
    res.send("\n  <div>\n    <h1>Heya</h1>\n  </div>\n  ");
});
exports.router.get('/login', function (req, res) {
    res.send("\n  <div>\n    <h1>Login form</h1>\n    <div>\n    <form method=\"POST\">\n      <div>\n        <label for=\"email\">Email</label>\n        <input type=\"email\" name=\"email\" id=\"email\" />\n      </div>\n      <div>\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" id=\"password\" />\n      </div>\n      <div>\n        <input type=\"submit\" value=\"login\" id=\"submit-btn\" name=\"submit-btn\" class=\"btn submit primary\" />\n      </div>\n    </form>\n    </div>\n  </div>\n  ");
});
exports.router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    console.log(req);
    res.send("\n    <div>\n      <h1>Thank you</h1>\n      <p>Email: " + email + "</p>\n      <p>Password: " + password + "</p>\n    </div>\n  ");
});
