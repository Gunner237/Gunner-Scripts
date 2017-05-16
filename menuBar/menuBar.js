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
                   <a href="https://www.gunner.online/"\
                   ')
    if (localStorage.directory == "home"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Home</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/aboutIndex">About</a>\
                   <a href="https://www.gunner.online/contact">Contact me</a>\
                   <a href="https://www.gunner.online">Default home page</a>\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="https://www.gunner.online/beta/homeBetaRedirect">Beta Home Page</a>\
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
                   <a href="https://betasite.gunner.online/academia">Academia (beta)</a>\
                   <a href="https://www.gunner.online/downloads">Downloads</a>\
                   <a href="https://www.gunner.online/techDocs">Tech Guides</a>\
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
                   <a href="https://www.gunner.online/numberGuesserLatest">Number Guesser</a>\
                   <a href="https://www.gunner.online/piFinder">Pi Finder</a>\
                   <a href="https://www.gunner.online/rockPaperScissorsLatest">Rock Paper Scissors</a>\
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
                   <a href="https://www.gunner.online/imageGallery">Photo Gallery</a>\
                   <a href="https://www.gunner.online/videoGallery">Video Gallery</a>\
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
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="https://www.gunner.online/hidden/cleanse">Local Storage Cleanser</a>\
                       <a href="https://www.gunner.online/hidden/maintainance">Maintainance Site</a>\
                       ')
    }
    else{
    }
    document.write('<a href="https://www.gunner.online/adminFilter" onClick="return hasher()">MD5 Hasher</a>\
                   <a href="https://www.gunner.online/adminFilter" onClick="return hasher2()">SHA256 Hasher</a>\
                   <a href="https://www.gunner.online/primeFinder">Prime Finder</a>\
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
    document.write('<li style="float:right"><a id = username class="dropbtn" href="https://www.gunner.online">\
                   Gunner Website\
                   </a></li>\
                   </ul>\
                   ');
    console.log("Desktop version of the Menu Bar has been loaded and applied.")
}
//-------------------------------------------GERMAN-------------------------------------
function desktopMBde(){
    var executed = "none";
    document.write('<ul>\
                   <li class="dropdown">\
                   <a href="https://de.gunner.online/"\
                   ')
    if (localStorage.directory == "home"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Home Page</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/aboutIndex">&Uuml;ber die Website</a>\
                   <a href="https://www.gunner.online/contact">Kontactieren sie mich</a>\
                   <a href="https://www.gunner.online">Home Page (en-gb)</a>\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="https://www.gunner.online/beta/homeBetaRedirect">Beta Home Page</a>\
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
    document.write('>Dokumente</a>\
                   <div class="dropdown-content">\
                   <a href="https://betasite.gunner.online/academia">Wissenschaft (beta) (en-gb)</a>\
                   <a href="https://www.gunner.online/downloads">Downloads (en-gb)</a>\
                   <a href="https://www.gunner.online/techDocs">Technologie Hilfe (en-gb)</a>\
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
    document.write('>Spielen (en-gb)</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/numberGuesserLatest">Nummer Rater (en-gb)</a>\
                   <a href="https://www.gunner.online/piFinder">Pi Sucher (en-gb)</a>\
                   <a href="https://www.gunner.online/rockPaperScissorsLatest">Schnick Schnack Schnuck (en-gb)</a>\
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
    document.write('>Medien (en-gb)</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/imageGallery">Fotogalerie (en-gb)</a>\
                   <a href="https://www.gunner.online/videoGallery">Videogalerie (en-gb)</a>\
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
    document.write('>Tools (en-gb)</a>\
                   <div class="dropdown-content">\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="https://www.gunner.online/hidden/cleanse">Local Storage Cleanser</a>\
                       <a href="https://www.gunner.online/hidden/maintainance">Maintainance Site</a>\
                       ')
    }
    else{
    }
    document.write('<a href="https://www.gunner.online/adminFilter" onClick="return hasher()">MD5 Hasher (en-gb)</a>\
                   <a href="https://www.gunner.online/adminFilter" onClick="return hasher2()">SHA256 Hasher (en-gb)</a>\
                   <a href="https://www.gunner.online/primeFinder">Prime Sucher (en-gb)</a>\
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
    document.write('>N&uuml;tzliche Webseiten</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.google.de">Google</a>\
                   <a href="https://www.apple.de">Apple</a>\
                   <a href="https://www.bbc.co.uk">BBC</a>\
                   <a href="https://www.dropbox.com/login/">Dropbox</a>\
                   <a href="https://www.linustechtips.com/main">LinusTechTips</a>\
                   <a href="https://portal.office365.com">Outlook Online</a>\
                   <a href="https://www.synology.co.uk">Synology</a>\
                   <a href="https://www.wolframalpha.com">Wolfram Alpha</a>\
                   <a href="https://www.youtube.com/feed/subscriptions">Youtube</a>\
                   <a href="https://www.youtube.com/channel/UCicjrjHFJtrN7Gg9OlLG7dg">Youtube Kanal</a>\
                   </div>\
                   </li>\
                   ');
    document.write('<li style="float:right"><a id = username class="dropbtn" href="https://www.gunner.online">\
                   English UK\
                   </a>\
                   <div class="dropdown-content">\
                   <a href="https://de.gunner.online">Deutsch</a>\
                   <a href="https://fr.gunner.online">Français</a>\
                   <a href="https://es.gunner.online">Español</a>\
                   <a href="https://th.gunner.online">&#3652;&#3607;&#3618;</a>\
                   </div>\
                   </li>\
                   </ul>\
                   ');
    console.log("Desktop (deutsch) version of the Menu Bar has been loaded and applied.")
}
//-------------------------------------------FRENCH-------------------------------------
function desktopMBfr(){
    var executed = "none";
    document.write('<ul>\
                   <li class="dropdown">\
                   <a href="https://fr.gunner.online/"\
                   ')
    if (localStorage.directory == "home"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Page d\'acceil</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/aboutIndex">Concernant le site web (en-gb)</a>\
                   <a href="https://www.gunner.online/contact">Communiquer avec moi (en-gb)</a>\
                   <a href="https://www.gunner.online">Home Page (en-gb)</a>\
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
    document.write('>Documents</a>\
                   <div class="dropdown-content">\
                   <a href="https://betasite.gunner.online/academia">Travail (beta) (en-gb)</a>\
                   <a href="https://www.gunner.online/downloads">Téléchargements (en-gb)</a>\
                   <a href="https://www.gunner.online/techDocs">Support Technique (en-gb)</a>\
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
    document.write('>Jeux (en-gb)</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/numberGuesserLatest">Nummer Guesser (en-gb)</a>\
                   <a href="https://www.gunner.online/piFinder">Pi découvreur (en-gb)</a>\
                   <a href="https://www.gunner.online/rockPaperScissorsLatest">Roche-Papier-Ciseaux (en-gb)</a>\
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
    document.write('>Médias (en-gb)</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/imageGallery">Galerie de photos (en-gb)</a>\
                   <a href="https://www.gunner.online/videoGallery">Galerie vidéo (en-gb)</a>\
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
    document.write('>Tools (en-gb)</a>\
                   <div class="dropdown-content">\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="https://www.gunner.online/hidden/cleanse">Local Storage Cleanser</a>\
                       <a href="https://www.gunner.online/hidden/maintainance">Maintainance Site</a>\
                       ')
    }
    else{
    }
    document.write('<a href="https://www.gunner.online/adminFilter" onClick="return hasher()">MD5 Hasher (en-gb)</a>\
                   <a href="https://www.gunner.online/adminFilter" onClick="return hasher2()">SHA256 Hasher (en-gb)</a>\
                   <a href="https://www.gunner.online/primeFinder">Prime Sucher (en-gb)</a>\
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
    document.write('>Des sites Internet utiles.</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.google.de">Google</a>\
                   <a href="https://www.apple.de">Apple</a>\
                   <a href="https://www.bbc.co.uk">BBC</a>\
                   <a href="https://www.dropbox.com/login/">Dropbox</a>\
                   <a href="https://www.linustechtips.com/main">LinusTechTips</a>\
                   <a href="https://portal.office365.com">Outlook Online</a>\
                   <a href="https://www.synology.co.uk">Synology</a>\
                   <a href="https://www.wolframalpha.com">Wolfram Alpha</a>\
                   <a href="https://www.youtube.com/feed/subscriptions">Youtube</a>\
                   <a href="https://www.youtube.com/channel/UCicjrjHFJtrN7Gg9OlLG7dg">chaîne YouTube</a>\
                   </div>\
                   </li>\
                   ');
    document.write('<li style="float:right"><a id = username class="dropbtn" href="https://www.gunner.online">\
                   Français\
                   </a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online">English UK</a>\
                   <a href="https://de.gunner.online">Deutsch</a>\
                   <a href="https://es.gunner.online">Español</a>\
                   <a href="https://th.gunner.online">&#3652;&#3607;&#3618;</a>\
                   </div>\
                   </li>\
                   </ul>\
                   ');
    console.log("Desktop (deutsch) version of the Menu Bar has been loaded and applied.")
}

//-------------------------------------------THAI-------------------------------------
function desktopMBth(){
    var executed = "none";
    document.write('<ul>\
                   <li class="dropdown">\
                   <a href="https://th.gunner.online/"\
                   ')
    if (localStorage.directory == "home"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>&#3627;&#3609;&#3657;&#3634;&#3649;&#3619;&#3585;</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/aboutIndex">&Uuml;ber die Website</a>\
                   <a href="https://www.gunner.online/contact">Kontactieren sie mich</a>\
                   <a href="https://www.gunner.online">Home Page (en-gb)</a>\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="https://www.gunner.online/beta/homeBetaRedirect">Beta Home Page</a>\
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
    document.write('>Dokumente</a>\
                   <div class="dropdown-content">\
                   <a href="https://betasite.gunner.online/academia">Wissenschaft (beta) (en-gb)</a>\
                   <a href="https://www.gunner.online/downloads">Downloads (en-gb)</a>\
                   <a href="https://www.gunner.online/techDocs">Technologie Hilfe (en-gb)</a>\
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
    document.write('>Spielen (en-gb)</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/numberGuesserLatest">Nummer Rater (en-gb)</a>\
                   <a href="https://www.gunner.online/piFinder">Pi Sucher (en-gb)</a>\
                   <a href="https://www.gunner.online/rockPaperScissorsLatest">Schnick Schnack Schnuck (en-gb)</a>\
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
    document.write('>Medien (en-gb)</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/imageGallery">Fotogalerie (en-gb)</a>\
                   <a href="https://www.gunner.online/videoGallery">Videogalerie (en-gb)</a>\
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
    document.write('>Tools (en-gb)</a>\
                   <div class="dropdown-content">\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="https://www.gunner.online/hidden/cleanse">Local Storage Cleanser</a>\
                       <a href="https://www.gunner.online/hidden/maintainance">Maintainance Site</a>\
                       ')
    }
    else{
    }
    document.write('<a href="https://www.gunner.online/adminFilter" onClick="return hasher()">MD5 Hasher (en-gb)</a>\
                   <a href="https://www.gunner.online/adminFilter" onClick="return hasher2()">SHA256 Hasher (en-gb)</a>\
                   <a href="https://www.gunner.online/primeFinder">Prime Sucher (en-gb)</a>\
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
    document.write('>N&uuml;tzliche Webseiten</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.google.de">Google</a>\
                   <a href="https://www.apple.de">Apple</a>\
                   <a href="https://www.bbc.co.uk">BBC</a>\
                   <a href="https://www.dropbox.com/login/">Dropbox</a>\
                   <a href="https://www.linustechtips.com/main">LinusTechTips</a>\
                   <a href="https://portal.office365.com">Outlook Online</a>\
                   <a href="https://www.synology.co.uk">Synology</a>\
                   <a href="https://www.wolframalpha.com">Wolfram Alpha</a>\
                   <a href="https://www.youtube.com/feed/subscriptions">Youtube</a>\
                   <a href="https://www.youtube.com/channel/UCicjrjHFJtrN7Gg9OlLG7dg">Youtube Kanal</a>\
                   </div>\
                   </li>\
                   ');
    document.write('<li style="float:right"><a id = username class="dropbtn" href="https://www.gunner.online">\
                   Gunner Website (en-gb)\
                   </a></li>\
                   </ul>\
                   ');
    console.log("Desktop (thai) version of the Menu Bar has been loaded and applied.")
}

var onerun = 0
function mobileMB(){
    if (onerun < 1){
        document.write('<ul>\
                       <li class="dropdown"><a class="dropbtn" class = "menubar" href="https://www.gunner.online/#">&#9776;</a>\
                       <div class="dropdown-content">\
                       <a href="https://www.gunner.online">Home</a>\
                       <a href="https://www.gunner.online/documents">Documents</a>\
                       <a href="https://www.gunner.online/construction_mobile">Games</a>\
                       <a href="https://www.gunner.online/media">Media</a>\
                       <a href="https://www.gunner.online/tools">Tools\\Utilities</a>\
                       <a href="https://www.gunner.online/externalLinks">Useful Websites</a>\
                       <a href="https://www.gunner.online/aboutIndex">About</a>\
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
