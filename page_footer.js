function footer(type){
    if (type === "standard"){
        document.write('</div>\
                       <div id="category_border" id="footer" class="video">\
                       <span id="contact"> SFTG 2017-2020</span>\
                       <a class="footer_contact" href="https://www.gunner.online/contact">Contact Me</a>\
                       </div>\
                       ')
        
        console.log("The standard page footer has been loaded and applied");
    }
    else if (type === "deutsch"){
        document.write('</div>\
                       <div id="category_border" id="footer" class="video">\
                       <span id="contact"> SFTG 2017-2020</span>\
                       <a class="footer_contact" href="https://www.gunner.online/contact">Kontaktieren Sie mich (en-gb)</a>\
                       </div>\
                       ')
        
        console.log("The german page footer has been loaded and applied");
    }
    else if (type === "thai"){
        document.write('</div>\
                       <div id="category_border" id="footer" class="video">\
                       <span id="contact"> SFTG 2560-2563</span>\
                       <a class="footer_contact" href="https://www.gunner.online/contact">&#3605;&#3636;&#3604;&#3605;&#3656;&#3629;&#3593;&#3633;&#3609; (en-gb)</a>\
                       </div>\
                       ')
        
        console.log("The german page footer has been loaded and applied");
    }
    else if (type === "beta"){
        document.write('</div>\
                       <div id="category_border" id="footer" class="video">\
                       <span id="contact"> SFTG 2017-2020</span>\
                       <a class="footer_contact" href="https://www.gunner.online/contact">Contact Me</a>\
                       </div>\
                       ')
        
        console.log("The beta page footer has been loaded and applied");
    }
    else if (type === "media"){
        document.write('</div>\
                       <div id="category_border" id="footer" class="video">\
                       <span id="contact">Gunner 2017-2020</span>\
                       <a class="footer_contact" href="https://www.gunner.online/contact">Contact Me</a>\
                       </div>\
                       ')
        console.log("The media page footer has been loaded and applied");
    }
    else if (type === "2016"){
        document.write('</div>\
                       <div id="category_border" id="footer" class="video">\
                       <span id="contact"> SFTG 2016-2020</span>\
                       <a class="footer_contact" href="https://www.gunner.online/contact">Contact Me</a>\
                       </div>\
                       ')
        console.log("The 2016 page footer has been loaded and applied");
    }
    else if (type === "progsoc"){
        document.write('</div>\
                       <div id="category_border" id="footer" class="video">\
                       <span id="contact">Programming Society 2017-2020</span>\
                       </div>\
                       ')
        console.log("The progsoc page footer has been loaded and applied");
    }
    else {
        document.write('</div>\
                       <div id="category_border" id="footer" class="video">\
                       <span id="contact">SFTG 2017-2020</span>\
                       <a class="footer_contact" href="https://www.gunner.online/contact">Contact Me</a>\
                       </div>\
                       ')
        console.warn("Page type: " + type + " could not be identified. No copyright applied.")
    }
}
