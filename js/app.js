'use strict';

let cookieHut = document.getElementById('cookie-Hut');
let salesTables = document.getElementById('sales-table');

function randomCustomers(min,max){
  console.log(min, max, Math.floor(Math.random() * (max - min + 1) + min));
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let shopAnalytics = [];

function ShopData(city, minCust, maxCust, avgCookieSale){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  // this.calcCookies();

  shopAnalytics.push(this);
}

let seattle = new ShopData('Seattle', 23, 65, 6.3);
let tokyo = new ShopData('Tokyo', 3, 24, 1.2);
let dubai = new ShopData('Dubai', 11, 38, 3.7);
let paris = new ShopData('Paris', 20, 38, 2.3);
let lima = new ShopData('Lima', 2, 16, 4.6);

ShopData.prototype.calcCookies = function(){
  for (let i = 0; i < this.hours.length; i++){
    this.cookiesPerHour[i] = Math.floor(randomCustomers(this.minCust, this.maxCust) * this.avgCookieSale);
    this.totalCookies += this.cookiesPerHour[i];
  }
};
// console.log(seattle);



ShopData.prototype.calcCookies(this.cookiesPerHour);





//********** Methods */
// ShopData.prototype.render = function(){
  // console.log('hey');
let theadElem = document.createElement('thead');
cookieHut.appendChild(theadElem);
//  }
  
//   let th1Elem = document.createElement('th');
//   th1Elem.textContent = this.city;
//   theadElem.appendChild(th1Elem);
// // adding hours

//   for(let i = 0; i < this.hours.length; i++){
//     let td1Elem = document.createElement('td');
//     td1Elem.textContent = this.cookiesPerHour[i];
//     theadElem.appendChild(td1Elem);
//   }
// };

// ShopData.prototype.renderBody = function(){
//   let tbodyElem = document.createElement('tbody');
//   cookieHut.appendChild(tbodyElem);

//   let th2Elem = document.createElement('th');
//   tbodyElem.appendChild(th2Elem);
// }


function renderShops(){
  for(let i = 0; i < shopAnalytics.length; i++){
    let currentShops = shopAnalytics[i];
    // currentShops.render();
  }
  // this.renderHeader();
}
renderShops();

