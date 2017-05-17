function surveillance(){
    localStorage.destination = "surveillance"
}
function hasher(){
    localStorage.destination = "hidden/md5_hasher"
}
function hasher2(){
    localStorage.destination = "hidden/sha256_hasher"
}
var homepage = "Homepage"
var about = "About"
var contact = "Contact me"
var documents = "Documents"
var academia = "Academia"
var downloads = "Downloads"
var techDocs = "Technology Guides"
var games = "Games"
var numberGuesser = "Number Guesser"
var piFinder = "Pi Finder"
var rockPaperScissors = "Rock Paper Scissors"
var media = "Media"
var photoGallery = "Photo Gallery"
var videoGallery = "Video Gallery"
var tools = "Tools//Utilities"
var primeFinder = "Prime Finder"
var usefulLinks = "Useful Websites"
var ytChannel = "YouTube Channel"


function desktopMB(lang){
    if (lang === "en"){
        var prefix = "www"
        var homepage = "Homepage"
        var about = "About (new)"
        var contact = "Contact me"
        var documents = "Documents"
        var academia = "Academia"
        var downloads = "Downloads"
        var techDocs = "Technology Guides"
        var games = "Games"
        var numberGuesser = "Number Guesser"
        var piFinder = "Pi Finder"
        var rockPaperScissors = "Rock Paper Scissors"
        var media = "Media"
        var photoGallery = "Photo Gallery"
        var videoGallery = "Video Gallery"
        var tools = "Tools//Utilities"
        var primeFinder = "Prime Finder"
        var usefulLinks = "Useful Websites"
        var ytChannel = "YouTube Channel"
        var currLang = "English"
        console.log("English menuBar selected")
    }
    else if (lang === "de"){
        var prefix = "de"
        var homepage = "Homepage"
        var about = "&Uuml;ber die Website"
        var contact = "Kontactieren sie mich"
        var documents = "Dokumente"
        var academia = "Wissenschaft (beta)"
        var downloads = "Downloads"
        var techDocs = "Technologie Hilfe"
        var games = "Spielen"
        var numberGuesser = "Nummer Rater"
        var piFinder = "Pi Sucher"
        var rockPaperScissors = "Schnick Schnack Schnuck"
        var media = "Medien"
        var photoGallery = "Fotogalerie"
        var videoGallery = "Videogalerie"
        var tools = "tools"
        var primeFinder = "Prime Sucher"
        var usefulLinks = "N&uuml;tzliche Webseiten"
        var ytChannel = "YouTube Kanal"
        var currLang = "Deutsch"
        console.log("German menuBar selected")
    }
    else if (lang === "fr"){
        var prefix = "fr"
        var homepage = "Page d'acceil"
        var about = "A propos"
        var contact = "Contactez moi"
        var documents = "Documents"
        var academia = "Travail (beta)"
        var downloads = "Téléchargements"
        var techDocs = "Support technique"
        var games = "Jeux"
        var numberGuesser = "Number Guesser"
        var piFinder = "Pi découvreur"
        var rockPaperScissors = "Pierre-Papier-Ciseaux"
        var media = "Médias"
        var photoGallery = "Galerie de photos"
        var videoGallery = "Galerie vidéo"
        var tools = "Outils"
        var primeFinder = "Prime Chercheur"
        var usefulLinks = "Liens utils"
        var ytChannel = "Chaîne YouTube"
        var currLang = "Francais"
        console.log("French menuBar selected")
    }
    else if (lang === "th"){
        var prefix = "www"
        var homepage = "&#3627;&#3609;&#3657;&#3634;&#3649;&#3619;&#3585;"
        var about = "About (new)"
        var contact = "Contact me"
        var documents = "Documents"
        var academia = "Academia"
        var downloads = "Downloads"
        var techDocs = "Technology Guides"
        var games = "Games"
        var numberGuesser = "Number Guesser"
        var piFinder = "Pi Finder"
        var rockPaperScissors = "Rock Paper Scissors"
        var media = "Media"
        var photoGallery = "Galerie de photos"
        var videoGallery = "Galerie vidéo"
        var tools = "Tools//Utilities"
        var primeFinder = "Prime Finder"
        var usefulLinks = "Useful Websites"
        var ytChannel = "YouTube Channel"
        var currLang = "Thai"
        console.log("Thai menuBar selected")
    }
    else if (lang === "la"){
        var prefix = "la"
        var homepage = "pagina domestica"
        var about = "de loco telae"
        var contact = "mihi eda"
        var documents = "tabula"
        var academia = "academia"
        var downloads = "recepta"
        var techDocs = "tabula technologia"
        var games = "ludi"
        var numberGuesser = "existimator numerorum"
        var piFinder = "invenitor &#960;"
        var rockPaperScissors = "saxum charta forfex"
        var media = "media"
        var photoGallery = "porticur imaginum"
        var videoGallery = "porticur imaginum movantum"
        var tools = "instrumenta"
        var primeFinder = "invenitor proti"
        var usefulLinks = "contexus utiles"
        var ytChannel = "canalis TuTubae"
        var currLang = "lingua Latina"
        console.log("Latin menuBar selected")
    }
    else {
        var prefix = "www"
        var homepage = "Homepage"
        var about = "About (new)"
        var contact = "Contact me"
        var documents = "Documents"
        var academia = "Academia"
        var downloads = "Downloads"
        var techDocs = "Technology Guides"
        var games = "Games"
        var numberGuesser = "Number Guesser"
        var piFinder = "Pi Finder"
        var rockPaperScissors = "Rock Paper Scissors"
        var media = "Media"
        var photoGallery = "Photo Gallery"
        var videoGallery = "Video Gallery"
        var tools = "Tools//Utilities"
        var primeFinder = "Prime Finder"
        var usefulLinks = "Useful Websites"
        var ytChannel = "YouTube Channel"
        var currLang = "Select Language"
    }
    
    
    var executed = "none";
    document.write('<ul>\
                   <li class="dropdown">\
                   <a href="https://www.gunner.online/"\
                   ')
    if (localStorage.directory == "home"){
        document.write('class = "active">')
    }
    else{
        document.write('class="dropbtn">')
    }
    document.write(homepage)
    document.write('</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/aboutIndex">')
    document.write(about)
    document.write('</a>\
                   <a href="https://www.gunner.online/contact">')
    document.write(contact)
    document.write('</a>\
                   ')
    document.write('</div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="https://www.gunner.online/documents"')
    if (localStorage.directory == "documents"){
        document.write('class = "active">')
    }
    else{
        document.write('class="dropbtn">')
    }
    document.write(documents)
    document.write('</a>\
                   <div class="dropdown-content">\
                   <a href="https://betasite.gunner.online/academia">')
    document.write(academia)
    document.write('</a>\
                   <a href="https://www.gunner.online/downloads">')
    document.write(downloads)
    document.write('</a>\
                   <a href="https://www.gunner.online/techDocs">')
    document.write(techDocs)
    document.write('</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="https://www.gunner.online/games" ')
    if (localStorage.directory == "games"){
        document.write('class = "active">')
    }
    else{
        document.write('class="dropbtn">')
    }
    document.write(games)
    document.write('</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/numberGuesserLatest">')
    document.write(numberGuesser)
    document.write('</a>\
                   <a href="https://www.gunner.online/piFinder">')
    document.write(piFinder)
    document.write('</a>\
                   <a href="https://www.gunner.online/rockPaperScissorsLatest">')
    document.write(rockPaperScissors)
    document.write('</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="https://www.gunner.online/media"')
    if (localStorage.directory == "media"){
        document.write('class = "active">')
    }
    else{
        document.write('class="dropbtn">')
    }
    document.write(media)
    document.write('</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online/imageGallery">')
    document.write(photoGallery)
    document.write('</a>\
                   <a href="https://www.gunner.online/videoGallery">')
    document.write(videoGallery)
    document.write('</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="https://www.gunner.online/tools" ')
    if (localStorage.directory == "tools"){
        document.write('class = "active">')
    }
    else{
        document.write('class= "dropbtn">')
    }
    document.write(tools)
    document.write('</a>\
                   <div class="dropdown-content">\
                   ')
    document.write('<a href="https://www.gunner.online/adminFilter" onClick="return hasher()">MD5 Hasher</a>\
                   <a href="https://www.gunner.online/adminFilter" onClick="return hasher2()">SHA256 Hasher</a>\
                   <a href="https://www.gunner.online/primeFinder">')
    document.write(primeFinder)
    document.write('</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="https://www.gunner.online/externalLinks"')
    if (localStorage.directory == "external"){
        document.write('class = "active">')
    }
    else{
        document.write('class="dropbtn">')
    }
    document.write(usefulLinks)
    document.write('</a>\
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
                   <a href="https://www.youtube.com/channel/UCicjrjHFJtrN7Gg9OlLG7dg">')
    document.write(ytChannel)
    document.write('</a>\
                   </div>\
                   </li>\
                   ');
    document.write('<li style="float:right" class="dropdown"><a id = username class="dropbtn" href="https://')
    document.write(prefix)
    document.write('.gunner.online">')
    document.write(currLang)
    document.write('</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.gunner.online">English</a>\
                   <a href="https://de.gunner.online">Deutsch</a>\
                   <a href="https://fr.gunner.online">Français</a>\
                   <a href="https://es.gunner.online">Español</a>\
                   <a href="https://th.gunner.online">&#3652;&#3607;&#3618;</a>\
                   </div>\
                   </li>\
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
