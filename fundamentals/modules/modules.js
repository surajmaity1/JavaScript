function User() {
    var username, password;

    function doLogIn(usr, pwd) {
        username = usr;
        password = pwd;

        if (username && password) {
            if (username.length > 5 && password.length > 6) {
                console.log("login successful");
            } else {
                console.log("login failed");
            }
        }

    }

    var publicApi = {
        login: doLogIn
    }

    return publicApi;
}

var suraj = User();
// suraj.doLogIn(); // not accessible
// console.log(suraj.username, suraj.password); // not accessible

suraj.login("surajmaity", "123123123");