/* 1) Display the list of items available on the page using template literals `` and .forEach 
Creating the Global variables */
 var items = []


/*0) Get all the products from the API using a fetch*/
window.onload = ()=> {
    fetch("https://api.myjson.com/bins/18fh4d")
    .then(response =>{
    if(response.ok) {//if response contains the status 200(from Postman)then only it will passthrough
     return response.json();
                     }
}).then(json =>{
   items = json ; //initialize the item which is equal to Json which has the objects
    displayItems(json);// the funtion will take the parameters of Json the whole array
})
.catch(error =>console.log("there is error" + error));// if the respone is not true then we get this error
};

const displayItems = listOfItems =>{
console.log(listOfItems);
const row = document.querySelector(".row.main")
listOfItems.forEach(current =>{  //forEach just loops each item on an array
let col = document.createElement("div")// margin-bottom mb-4
col.classList.add("col-md-4", "mb-4") // The className property of the Element interface gets and sets the value of the class attribute of the specified element.
//creating content dynamically using template literals in "col"
col.innerHTML +=`
          <div class="card-header" style="height:180px;">
          <p class="card-title h-100"><strong>${current.title}</strong><p>
          </div>
          <img class="img-fluid card-img-top" src="${current.img}" alt="item_img" height="210">
            <div class="card-body border-top pb-0">
            <div class="d-flex justify-content-between align-items-baseline">
              <p class="card-text">
                <strong>Price</strong> :$${current.price}
              </p>
              <div class="d-inline-block">
            <button type="button" id="skip" class="btn btn-sm btn-outline-dark">
              Skip
            </button>
              <button type="button" id="addToCart" class="btn btn-sm btn-outline-dark">
                    Add to cart
              </button> 
                </div>
             </div>
            </div>
          </div>`
row.appendChild(col);
});
} ;