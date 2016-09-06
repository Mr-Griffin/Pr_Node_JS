/**
 * Created by doanlt on 9/5/16.
 */
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('contact', {title: 'Contact'});
});

router.post('/send', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'luyennangblue@gmail.com',
            pass: 'abc12356'
        }

    });

    var mailOption = {
        from: 'Doan Le <luyennangblue@gmail.com>',
        to: 'luyennangblue@gmail.com',
        subject: 'website submit',
        text: 'you have a new subject from website with detail... Name: ' + req.body.name + ' and Email: ' + req.body.email + ' Message: ' + req.body.message,
        html: '<p>you have a new subject from website with detail... </p>' +
        '<ul><li>Name : ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>',
    };
    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message sent' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;
