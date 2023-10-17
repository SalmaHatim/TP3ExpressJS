const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const flash = require('connect-flash');

const User = require('./user'); // Import the User model
const path = require('path');

require('./cnnection');






const app = express();

app.use(flash());

// Configure Pug as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err);
    });
});



const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, continue to the next middleware
  } else {
    res.redirect('/login'); // User is not authenticated, redirect to the login page
  }
};

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect password.' });
    }
  } catch (err) {
    return done(err);
  }
}));






// Define routes for login, registration, profile, and logout (next step)


// Login route
app.get('/login', (req, res) => {
    res.render('login');
  });
  

  app.get('/books', (req, res) => {
    const books = [
      { title: 'Book 1', author: 'Author 1', year: 2022 },
      { title: 'Book 2', author: 'Author 2', year: 2020 },
      { title: 'Book 3', author: 'Author 3', year: 2021 },
    ];
    res.render('books', { books });
  });


  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login',successRedirect: '/books',failureFlash: true  }),
    (req, res) => {
      res.redirect('/profile');
    }
  );
  
  // Registration route
  app.get('/register', (req, res) => {
    res.render('register');
  });
 
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Hash the password before saving it
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      // Handle the error, e.g., by sending an error response
      console.error(err);
      res.redirect('/register'); // Redirect to registration page with an error message
    } else {
      // Create a new user with the hashed password
      const newUser = new User({ username, password: hashedPassword });

      newUser.save()
        .then((newuser) => {
          res.redirect('/login');
        })
        .catch((err) => {
          // Handle the error, e.g., by sending an error response
          console.error(err);
          res.redirect('/register'); // Redirect to registration page with an error message
        });
    }
  });
});

  
  // Profile route (protected)
  
  
  // Logout route
  app.get('/logout',isAuthenticated, (req, res) => {
    req.logout((err) => {
      if (err) {
        // Handle any errors that occurred during logout
        console.error(err);
        // You can redirect to an error page or handle it as needed
      } else {
        // Logout was successful
        res.redirect('/login');
      }
    });
  });
  
  app.listen(3000,()=>{
    console.log('listening on port 3000');
})