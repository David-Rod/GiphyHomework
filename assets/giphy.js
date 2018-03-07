//create our array and store our api key in a variable to be used in our ajax call
var topics = ["dog", "cat", "bird", "whale", "lion", "elephant", "shark"];
var apiKey = "jcXPqO7MwHscMkWuKM58GTSrAXRL30Mw";


//variables specific for the animal buttons from array or search input


for (var k = 0; k < topics.length; k++) {
    var buttonName = $("<button>");
    buttonName.attr("class", "animalButtons").text(topics[k]);
    buttonName.attr("id", topics[k]);
    buttonName.attr("data-animal", topics[k]);
    $("#animalbutton").append(buttonName);
}

//function that makes our ajax call and includes both the button clicks and search in our form
var getNewImages = function(searchText) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        searchText + "&api_key=" + apiKey + "&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        var results = response.data;

        //loop through the topics array and grab ratings from each item in the loop
        for (var i = 0; i < topics.length; i++) {
            var rating = results[i].rating;
            var gifDiv = $("<div>");

            //created animal image and added a scr to link it to the kind of image we want to retrieve
            var animalImg = $("<img>");
            animalImg.attr("src", results[i].images.fixed_height.url);

            //created a paragraph that added a rating for that Gif and appended it to the gifDiv
            p = $("<p>").text("Rating: " + rating);
            $(gifDiv).append(animalImg, p);

            //append the entire gifDiv to the animalgifs container
            $("#animalgifs").append(gifDiv);
        }

    })
}

$(".animalButtons").on("click", function () {
    var animalbutton = $(this).attr("data-animal");
    getNewImages(animalbutton);
    
});

//here we target the form and complete the event based on a "submit" rather than a "click"
$("#animal-form").on("submit", function(e) {
    //prevent the form from refreshing the page
    e.preventDefault();

    //grab the search criteria and call the getNewImages while passing the searchedAnimal value
    var searchedAnimal = $("#animal-input").val().trim();
    getNewImages(searchedAnimal);
    console.log(searchedAnimal);
});