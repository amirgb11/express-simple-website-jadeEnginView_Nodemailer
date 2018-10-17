var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var app = express();

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname , 'public')))

app.get('/' , (req , res) => {
    res.render('index');
})

app.get('/about' , (req , res) => {
    res.render('about');
})

app.get('/contact' , (req , res) => {
    res.render('contact')
})

app.post('/contact/send' , (req, res) => {
    var transporter = nodemailer.createTransport({
        service : 'Gmail' , 
        auth : {
            user: 'amirdehghan1377@gmail.com' , 
            pass: 'a+m+i+r77.'
        }
    });

    var mailOptions = {
        from: 'amir dehghan <amirdehghan1377@gmail.com>' , 
        to: 'amirdehghan1377@gmail.com',
        subject: 'Website Submissoin',
        text: 'Submission with following details ... Name' +req.body.name+ 'Email' +req.body.email+ 'Message' +req.body.message,
        html: '<p>Submission with following details ... </p><ul><li>Name : '+req.body.name+'</li><li>Email : '+req.body.email+'</li><li>Message : '+req.body.message+'</li></ul>'
    };

    transporter.sendMail(mailOptions , (err, info) => {
        if (err) {
            console.log(err);
            res.redirect('/');
        }
        else{
            console.log('Message sent : '+info.response)
            res.redirect('/');
        }
    })
})


app.listen(3000);
console.log("app is running on port 3000")