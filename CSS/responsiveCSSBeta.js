var screenwidth = screen.width;
if (screen.width < 750){
    document.write('<link rel="stylesheet" href="https://css.gunner.online/mobile.css" type="text/css" media="screen" />\
                   <link rel="stylesheet" href="https://css.gunner.online/colour.css" type="text/css" media="screen" />');
    console.log("Mobile CSS applied")
}
else {
    document.write('<link rel="stylesheet" href="https://css.gunner.online/layout.css" type="text/css" media="screen" />\
                   <link rel="stylesheet" href="https://css.gunner.online/colour.css" type="text/css" media="screen" />');
    console.log("Desktop CSS applied")
}
