//New code to determine the page prefix and address (along with protocol used)
if (window.jQuery) {
    var currPage = window.location.href
    //Console.log for diagnosis only. This should be disabled before pushing to the live page.
    //console.log("Current page is "+currPage)
    
    // split the string into an array of parts
    var currPageParts = currPage.split("/");
    //console.log("Current page array is "+currPageParts)
    if (currPageParts[0] == "https:") {
       // console.log("HTTPS page detected")
        var pageprefix = currPageParts[2].split(".")
        //console.log("page prefix is "+pageprefix[0])
    }
    else if (currPageParts[0] == "file:"){
        //console.log("Local page detected")
        var thingminus1 = $.inArray("Website", currPageParts)
        var pageprefix = currPageParts[thingminus1+1].split(".")
        //console.log("page prefix is "+pageprefix[0])
        
        
    }
    else{
        //console.warn("Page is neither HTTPS, nor a file.")
        var httpstart = $.inArray("http", currPageParts)
        
        if (httpstart == -1){
            var pageprefix = currPageParts[0].split(".")
            //console.log("page prefix is "+pageprefix[0])
        }
        else if (httpstart == 0){
            var pageprefix = currPageParts[2].split(".")
            //console.log("page prefix is "+pageprefix[0])
        }
        else{
            //console.error("Page prefix could not be determined")
        }
    }
}
else{
    console.warn("jQuery not loaded. Script pageDetect.js did not run sucessfully.")
}
