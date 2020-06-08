'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');

const router = new Router();

// MULTER CONFIG

const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//UPLOAD IMG => CONECTED WITH .ENV
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'GetCrafty'
  }
});

const uploader = multer({ storage });

router.post('/sign-up', uploader.single("photo"), (req, res, next) => {
  const { name, email, password } = req.body;
  //console.log(req.file)
  let imageUrl;
  if (req.file) imageUrl = req.file.path;
  bcryptjs
    .hash(password, 10)
    .then(hash => {
      return User.create({
        name,
        email,
        passwordHash: hash,
        photo: imageUrl
      });
    })
    .then(user => {
      req.session.user = user._id;
      res.json({ user: user });
    })
    .catch(error => {
      console.log(error)
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then(document => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then(result => {
      if (result) {
        req.session.user = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch(error => {
      next(error);
    });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

router.get('/me', (req, res, next) => {
  res.json({
    user: req.user || null
  });
});

module.exports = router;
