﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

new Vue({
  el: '#twitterVue',
  data: {
    tweet: ''
  },
  computed: {
    tweetIsEmpty: function () {
      return this.tweet.length === 0;
    }
  }
});