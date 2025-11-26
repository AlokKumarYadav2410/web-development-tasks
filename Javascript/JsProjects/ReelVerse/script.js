const reels = [
       {
        username: "fitnessbymegha",
        isMuted: true,
        likeCount: 27450,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption: "No gym? No problem. Do this 12-min workout at home.",
        video: "./assets/video1.mp4",

        userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },

    {
        username: "designbysan",
        isMuted: true,
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "./assets/video2.mp4",

        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        username: "frontend.ninja",
        isMuted: true,
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "When flexbox finally aligns the way you wanted 😭🔥",
        video: "./assets/video3.mp4",

        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        username: "travelwithriya",
        isMuted: true,
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "My solo Bali trip changed everything 🌴",
        video: "./assets/video4.mp4",

        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        username: "daily.dev.quotes",
        isMuted: true,
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: "./assets/video5.mp4",

        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
     {
        username: "codewithayush",
        isMuted: true,
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "./assets/video6.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "streetfoodlover",
        isMuted: true,
        likeCount: 68000,
        isLiked: true,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption: "You won’t believe this burger exists 🤯🍔",
        video: "./assets/video1.mp4",

        userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    {
        username: "musicbytara",
        isMuted: true,
        likeCount: 14500,
        isLiked: false,
        commentCount: 267,
        shareCount: 73,
        isFollowed: true,
        caption: "Late night vibes // piano version 🎹✨",
        video: "./assets/video2.mp4",

        userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    },
    {
        username: "techreviews101",
        isMuted: true,
        likeCount: 23180,
        isLiked: true,
        commentCount: 481,
        shareCount: 120,
        isFollowed: false,
        caption: "The most underrated smartphone of 2024 📱",
        video: "./assets/video3.mp4",

        userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
    },
    {
        username: "learnanimations",
        isMuted: true,
        likeCount: 18740,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: true,
        caption: "GSAP can literally change your career. Start today.",
        video: "./assets/video4.mp4",

        userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
];

let allReels = document.querySelector('.all-reels');

function addReels() {
    let sum = "";
    reels.forEach((item, index) => {
        sum += `  <div class="reel">
        <video src="${item.video}" autoplay ${item.isMuted ? "muted" : ""} loop></video>
        <div id="${index}" class="mute">
             ${item.isMuted ? `<i class="ri-volume-mute-fill"></i>` : `<i class="ri-volume-up-fill"></i>`}
         </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${item.userprofile}" alt="">
                            <h4>${item.username}</h4>
                            <button id="${index}" class="follow">${item.isFollowed ? "Unfollow" : "Follow"}</button>
                        </div>
                        <h3>${item.caption}</h3>
                    </div>
                    <div class="right">
                        <div id="${index}" class="like">
                            <h4 class="like-icon">${item.isLiked ? `<i class="ri-heart-3-fill love"></i>` : `<i class="ri-heart-3-line"></i>`}</h4>
                            <h6>${item.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${item.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${item.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`;
    });
    allReels.innerHTML = sum;
}
addReels();

allReels.addEventListener('click', (event) => {
    if (event.target.className === "like") {
        if (!reels[event.target.id].isLiked) {
            reels[event.target.id].likeCount++;
            reels[event.target.id].isLiked = true;
            addReels();
        } else {
            reels[event.target.id].likeCount--;
            reels[event.target.id].isLiked = false;
            addReels();
        }
    }

    if (event.target.className === "follow") {
        if (!reels[event.target.id].isFollowed) {
            reels[event.target.id].isFollowed = true;
            addReels();
        } else {
            reels[event.target.id].isFollowed = false;
            addReels();
        }
    }

    if( event.target.className === "mute") {
        console.log("clicked")
        if( !reels[event.target.id].isMuted) {
            reels[event.target.id].isMuted = true;
            addReels();
        } else {
            reels[event.target.id].isMuted = false;
            addReels();
        }
    }
});

