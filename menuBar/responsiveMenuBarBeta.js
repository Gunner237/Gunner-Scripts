var screenwidth = screen.width;
document.write('<script src="https://scripts.gunner.online/menuBar/menuBar.js"></script>')
if (screen.width < 800){
    document.write('<script>mobileMB()</script>');
    console.log("Mobile MenuBar applied")
}
else {
        document.write('<script>desktopMB()</script>');
        console.log("Desktop MenuBar applied")
}
