var express = require('express');
var router = express.Router();

var newsController  = require('../controllers/newsController');
var adminController = require('../controllers/adminController');

var redirect = function(req, res, next) {
    if (req.session.admin) {
        next();
    } else {
        res.render('admin/login');
    }
}

router.get('/', function(req, res) {
    res.redirect('/login');
});
router.get('/login', redirect, function(req, res) {
    res.redirect('/dashboard');
});
router.get('/dashboard', redirect, function(req, res) {
    res.render('admin/dashboard', req.session.admin);
});
router.get('/news', redirect, function(req, res) {
    res.render('admin/news', req.session.admin);
});
router.get('/logout', function(req, res) {
    req.session.admin = null;
    res.redirect('/login');
});
router.get('*', function(req, res, next) {
    res.render('admin/template/error');
});

router.post('/signup', adminController.signup);
router.post('/signin', adminController.signin);
router.post('/allnews', newsController.allNews);
router.post('/addnews', newsController.addNews);
router.post('/recentnews', newsController.recentNews);
router.post('/detailnews', newsController.detailNews);
router.post('/deletenews', newsController.deleteNews);
router.post('/updatenews', newsController.updateNews);
router.post('/uploadnews', newsController.uploadNews);

module.exports = router;
