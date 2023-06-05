// "use strict"

// let BMW={
//     marka:"BMW",
//     model:"m5",
//     price:95000,
//     year:2023
// }

// let Mercedes={
//     marka:"Mercedes",
//     model:"E 63 AMG",
//     price:120000,
//     year:2023
// }

// function changeSelect()
// {
//     let marka=document.getElementById("marka");
//     let model=document.getElementById("model");
//     let price=document.getElementById("price");
//     let year=document.getElementById("year");

//     marka.innerHTML=this.marka;
//     model.innerHTML=this.model;
//     price.innerHTML=this.price;
//     year.innerHTML=this.year;
// }

// changeSelect.call(BMW);
// changeSelect.call(Mercedes);

// "use strict";

// let BMW = {
//   marka: "BMW",
//   model: "m5",
//   price: 95000,
//   year: 2023,
// };

// let Mercedes = {
//   marka: "Mercedes",
//   model: "E 63 AMG",
//   price: 120000,
//   year: 2023,
// };

// function changeSelect(selectedCar) {
//   function carInfo(car) {
//     let markaSpan = document.getElementById("marka");
//     let modelSpan = document.getElementById("model");
//     let priceSpan = document.getElementById("price");
//     let yearSpan = document.getElementById("year");

//     markaSpan.innerText = this.marka;
//     modelSpan.innerText = this.model;
//     priceSpan.innerText = this.price;
//     yearSpan.innerText = this.year;

//     if (selectedCar === "BMW") {
//       carInfo(BMW);
//     } else if (selectedCar === "Mercedes") {
//       carInfo(Mercedes);
//     }
//   }
//   carInfo.call(BMW);
//   carInfo.call(Mercedes);
// }


let BMW = {
    marka: "BMW",
    model: "m5",
    price: 95000,
    year: 2023
  };

  let Mercedes = {
    marka: "Mercedes",
    model: "E 63 AMG",
    price: 120000,
    year: 2023
  };

  function changeSelect(selectedCar) {
    function carInfo() {
      let markaSpan = document.getElementById("marka");
      let modelSpan = document.getElementById("model");
      let priceSpan = document.getElementById("price");
      let yearSpan = document.getElementById("year");
  
      markaSpan.innerText = this.marka ;
      modelSpan.innerText = this.model ;
      priceSpan.innerText = this.price ;
      yearSpan.innerText = this.year ;
    }

    if (selectedCar === "BMW") {
        carInfo.apply(BMW);
      } else if (selectedCar === "Mercedes") {
        carInfo.apply(Mercedes);
      }
    
  }