var executed = "none";
document.write('<ul>\
               <li><a href="../home.html">Home</a></li>\
               <li class="dropdown">\
               <a href="../internalLinks.html" class="dropbtn">Internal Sites</a>\
               </li>\
               <li class="dropdown">\
               <a href="../externalLinks.html" class="dropbtn">External Sites</a>\
               </li>\
               <li class="dropdown">\
               <a href="../beta/indexBetaRedirect.html">Beta</a>\
               </li>\
               <li><a class = "menubar" href="../aboutIndex.html">About</a></li>\
               <li style="float:right"><a id = username class = "menubar" href="login.html">')
if (localStorage.username == null){
    document.write('Login')
}
else{
    document.write(localStorage.username)
}
document.write('</a></li>\
               </ul>\
               ');
executed = "Desktop";
console.log(executed+" version of the Secure Beta Menu Bar has been loaded and applied.")
