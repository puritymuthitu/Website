$(document).ready(function(){
    //Run when the button is clicked
    $("#meme-button").click(function(){
      //Execute the API call.
      var meme = $.get("https://github.com/Alexoid1/Meme-generator");
      
      //Function that runs when the API runs successfully
      cat.done(function(response){
        //Because the API returns an array, get the first element.
        var memeData = response[0];
        //Show the meme block
        $("#meme").show();
        //Set the SRC of the image to the 
        $("#meme-img").attr("src", memeData.url);
    });
});
});
