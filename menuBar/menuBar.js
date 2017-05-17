function surveillance(){
    localStorage.destination = "surveillance"
}
function hasher(){
    localStorage.destination = "hidden/md5_hasher"
}
function hasher2(){
    localStorage.destination = "hidden/sha256_hasher"
}
function en(){
 homepage = "Homepage"
 about = "About"
 contact = "Contact me"
 documents = "Documents"
 academia = "Academia"
 downloads = "Downloads"
 techDocs = "Technology Guides"
 games = "Games"
 numberGuesser = "Number Guesser"
 piFinder = "Pi Finder"
 rockPaperScissors = "Rock Paper Scissors"
 media = "Media"
 photoGallery = "Photo Gallery"
 videoGallery = "Video Gallery"
 tools = "Tools/Utilities"
 primeFinder = "Prime Finder"
 usefulLinks = "Useful Websites"
 ytChannel = "YouTube Channel"
}
function de(){
     prefix = "de"
     homepage = "Homepage"
     about = "&Uuml;ber die Website"
     contact = "Kontactieren sie mich"
     documents = "Dokumente"
     academia = "Wissenschaft (beta)"
     downloads = "Downloads"
     techDocs = "Technologie Hilfe"
     games = "Spielen"
     numberGuesser = "Nummer Rater"
     piFinder = "Pi Sucher"
     rockPaperScissors = "Schnick Schnack Schnuck"
     media = "Medien"
     photoGallery = "Fotogalerie"
     videoGallery = "Videogalerie"
     tools = "tools"
     primeFinder = "Prime Sucher"
     usefulLinks = "N&uuml;tzliche Webseiten"
     ytChannel = "YouTube Kanal"
     currLang = "Deutsch"
}
function fr(){
     prefix = "fr"
     homepage = "Page d'acceil"
     about = "A propos"
     contact = "Contactez moi"
     documents = "Documents"
     academia = "Travail (beta)"
     downloads = "Téléchargements"
     techDocs = "Support technique"
     games = "Jeux"
     numberGuesser = "Number Guesser"
     piFinder = "Pi découvreur"
     rockPaperScissors = "Pierre-Papier-Ciseaux"
     media = "Médias"
     photoGallery = "Galerie de photos"
     videoGallery = "Galerie vidéo"
     tools = "Outils"
     primeFinder = "Prime Chercheur"
     usefulLinks = "Liens utils"
     ytChannel = "Chaîne YouTube"
     currLang = "Français"
}
function es(){
     prefix = "es"
     homepage = "Página web"
     about = "Sobre"
     contact = "Me Contacto"
     documents = "Documentos"
     academia = "Trabajo (beta)"
     downloads = "Descargas"
     techDocs = "Apoyo técnico"
     games = "Juegos"
     numberGuesser = "Número adivino"
     piFinder = "Pi buscador"
     rockPaperScissors = "Piedra, Papel, Tijera"
     media = "Medios"
     photoGallery = "Galería de fotos"
     videoGallery = "Galería de videos"
     tools = "Útiles"
     primeFinder = "Número primo buscador"
     usefulLinks = "enlaces útiles"
     ytChannel = "Canal de YouTube"
     currLang = "Español"
}
function th(){
     prefix = "www"
     homepage = "&#3627;&#3609;&#3657;&#3634;&#3649;&#3619;&#3585;"
     about = "About (new)"
     contact = "Contact me"
     documents = "Documents"
     academia = "Academia"
     downloads = "Downloads"
     techDocs = "Technology Guides"
     games = "Games"
     numberGuesser = "Number Guesser"
     piFinder = "Pi Finder"
     rockPaperScissors = "Rock Paper Scissors"
     media = "Media"
     photoGallery = "Galerie de photos"
     videoGallery = "Galerie vidéo"
     tools = "Tools/Utilities"
     primeFinder = "Prime Finder"
     usefulLinks = "Useful Websites"
     ytChannel = "YouTube Channel"
     currLang = "Thai"
}
function la(){
    prefix = "la"
    homepage = "pagina domestica"
     about = "de loco telae"
     contact = "mihi eda"
     documents = "tabula"
     academia = "academia"
     downloads = "recepta"
     techDocs = "tabula technologia"
     games = "ludi"
     numberGuesser = "existimator numerorum"
     piFinder = "invenitor &#960;"
     rockPaperScissors = "saxum charta forfex"
     media = "media"
     photoGallery = "porticur imaginum"
     videoGallery = "porticur imaginum movantum"
     tools = "instrumenta"
     primeFinder = "invenitor proti"
     usefulLinks = "contexus utiles"
     ytChannel = "canalis TuTubae"
     currLang = "lingua Latina"
}
function uk(){
     prefix = "www"
     homepage = "Homepage"
     about = "About (new)"
     contact = "Contact me"
     documents = "Documents"
     academia = "Academia"
     downloads = "Downloads"
     techDocs = "Technology Guides"
     games = "Games"
     numberGuesser = "Number Guesser"
     piFinder = "Pi Finder"
     rockPaperScissors = "Rock Paper Scissors"
     media = "Media"
     photoGallery = "Photo Gallery"
     videoGallery = "Video Gallery"
     tools = "Tools//Utilities"
     primeFinder = "Prime Finder"
     usefulLinks = "Useful Websites"
     ytChannel = "YouTube Channel"
     currLang = "Select Language"
}


