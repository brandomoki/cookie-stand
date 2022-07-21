'use strict';

let header = document.querySelector('#table');
let headerRow = document.createElement('tr');


let citiesArray = ['seattle', 'tokyo', 'dubai', 'paris', 'lima']

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

<<<<<<< HEAD
//***************constructor (properties)*******************************
function ShopData(minCust, maxCust, avgCookieSale){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.calcCookies();



  shopAnalytics.push(this);
}
// ********** Invoking our function
let shopAnalytics = [];

function randomCustomers(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// prototype method inherits from constructor ShopData
ShopData.prototype.calcCookies = function(){
  for (let i = 0; i < hours.length; i++){
    this.cookiesPerHour = Math.ceil(randomCustomers(this.maxCust, this.minCust) * this.avgCookieSale);
    // shopAnalytics.push();
    this.totalCookies += this.cookiesPerHour[i];
=======
// object literal
// key value pair
// console.log(seattle.name); call your object

let seattle = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  randomCustomerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  // creating variable with empty Array
  cookiesBoughtPerHour: [],

  totalCookies: 0,

  calcCookies: function(){ for(let i = 0; i < hours.length; i++){
    let cookiesJar = Math.round(this.avgCookieSale * this.randomCustomerPerHour()); // store random #
    this.cookiesBoughtPerHour.push(cookiesJar);
    this.totalCookies += cookiesJar;
  }
  console.log(this.totalCookies);
},

// ************* DOM MANIPULATION ************************ 

render: function(){
  this.calcCookies();
  let articleElem = document.createElement('article');
  articleElem.textContent = this.city;
  cookieHut.appendChild(articleElem);
// creating the element
  let ulElem = document.createElement('ul');
  cookieHut.appendChild(ulElem);
// looping for every hour cookiesBought and creating li
  for(let i = 0; i < this.cookiesBoughtPerHour.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies!`;
    ulElem.appendChild(liElem);
}
// this is the text content for this.totalCookies outside of the loop
let liElem = document.createElement('li');
liElem.textContent = `Total; ${this.totalCookies} cookies!`;
ulElem.appendChild(liElem);

}
},
// need to call this METHOD to render 
seattle.render();
randomCustomerPerHour

let tokyo = {
  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  randomCustomerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesBoughtPerHour: [],
  totalCookies: 0,

  calcCookies: function(){ for(let i = 0; i < hours.length; i++){
    let cookiesJar = Math.round(this.avgCookieSale * this.randomCustomerPerHour());
    this.cookiesBoughtPerHour.push(cookiesJar);
    this.totalCookies += cookiesJar;
>>>>>>> 08be83d3bf35263f146ada85b5d7f33c0cd130bb
  }
};



let seattle = new ShopData(23, 65, 6.3);
let tokyo = new ShopData(3, 24, 1.2);
let dubai = new ShopData(11, 38, 3.7);
let paris = new ShopData(20, 38, 2.3);
let lima = new ShopData(2, 16, 4.6);

//this made it all work lets goo!;-)





// ****** header row city
ShopData.prototype.render = function(){
  let salesTables = document.getElementById('myTable');
  let th1Elem = document.createElement('th');
  salesTables.append(th1Elem);



//   for(let i = 0; i < shopArray.length; i++){
//     let tr1Elem = document.createElement('tr');
//     tr1Elem.textContent = shopArray[i];
//     th1Elem.append(tr1Elem);
//   }
// };

// console.table(shopAnalytics);
// shopAnalytics[0].render();
// shopAnalytics[1].render();
// shopAnalytics[2].render();
// shopAnalytics[3].render();
// shopAnalytics[4].render();

// let th1Elem = document.createElement('th');
// th1Elem.innerText = this.city;
// theadElem.appendChild(th1Elem);


// ShopData.prototype.tableBodyRow = function(){
//   let salesBody = document.getElementById('sales-body');
//   let th2Elem = document.createElement('th');
//   salesBody.append(th2Elem);
//   for(let i = 0; i < hours.length; i++){
//     let td2Elem = document.createElement('td');
//     td2Elem.textContent = shopAnalytics[i].cookiesPerHour;
//     th2Elem.append(td2Elem);
//   }
// };


// shopAnalytics[0].tableBodyRow();


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

// let table = document.createElement('table');
// let headerRow = document.createElement('tr');

// ShopData.prototype.forEach(headerText => {
//   let header = document.createElement('th');
//   let textNode = document.createTextNode(headerText);
//   header.appendChild(textNode);
//   headerRow.appendChild(header);


// });
// header.appendChild(headerRow);

// function renderShops(){
//   for(let i = 0; i < shopAnalytics.length; i++){
//     let shopAnalytics = shopAnalytics[i];
//     shopAnalytics.render();
//   }
//   // this.renderShop();
// }
// renderShops();
// shopAnalytics.renderShop();