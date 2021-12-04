function greeting() {
  console.log("salom");
}

// ordinary
function driveCar(tezlik) {
  console.log("mashina yurdi tezligi: ", tezlik);
}

// anonim
const driveCar1 = function () {
  console.log("mashina yurdi");
};

// arrow
const driveCar2 = () => {
  console.log("mashina yurdi");
};

// (function driveCar() {
//   console.log("mashina yurdi");
// })();

function stopCar() {
  console.log("mashina tuhtadi");
}

greeting();
setTimeout(() => {
  driveCar(750);
}, 2000);
