var username = document.querySelector('.login_email');
var password = document.querySelector('.password_email');
var btn_login = document.querySelector('#btn_login');


var user_account = "out";
function login() {
    if (username.value === "admin" && password.value === "123") {
        var user_account = "in";
        localStorage.setItem('user_account', user_account)
        console.log("done login")
        text = user_account;
        alertbox(text);

        // setTimeout(()=> {
        //     alert('done login');
        // }, 2500);
        // window.location = 'index.html';
        // window.location = 'http://127.0.0.1:5500/';
    }
    else{
        var user_account = "out";
        localStorage.setItem('user_account', JSON.stringify(user_account))
        text = user_account;
        alertbox(text)
        // alert('no login yeit')
    }
    
}