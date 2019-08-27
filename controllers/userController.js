'user strict';
require('dotenv').config();

var constants = require('../conf/constants');

var returnError = function(err, res) {
    return res.json({
        success: false,
        message: err,
        code: constants.ErrorCode
    });
}

exports.test = function(req, res) {
    return res.json({
        success: true,
        message: 'Test Response.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

