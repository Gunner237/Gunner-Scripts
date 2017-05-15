function surveillance(){
    localStorage.destination = "surveillance"
}
function hasher(){
    localStorage.destination = "hidden/md5_hasher"
}
function hasher2(){
    localStorage.destination = "hidden/sha256_hasher"
}

function desktopMB(){
    var executed = "none";
    document.write('<ul>\
                   <li class="dropdown">\
                   <a href="https://betasite.gunner.online/"\
                   ')
    if (localStorage.directory == "home"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>BetaSite</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/">Main home page (www)</a>\
                   <a href="https://backup1.gunner.online/">Backup home page</a>\
                   <a href="https://noscript.gunner.online/">Noscript home page</a>\
                   <a href="https://progsoc.gunner.online/">ProgSoc home page</a>\
                   ')
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
    document.write('>Documents (www)</a>\
                   <div class="dropdown-content">\
                   <a href="https://betasite.gunner.online/academia">Academia</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="https://www.gunner.online/games"')
    if (localStorage.directory == "games"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Games (www)</a>\
                   <div class="dropdown-content">\
                   <a href="#">No games currently in beta</a>\
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
                   <a href="https://www.gunner.online/hidden/construction">Music Library</a>\
                   <a href="https://www.gunner.online/videoGallery">Video Gallery 2.1</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="https://www.gunner.online/tools" ')
    if (localStorage.directory == "tools"){
        document.write('class = "active"')
    }
    else{
        document.write('class= "dropbtn"')
    }
    document.write('>Tools/Utilities</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/hidden/cleanse">Local Storage Cleanser</a>\
                   <a href="https://betasite.gunner.online/hidden/md5_hasher">MD5 Hasher</a>\
                   <a href="https://betasite.gunner.online/hidden/sha256_hasher">SHA256 Hasher</a>\
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
    document.write('>Useful Websites (www)</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.google.co.uk">Google</a>\
                   <a href="https://www.apple.co.uk">Apple</a>\
                   <a href="https://www.bbc.co.uk">BBC</a>\
                   <a href="https://www.dropbox.com/login/">Dropbox</a>\
                   <a href="https://www.linustechtips.com/main">LinusTechTips</a>\
                   <a href="https://portal.office365.com">Outlook Online</a>\
                   <a href="https://www.synology.co.uk">Synology</a>\
                   <a href="https://www.wolframalpha.com">Wolfram Alpha</a>\
                   <a href="https://www.youtube.com/feed/subscriptions">Youtube</a>\
                   <a href="https://www.youtube.com/channel/UCicjrjHFJtrN7Gg9OlLG7dg">Youtube Channel</a>\
                   </div>\
                   </li>\
                   ');
    document.write('<li class="dropdown">\
                   <a href="https://betasite.gunner.online/development" ')
    if (localStorage.directory == "development"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Development</a>\
                   <div class="dropdown-content">\
                   <a href="https://betasite.gunner.online/test">Test Site</a>\
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
                   <a href="https://www.gunner.online/hidden/videoGalleryLegacy">Video Gallery LEGACY</a>\
                   <a href="https://www.gunner.online/beta/landingPageChangelog">landingPageChangelog</a>\
                   <a href="https://www.gunner.online/testFiles/progressBarTest">Progress bar test</a>\
                   <a href="https://www.gunner.online/beta/toytimeAllocator0.1">Toytime Allocator</a>\
                   <a href="https://www.gunner.online/testFiles/table">Table</a>\
                   </div>\
                   </li>\
                   ');
    document.write('<li style="float:right"><a id = username ')
    if (localStorage.directory == "login"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write(' href="https://betasite.gunner.online">')
    document.write('BetaSite')
    
    document.write('</a></li>\
                   </ul>\
                   ');
    console.log("Desktop version of the Menu Bar has been loaded and applied.")
}

var onerun = 0
function mobileMB(){
    if (onerun < 1){
        document.write('<ul>\
                       <li class="dropdown"><a class="dropbtn" class = "menubar" href="https://www.gunner.online/#">&#9776;</a>\
                       <div class="dropdown-content">\
                       <a href="https://betasite.gunner.online/homeBeta">BetaSite</a>\
                       <a href="https://betasite.gunner.online/test">Test site</a>\
                       <a href="https://betasite.gunner.online/academia">Academia</a>\
                       <a href="https://betasite.gunner.online/construction_mobile">Video Library 2.1</a>\
                       <a href="https://betasite.gunner.online/hidden/md5_hasher">MD5 Hasher</a>\
                       <a href="https://betasite.gunner.online/hidden/sha256_hasher">SHA256 Hasher</a>\
                       <a href="https://www.gunner.online">Main Site (www)</a>\
                       </div>\
                       </li>\
                       </ul>\
                       ');
        console.log("Mobile version of the Menu Bar has been loaded and applied.")
        console.log("onerun is "+onerun)
        onerun = onerun + 1
    }
    else{
        console.warn("Menubar attempted to run "+onerun+" times")
    }
}
