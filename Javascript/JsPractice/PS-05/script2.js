// Creating a promise that resolves or rejects based on a random number
let promise = new Promise((resolve, reject) => {
    let val = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if (val > 5) resolve("Resolved with value: " + val);
        else reject("Rejected with value: " + val);
    }, 500);
})

promise.then((data) => console.log(data)).catch((err) => console.log(err));

// Using Fetch API to get random user data
fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => { console.log(data.results[0].name.first) })
    .catch(err => { console.error('Error fetching data:', err) });

// Using async/await to fetch multiple random users
async function abcd() {
    try {
        let result = await fetch('https://randomuser.me/api/?results=5');
        let data = await result.json();
        console.log(data.results);
        // return data;
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

abcd();