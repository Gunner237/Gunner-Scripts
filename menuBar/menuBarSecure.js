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
               <a href="https://www.gunner.online/"\
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
    document.write('<a href="https://betasite.gunner.online/homeBetaRedirect">Beta Home Page</a>\
                   ');
}
else{
}
document.write('</div>\
               </li>\
               <li class="dropdown">\
               <a href="https://www.gunner.online/documents"')
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
               <a href="https://www.gunner.online/games" ')
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
               <a href="https://www.gunner.online/media"')
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
               <a href="https://www.gunner.online/tools"')
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
               <a href="https://www.gunner.online/externalLinks"')
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
                   <a href="https://www.gunner.online/development" ')
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
                   <a href="https://www.gunner.online/legacy" ')
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
document.write(' href="https://www.gunner.onine/hidden/construction">')
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
                   <a href="https://www.gunner.onine/home">Home</a>\
                   <a href="https://www.gunner.onine/documents">Documents</a>\
                   <a href="https://www.gunner.onine/construction_mobile">Games</a>\
                   <a href="https://www.gunner.onine/construction_mobile">Media</a>\
                   <a href="https://www.gunner.onine/tools">Tools\\Utilities</a>\
                   <a href="https://www.gunner.onine/externalLinks">Useful Websites</a>\
                   <a href="https://www.gunner.onine/about">About</a>\
                   </div>\
                   </li>\
                   </ul>\
                   ');
    executed = "Mobile"
}
console.log(executed+" version of the Beta Menu Bar has been loaded and applied.")
