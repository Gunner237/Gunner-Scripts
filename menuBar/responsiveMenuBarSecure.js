var screenwidth = screen.width;
if (screen.width < 800){
    document.write('<script src="scripts/menuBar/menuBarSecure.js"></script>\
                   <script>mobileMB()</script>');
    console.log("Mobile MenuBar applied")
}
else {
        document.write('<script src="scripts/menuBar/menuBarSecure.js"></script>\
                       <script>desktopMB()</script>');
        console.log("Desktop MenuBar applied")
}
