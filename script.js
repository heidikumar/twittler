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
            $tweet.text('@' + tweet.user + ': ' + tweet.message);
            $tweetDate.text(tweet.created_at);
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

        $('.refresh').click(function(event){
          refreshTweets();
          });

        $('.clear').click(function(event){
          removeTweets();
        })

      });