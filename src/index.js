/**
*————————————————————————————————————————————————————
@Name index.js
@Author Salman Malik
@CreatedDate 5/14/2021
@Used By FMCSA Portal Pilot
@Controller 
*————————————————————————————————————————————————————
@Description
* JS Methods and Helpers
*
*————————————————————————————————————————————————————
@Attributes
@Attributes
*
@Event Handlers
@Event Handlers
*————————————————————————————————————————————————————
@Changes
*
*
*————————————————————————————————————————————————————
**/

console.log("Am I running?");

// Email Subscribe Click Handler

function clickToSubscribe() {
    console.log("Click To Subscribe Clicked");
    console.log("https://public.govdelivery.com/accounts/USDOTFMCSA/subscriber/new");
    window.location = "https://public.govdelivery.com/accounts/USDOTFMCSA/subscriber/new";
};

// Toggle .gov Email Log in
function toggleGovEmailLogin() {
	var x = document.getElementById("govEmailLoginDiv");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// Login.gov click handler
function goToLoginGov() {
    window.location="https://secure.login.gov/"
}

//Toggle Authenticated View
function isNotLoggedIn() {
    console.log("this method ran on page load");
    if(!document.URL.match('#authenticated')){
        var x = document.getElementById("app-list");
        x.style.display = "none";
        var y= document.getElementById("login-items");
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

//Run is not logged in method
window.onload = function() {
    isNotLoggedIn();
};