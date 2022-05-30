// Add the coffee to local storage with key "coffee"
 

async function getData(){
    try{
        const url = "https://masai-mock-api.herokuapp.com/coffee/menu";
        let res = await fetch(url);
        let coffee = await res.json();
        appendCoffee(coffee.menu.data)
    }

    catch(error){
        console.log(error);
    }
    
}

getData();

let menu = document.getElementById("menu");
function appendCoffee(data){
    

    data.forEach(function(el){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;


        let h3 = document.createElement("h3");
        h3.innerText = el.title;

        let price = document.createElement("h3");
        price.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = "Add to Basket";
        btn.setAttribute("id", "add_to_bucket")

        div.append(img, h3, price, btn);
        menu.append(div);

    })
}

// document.querySelector("#add_to_bucket").addEventListener("click", addToBasket);
// addBucket.addEventListener("click", addToBasket);

document.querySelector("#menu").addEventListener("click", addToBasket);


let value = 0;
function addToBasket(){
    let bucket = document.getElementById("coffee_count");
    value++;
    bucket.innerText = value;
    
}
 


