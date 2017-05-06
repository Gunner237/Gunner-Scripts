var screenwidth = screen.width;
if (screen.width < 800){
    document.write('<link rel="stylesheet" href="https://www.gunner.online/CSS/mobile.css" type="text/css" media="screen" />\
                   <link rel="stylesheet" href="https://www.gunner.online/CSS/colour.css" type="text/css" media="screen" />');
    console.log("Mobile CSS applied")
}
else {
    document.write('<link rel="stylesheet" href="https://www.gunner.online/CSS/layout.css" type="text/css" media="screen" />\
                   <link rel="stylesheet" href="https://www.gunner.online/CSS/colour.css" type="text/css" media="screen" />');
    console.log("Desktop CSS applied")
}
