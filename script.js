let favouriteMedia = [
	"pokemon",
	"digimon",
	"supernatural",
	"sherlock",
	"doctor who",
	"parks & recreation",
	"marvel",
	"harry potter",
	"barbie",
	"yugi-oh",
	"oppenheimer",
	"dragonball z"
];

function exampleHello(){
    console.log("hello world");
}

function createListOfMedia(){

    let rootUlNode = document.querySelector("ul");

    rootUlNode.innerHTML = "";

    favouriteMedia.forEach(mediaItem => {
        //Create an element but do not display it yet
        let newListItem = document.createElement("li");

        //Assign some data
        newListItem.textContent = mediaItem;
        newListItem.id = mediaItem;

        let removeItemButton = document.createElement("button");
        removeItemButton.onclick = (() => removeItemFromList(mediaItem));
        removeItemButton.textContent = "Remove item";

        newListItem.appendChild(removeItemButton);

        // Add the element to the visible page
        rootUlNode.appendChild(newListItem);
    });
}

function removeItemFromList(targetItem){
    let targetItemNode = document.getElementById(targetItem);
    if (targetItem){
        //targetItemNode.parentNode.removeChild(targetItemNode);

        //modify array
        favouriteMedia = favouriteMedia.filter(item => {
            if (!item || item == "" || item !== targetItem) {
                return true;
            } else {
                false;
            }
        });

        createListOfMedia();
    };
}

function addItemToList(event, targetID) {
    event.preventDefault();

    console.log("we tried to add an item to the list!");

    let realInputField = document.getElementById(targetID);
    let newItemName = realInputField.value;
    if(newItemName){
        console.log("newItemName is :" + newItemName);
        // add item to list
        favouriteMedia.push(newItemName);

        // generate a new list
        createListOfMedia();
    } else {
        console.warn("Attempted to add an empty item");
        console.error("Example error")
    }
};

// let realFormSubmitButton = document.getElementById("real-formsubmit");
// realFormSubmitButton.addEventListener("click", (event) => addItemToList(event, "real-nameinput"));
//functionName() runs immediately

// helper text id: real-texthint

function inputHelperOnFocus(targetId) {
    let helperElement = document.getElementById(targetId);
    console.log("showing text hint now");
    helperElement.style.display = "inherit";
}

function inputHelperOnBlur(targetId) {
    let helperElement = document.getElementById(targetId);
    console.log("hiding text hint now");
    helperElement.style.display = "none";
}

let realFormTextInput = document.getElementById("real-nameinput");
realFormTextInput.addEventListener("focusin", ()=> {inputHelperOnFocus("real-texthint")});
realFormTextInput.addEventListener("focusout", ()=> {inputHelperOnBlur("real-texthint")});
inputHelperOnBlur("real-texthint");

let pseudoFormTextInput = document.getElementById("pseudo-nameinput");
pseudoFormTextInput.addEventListener("focusin", ()=> {inputHelperOnFocus("pseudo-texthint")});
pseudoFormTextInput.addEventListener("focusout", ()=> {inputHelperOnBlur("pseudo-texthint")});
inputHelperOnBlur("pseudo-texthint");

let pseudoFormButton = document.getElementById("pseudo-formsubmit");
pseudoFormButton.addEventListener("click", (event) => {addItemToList(event, "pseudo-nameinput")});