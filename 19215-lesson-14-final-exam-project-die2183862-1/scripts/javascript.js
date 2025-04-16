//Last modified statement will show the date the document was last modified or worked on.
document.getElementById("lastModified").innerHTML= document.lastModified;

function formSubmit() {
    alert('Thanks for submitting! We got your feedback.')
}

function formReset() {
    document.getElementById("resetMessage").style.visibility= "visible"
}