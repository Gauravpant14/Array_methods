const items = [ {name:'car' ,price:100,id:1},
                {name:'bike' ,price:1000,id:2},
                {name:'petrol' ,price:999,id:3},
                {name:'diesel' ,price:6700,id:4},
                {name:'Mittitel' ,price:9054,id:5},
                {name:'tel' ,price:666,id:6},
                {name:'diesel' ,price:999,id:7}
            ]

// <---Filter Method --->

// const filterItems = items.filter((item) => {
//     return item.price <= 666
// })

// console.log(filterItems)


// <---Map Method --->

// const itemNames = items.map((e) => {
//     return e.name
// })

// console.log(itemNames);

// <---Find Method : find the first item --->

const foundItem = items.find((item) => {
    return item.name === 'diesel'
})

console.log(foundItem)