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
                   <a href="../index.html"\
                   ')
    if (localStorage.directory == "home"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Home</a>\
                   <div class="dropdown-content">\
                   <a href="../aboutIndex.html">About</a>\
                   <a href="../contact.html">Contact me</a>\
                   <a href="../home.html">Default home page</a>\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="../beta/homeBetaRedirect.html">Beta Home Page</a>\
                       ');
    }
    else{
    }
    document.write('</div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="../documents.html"')
    if (localStorage.directory == "documents"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Documents</a>\
                   <div class="dropdown-content">\
                   <a href="../academia.html">Academia (WIP)</a>\
                   <a href="../techDocs.html">Tech Guides (WIP)</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="../games.html" ')
    if (localStorage.directory == "games"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Games</a>\
                   <div class="dropdown-content">\
                   <a href="../numberGuesserLatest.html">Number Guesser</a>\
                   <a href="../piFinder.html">Pi Finder</a>\
                   <a href="../rockPaperScissorsLatest.html">Rock Paper Scissors</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="../media.html"')
    if (localStorage.directory == "media"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Media</a>\
                   <div class="dropdown-content">\
                   <a href="../imageGallery.html">Photo Gallery (disabled)</a>\
                   <a href="../videoGallery.html">Video Gallery</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="../tools.html"')
    if (localStorage.directory == "tools"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Tools/Utilities</a>\
                   <div class="dropdown-content">\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="../hidden/cleanse.html">Local Storage Cleanser</a>\
                       <a href="../hidden/maintainance.html">Maintainance Site</a>\
                       ')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('<a href="../adminFilter.html" onClick="return hasher()">MD5 Hasher</a>\
                   <a href="../adminFilter.html" onClick="return hasher2()">SHA256 Hasher</a>\
                   <a href="../primeFinder.html">Prime Finder</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="../externalLinks.html"')
    if (localStorage.directory == "external"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Useful Websites</a>\
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
    if (localStorage.betaPriv == "true"){
        document.write('<li class="dropdown">\
                       <a href="../development.html" ')
        if (localStorage.directory == "development"){
            document.write('class = "active"')
        }
        else{
            document.write('class="dropbtn"')
        }
        document.write('>Development</a>\
                       <div class="dropdown-content">\
                       <a href="../beta/test.html">Test Site</a>\
                       <a href="../beta/gunSystemsBeta.html">GunSystems</a>\
                       <a href="../beta/musicLibrary.html">Music library</a>\
                       <a href="../beta/videoGalleryBeta.html">Video Gallery v2.1</a>\
                       </div>\
                       </li>\
                       <li class="dropdown">\
                       <a href="../legacy.html" ')
        if (localStorage.directory == "legacy"){
            document.write('class = "active"')
        }
        else{
            document.write('class="dropbtn"')
        }
        document.write('>Legacy Sites</a>\
                       <div class="dropdown-content">\
                       <a href="../hidden/videoGalleryLegacy.html">Video Gallery LEGACY</a>\
                       <a href="../beta/landingPageChangelog.html">landingPageChangelog</a>\
                       <a href="../testFiles/progressBarTest.html">Progress bar test</a>\
                       <a href="../beta/toytimeAllocator0.1.html">Toytime Allocator</a>\
                       <a href="../testFiles/table.html">Table</a>\
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
    document.write(' href="../hidden/construction.html">')
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
                   <a href="../home.html">Home</a>\
                   <a href="../documents">Documents</a>\
                   <a href="../construction_mobile.html">Games</a>\
                   <a href="../construction_mobile.html">Media</a>\
                   <a href="../tools.html">Tools\\Utilities</a>\
                   <a href="../externalLinks.html">Useful Websites</a>\
                   <a href="../aboutIndex.html">About</a>\
                   </div>\
                   </li>\
                   </ul>\
                   ');
    executed = "Mobile"
}
//console.log(executed+" version of the Beta Menu Bar has been loaded and applied.")
