'use strict';

const uuid = require('uuid/v4');

const bookmarks = [
  {
    id: uuid(),
    title: 'NBA',
    url: 'https://www.nba.com',
    description: 'nba is the best league',
    rating: 5
  },
  {
    id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'The best search engine',
    rating: 5
  },
];

module.exports = { bookmarks };