var screenwidth = screen.width;
document.write('<script src="https://scripts.gunner.online/menuBar/menuBarBeta.js"></script>')

if (screen.width < 800){
    console.log("Mobile MenuBar selected")
    document.write('<script>mobileMB("en")</script>');
}
else {
    console.log("Desktop MenuBar selected")
    document.write('<script>desktopMB("en")</script>');
}
