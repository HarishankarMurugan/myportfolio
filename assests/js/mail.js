function sendMail(){
    var paramas = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_nr39her";
    const temaplateID = "template_otec9qb";
    
    emailjs
        .send(serviceID,temaplateID, paramas)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));

}