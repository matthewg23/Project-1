$('#button-event').on('click', function(){
    console.log('test');
    $('#button-event').css('background-color', 'blue');
    $('#button-event').css('color', 'white');

    $('#button-restaurant').css('background-color', '');
    $('#button-restaurant').css('color', '');
});

$('#button-restaurant').on('click', function(){
    console.log('test');
    $('#button-restaurant').css('background-color', 'blue');
    $('#button-restaurant').css('color', 'white');

    $('#button-event').css('background-color', '');
    $('#button-event').css('color', '');
});

// eventbrite api key
// api main key 7WVZTR2WHS7TQ6WZ4L
// public api key WU7KU6HKP6T3INTQLZR2
// https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=YOUR_APP_KEY&redirect_uri=YOUR_URL

// Getting data from Eventbrite API
$(document).on('click', '#button-event', function() {
    var event = $(this).attr('data-event');  /////// Add proper for 'data-event'
    var queryURL = ''
})