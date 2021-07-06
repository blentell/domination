// Puts a line through the first li in the argument ul =========================
function strikeThrough() {
    const strike = document.querySelector('li:first-child');
    strike.style.textDecoration = 'line-through';
}

strikeThrough();


// Sets images on the page by id with a url ====================================
function setImage(id, url) {
    const callImg = document.querySelector(id).src = url;
}

setImage(
	"#image-1",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSld-0C1eJWWqAbxQ9Cud3QM3dBoPXyM0QzJg&usqp=CAU"
);

setImage(
	"#image-2",
	"https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T347A4MPA2978PT17X16Y18D1020872594FS2307/views/1,width=550,height=550,appearanceId=4,backgroundColor=00224C,noPt=true/eat-sleep-code-funny-coding-programming-nerd-geek-womens-t-shirt.jpg"
);

setImage(
	"#image-3",
	"https://ih1.redbubble.net/image.1302749985.7119/fposter,small,wall_texture,product,750x1000.jpg"
);


//Remove the first li in the arguments UL ======================================
// this does what I want, but not sure it is totally correct ===================
function removeFirstLi() {
    const removeFirst = document.querySelector('li:first-child');
    removeFirst.remove();
}
removeFirstLi();
removeFirstLi();

// Changes font size by ID name ================================================
function changeSize(id, size) {
    const changeSize = document.querySelector(id);
    changeSize.style.fontSize = size;
}

changeSize('#thing-2', '28px');

// Didn't like this one, apparently can't .src right after creating an element =

function passDOM(domElement) {
    const element = document.querySelector("#arguments");
    element.appendChild(domElement);
}
const newArg = document.createElement("img")
    newArg.src = "https://opensas.files.wordpress.com/2013/06/32021684.jpg";

passDOM(newArg);

// changes the size of an image to 30px ========================================
function picHeight(element) {
    const pickImg = document.querySelector(element);
    pickImg.style.height = "30px";
}

picHeight('#image-3');

// Who wouldn't want to be invisible? ==========================================
function makeInvisible(element) {
    const addInvisible = document.querySelector(element);
    addInvisible.className = 'invisible';
}

makeInvisible('#heading');

// adds a new li with some text ================================================
function addText(text) {
    const li = document.createElement('li');
    li.innerText = text;
    return li;
}

const newLi = addText('Whodunit?');
passDOM(newLi);

// strings, strings everywhere =================================================
function newHeader(size, text) {
    // const addNewHeader = document.querySelector('h1');
    const addNewHeader = document.createElement(`h${size}`);
    addNewHeader.innerText = text;
    return addNewHeader;
    
}
const callFunction = newHeader(2, 'NEW HEADER');
passDOM(callFunction);