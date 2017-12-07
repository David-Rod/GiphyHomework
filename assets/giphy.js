//animals will be my topic array
// i set it to animals to begin with 
var animals = ["dog", "cat", "bird", "whale"];
//store api key directly in the script
var authKey = "2q0DIq0cyJZaFDnyUWGdmTKS6U4QtRRH";


var searchTerm = q;
var q = "";
//limit variable set to 10 as specified by instructions
var limti: 10;
//add api key to the url here
var queryURLBase = " https://giphy.com.json?api-key=2q0DIq0cyJZaFDnyUWGdmTKS6U4QtRRH" +
    authKey + "&q=";

// FUNCTIONS
function runQuery(queryURL) {


    $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (animalInfo) {

        }




// there should be a search that appends our array when item is searched
//q is the search string for an api
//limit tells the api how many results to return
//filter results according to a specific rating

//Methods    ===================================================================
//instead of hard coding buttons in html, they must be created in JS using a method
// should the id's for those buttons be set to the button name or an input?