function desktopMB(lang){
    if (lang === "en"){
        en()
        console.log("English menuBar selected")
    }
    else if (lang === "de"){
        de()
        console.log("German menuBar selected")
    }
    else if (lang === "fr"){
        fr()
        console.log("French menuBar selected")
    }
    else if (lang === "es"){
        es()
        console.log("Spanish menuBar selected")
    }
    else if (lang === "th"){
        th()
        console.log("Thai menuBar selected")
    }
    else if (lang === "la"){
        la()
        console.log("Latin menuBar selected")
    }
    else {
        uk()
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
    document.write('<a href="https://www.gunner.online/primeFinder">')
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
                   <a href="https://la.gunner.online">Lingua Latina</a>\
                   <a href="https://th.gunner.online">&#3652;&#3607;&#3618;</a>\
                   </div>\
                   </li>\
                   </ul>\
                   ');
    console.log("Desktop version of the Menu Bar has been loaded and applied.")
}
var onerun = 0
function mobileMB(lang){
    if (lang === "en"){
        en()
        console.log("English menuBar selected")
    }
    else if (lang === "de"){
        de()
        console.log("German menuBar selected")
    }
    else if (lang === "fr"){
        fr()
        console.log("French menuBar selected")
    }
    else if (lang === "es"){
        es()
        console.log("Spanish menuBar selected")
    }
    else if (lang === "th"){
        th()
        console.log("Thai menuBar selected")
    }
    else if (lang === "la"){
        la()
        console.log("Latin menuBar selected")
    }
    else {
        uk()
    }
    if (onerun < 1){
        document.write('<ul>\
                       <li class="dropdown"><a class="dropbtn" class = "menubar" href="https://www.gunner.online/#">&#9776;</a>\
                       <div class="dropdown-content">\
                       <a href="https://www.gunner.online">')
        document.write(homepage)
        document.write('</a>\
                       <a href="https://www.gunner.online/documents">')
        document.write(documents)
        document.write('</a>\
                       <a href="https://www.gunner.online/construction_mobile">')
        document.write(games)
        document.write('</a>\
                       <a href="https://www.gunner.online/media">')
        document.write(media)
        document.write('</a>\
                       <a href="https://www.gunner.online/tools">')
                       document.write(tools)
        document.write('</a>\
                       <a href="https://www.gunner.online/externalLinks">')
        document.write(usefulLinks)
        document.write('</a>\
                       <a href="https://www.gunner.online/aboutIndex">')
        document.write(about)
        document.write('</a>\
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
