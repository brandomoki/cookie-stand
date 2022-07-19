'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seatle = {
  city: 'Seatle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
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
},