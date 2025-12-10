class YoutubeChannel {
    constructor(channelName) {
        this.channelName = channelName
        this.subscribers = [];
    }

    subscriber(user) {
        this.subscribers.push(user);
        user.update(`you have subscribed ${this.channelName}`);
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(sub => sub !== user);
        user.update(`you have un-subscribed ${this.channelName}`);
    }

    notify(message) {
        this.subscribers.forEach(sub => sub.update(message));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(`${this.name} ` + message)
    }
}

const channel1 = new YoutubeChannel("AlokDevJourney");
const channel2 = new YoutubeChannel("Alok Rider");
const user1 = new User("Alok");
const user2 = new User("Subastral");
const user3 = new User("Arsh");
const user4 = new User("Roy");

channel1.subscriber(user1);
channel1.subscriber(user2);
channel2.subscriber(user3);
channel2.subscriber(user4);
channel1.notify("new post is out...");
channel2.unsubscribe(user4);
channel2.notify("new post is out...");
