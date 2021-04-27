'use strict'

const { match } = require('micromatch');
const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  });

//   usersSchema.statics.basicAuthValidation(name, pw)


  const Users = mongoose.model('users', usersSchema);

  module.exports = Users;


//   usersSchema.statics.function()

