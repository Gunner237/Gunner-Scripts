function surveillance(){
localStorage.destination = "surveillance"
}
document.write('<ul>\
               <li><a href="home.html">Home</a></li>\
               <li class="dropdown">\
               <a href="internalLinks.html" class="dropbtn">Internal Sites</a>\
               <div class="dropdown-content">\
               <a href="academia.html">Academia</a>\
               <a href="archiveCatalog.html">Archive</a>\
               <a href="gunSystems.html">GunSystems</a>\
               <a href="imageGallery.html">Photo Gallery</a>\
               <a href="techDocs.html">Tech Guides</a>\
    <a href="adminFilter.html" onClick="return surveillance()">Surveillance</a>\
               <a href="videoGallery.html">Video Gallery</a>\
               <p class="MBheading">Games/Utilites</p>\
               <a href="numberGuesserLatest.html">Number Guesser</a>\
               <a href="piFinder.html">Pi Finder</a>\
               <a href="rockPaperScissorsLatest.html">Rock Paper Scissors</a>\
               </div>\
               </li>\
               <li class="dropdown">\
               <a href="externalLinks.html" class="dropbtn">External Sites</a>\
               <div class="dropdown-content">\
               <a href="https://www.google.co.uk">Google</a>\
               <a href="https://www.apple.co.uk">Apple</a>\
               <a href="https://www.bbc.co.uk">BBC</a>\
               <a href="https://www.linustechtips.com/main">LinusTechTips</a>\
               <a href="https://portal.office365.com">Outlook Online</a>\
               <a href="https://www.synology.co.uk">Synology</a>\
               <a href="https://www.wolframalpha.com">Wolfram Alpha</a>\
               <a href="https://www.youtube.com/feed/subscriptions">Youtube</a>\
               <a href="https://www.youtube.com/channel/UCicjrjHFJtrN7Gg9OlLG7dg">Youtube Channel</a>\
               </div>\
               </li>\
               <li class="dropdown">\
               <a href="beta/indexBetaRedirect.html">Beta</a>\
               <div class="dropdown-content">\
               </div>\
               </li>\
               <li class="dropdown">\
               <a class = "menubar" href="aboutIndex.html">About</a>\
               <div class="dropdown-content">\
               <a href="contact.html">Contact me</a>\
               </div>\
               </li>\
               <li style="float:right"><a id = username href="login.html" class="active">')
if (localStorage.username == null){
    document.write('Login')
}
else{
    document.write(localStorage.username)
}
document.write('</a></li>\
               </ul>\
               ');
console.log("Desktop version of the Home Menu Bar has been loaded and applied.")
