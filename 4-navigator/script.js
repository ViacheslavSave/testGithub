const addressLat = 10;
const addressLong = 14;
const positionLat = 55;
const positionLong = 70;
const res = Math.sqrt(Math.pow(addressLat - addressLong, 2) + Math.pow(positionLat - positionLong, 2)).toFixed(2);
console.log("Расстояние " + res);
