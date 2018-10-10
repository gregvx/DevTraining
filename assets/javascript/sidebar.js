function fetchAnswers() {

    return {
        answerCount: 10,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5']
    };
}

$('#seApi form input[type="submit"]').on('click', function(event) {

    //prevent form submission
    event.preventDefault();
    
    //get question text
    var question = $('#seSearch').val().trim();
    
    //ignore if search term is empty
    if (question === '') {
        return;
    }
    
    //get api data
    var data = fetchAnswers();
    var list = $('<div>').addClass('list-group');
    
    for(var i = 0; i < data.answerCount; i++) {
        
        $('<a>').addClass('list-group-item list-group-item-action').attr('href', data[i])
            .appendTo(list);
    }

    $('#searchResults').append(list);
});