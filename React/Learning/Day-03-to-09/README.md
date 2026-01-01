# ⚛️ React Day 03–09: Image Gallery with Axios

## 📌 What I Built
A responsive image gallery that fetches photos from an API and allows navigation.

## 🎯 Key Concepts Learned
- **API Calls with Axios**: Fetched images from Picsum Photos API
- **State Management**: Used `useState` for tracking current position and image data
- **Array Methods**: `.slice()` to show 4 images at a time, `.map()` to extract URLs
- **Navigation Logic**: Prev/Next buttons with boundary checks

## 🛠️ Tech Stack
- React 19
- Axios for API calls
- Tailwind CSS for styling
- Vite for dev environment

## 🧠 Core Logic
```javascript
const [currentIndex, setCurrentIndex] = useState(0);
const [images, setImages] = useState([]);
const visibleCount = 4;

async function getImages() {
  let res = await axios("https://picsum.photos/v2/list?limit=10");
  setImages(res.data.map((user) => user.download_url));
}

const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

function handleNext() {
  if (currentIndex + visibleCount < images.length) {
    setCurrentIndex(currentIndex + 1);
  }
}

function handlePrev() {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
}
```

## 🚀 What's Next
- Add loading states
- Error handling for failed API calls
- Infinite scroll or pagination



