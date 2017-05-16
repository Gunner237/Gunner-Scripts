var screenwidth = screen.width;
if (screen.width < 800){
    document.write('<script src="https://scripts.gunner.online/menuBar/menuBar.js"></script>\
                   <script>mobileMB()</script>');
    console.log("Mobile MenuBar selected")
}
else {
        document.write('<script src="https://scripts.gunner.online/menuBar/menuBar.js"></script>\
                       <script>desktopMBfr()</script>');
        console.log("Desktop MenuBar selected")
}
