'use strict';

let cookieHut = document.getElementById('cookie-Hut');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  }
  console.log(`total: ${this.totalCookies}`)
},
render: function(){
  this.calcCookies();

  let articleElem = document.createElement('article');
  articleElem.textContent = this.city;
  cookieHut.appendChild(articleElem);

  let ulElem = document.createElement('ul');
  cookieHut.appendChild(ulElem);

  for(let i = 0; i < this.cookiesBoughtPerHour.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies!`;
    ulElem.appendChild(liElem);
}

let liElem = document.createElement('li');
liElem.textContent = `Total; ${this.totalCookies} cookies!`;
ulElem.appendChild(liElem);

}
},
tokyo.render();
