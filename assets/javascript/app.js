
var htmlLib = [
    {
       header: '<h1>TOPIC HEADER</h1>',
       explanation: '<p> ‘HTML headings are defined with the <h1> to <h6> tags.</p>' +
        '<p><h1> defines the most important heading. <h6> defines the least important heading </p>', 
        exampleCode: '<p><!DOCTYPE html></p>' +
        '<p><html></p>' +
        '<p><head> </p>' +
        '<p>  <title>Page Title</title> </p>' +
        '<p></head> </p>' +
        '<p><body> </p>' +
        
        '<p><p>The content of the body element is displayed in the browser window.</p> </p>' +
        '<p><p>The content of the title element is displayed in the browser tab, in favorites and in search engine results.</p> </p>' +
        
        '<p></body> </p>' +
        '<p></html> </p>' 
        
       
    },
    {   header: '<h2> TOPIC TABLES </h2>',
        explanation: '<p>HTML code which generates a table user rows and columns<p>',
        exampleCode: '<p> <!DOCTYPE html></p>' +
        '<p><html></p>' +
        '<p><body>  </p>' +      
        '<p><h2>Basic HTML Table</h2> </p>' +       
        '<p><table style="width:100%"></p>' +
        '<p>  <tr></p>' +
        '<p>    <th>Firstname</th></p>' +
        '<p>    <th>Lastname</th> </p>' +
        '<p>   <th>Age</th></p>' +
        '<p>  </tr></p>' +
        '<p>  <tr></p>' +
        '<p>    <td>Jill</td></p>' +
        '<p>    <td>Smith</td></p>' +
        '<p>    <td>50</td></p>' +
        '<p>  </tr></p>' +
        '<p>  <tr></p>' +
        '<p>    <td>Eve</td></p>' +
        '<p>    <td>Jackson</td></p>' +
        '<p>   <td>94</td></p>' +
        '<p> </tr></p>' +
        '<p>  <tr></p>' +
        '<p>   <td>John</td></p>' +
        '<p>    <td>Doe</td></p>' +
        '<p>    <td>80</td></p>' +
        '<p>  </tr></p>' +
        '<p></table></p>' +
        
        '<p></body></p>' +
        '<p></html></p>'         
},
    {   header: '<h2> TOPIC TABLES </h2>',
        explanation: '<p>HTML code which generates a table user rows and columns<p>',
        exampleCode: '<p> <!DOCTYPE html></p>' +
        '<p><html></p>' +
        '<p><body></p>' +
        
        '<p><h2>HTML Image</h2></p>' +
        '<p><img src="https://dummyimage.com/600x400/c722c7/fff&text=Boot+Camp+" alt="Trulli" width="500" height="333"></p>' +
        
        '<p></body></p>' +
        '<p></html></p>' 
        
    
    }
    ];

var cssLib = [
    {   header: ' TOPIC MARGIN', 
        explanation: 'Create margins using CSS.' 
        exampleCode: '<p><!DOCTYPE html></p>' +
        '<p><html></p>' +
        '<p><head></p>' +
        '<p><style></p>' +
        '<p>div {</p>' +
            '<p>    margin: 70px;</p>' +
            '<p>    border: 1px solid #4CAF50;</p>' +
            '<p>}</p>' +
        '<p></style></p>' +
        '<p></head></p>' +
        '<p><body></p>' +
        
        '<p><div>This element has a margin of 70px.</div></p>' +
        
        '<p></body></p>' +
        '<p></html></p>' 


    },
    {   header: 'TOPIC COLORS',
        explanation: "Adding colors to your page using CSS",
        exampleCode: '<p><!DOCTYPE html></p>' +
        '<p><html></p>' +
        '<p><body></p>' +
        
        '<p><h1 style="background-color:DodgerBlue;">Hello World</h1></p>' +
        
        '<p><p style="background-color:Tomato;"></p>' +
        '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>' +
        '<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>' +
        '<p></p></p>' +
        
        '<p></body></p>' +
        '<p></html></p>' 


    },
    {   header: 'TOPIC PADDING',
        explanation: "Use CSS to create padding around your objects. ",
        exampleCode: '<p><!DOCTYPE html></p>' +
        '<p><html></p>' +
        '<p><head></p>' +
        '<p><style></p>' +
        '<p>div {</p>' +
            '<p>    border: 1px solid black;</p>' +
            '<p>    background-color: lightblue;</p>' +
            '<p>    padding-top: 50px;</p>' +
            '<p>    padding-right: 30px;</p>' +
            '<p>    padding-bottom: 50px;</p>' +
            '<p>    padding-left: 80px;</p>' +
            '<p>}</p>' +
            '<p></style></p>' +
            '<p></head></p>' +
            '<p><body></p>' +
        
            '<p><h2>Using individual padding properties</h2></p>' +
        
            '<p><div>This div element has a top padding of 50px, a right padding of 30px, a bottom padding of 50px, and a left padding of 80px.</div></p>' +
        
            '<p></body></p>' +
            '<p></html></p>' 
        
    }
];
    var jsLib =[
        {   header: "TOPIC FUNCTION",
            explanation: "Use functions in JavaScript when you need to repeat code. ",
            exampleCode: '<p><!DOCTYPE html></p>' +
            '<p><html></p>' +
            '<p><body></p>' +
            
            '<p><h2>JavaScript Functions</h2></p>' +
            
            '<p><p>This example calls a function which performs a calculation, and returns the result:</p></p>' +
            
            '<p><p id="demo"></p></p>' +
            
            '<p><script></p>' +
            '<p>function myFunction(p1, p2) {</p>' +
                '<p>    return p1 * p2;</p>' +
                '<p>}</p>' +
                '<p>document.getElementById("demo").innerHTML = myFunction(4, 3);</p>' +
                '<p></script></p>' +
            
                '<p></body></p>' +
                '<p></html></p>' 
 


},
{       header: 'TOPIC FOR LOOP',
        explanation: "Allows you to loop through code until a condition is met.",
        exampleCode: 
        '<p>var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];</p>' +
        '<p>var text = "";</p>' +
        '<p>var i;</p>' +
        '<p>for (i = 0; i < cars.length; i++) {</p>' +
            '<p>    text += cars[i] + "<br>";</p>' +
            '<p>}</p>' +
            '<p>document.getElementById("demo").innerHTML = text;</p>' 
        

},
{       header: 'TOPIC RANDOM',
        explanation: "Used to create a random number.",
        exampleCode: '<p><script></p>'+
        '<p>document.getElementById("demo").innerHTML = Math.random();</p>'+
        '<p></script></p>'
        

}
];