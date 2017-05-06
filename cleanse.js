function cleanse(){
    console.log("username: "+localStorage.username)
    console.log("adminPriv: "+localStorage.adminPriv)
    console.log("betaPriv: "+localStorage.betaPriv)
    console.log("name: "+localStorage.name)
    console.log("isLocal: "+localStorage.isLocal)
    console.log("directory: "+localStorage.directory)
    console.log("prevPage: "+localStorage.prevPage)
    delete localStorage.username
    delete localStorage.adminPriv
    delete localStorage.betaPriv
    localStorage.betaPriv = "false"
    delete localStorage.name
    delete localStorage.isLocal
    delete localStorage.directory
    delete localStorage.prevPage
    console.log("username: "+localStorage.username)
    console.log("adminPriv: "+localStorage.adminPriv)
    console.log("betaPriv: "+localStorage.betaPriv)
    console.log("name: "+localStorage.name)
    console.log("isLocal: "+localStorage.isLocal)
    console.log("directory: "+localStorage.directory)
    console.log("prevPage: "+localStorage.prevPage)
    //delete localStorage
    alert("Operation complete.")
    window.location.href = "../index.html"
}
