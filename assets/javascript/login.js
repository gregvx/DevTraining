
/*save user email to local storage
*/

 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyDYXLMjf7Ub97xowdRsHqG7mGBOhTAZebw",
   authDomain: "group5project1database.firebaseapp.com",
   databaseURL: "https://group5project1database.firebaseio.com",
   projectId: "group5project1database",
   storageBucket: "group5project1database.appspot.com",
   messagingSenderId: "1049450815112"
 };
 firebase.initializeApp(config);
 var database = firebase.database();

 // 2. Button for adding user email
$("#addEmailBtn").on("click", function(event) { // put the class of the button created by greg-----------------
   event.preventDefault();
 
   // Grabs user email input
   var userEmail = $("#userEmailInput").val().trim(); 
   
   // Uploads user email to the database
   var user ={email: userEmail, favorites: ["blah"]}
      database.ref().push(user);   

   //setting user email to local storage
   localStorage.email = userEmail;
 
   // Clears all of the text-boxes
   $("#userEmailInput").val("");

   checkLogin();
 });
 
 // 3. Create Firebase event for adding user email to the database and a row in the html when a user adds an entry
 database.ref().on("child_added", function(childSnapshot) {
   console.log(childSnapshot.val());
 
   // Store everything into a variable
   var email = localStorage.email;
   var newUser = childSnapshot.val();
    if (email===newUser.email){
      console.log (newUser.favorites);
    }
   

   // Create the new row
   //var newRow = $("<tr>").append(
     //$("<td>").text(newUserEmail),
//);

   // Append the new row to the table
   //$("#UserEmail-table > tbody").append(newRow); //ask Greg to name the table as per this line 
 });


