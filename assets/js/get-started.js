// eventbrite api key
// api main key 7WVZTR2WHS7TQ6WZ4L
// public api key WU7KU6HKP6T3INTQLZR2
// https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=YOUR_APP_KEY&redirect_uri=YOUR_URL

// Getting data from Eventbrite API
$(document).on('click', '#button-event', function() {
    var event = $(this).attr('data-event');  /////// Add proper for 'data-event'
    var queryURL = 'https://www.eventbrite.com/oauth/authorize?q=' + event + '&response_type=token&client_id=WU7KU6HKP6T3INTQLZR2&redirect_uri=YOUR_URL&location.within10mi'

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var
        }
    });
});