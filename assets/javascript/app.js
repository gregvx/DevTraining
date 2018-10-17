var htmlLib = [
    {
       header: 'Headers',
       explanation: 'HTML headings are defined with the <h1> to <h6> tags.' +
        '<h1> defines the most important heading. <h6> defines the least important heading', 
        exampleCode: '<h1>Heading 1</h1>\n' +
        '<h2>Heading 2</h2>\n' +
        '<h3>Heading 3</h3>\n' +
        '<h4>Heading 4</h4>\n' +
        '<h5>Heading 5</h5>\n' +
        '<h6>Heading 6</h6>\n' 
        
       
    },
    {   header: 'Tables',
        explanation: 'HTML code which generates a table user rows and columns',
        exampleCode: '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<body>\n' +      
        '\t<h2>Basic HTML Table</h2>\n' +       
        '\t<table style=\'width: 100%;\'>\n' +
        '\t\t<tr>\n' +
        '\t\t\t<th>Firstname</th>\n' +
        '\t\t\t<th>Lastname</th>\n' +
        '\t\t\t<th>Age</th>\n' +
        '\t\t</tr>\n' +
        '\t\t<tr>\n' +
        '\t\t\t<td>Jill</td>\n' +
        '\t\t\t<td>Smith</td>\n' +
        '\t\t\t<td>50</td>\n' +
        '\t\t</tr>\n' +
        '\t\t<tr>\n' +
        '\t\t\t<td>Eve</td>\n' +
        '\t\t\t<td>Jackson</td>\n' +
        '\t\t\t<td>94</td>\n' +
        '\t\t</tr>\n' +
        '\t\t<tr>\n' +
        '\t\t\t<td>John</td>\n' +
        '\t\t\t<td>Doe</td>\n' +
        '\t\t\t<td>80</td>\n' +
        '\t\t</tr>\n' +
        '\t</table>\n' +
        '</body>\n' +
        '</html>\n'         
},
    {   header: 'Images',
        explanation: 'HTML code which generates a table using rows and column\n',
        exampleCode: '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<body>\n' + 
        '\t<h2>HTML Image</h2>\n' +
        '\t<img src=\'https://dummyimage.com/600x400/c722c7/fff&text=Boot+Camp+\' alt=\'Trulli\' width=\'500\' height=\'333\'>\n' +
        '</body>\n' +
        '</html>\n' 
        
    
    }
    ];

var cssLib = [
    {   header: 'Margins', 
        explanation: 'Creates spacing around or between the outside of elements.', 
        exampleCode: '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<head>\n' +
        '\t<style>\n' +
        '\t\tdiv {\n' +
            '\t\t\tmargin: 70px;\n' +
            '\t\t\tborder: 1px solid #4CAF50;\n' +
        '\t\t}\n' +
        '\t</style>\n' +
        '</head>\n' +
        '<body>\n' +
        '\t\t<div>This element has a margin of 70px.</div>\n' +
        '</body>\n' +
        '</html>\n' 


    },
    {   header: 'Padding',
        explanation: 'Creates padding around the contents of elements.',
        exampleCode: '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<head>\n' +
        '\t<style>\n' +
        '\t\tdiv {\n' +
            '\t\t\tborder: 1px solid black;\n' +
            '\t\t\tbackground-color: lightblue;\n' +
            '\t\t\tpadding-top: 50px;\n' +
            '\t\t\tpadding-right: 30px;\n' +
            '\t\t\tpadding-bottom: 50px;\n' +
            '\t\t\tpadding-left: 80px;\n' +
            '\t\t}\n' +
            '\t</style>\n' +
            '</head>\n' +
            '<body>\n' +
        
            '\t<h2>Using individual padding properties</h2>\n' +
        
            '\t<div>This div element has a top padding of 50px, a right padding of 30px, a bottom padding of 50px, and a left padding of 80px.</div>\n' +
        
            '</body>\n' +
            '</html>' 
        
    },
    {   header: 'Colors',
        explanation: "Adds colors to elements or text.",
        exampleCode: '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<body>\n' +
        '\t<h1 style="background-color:DodgerBlue;">Hello World</h1>\n' +
        
        '\t<p style="background-color:Tomato;">\n' +
        '\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n' +
        '<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n' +
        '</body>\n' +
        '</html>' 


    }
];

