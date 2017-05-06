var screenwidth = screen.width;
if (screen.width < 800){
    document.write('<link rel="stylesheet" href="mobile.css" type="text/css" media="screen" />');
    console.log("Mobile CSS applied")
}
else {
    document.write('<link rel="stylesheet" href="../CSS/layout.css" type="text/css" media="screen" />\
                   <link rel="stylesheet" href="../CSS/colour.css" type="text/css" media="screen" />');
    console.log("Multi-layer CSS applied")
    console.warn("This is applying a development CSS file")
    console.warn("THIS SCRIPT SHOULD NOT BE IN GENERAL USE AT ANY POINT IN TIME")
}
