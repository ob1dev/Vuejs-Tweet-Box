// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const MAX_TWEET_LENGTH = 140;

new Vue({
  el: '#twitterVue',
  data: {
    tweet: '',
    photos: []
  },
  computed: {
    tweetIsOutOfRange: function () {
      return this.charactersRemaining === MAX_TWEET_LENGTH
        || this.charactersRemaining < 0;
    },
    charactersRemaining: function () {
      return MAX_TWEET_LENGTH - this.tweet.length;
    },
    underTwentyMark: function () {
      return this.charactersRemaining <= 20 && this.charactersRemaining > 10;
    },
    underTenMark: function () {
      return this.charactersRemaining <= 10;
    },
    photoHasBeenUploaded: function () {
      return this.photos.length > 0
    }
  },
  methods: {
    triggerFileUpload: function () {
      this.$refs.photoUpload.click();
    },
    handlePhotoUpload: function (e) {
      var self = this;
      var files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();

        reader.onloadend = function (evt) {
          self.photos.push(evt.target.result);
        };

        reader.readAsDataURL(files[i]);
      }
    },
    removePhoto: function (index) {
      this.photos.splice(index, 1);
    }
  }
});