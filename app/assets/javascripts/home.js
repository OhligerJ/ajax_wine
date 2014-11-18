var wine_reponse;

$(document).ready(function(){
	    $.when(wineQuery()).done(function(response){
    	// erase previous wine data and hide the spinner and clear any previous search values
    	$("#wineData").html("");
    	console.log(response);
    	wine_response = response;
    	listWines(response);
    });
});

wineQuery = function(){
    return $.ajax({
      url: "http://daretodiscover.net/wine",
      data: {}
    });
};

listWines = function(wineResultsJSON){
  var template = HandlebarsTemplates["home/index"];
	var html = template(wineResultsJSON);
  $("#wineData").append(html);
};