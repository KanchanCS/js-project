function validate() {
    var user = document.myform.fname.value;
    var pass = document.myform.password.value;
    var pass1 = document.myform.password1.value;

    //   console.log(user  +"  "+ pass)

    if (user == null || user == "") {
        //  alert("name should be neter")
        document.getElementById("d1").style.border = "3px solid red"
        document.getElementById("s1").innerHTML = "* name must be enter"
        document.getElementById("s1").style.color = "red"
        return false;
    } else
    if (pass.length < 8) {
        alert("password should have min 8 charecter")
        return false;

    } else
    if (pass !== pass1) {
        alert("enter same password")
        return false;
    }

}