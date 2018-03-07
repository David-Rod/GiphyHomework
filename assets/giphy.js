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

var getNewImages = function(searchText) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        searchText + "&api_key=" + apiKey + "&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        var results = response.data;

        for (var i = 0; i < topics.length; i++) {
            var rating = results[i].rating;
            var gifDiv = $("<div>");
            var animalImg = $("<img>");


            animalImg.attr("src", results[i].images.fixed_height.url);
            p = $("<p>").text("Rating: " + rating);
            $(gifDiv).append(animalImg, p);


            $("#animalgifs").append(gifDiv);
        }

    })
}

$(".animalButtons").on("click", function () {
    var animalbutton = $(this).attr("data-animal");
    getNewImages(animalbutton);
    
});

$("#animal-form").on("submit", function(e) {
    e.preventDefault();
    var searchedAnimal = $("#animal-input").val().trim();
    getNewImages(searchedAnimal);
    console.log(searchedAnimal);
});