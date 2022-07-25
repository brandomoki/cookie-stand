'use strict';

const salesTables = document.getElementById('sales-table');

let myForm = document.getElementById('myForm');

// let shopArray = ['seattle', 'tokyo', 'dubai', 'paris', 'lima']

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let shopCookieAnalytics= [];
let shopAnalytics = [];

//***************constructor (properties)*******************************
function ShopData(city, minCust, maxCust, avgCookieSale){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.calcCookies();



  shopAnalytics.push(this);
}


// ********** Invoking our function


function randomCustomers(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// prototype method inherits from constructor ShopData
ShopData.prototype.calcCookies = function(){
  for (let i = 0; i < hours.length; i++){
    this.cookiesPerHour.push (Math.ceil(randomCustomers(this.maxCust, this.minCust) * this.avgCookieSale));
    this.totalCookies += this.cookiesPerHour[i];

  }
};

ShopData.prototype.totalCookieSum = function() {
  for (let i = 0; i < this.cookiesPerHour.length; i++){
    this.totalCookies += this.cookiesPerHour[i];
  }
  shopCookieAnalytics.push(this.totalCookies);
};

new ShopData('Seattle', 23, 65, 6.3);
new ShopData('Tokyo', 3, 24, 1.2);
new ShopData('Dubai', 11, 38, 3.7);
new ShopData('Paris', 20, 38, 2.3);
new ShopData('Lima', 2, 16, 4.6);


//this made it all work lets goo!;-)



// ****** header row city****************************************************

function renderHeader(){

  let th1Elem = document.createElement('thead');
  // let th2Elem = document.createElement('tbody');
  salesTables.appendChild(th1Elem);


  let tr1Elem = document.createElement('tr');
  th1Elem.appendChild(tr1Elem);
  let newCell = document.createElement('td');
  tr1Elem.appendChild(newCell);

  for(let i = 0; i < hours.length; i++){
    let td1Elem = document.createElement('td');
    td1Elem.textContent = hours[i];
    tr1Elem.appendChild(td1Elem);

  }
}


renderHeader();


ShopData.prototype.tableBodyRow = function(){

  let th2Elem = document.createElement('tbody');
  salesTables.appendChild(th2Elem);


  let tr1Elem = document.createElement('tr');
  th2Elem.appendChild(tr1Elem);
  let newCell = document.createElement('td');
  newCell.textContent = this.city;
  tr1Elem.appendChild(newCell);

  for(let i = 0; i < hours.length; i++){
    let td1Elem = document.createElement('td');
    td1Elem.textContent = this.cookiesPerHour[i];
    tr1Elem.appendChild(td1Elem);

  }

};
//************************************************************************ */
function renderFooter(){

  let tableFootElem = document.createElement('tfoot');

  salesTables.appendChild(tableFooter);


  let trFootElem = document.createElement('tr');
  tableFootElem.appendChild(trFootElem);

  let footerHead = document.createElement('th');
  footerHead.textContent = 'Total';
  trFootElem.appendChild(footerHead);

  for(let i = 0; i < hours.length; i++){
    let totalCookies = 0;
    for (let j = 0; j < shopAnalytics.length; j++){
      totalCookies += shopAnalytics[j].cookiesPerHour[i];
    }

    let footCell = document.createElement('th');
    footCell.textContent = totalCookies;
    trFootElem.appendChild(footCell);

  }
  let footerTotal = 0;
  for (let i = 0; i < shopAnalytics.length; i++){
    footerHead += shopAnalytics[i].totalCookies;
  }
  let footerCookieTotal = document.createElement('th');
  footerCookieTotal.textContent = footerTotal;
  trFootElem.appendChild(footerCookieTotal);
}




// console.table(shopAnalytics);
// shopAnalytics[0].tableBodyRow();
// shopAnalytics[1].tableBodyRow();

// shopAnalytics[2].tableBodyRow();
// shopAnalytics[3].tableBodyRow();
// shopAnalytics[4].tableBodyRow();


//******************* 1. grab the element **********************/


//******************* 3. define callback function **********************/
//**************** parseInt turn string to number the plus sign +  **************





function renderShops(){
  for(let i = 0; i < shopAnalytics.length; i++){
    let inputShops = shopAnalytics[i];
    inputShops.tableBodyRow();

  }
}

renderShops();



function handleSubmit(event){
  event.preventDefault();


  let nameCity = event.target.enterCity.value;
  // console.log(nameCity);
  let minCustomer = +event.target.enterMin.value;
  // console.log(minCustomer);
  let maxCustomer = +event.target.enterMax.value;
  // console.log(maxCustomer);
  let avgCustomer = +event.target.enterAverage.value;
  // console.log(avgCustomer);

  let newShop = new ShopData(city, minCust, maxCust, avgCookieSale);





  // shopAnalytics[0].tableBodyRow();
  // shopAnalytics[1].tableBodyRow();
  // shopAnalytics[2].tableBodyRow();
  // shopAnalytics[3].tableBodyRow();
  // shopAnalytics[4].tableBodyRow();


  // console.log(newShop);



  newShop.tableBodyRow();
  myForm.reset();

}

//******************* 2. attach eventListener **********************/




myForm.addEventListener('submit', handleSubmit);












//********** Methods */
//ShopData.prototype.renderShop = function(){
//   console.log('hey');
//  let theadElem = document.createElement('thead');
//  salesBody.appendChild(theadElem);
// };

//   let th1Elem = document.createElement('th');
//   th1Elem.textContent = this.city;
//   theadElem.appendChild(th1Elem);
// // adding hours



// ShopData.prototype.renderBody = function(){
//   let tbodyElem = document.createElement('tbody');
//   cookieHut.appendChild(tbodyElem);

//   let th2Elem = document.createElement('th');
//   tbodyElem.appendChild(th2Elem);
// }


// function renderShops(){
//   for(let i = 0; i < hours.length; i++){
//     let shopAnalytics = shopAnalytics[i].tableBodyRow;

//   }
// }


// }

// shopAnalytics.renderShop();
// for(let i = 0; i < hours.length; i++){
//   let td2Elem = document.createElement('td');
//   td2Elem.textContent = shopAnalytics[i].cookiesPerHour;
//   salesTables.append(td2Elem);
//
