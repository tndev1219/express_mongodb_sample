'user strict';
require('dotenv').config();

var crypto = require('crypto');

var constants = require('../conf/constants');
var Admin = require('../models/adminModel');

var returnError = function(err, res) {
    return res.json({
        success: false,
        message: err,
        code: constants.ErrorCode
    });
}

exports.signup = function(req, res) {
    console.log('signup', req.body);
    var admin = new Admin();
    admin.name = 'admin';
    admin.email = 'admin@gmail.com';
    admin.password = crypto.createHash('md5').update('admin123').digest('hex');
    admin.usertype = '1';
    admin.tokenid = '';
    admin.save(function (err) {
        if (err) {
          return res.json({
            success: false,
            msg: err.message,
            code: constants.SuccessCode
          });  
        } else {
          return res.json({
            success: true,
            msg: 'New admin created!',
            code: constants.SuccessCode,
            result: admin
          });  
        }        
    });
};

exports.signin = function(req, res) {
    console.log('signin', req.body);
    Admin.findOne({email: req.body.email}).exec(function (err, admin) {
        if (err) {
          return res.json({
            success: false,
            msg: err.message,
            code: constants.SuccessCode
          });  
        }
        if (!admin || admin.password != crypto.createHash('md5').update(req.body.password).digest('hex')) { 
            return res.json({
                success: false,
                msg: 'Authentication failed!',
                code: constants.AuthError,
            });
        } else {
            req.session.admin = admin;
            return res.json ({
                success: true,
                msg: 'Login Success!',
                code: constants.SuccessCode,
                result: admin
            });
        }
    });
};

