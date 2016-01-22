// Required scripts
var express       = require('express');
var path          = require('path');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

// Routes
var indexRoute     = require('./routes/index');
var app            = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var pg = require('pg');

/* GET home page */
app.get('/', function(req, res, next) {
    
   /* var conString = "postgres://postgres:admin@localhost/juan";
    var client = new pg.Client(conString);

    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query("SELECT * FROM topic", function(err, result) {
        
        if(err) {
          return console.error('error running query', err);
        }

        res.json(result.rows);
        client.end();

      });

    });*/

    res.render('index', { title: 'Express' });
});

app.get('/users', function(req, res, next) {

    var myObject = {
      "name": "SFDC Training",
      "parent": "null",
      "children": [
        {
          "name": "Architect",
          "children": [
            {
              "name": "Salesforce Technical Archtecture",
              "parent": "Architect",
              "_children": [
                {
                  "name": "Multi-tenant Architecture",
                  "url": "https://www.youtube.com/v/jrKA3cJmoms"
                }
              ]
            },
            {
              "name": "Salesforce Security Model",
              "_children": [
                {
                  "name": "Salesforce Data Access and Security",
                  "url": "https://www.youtube.com/v/17dr2GMvgd8"
                },
                {
                  "name": "Who Sees What",
                  "url": "https://www.youtube.com/v/X3Hg6OXhPO8"
                },
                {
                  "name": "Introduction to the Salesforce Security Model",
                  "url": "https://www.youtube.com/v/c1ccSXlVjXk"
                }
              ]
            }
          ]
        }
      ]
    };

    res.status(200).json(myObject);

});

module.exports = app;