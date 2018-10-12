var topic = 'html';

$(function () {
    
    //hide iframes
    $('iframe').hide();

    renderContent();
});

function renderContent() {

    var currentTopic;
    switch(topic) {

        case 'html':
            currentTopic = htmlLib;
            break;

        case 'css':
            currentTopic = cssLib;
            break;

        case 'javascript':
            currentTopic = javascriptLib;
            break;
    }

    for(var i = 0; i < currentTopic.length; i++) {
        
        var row = $('<div>').addClass('row').append($('<div>').addClass('col').append($('<div>').addClass('card')));

        var cardBody = $('<div>').addClass('card-body');
        cardBody.append($('<h5>').addClass('card-header').text(currentTopic[i].header));
        cardBody.append($('<p>').addClass('card-text').text(currentTopic[i].explanation));
        cardBody.append($('<pre>').append($('<code>').text(currentTopic[i].exampleCode)));

        $('#instructionArea').append(row.append(cardBody));

    }
}