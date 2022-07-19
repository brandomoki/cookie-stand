'use strict';

let cookieHut = document.getElementById('cooki-Hut');
let salesTables = document.getElementById('sales-table');

let shopAnalytics = [];

function ShopData(city, minCust, maxCust, avgCookieSale){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.cookiesPerHour;

  shopAnalytics.push(this);
}

let seattle = new ShopData('Seattle', 23, 65, 6.3);
let tokyo = new ShopData('Tokyo', 3, 24, 1.2);
let dubai = new ShopData('Dubai', 11, 38, 3.7);
let paris = new ShopData('Paris', 20, 38, 2.3);
let lima = new ShopData('Lima', 2, 16, 4.6);

