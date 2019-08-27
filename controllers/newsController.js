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

exports.addNews = function(req, res) {
    console.log('news/addNews', req.body);
    return res.json({
        success: true,
        message: 'Add News.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

exports.allNews = function(req, res) {
    console.log('news/allNews', req.body);
    return res.json({
        success: true,
        message: 'All News.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

exports.recentNews = function(req, res) {
    console.log('news/detailNews', req.body);
    return res.json({
        success: true,
        message: 'Recent News.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

exports.detailNews = function(req, res) {
    console.log('news/detailNews', req.body);
    return res.json({
        success: true,
        message: 'Detail News.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

exports.updateNews = function(req, res) {
    console.log('news/updateNews', req.body);
    return res.json({
        success: true,
        message: 'Update News.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

exports.deleteNews = function(req, res) {
    console.log('news/deleteNews', req.body);
    return res.json({
        success: true,
        message: 'Delete News.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

exports.updateNews = function(req, res) {
    console.log('news/updateNews', req.body);
    return res.json({
        success: true,
        message: 'Update News.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

exports.uploadNews = function(req, res) {
    console.log('news/deleteNews', req.body);
    return res.json({
        success: true,
        message: 'Upload News.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

exports.test = function(req, res) {
    console.log('news/test', req.body);
    return res.json({
        success: true,
        message: 'Test Response.',
        code: constants.SuccessCode,
        result: 'success'
    });
};

