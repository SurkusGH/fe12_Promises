function TimeoutA() {
    console.log('Labas');
    setTimeout(() => {
      console.log('labas_delay2000ms');
    }, 2000);
    setTimeout(() => {
        console.log('labas_delay3000ms');
      }, 3000);
    setTimeout(() => {
      console.log('labas_delay4000ms');
    }, 4000);    
  }

function TimeoutB(){
    console.log('Vakaras');
    setTimeout(() => {
      console.log('vakaras_delay2500ms');
    }, 2500);
    setTimeout(() => {
        console.log('vakaras_delay3500ms');
      }, 3500);
    setTimeout(() => {
      console.log('vakaras_delay4500ms');
    }, 4500);    
  }

//TimeoutA();
//TimeoutB();

const message = 'Alert!'
let pTag = document.querySelector('#pTag');

function Sync(){
    pTag.textContent = message
    alert(message)
    pTag.style.backgroundColor = "lightgreen"
}

function Async(){
    pTag.textContent = message
    pTag.style.backgroundColor = "lightgreen"
    setTimeout(() => {
        alert(message)
      }, 3000);
}

//Sync();
//Async();

// let prom = new Promise((resolve, reject) => {
//     let num = Math.random();
//     if (num < 0.5) {
//       resolve(num);
//     } else {
//       reject("Ohhh noooo! Rejected: " + num);
//     }
//   });
//   prom
//   .then((data) => {
//     if (!isNaN(data)) {
//       return data + 1;
//     }
//   })
//   .then((res) => console.log(res))
//   .catch((error) => {
//     console.log(error);
//   })

function PizzaWOPineapple(toppings){
    let prom = new Promise((resolve, reject) => {
        if (toppings != "pineapple") {
          resolve(`There you go: pizza with ${toppings}`);
        } else {
          reject(`${toppings}?! Its no longer a pizza!`);
        }
      });
    prom
        .then((data) => console.log(data))
        .catch((data) => console.log(data))
}

PizzaWOPineapple("Ham")
PizzaWOPineapple("pineapple")
