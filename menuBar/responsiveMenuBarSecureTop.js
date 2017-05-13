var screenwidth = screen.width;
alert("Page MUST be updated: responsiveMenuBarSecureTop no longer in use")
if (screen.width < 800){
    document.write('<script src="https://scripts.gunner.online/menuBar/menuBarSecure.js"></script>\
                   <script>mobileMB()</script>');
    console.log("Mobile MenuBar applied")
}
else {
        document.write('<script src="https://scripts.gunner.online/menuBar/menuBarSecure.js"></script>\
                       <script>desktopMB()</script>');
        console.log("Desktop MenuBar applied")
}
