const items = [ {name:'car' ,price:100,id:1},
                {name:'bike' ,price:1000,id:2},
                {name:'petrol' ,price:999,id:3},
                {name:'diesel' ,price:6700,id:4},
                {name:'Mittitel' ,price:9054,id:5},
                {name:'tel' ,price:666,id:6}
            ]

const container = document.querySelector(".container")            
const searchBox = document.getElementById("search-Bar")
const searchBtn = document.getElementById("btn")

const mappedData = items.map((e) => {return(
    `<div> 
    ${e.name}<button id=${e.id} class="deleteBtn">Delete</button>  </div>`
)}
   
).join('')

// console.log(mappedData)

container.innerHTML =(mappedData)
const deleteBtns = document.querySelectorAll(".deleteBtn");

let arr = []
deleteBtns.forEach(element => {
    
element.addEventListener('click',async(e)=>{
    const id = e.target.id
    console.log(id)
   const filteredItems =  items.filter((item) => {
        return item.id != id
    })
   

  await arr.push(filteredItems);

  console.log(arr)
   
})
});



 








// searchBtn.addEventListener('click',function(){
//     const filteredItem = items.filter((item) => {
//         return item.name !== searchBox.value
//     }).map((e) => e.name)

//     container.append(filteredItem)
// })





// container.append(filteredItem)

const clickMe = () => {
    
    console.log("ggdfgd")
    
    
}

