import circle from "./app.js";
import box from "./test.js";

let parent = () => {
    return React.createElement('div', {id: 'parent'}, [circle(), box()], "I am parent");
}

export default parent;