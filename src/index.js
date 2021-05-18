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
    window.location="http://10.75.161.205:8080/web/guest/login-page-new-1?loginflow=logingov"
}

// PIV Card Login Button click handler
function goToPivLogin() {
    window.location="https://federatetest.smext.faa.gov/affwebservices/public/saml2sso?SPID=http://10.75.161.205:8080/&RelayState=http://10.75.161.205:8080/group/guest/home"
}

//Toggle Authenticated View - Not actually being loaded from here, used in script tag on landing.html
function isNotLoggedIn() {
    console.log("this method ran on page load");
    var x = document.getElementById("app-list");
    var y = document.getElementById("login-items");
    var z = document.getElementById("app-list-message");
    var a = document.getElementById("user-welcome");
    if(!document.URL.match('#authenticated')){
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "block"
        a.style.display = "none"
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none"
        a.style.display = "block"
    }
}

//Run is not logged in method on page load
window.onload = function() {
    console.log("on load method ran");
    isNotLoggedIn();
};