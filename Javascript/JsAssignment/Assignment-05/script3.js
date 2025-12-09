// Exercise 1
function afterDelay(time, cb) {
    setTimeout(() => {
        cb();
    }, time);
}

afterDelay(500, function () {
    console.log("This message is shown after 0.5 seconds, callback executed!");
});

// Exercise 2
function getUser(username, cb){
    console.log("Fetching user details...");
    setTimeout(() => {
        cb({ username: username, id: Math.floor(Math.random() * 10) });
    }, 1000);
}

function getUserPosts(userId, cb){
    console.log(`Fetching user ${userId} posts...`);
    setTimeout(() => {
        cb(['Post 1', 'Post 2', 'Post 3']);
    }, 1500);
}

getUser("jslearner", function(user){
    console.log("User Details:", user);
    getUserPosts(user.id, function(posts){
        console.log("User Posts:", posts);
    })
});

// Exercise 3
function loginUser(username, password, cb) {
    console.log("Logging in user...");
    setTimeout(() => {
        cb({ username: username, id: 1 });
    }, 1000);
}

function fetchPermissions(userId, cb) {
    console.log("Fetching permission");
    if (userId) {
        setTimeout(() => {
            cb(['read', 'write', 'delete']);
        }, 2000)
    } else{
        console.log("Invalid User")
        cb([]);
    }
}

function loadDashboard(permission, cb) {
    console.log("Loading dashboard...");
    if (permission.length > 0) {
        setTimeout(() => {
            cb();
        }, 3000)
    }
    else {
        console.log("You have no permission")
    }
}

loginUser("Subastral", "sub123", function (userDetails) {
    console.log("User detail: ", userDetails);
    fetchPermissions(userDetails.id, function (permission) {
        console.log("Permissions: ", permission)
        loadDashboard(permission, function(){
            console.log("Dashboard Loaded");
        });
    })
})