<script src="https://unpkg.com/aos@next/dist/aos.js"></script>

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

AOS.init({
    offset: 300,
    duration: 1400
 } );

 var sidemenu = document.getElementById("sidemenu");

        function openmenu(){

            sidemenu.style.right = "0"
        }
        function closemenu(){

sidemenu.style.right = "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxYv4LplosZY1ZjEhL0oP0G8hA_O6TO0DyEHcof9-IwwvaK2iGpkbjUTvEnIVhTdURjXg/exec'
    const form = document.forms['submit-to-google-sheet']
    const message=document.getElementById("message")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            message.innerHTML ="Sent successfully!!"
            setTimeout(function(){
                message.innerHTML =""
            },5000)
            form.reset()

        })
        .catch(error => console.error('Error!', error.message))
    })