var animals = ["dog", "cat", "bird", "whale", "lion", "elephant", "shark"];
var authKey = "jcXPqO7MwHscMkWuKM58GTSrAXRL30Mw";

//variables specific for the animal buttons from array or search input

var q = $("#animal-input").text;


var makeButtons = function () {
    for (var i = 0; i < animals.length; i++) {
        //create buttton with text by looping through array
        var animal = $("<button id='animalbuttons'>");
        animal.text(animals[i]);
        $("#animalbutton").append(button);
}
}
makeButtons();


$("#animalbuttons").on("click", function () {
    var queryURLBase = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=" + authKey + "&limit=10";

    $.ajax({
        url: queryURLBase,
        method: "GET"
    }).done(function (response) {

        console.log(response);

        // for (var i = 0; i < animals.length; i++) {
        //     //create buttton with text by looping through array
        //     var animal = $("<button id='animalbuttons'>");
        //     animal.text(animals[i]);
        //     $("#animalbutton").append(button);

            //create gif image and append to the div that contains gif images
            var animalImg = $("<img>");
            animalImg.attr("src", response.data[i].image.fixed_height.url);
            $("#animalgifs").append(animalImg);
        });


    }

);

$("#add-animal").on("click", function () {
    var queryURLBase = "https://api.giphy.com/v1/gifs/search?q=" +
        q + "&api_key=" + authKey + "&limit=10";


    $.ajax({
        url: queryURLBase,
        method: "GET"
    }).done(function (response) {
        console.log(response);

        //loop through to see if the search item matches any items in animals array
        for (var j = 0; j < animals.length; j++) {
            if (q !== animals[j]) {
                //add search item to array if it does not already exist
                animals.push(q);
                //look to see if length has been updated
                console.log(animals.length);
            }
            var animalImg = $("<img>");
            animalImg.attr("src", response.data[i].images.fixed_height.url);
        }
    });
});

// there should be a search that appends our array when item is searched
//q is the search string for an api
//limit tells the api how many results to return
//filter results according to a specific rating

//Methods    ===================================================================
//instead of hard coding buttons in html, they must be created in JS using a method
// should the id's for those buttons be set to the button name or an input?