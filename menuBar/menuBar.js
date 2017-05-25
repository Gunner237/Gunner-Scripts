function surveillance(){
    localStorage.destination = "surveillance"
}
function hasher(){
    localStorage.destination = "hidden/md5_hasher"
}
function hasher2(){
    localStorage.destination = "hidden/sha256_hasher"
}
function language(){
    var language = prompt("Please type the two letter country code","en")
    if (language == "en"){
        window.location.href = "https://www.gunner.online"
    }
    
    else if (language == "de"){
        window.location.href = "https://de.gunner.online"
    }
    
    else if (language == "fr"){
        window.location.href = "https://fr.gunner.online"
    }
    
    else if (language == "es"){
        window.location.href = "https://es.gunner.online"
    }
    
    else if (language == "th"){
        window.location.href = "https://th.gunner.online"
    }
    
    else if (language == "la"){
        window.location.href = "https://la.gunner.online"
    }
    
    else{
        alert("Code "+language+" not recognised. Options: en(glish), de(utsch), fr(ancais), es(panol), th(ai), la(tin)")
        language()
    }
}
function en(special){
    prefix = "www"
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
    progSoc = "Prog:Soc"
    currLang = "English (United Kingdom)"
    if (special === true){
        engRedirect ="https://www.gunner.online/"
    }
    else{
        engRedirect = ""
    }
    
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
    progSoc = "Prog:Soc"
    currLang = "Deutsch (Deutschland)"
    engRedirect = "https://www.gunner.online/"
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
    progSoc = "Prog:Soc"
    currLang = "Français (France)"
    engRedirect = "https://www.gunner.online/"
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
    progSoc = "Prog:Soc"
    currLang = "Español (España)"
    engRedirect = "https://www.gunner.online/"
}
function th(){
    prefix = "th"
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
    progSoc = "Prog:Soc"
    currLang = "&#3652;&#3607;&#3618; (&#3611;&#3619;&#3632;&#3648;&#3607;&#3624;&#3652;&#3607;&#3618;)"
    engRedirect = "https://www.gunner.online/"
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
    progSoc = "Prog:Soc"
    currLang = "lingua Latina (Roma)"
    engRedirect = "https://www.gunner.online/"
}
function uk(){
    console.warn("Page language not recognised")
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
    progSoc = "Prog:Soc"
    currLang = "Select Language"
    engRedirect = "https://www.gunner.online/"
}


function desktopMB(lang){
    if (lang === "en"){
        en()
        console.log("English menuBar selected")
    }
    else if (lang === "en-prefix"){
        en(true)
        console.log("English menuBar (custom prefix) selected")
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
                   <a href="')
    document.write(engRedirect)
    document.write('about">')
    document.write(about)
    document.write('</a>\
                   <a href="')
    document.write(engRedirect)
    document.write('contact">')
    document.write(contact)
    document.write('</a>\
                   ')
    document.write('</div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="')
    document.write(engRedirect)
    document.write('documents"')
    if (localStorage.directory == "documents"){
        document.write('class = "active">')
    }
    else{
        document.write('class="dropbtn">')
    }
    document.write(documents)
    document.write('</a>\
                   <div class="dropdown-content">\
                   <a href="')
    document.write(engRedirect)
    document.write('downloads">')
    document.write(downloads)
    document.write('</a>\
                   <a href="')
    document.write(engRedirect)
    document.write('techDocs">')
    document.write(techDocs)
    document.write('</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="')
    document.write(engRedirect)
    document.write('games" ')
    if (localStorage.directory == "games"){
        document.write('class = "active">')
    }
    else{
        document.write('class="dropbtn">')
    }
    document.write(games)
    document.write('</a>\
                   <div class="dropdown-content">\
                   <a href="')
    document.write(engRedirect)
    document.write('numberGuesserLatest">')
    document.write(numberGuesser)
    document.write('</a>\
                   <a href="')
    document.write(engRedirect)
    document.write('piFinder">')
    document.write(piFinder)
    document.write('</a>\
                   <a href="')
    document.write(engRedirect)
    document.write('rockPaperScissorsLatest">')
    document.write(rockPaperScissors)
    document.write('</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="')
    document.write(engRedirect)
    document.write('media"')
    if (localStorage.directory == "media"){
        document.write('class = "active">')
    }
    else{
        document.write('class="dropbtn">')
    }
    document.write(media)
    document.write('</a>\
                   <div class="dropdown-content">\
                   <a href="')
    document.write(engRedirect)
    document.write('imageGallery">')
    document.write(photoGallery)
    document.write('</a>\
                   <a href="')
    document.write(engRedirect)
    document.write('videoGallery">')
    document.write(videoGallery)
    document.write('</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="')
    document.write(engRedirect)
    document.write('tools" ')
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
    document.write('<a href="')
    document.write(engRedirect)
    document.write('primeFinder">')
    document.write(primeFinder)
    document.write('</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="')
    document.write(engRedirect)
    document.write('externalLinks"')
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
                   <li class="dropdown">\
                   <a href="https://progsoc.gunner.online/"')
    if (localStorage.directory == "progsoc"){
        document.write('class = "active">')
    }
    else{
        document.write('class="dropbtn">')
    }
    document.write(progSoc)
    document.write('</a>\
                   <div class="dropdown-content">\
                   <a href="https://progsoc.gunner.online/html">HTML (SG)</a>\
                   <a href="http://www.eclecticon.info/test1.htm">HTML (AF)</a>\
                   <a href="https://progsoc.gunner.online/converter">Speed converter</a>\
                   <a href="https://progsoc.gunner.online/textReverser">Text Reverser</a>\
                   </a>\
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
                       <a href="')
        document.write(engRedirect)
        document.write('documents">')
        document.write(documents)
        document.write('</a>\
                       <a href="')
        document.write(engRedirect)
        document.write('construction_mobile">')
        document.write(games)
        document.write('</a>\
                       <a href="')
        document.write(engRedirect)
        document.write('media">')
        document.write(media)
        document.write('</a>\
                       <a href="')
        document.write(engRedirect)
        document.write('tools">')
        document.write(tools)
        document.write('</a>\
                       <a href="')
        document.write(engRedirect)
        document.write('externalLinks">')
        document.write(usefulLinks)
        document.write('</a>\
                       <a href="')
        document.write(engRedirect)
        document.write('about">')
        document.write(about)
        document.write('</a>\
                       <a onClick="return language()">Switch Language</a>\
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
