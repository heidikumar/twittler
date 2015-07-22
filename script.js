      $(document).ready(function(){
        var $body = $('body');
        //$body.html('');

        function refreshTweets (){
          //removeTweets();
          var index = streams.home.length - 1;

          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            var $tweetDate = $('<div></div>');
            var minutes = convertTime(tweet.created_at);
            $tweet.text('@' + tweet.user + ': ' + tweet.message);
            $tweetDate.text(minutes + " minutes ago");
            $tweet.appendTo(".tweetList");
            $tweetDate.prependTo(".tweetDates")
            index -= 1;
          }
        };

        refreshTweets();

        function removeTweets (){
          $(".tweetList").empty();
          $(".tweetDates").empty();
        }

        function convertTime(date){
          var then=date.getTime();
          var now=new Date();
          now = now.getTime();
          var seconds = Math.floor((now-then)/60000);     //This is in seconds
          return seconds;
        }

        $('.refresh').click(function(event){
          refreshTweets();
          });

        $('.clear').click(function(event){
          removeTweets();
        })

      });