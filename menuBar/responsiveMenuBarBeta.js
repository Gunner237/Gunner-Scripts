var screenwidth = screen.width;
alert("Page using out-dated script. Page needs to be updated")
document.write('<script src="https://scripts.gunner.online/menuBar/menuBar.js"></script>')

if (screen.width < 800){
    console.log("Mobile MenuBar selected")
    document.write('<script>mobileMB()</script>');
}
else {
    console.log("Desktop MenuBar selected")
    document.write('<script>desktopMB()</script>');
}
