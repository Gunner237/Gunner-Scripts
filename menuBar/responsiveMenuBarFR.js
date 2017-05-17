var screenwidth = screen.width;
if (screen.width < 800){
    document.write('<script src="https://scripts.gunner.online/menuBar/menuBar.js"></script>\
                   <script>mobileMB("fr")</script>');
    console.log("Mobile MenuBar selected")
}
else {
        document.write('<script src="https://scripts.gunner.online/menuBar/menuBar.js"></script>\
                       <script>desktopMB("fr")</script>');
        console.log("Desktop MenuBar selected")
}
