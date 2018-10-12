function fetchQuestions(question) {

    //url format query parameters
    var params = $.param({
        order: 'desc',
        sort: 'relevance',
        pagesize: 10,
        site: 'stackoverflow',
        title: question
    });
    
    //make ajax request
    $.ajax({
        type: 'GET',
        url: 'https://api.stackexchange.com/2.2/similar?' + params
    }).done(function(response) {

        if(response.items == 0) {

            //TODO: show no matches message

        } else {

            showQuestions(response.items);
        }

    }).fail(function(error){
        console.log('A(n) ' + error.name + ' has occured: ' + error.error_message);
    });

    return {
        answerCount: 10,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5']
    };
}

function showQuestions(questions) {

    //create list group element
    var list = $('<div>').addClass('list-group');

    //iterate questions in response
    for(var i = 0; i < questions.length; i++) {

        //skip unanswered questions
        if(questions[i].isAnswered === false) {
            continue;
        }

        //skip unanswered questions
        if(questions[i].isAnswered === false) {
            continue;
        }
        
        //append new link to list
        $('<a>').addClass('list-group-item list-group-item-action')
        .attr('href', questions[i].link)
        .attr('target', '_blank')
        .html(questions[i].title)
        .appendTo(list);

        //add list to page
        $('#searchResults').append(list);
    }
}

$('#seApi form button').on('click', function(event) {

    //prevent form submission
    event.preventDefault();
    
    //get question text
    var question = $('#seSearch').val().trim();
    
    //ignore if search term is empty
    if (question === '') {
        return;
    }
    
    //send ajax request
    fetchQuestions(question);
});