      $(document).ready(function(){
        var $body = $('body');
        //$body.html('');

        function refreshTweets (){
          removeTweets();
          var index = streams.home.length - 1;

          for (var j=0; j<=index; j++){
            var tweet = streams.home[j];
            var $tweet = $('<div></div>');
            var $tweetDate = $('<div></div>');
            var minutes = convertTime(tweet.created_at);
            $tweet.text('@' + tweet.user + ': ' + tweet.message);
            $tweetDate.text(minutes + " minutes ago");
            $tweet.prependTo(".tweetList");
            $tweetDate.prependTo(".tweetDates")
            //index -= 1;
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

        function displayUserTweets(){
          var $tweet = $('<div></div>');
          var $divider = $('<div>-----</div>')
          var myArray = streams.users.shawndrost;
          for (var i=0; i<myArray.length; i++){
            $tweet.text("" + myArray[i].message);
            $divider.prependTo(".userTweets");
            $tweet.prependTo(".userTweets");
          };
        }

        $('.refresh').click(function(event){
          refreshTweets();
          });

        $('.clear').click(function(event){
          removeTweets();
        })

        $('.testButton').click(function(event){
          console.log("Button works!")
          displayUserTweets();
        })

      });