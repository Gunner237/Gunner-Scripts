function surveillance(){
    localStorage.destination = "surveillance"
}
function hasher(){
    localStorage.destination = "hidden/md5_hasher"
}

function desktopMB(){
var executed = "none";
document.write('<ul>\
               <li class="dropdown">\
               <a href="https://www.gunner.online/index.html"\
               ')
if (localStorage.directory == "home"){
    document.write('class = "active"')
}
else{
    document.write('class="dropbtn"')
}
document.write('>Home</a>\
               ')
if (localStorage.betaPriv == "true"){
    document.write('<a href="https://betasite.gunner.online/beta/indexBetaRedirect.html">Beta Home Page</a>\
                   ');
}
else{
}
document.write('</div>\
               </li>\
               <li class="dropdown">\
               <a href="https://www.gunner.online/documents.html"')
if (localStorage.directory == "documents"){
    document.write('class = "active"')
}
else{
    document.write('class="dropbtn"')
}
document.write('>Documents</a>\
               <div class="dropdown-content">\
               </div>\
               </li>\
               <li class="dropdown">\
               <a href="https://www.gunner.online/games.html" ')
if (localStorage.directory == "games"){
    document.write('class = "active"')
}
else{
    document.write('class="dropbtn"')
}
document.write('>Games</a>\
               <div class="dropdown-content">\
               </div>\
               </li>\
               <li class="dropdown">\
               <a href="https://www.gunner.online/media.html"')
if (localStorage.directory == "media"){
    document.write('class = "active"')
}
else{
    document.write('class="dropbtn"')
}
document.write('>Media</a>\
               <div class="dropdown-content">\
               </div>\
               </li>\
               <li class="dropdown">\
               <a href="https://www.gunner.online/tools.html"')
if (localStorage.directory == "tools"){
    document.write('class = "active"')
}
else{
    document.write('class="dropbtn"')
}
document.write('>Tools/Utilities</a>\
               <div class="dropdown-content">\
               </div>\
               </li>\
               <li class="dropdown">\
               <a href="https://www.gunner.online/externalLinks.html"')
if (localStorage.directory == "external"){
    document.write('class = "active"')
}
else{
    document.write('class="dropbtn"')
}
document.write('>Useful Websites</a>\
               <div class="dropdown-content">\
               </div>\
               </li>\
               ');
if (localStorage.betaPriv == "true"){
    document.write('<li class="dropdown">\
                   <a href="https://www.gunner.online/development.html" ')
    if (localStorage.directory == "development"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Development</a>\
                   <div class="dropdown-content">\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="https://www.gunner.online/legacy.html" ')
    if (localStorage.directory == "legacy"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Legacy Sites</a>\
                   <div class="dropdown-content">\
                   </div>\
                   </li>\
                   ');
}
else{
}
document.write('<li style="float:right"><a id = username ')
if (localStorage.directory == "login"){
    document.write('class = "active"')
}
else{
    document.write('class="dropbtn"')
}
document.write(' href="https://www.gunner.onine/hidden/construction.html">')
if (localStorage.username == null){
    document.write('Login')
}
else{
    document.write(localStorage.username)
}
document.write('</a></li>\
               </ul>\
               ');
executed = "desktop beta v2";
}
function mobileMB(){
    document.write('<ul>\
                   <li class="dropdown"><a class="dropbtn" class = "menubar" href="#">&#9776;</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.onine/home.html">Home</a>\
                   <a href="https://www.gunner.onine/documents.html">Documents</a>\
                   <a href="https://www.gunner.onine/construction_mobile.html">Games</a>\
                   <a href="https://www.gunner.onine/construction_mobile.html">Media</a>\
                   <a href="https://www.gunner.onine/tools.html">Tools\\Utilities</a>\
                   <a href="https://www.gunner.onine/externalLinks.html">Useful Websites</a>\
                   <a href="https://www.gunner.onine/aboutIndex.html">About</a>\
                   </div>\
                   </li>\
                   </ul>\
                   ');
    executed = "Mobile"
}
console.log(executed+" version of the Beta Menu Bar has been loaded and applied.")
