const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const app = express()
const user = require('../models/userdata')

const methodOverride = require('method-override')


const bcrypt = require('bcrypt')
const session = require('express-session')
const flash = require('express-flash')

const passport = require('passport')
const { request } = require('express')
const localStrategy	= require('passport-local').Strategy

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'))

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});

passport.use(new localStrategy({ usernameField: 'email' } , function (email, password, done) {
	user.findOne({ email: email },  function (err, user) {
		if (err) return done(err);
		if (!user) return done(null, false, { messages: 'Incorrect username.' });

	 bcrypt.compare(password, user.password, function (err, res) {
			if (err) return done(err);
			if (res === false) return done(null, false, { messages: 'Incorrect password.' });
			
			return done(null, user);

		});
    
	});
}));


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }  
    res.redirect('/home')
  }

  


router.get('/',   (req,res)=>{
        res.render('signin/inpage')
 })

router.post('/',  passport.authenticate('local', {
	successRedirect: '/home',
	failureRedirect: '/signin', 
 
    }
    ))

router.delete('/', (req, res) => {
        req.logOut()
        res.redirect('/')
      })

  function checkNotAuthenticated (req, res, next) {
        if (!request.isAuthenticated()) {
          return next()
        }  
        res.redirect('/signin')
      }


module.exports = router