
    function comparePassword(){
        let pass1 = document.getElementById("pw1").value;
        let pass2 = document.getElementById("pw2").value;
        if (pass1 === pass2){
            alert("form entries were sent to the server")
        } else {
            alert("password does not match.....");
        }
    }