    // Your web app's Firebase configuration
    var config = {
    apiKey: "AIzaSyBudxR0OfIm7mlBAxWVODGK4Z4nYuC9fcQ",
    authDomain: "contact-form-553aa.firebaseapp.com",
    databaseURL: "https://contact-form-553aa.firebaseio.com",
    projectId: "contact-form-553aa",
    storageBucket: "contact-form-553aa.appspot.com",
    messagingSenderId: "848187359738",
    appId: "1:848187359738:web:c1b50d1af12a5b16bda443",
    measurementId: "G-BVKD7B1TKY"
  };
    // Initialize Firebase
    firebase.initializeApp(config);

    // Reference messages collection
    var messagesRef = firebase.database().ref('messages');

    // listen for form submit
    document.getElementById('contactform').addEventListener('submit', submitform);

    // Submit form
    function submitform(e){
    e.preventDefault();
    
    //Get values
    var firstname = getInputVal("firstname");
    var lastname = getInputVal('lastname');
    var number = getInputVal('number');
    var email = getInputVal('email');
    var subject = getInputVal('subject');

    // Save messages
    saveMessages(firstname, lastname,number,email, subject)
    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactform').reset();
}

    // Function to get get form values
    function getInputVal(id) {
    return document.getElementById(id). value;
}

    // Save the messages to firebase
    function saveMessages(firstname, lastname, number, email, subject){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    firstname: firstname,
    lastname: lastname,
    number: number,
    email: email,
    subject: subject


})
}