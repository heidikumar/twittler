      $(document).ready(function(){
        var $body = $('body');
        //$body.html('');

        function refreshTweets (){
          removeTweets();
          var index = streams.home.length - 1;

          for (var j=0; j<=index; j++){
            var tweet = streams.home[j];
            addTweet(tweet.user, tweet.message, tweet.created_at);
          }
        };

        refreshTweets();

        function addTweet(person, message, date){
            var $tweet = $('<div></div>');
            var $tweet2 = $('<p></p>');
            var $tweetDate = $('<div></div>');
            var $empty = $('<p> <br> </p>');
            var minutes = convertTime(date);
            var $user = $("<button/>", {
              html: "" + person + "", 
              "class": "user", 
              "name": "" + person + ""
            });
            $tweet.text('@'); 
            $user.appendTo($tweet);
            $tweet2.text(': ' + message);
            $tweet2.appendTo($tweet);
            $tweetDate.text(minutes + " minutes ago");
            $tweet.prependTo(".tweetList");
            $empty.prependTo(".tweetDates");
            $tweetDate.prependTo(".tweetDates");
        };

        function removeTweets (){
          $(".tweetList").empty();
          $(".tweetDates").empty();
          $(".selectTweets").empty();
          $(".selectUser").empty();
        }

        function convertTime(date){
          var then=date.getTime();
          var now=new Date();
          now = now.getTime();
          var seconds = Math.floor((now-then)/60000);     //This is in seconds
          return seconds;
        }

        function displayUserTweets(username){
          var userArray = streams.users[username];
          var $tweet; 
          var $user = $('<div></div>');
          $user.text(username);
          $(".selectTweets").empty();
          $(".selectUser").empty();
          $user.appendTo(".selectUser")
            for (var x=0; x<userArray.length; x++){
              $tweet = $('<div></div>');
              $tweet.text("- " + userArray[x].message);
              $tweet.appendTo(".selectTweets");
            };
        }

        $('.refresh').click(function(event){
          refreshTweets();
          });

        $('.clear').click(function(event){
          removeTweets();
        })

        $('.user').click(function(event){
          var name = this.name;
          displayUserTweets(name);
        });

        /*$('.newTweet').click(function(event){
          var name = $('#login').val();
          var message = $('#newTweet').val();
          var minutes = new Date();
          minutes = convertTime(time);
          var $tweet = $('<div></div>');
          var $tweetDate = $('<div></div>');
          $tweetDate.text(minutes + " minutes ago");
          $tweet.text("@" +name + ":" +message+);
          $tweet.prependTo(".tweetList");
          $tweetDate.prependTo(".tweetDates");
        })*/

      });