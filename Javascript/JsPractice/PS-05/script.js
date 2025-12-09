let main = document.querySelector("main");

function fnc1(fnc2) {
    setTimeout(() => {
        console.log("This is function 1")
    }, 500);
    fnc2(function (fnc4) {
        setTimeout(() => {
            console.log("This is function 3")
        }, 1500);
        fnc4();
    });
}

fnc1(function (fnc3) {
    setTimeout(() => {
        console.log("This is function 2")
    }, 1000);
    fnc3(function () {
        setTimeout(() => {
            console.log("This is function 4")
        }, 2000);
    });
});

function getUserDetails(username, cb) {
    console.log("Fetching user details...")
    let id = Math.floor(Math.random()*10);
    setTimeout(() => {
        cb({ id: id, username: username, email: username + "@gamil.com" });
    }, 1000);
}

function getAllRepos(id, cb) {
    console.log("Fetching repos...")
    if (id % 2 === 0) {
        setTimeout(() => {
            cb(["Web Development", "Mobile App", "Reels Project"]);
        }, 1500);
    }
    else {
        setTimeout(() => {
            cb([]);
        }, 1500);
    }
}

function getRepoDetails(repoName, cb) {
    console.log("Fetching Repo details...")
    setTimeout(() => {
        cb([{ repoName: repoName[0], stars: 100, forks: 50 }, {repoName: repoName[1], stars: 200, forks: 80}, {repoName: repoName[2], stars: 300, forks: 150}]);
    }, 2000);
}

let names = ["subastral", "devmaster", "codewizard", "jsninja"];
let index = Math.floor(Math.random() * names.length);
getUserDetails(names[index], function (userDetails) {
    console.log("User Details:", userDetails);
    let h2 = document.createElement("h2");
    h2.innerText = `Welcome, ${userDetails.username}`;
    main.appendChild(h2);
    getAllRepos(userDetails.id, function (repos) {
        console.log("Repositories:", repos);
        let p = document.createElement("p");
        p.innerText = `You have ${repos.length} repositories.`;
        main.appendChild(p);
        if (repos.length > 0) {
            getRepoDetails(repos, function (repoDetails) {
                console.log("Repository Details:", repoDetails);
                let p2 = document.createElement("p");
                let span = document.createElement("span");
                span.classList.add("repo-header");
                p2.classList.add("repo");
                p2.innerHTML = `${repoDetails.map(repo => {
                    return `Repository Name: <span>${repo.repoName}</span>, Stars: <span>${repo.stars}</span>, Forks: <span>${repo.forks}</span><br />`;
                }).join('')}`;
                main.appendChild(p2);
            });
        } else{
            console.log("No repositories found for this user.");
        }
    })
})