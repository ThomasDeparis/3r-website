$(document).ready(function(){
    var form = document.querySelector("form");
    form.addEventListener("submit", function (e) {

        var name = form.elements.name.value;
        var email = form.elements.email.value;

        var formattedName = name.replace(/ /g, '+');
        var formattedEmail = email.replace(/ /g, '+');

        var formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeyEmWohgdieqGi46tHx1rV5loei3GltQkH3py4_5IAHi-JsQ/viewform?usp=pp_url&entry.2005620554=' + formattedName + '&entry.1045781291=' + formattedEmail;
        window.open(formLink);
    });    
});