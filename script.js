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

    favouriteMedia.forEach(mediaItem => {
        //Create an element but do not display it yet
        let newListItem = document.createElement("li");

        //Assign some data
        newListItem.textContent = mediaItem;
        newListItem.id = mediaItem;

        let removeItemButton = document.createElement("button");
        removeItemButton.onclick = (() => removeItemFromList(mediaItem));
        removeItemButton.textContent = "Remove item";

        new newListItem.appendChild(removeItemButton);

        // Add the element to the visible page
        rootUlNode.appendChild(newListItem);
    });
}

function removeItemFromList(targetItem){
    let targetItemNode = documonet.getElementById(targetItem);
    if(targetItem){
        targetItemNode.parentNode.removeChild(targetItemNode);
    };
}