var jsLib =[
        {   header: "Functions",
            explanation: "Use functions in JavaScript when you need to repeat code. ",
            exampleCode: '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<body>\n' +
            
            '\t<h2>JavaScript Functions</h2></p>' +
            
            '\t<p>This example calls a function which performs a calculation, and returns the result:</p>\n' +
            
            '\t<p id="demo"></p>\n' +
            
            '\t<script>\n' +
                '\t\tfunction myFunction(p1, p2) {\n' +
                    '\t\t\treturn p1 * p2;\n' +
                '\t\t}' +
            '\t\tdocument.getElementById(\'demo\').innerHTML = myFunction(4, 3);\n' +
                '\t</script>\n' +
            
                '</body>\n' +
                '</html>\n' 
 


},
{       header: 'For Loops',
        explanation: "Allows you to loop through code until a condition is met.",
        exampleCode: 
        '<script>\n' +
        '\tvar cars = [\'BMW\', \'Volvo\', \'Saab\', \'Ford\', \'Fiat\', \'Audi\'];\n' +
        '\tvar text = \'\';\n' +
        '\tvar i;\n' +
        '\tfor (i = 0; i < cars.length; i++) {\n' +
            '\t\ttext += cars[i] + \'<br>\';\n' +
            '\t}' +
            '\tdocument.getElementById(\'demo\').innerHTML = text;\n' 
        

},
{       header: 'Random Numbers',
        explanation: "Used to generate a random number.",
        exampleCode: '<script>\n'+
        '\tdocument.getElementById(\'demo\').innerHTML = Math.random();\n'+
        '</script>\n'
        

}
];
var topic = 'html';

$(function () {
    
    checkLogin();
    renderContent();
});

function checkLogin() {

    if (localStorage.getItem('email') !== null) {

        $('#loginSection').html('<h2>Welcome ' + localStorage.getItem('email') + '</h2>');
    }
}

function renderContent() {

    //clear existing content
    $('#instructionArea').html('');
    $('#sideBar').html('');

    //define template
    var template = '' +
'<div class="col-lg-12">' +
    '<div class="card">' +
        '<div class="card-body pt-0">' +
            '<div>' +
                '<div class="row card-header">' +
                    '<div class="col-6">' +
                        '<h5></h5>' +
                    '</div>' + 
                    '<div class="col-6 text-right">' +
                        '<button type="button" class="btn btn-primary launch-button">Try It Out</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="card-text p-3"></div>' +
            '<pre><code></code></pre>' +
        '</div>' +
    '</div>' +
'</div>';

    //check chosen topic
    var currentTopic;
    switch(topic) {

        case 'html':
            currentTopic = htmlLib;
            break;

        case 'css':
            currentTopic = cssLib;
            break;

        case 'javascript':
            currentTopic = jsLib;
            break;
    }

    //iterate library
    var navRow = $('<div>').addClass('list-group');
    for(var i = 0; i < currentTopic.length; i++) {
        
        //populate nav
        navRow.append($('<a>').addClass('list-group-item list-group-item-action')
        .attr('href', '#content-' + i)
        .text(currentTopic[i].header));
        $('#sideBar').append(navRow);
        
        //create content row
        var contentRow = $('<div>').attr('id', 'content-' + i).addClass('row mb-5').html(template);

        //populate template
        contentRow.find('.launch-button').attr('data-code', currentTopic[i].exampleCode);
        contentRow.find('h5').text(currentTopic[i].header);
        contentRow.find('.card-text').text(currentTopic[i].explanation);
        contentRow.find('code').text(currentTopic[i].exampleCode);
        $('#instructionArea').append(contentRow);
    }
}

//define onclick listeners
$('#buttonBar button').on('click', function() {
    
    //change active button
    $('#buttonBar button').removeClass('btn-primary');
    $(this).addClass('btn-primary');
    
    //render topic
    topic = $(this).attr('data-topic');
    renderContent();
});

$(document).on('click', '.launch-button', function() {

    // $.ajax({
    //     type: "POST",
    //     url: "https://codepen.io/pen/define",
    //     crossDomain: true,
    //     data: {"title": "New Pen!", "html": "<div>Hello, World!</div>"},
    //     dataType: 'jsonp',
    //     success: function (response) {
    //         $('.modal-body').html(response);
    //         $('#codepenModal').modal('show');
    //     }
    // });

    var input = $('<input>').attr('type', 'hidden').attr('name', 'data').val('{"title": "New Pen!", "html": "' + $(this).data('code') + '"}');
    var form = $('<form>').attr('action', 'https://codepen.io/pen/define').attr('target', 'codepen').attr('method', 'post').append(input);
    $('body').append(form);
    form.submit();
    $('#codepenModal').modal('show');
})