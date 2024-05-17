const mongoose = require('mongoose');
// const express = require('express');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    favorites: { type: Array, default:[] },
  });
  
  module.exports = mongoose.model('userInfo', userSchema);