/*static user acc*/
var email = "gic@gmail.com";
var password = "Gic123";

/*function to get cookie value by name*/
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

/*function login*/
function login(){
    /*set cookie*/
    var date = new Date();
    date.setTime(date.getTime()+(30*1000));
    document.cookie="email=gic@gmail.com;expires="+date.toUTCString();
    
    /*check user acc*/
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // console.log(email, password);
    if(this.email === email && this.password === password && document.cookie === "email=gic@gmail.com") {
        location.href="./home.html" ;
    }
}

/*function logout button*/
function logout(){
    location.href = "./index.html";
}

/*function for reload home page when cookie is expired*/
function cookieExpired(){
    var cookieValue = getCookie("email");
    if(cookieValue != "gic@gmail.com"){
        location.href = "./index.html";
    }
}