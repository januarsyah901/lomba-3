let searchBar = document.getElementById("searchBar")
console.log(searchBar.value)

let foodCards = document.getElementById("foodCards")


let foodCardsNodes = Array.from(foodCards.children)


if(searchBar.value != ""){
    filterFood(foodCardsNodes, searchBar.value)
}

function filterFood(nodes, searchBarValue){
    console.log("run!");
    if(searchBar.value != ""){
        nodes.forEach(element => {
            if (element.querySelector("h1").innerHTML.toLowerCase() !== searchBarValue.toLowerCase()) {
                element.classList.add("hidden")
            }
        });
    }
}


let button = document.querySelector(".search_icon")
console.log(button);


function searchFood(nodes, searchBarValue) {
    console.log("element clicked")
}

button.addEventListener("click", function () {
    foodCardsNodes.forEach(el => {
        el.classList.remove("hidden")
    })
    filterFood(foodCardsNodes, searchBar.value)
})




