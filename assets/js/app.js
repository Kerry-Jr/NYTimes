$(document).ready(function () {

    var searchTerm = 'basket ball';
    var numberOfRecords = 5;

    // be sure to trim these
    var startYear = 0;
    var endYear = 0;

    if (parseInt('startYear')) {

    }


    API_KEY = 'VYAW5JaWGHqsBJPbGfRZFKN4BBWesm4p'


    url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${API_KEY}`



    $('#searchBtn').on('click', function () {
        event.preventDefault();
        searchTerm = $('#searchTerm').val().trim();
        numRecords = $('#numberRecords').val();
        console.log(searchTerm)
        var queryUrl = `${url}&q=${searchTerm}`

        startYear = $('#startYear').val().trim();
        endYear = $('#endYear').val().trim();
        if (parseInt('startYear')) {
            startYear = startYear + +"0101";
            queryUrl = queryUrl + "&begin_date=" + startYear;
        }
        if (parseInt('endYear')) {
            endYear = endYear + +"0101";
            queryUrl = queryUrl + "&end_date=" + endYear;
        }
        runQuery(numRecords, queryUrl);
    })
    function runQuery(numberOfRecords, queryUrl) {
        $.ajax({
            url: queryUrl,
            method: "GET"
        })
            .then(function (response) {
                console.log(response)
                // these are the ten results 
                // console.log(response.response.docs)
                for (i = 0; i < numberOfRecords; i++) {
                    console.log(response.response.docs[i]);
                }

            })
    }

})