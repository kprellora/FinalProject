function openText(evt, tabName) {
  var i, tabcontent, tablinks;
  var parent = evt.target.parentNode.parentNode.className;
  console.log(parent);
  tabcontent = document.querySelectorAll("." + parent + " .tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll("." + parent + " .tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
//    document.getElementById(tabName).style.display = "block";


  document.querySelector("." + parent +" #" + tabName).style.display = "block";
//    console.log(this)
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();
document.getElementById("defaultOpen2").click();
document.getElementById("defaultOpen3").click();
document.getElementById("defaultOpen4").click();
//help from https://www.w3schools.com/howto/howto_js_tabs.asp
