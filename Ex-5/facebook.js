let index_username = ["admin1" , "admin2" , "admin3" , "admin4" , "admin5" , "admin6" , "admin7" , "admin8" ,];
let index_password = ["admin1" , "admin2" , "admin3" , "admin4" , "admin5" , "admin6" , "admin7" , "admin8" ,];

let elm_login = document.getElementById("login");
let elm_form = document.getElementById("form_login");
let elm_username = document.getElementById("username");
let elm_password = document.getElementById("password");

// elm_login.addEventListener("mouseenter", function() {
//     alert("Clicked")
// })

elm_form.addEventListener("submit", function(event) {
    //alert("Submitted")

    event.preventDefault();
    // console.log(elm_username.value);
    // console.log(elm_password.value);

    let username = elm_username.value;
    let flag = false;
    let length =  index_username.length;
    for ( let i = 0; i < length; i++) {
        if( username == index_username[i]) {
            let password = elm_password.value;
            if (password == index_password[i]){ 
                alert("Login Success!");
            }
            else {
                alert("Wrong Password!");
            }
            flag = true;
            break;
        }
    }
    if (flag == false) {
        alert("Didn't Create An Account");
    }
})

