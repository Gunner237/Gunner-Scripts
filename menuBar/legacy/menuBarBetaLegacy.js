function surveillance(){
localStorage.destination = "surveillance"
}
//function desktopMB(){
var executed = "none";
    document.write('<ul>\
                   <li><a href="../home.html">Home</a></li>\
                   <li class="dropdown">\
                   <a href="../internalLinks.html" class="dropbtn">Internal Sites</a>\
                   <div class="dropdown-content">\
                   <a href="../academia.html">Academia</a>\
                   <a href="../archiveCatalog.html">Archive</a>\
                   <a href="../gunSystems.html">GunSystems</a>\
                   <a href="../imageGallery.html">Photo Gallery</a>\
                   <a href="../techDocs.html">Tech Guides</a>\
    <a href="../adminFilter.html" onClick="return surveillance()">Surveillance</a>\
                   <a href="../videoGallery.html">Video Gallery</a>\
                   <p class="MBheading">Games/Utilites</p>\
                   <a href="../numberGuesserLatest.html">Number Guesser</a>\
                   <a href="../piFinder.html">Pi Finder</a>\
                   <a href="../rockPaperScissorsLatest.html">Rock Paper Scissors</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="../externalLinks.html" class="dropbtn">External Sites</a>\
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
                   <a class="active" href="../beta/indexBeta.html">Beta</a>\
                   <div class="dropdown-content">\
                   <a href="../beta/gunSystemsBeta.html">GunSystems BETA</a>\
                   <a href="../beta/musicLibrary.html">Music library BETA</a>\
                   <a href="../beta/videoGalleryBeta.html">Video Gallery v2.1 BETA</a>\
                   <a href="../beta/piFinderBeta.html">Pi Finder BETA</a>\
                   <p class="MBheading">Tools/Utilities</p>\
                   <a href="../hidden/cleanse.html">Local Storage Cleanser</a>\
                   <a href="../hidden/maintainance.html">Maintainance Site</a>\
                   <a href="../hidden/md5_hasher.html">MD5 Hasher</a>\
                   <a href="http://192.168.16.19/beta/indexBetaRedirect.html">Go to Server</a>\
                   <p class="MBheading">Old sites</p>\
                   <a href="../hidden/videoGalleryLegacy.html">Video Gallery LEGACY</a>\
                   <a href="../beta/landingPageChangelog.html">landingPageChangelog</a>\
                   <a href="../testFiles/progressBarTest.html">Progress bar test</a>\
                   <a href="../beta/toytimeAllocator0.1.html">Toytime Allocator</a>\
                   <a href="../testFiles/table.html">Table</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a class = "menubar" href="../aboutIndex.html">About</a>\
                   <div class="dropdown-content">\
                   <a href="../contact.html">Contact me</a>\
                   </div>\
                   </li>\
                   <li style="float:right"><a id = username class = "menubar" href="../login.html">')
    if (localStorage.username == null){
        document.write('Login')
    }
    else{
        document.write(localStorage.username)
    }
    document.write('</a></li>\
                   </ul>\
                   ');
    executed = "Desktop without username";
function mobileMB(){
    
    document.write('<ul>\
                   <li><a href="../index.html">Mob</a></li>\
                   <li class="dropdown">\
                   <a href="../internalLinks.html" class="dropbtn">Sites</a>\
                   <div class="dropdown-content">\
                   <p class="heading">Internal</div>\
                   <a href="../archiveCatalog.html">Archive</a>\
                   <a href="../gunSystems.html">GunSystems</a>\
                   <a href="../imageGallery.html">Photo Gallery</a>\
                   <a href="../videoGallery.html">Video Gallery</a>\
                   <p class="heading">Games/Utilites</p>\
                   <a href="../numberGuesserLatest.html">Number Guesser</a>\
                   <a href="../piFinder.html">Pi Finder</a>\
                   <a href="../rockPaperScissorsLatest.html">Rock Paper Scissors</a>\
                   <p class="heading">External</div>\
                   <a href="https://www.google.co.uk">Google</a>\
                   <a href="https://www.apple.co.uk">Apple</a>\
                   <a href="https://www.bbc.co.uk">BBC</a>\
                   <a href="https://www.linustechtips.com/main">LinusTechTips</a>\
                   <a href="https://portal.office365.com">Outlook Online</a>\
                   <a href="https://www.synology.co.uk">Synology</a>\
                   <a href="https://www.wolframalpha.com">Wolfram Alpha</a>\
                   <a href="https://www.youtube.com/feed/subscriptions">Youtube</a>\
                   </div>\
                   </li>\
                   \
                   <li class="dropdown">\
                   <a class="active" href="indexBeta.html">Beta</a>\
                   <div class="dropdown-content">\
                   <a href="login.html">Login BETA</a>\
                   <a href="musicLibrary.html">Music library BETA</a>\
                   <a href="videoGalleryBeta.html">Video Gallery v2 BETA</a>\
                   <a href="progressBarTest.html">Progress bar test</a>\
                   <a href="piFinderBeta.html">Pi Finder BETA</a>\
                   <a href="mobileTemplate.html">Mobile Template</a>\
                   <a href="iphone.html">iPhone test</a>\
                   <p class="heading">Old sites</p>\
                   <a href="gunSystemsBeta.html">GunSystems BETA</a>\
                   <a href="landingPageChangelog.html">landingPageChangelog</a>\
                   <a href="toytimeAllocator0.1.html">Toytime Allocator</a>\
                   <a href="table.html">Table</a>\
                   </div>\
                   </li>\
                   <li style="float:right"><a class = "menubar" href="../aboutIndex.html">About</a></li>\
                   </ul>\
                   ');
    executed = "Mobile"
}
console.log(executed+" version of the Beta Menu Bar has been loaded and applied.")
