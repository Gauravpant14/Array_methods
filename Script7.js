const pickListItems = [
    {
        "_id": "60cb22533be1510018567449",
        "cost": "0.00",
        "status": "open",
        "description": "Cozy up in front of the fire with this Real Flame Kennedy 8070E-DE electric fireplace, which heats rooms up to 625 sq. ft. with up to 5,100 BTUs of power. The programmable thermostat offers 7 heat settings, so you can find the ideal temperature.",
        "image_url": "https://pn-inv-staging.s3.us-west-2.amazonaws.com/inv_01/uploads/attachments/1000/att_2123_Inventory_5bc0fa44df40a.png",
        "quantity": 2,
        "sku": "INV1237932",
        "upc_code": null,
        "website": null,
        "project_id": null,
        "category_id": 196,
        "title": "Electric Fireplace",
        "type": "inventory",
        "item_id": 3134,
        "order_request_id": "60cb22533be1510018567448",
        "status_history": [
            {
                "status": "open",
                "updated_by": 10,
                "created_at": "2021-06-17T10:22:11.861Z",
                "updated_at": "2021-06-17T10:22:11.861Z"
            }
        ],
        "updated_by": 10,
        "created_at": "2021-06-17T10:22:11.864Z",
        "updated_at": "2021-06-17T10:22:11.864Z",
        "__v": 0,
        "locations": [
            {
                "id": 8088,
                "name": "Unassigned",
                "quantity": 475
            },
            {
                "id": 8089,
                "name": "Unassigned",
                "quantity": 0
            }
        ]
    }
]




function filteredArray(){
const quantityRequest = pickListItems.map((e) => e.quantity);
const location = pickListItems.map(({locations}) =>
  locations.map((e) => e.quantity),
);
const quantityAvailable = location.flat();
for (const element1 of quantityRequest) {
  for (const element2 of quantityAvailable) {
    // if (element1 > element2) {
    //   orderReqAlert(true);
    // } else {
    //   orderReqAlert(false);
    // }
    console.log(element1,"this is first elememt")
    console.log(element2,"this is element 2nd")
  }
}}