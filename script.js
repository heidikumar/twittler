      $(document).ready(function(){
        var $body = $('body');
        //$body.html('');

        function refreshTweets (){
          var index = streams.home.length - 1;

          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            $tweet.text('@' + tweet.user + ': ' + tweet.message + " " + tweet.created_at);
            $tweet.appendTo(".displayTweets");
            index -= 1;
          }
        };
        refreshTweets();

        function removeTweets (){
          $body.remove('tweet');    //not working yet, have to find right way to reference tweets.
        }

        $('.refresh').click(function(event){
          refreshTweets();
          });

        $('.clear').click(function(event){
          removeTweets();
        })

      });