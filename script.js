	var text = 'LqRZ2_w56U0';
	var listData = [ ];
function myJsFunction(){
    	text=document.getElementById('input1').value;
    	//alert(text);
    	listData[listData.length]=text;
    	if(listData.length>1)
    	{
    		removelist();
    	}
    	makelist();
    	// 2. This code loads the IFrame Player API code asynchronously.
    	if(listData.length == 1 && typeof tag === "undefined") { 
        var tag = document.createElement('script');
	
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      }else if(listData.length==1){
      	var player;
      	onYouTubeIframeAPIReady();
      }
 }

      
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: text,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the players state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
          //alert(player.getVideoData().title);
          if(listData.length>1)
          {
          	listData.splice(0,1);
          	removelist();
          	makelist();
          	player.loadVideoById(listData[0]);
          }else{
          	listData = [];
          	removelist();
          	//player.clearVideo();
          	player.destroy();
          	//tag="";
          }
          //done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }   
       function removelist(){
       		var elem = document.getElementById('dummy');
		elem.parentNode.removeChild(elem);
       }
       function makelist(){
                                
                                
                                // Make a container element for the list - which is a <div>
                                // You don't actually need this container to make it work
                                var listContainer = document.createElement("div");
				listContainer.id = "dummy";
                                // add it to the page
                                document.getElementsByTagName("body")[0].appendChild(listContainer);

                                // Make the list itself which is a <ul>
                                var listElement = document.createElement("ol");

                                // add it to the page
                                listContainer.appendChild(listElement);

                                // Set up a loop that goes through the items in listItems one at a time
                                var numberOfListItems = listData.length;

                                for( var i =  0 ; i < numberOfListItems ; ++i){
                
                                        // create a <li> for each one.
                                        var listItem = document.createElement("li");

                                        // add the item text
                                        listItem.innerHTML = listData[i];

                                        // add listItem to the listElement
                                        listElement.appendChild(listItem);

                                }

                        }
