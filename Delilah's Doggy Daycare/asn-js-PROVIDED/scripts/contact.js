// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submit action
    var contactPage = document.getElementById('contact-page');
    contactPage.innerHTML = '<div id="thank-you-message">Thank you for your message</div>';
});