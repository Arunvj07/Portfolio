var sidemenu = document.getElementById("sidemenu");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// navigation menu functions
function openmenu() {
    sidemenu.style.right ="0";
    
}
function closemenu(){
    sidemenu.style.right = "-200px"; 
}
// white mode function
// function toggleMode(){
//     document.body.classList.toggle("whitemode");
// }

// connect google sheet/
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwJqDbBUiJYhxEG6gc45fgsPAHC1Xb_G--b0OJO0fWebQ6l3Nu3ouxEH9C745Wfs394/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=" ";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })