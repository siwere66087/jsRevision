// let cars = [
//     {
 
//    "name":"boozer cars",
//    "carName":"bmw",
//    "carModel":"coops",
//    "year":2011,
//    "transmission":"manual"
 
 
 
//     } ,
 
 
//     {
 
//      "name":"boozer cars",
//      "carName":"mazdar",
//      "carModel":"hatchbag",
//      "year":2005,
//      "transmission":"manual"
   
   
   
//       } ,
//       {
 
//          "name":"boozer cars",
//          "carName":"audi",
//          "carModel":"spider",
//          "year":2022,
//          "transmission":"automatic"
       
       
       
//           } 
 
//  ]


// console.log(cars);

// let parsed_cars = JSON.parse(cars);



// var parsed_cars = JSON.parse(cars);

//NUM2


// fetch('json/index.json').then((response)=>{

//     console.log('resolved', response);
    
//     }).catch((error)=>{
//     console.log('rejected',error);
    
    
//     });




//     //NUM3
// let list = "";

// fetch('./json/index.json')
// .then(response => response.json())
// .then(json => {
//     console.log(json);
// })


// fetch('./json/index.json')



// conditions and switch(check against this thing) statement

   
// let x = 5;

// if ( x <= 10 && x <=20){
// console.log("true");

// }else if(x < 20){
  
//   console.log("met")
// }

// else{
//     console.log("false");
// }



//while loop

// // //counter
// let cnt = 0;

// //  while (cnt < 10){
// //    console.log(cnt);
// //    cnt++; //use increament to stop the loop
// //  }

// let numbers = [8,5,3,6];
// do{
  
//   console.log(numbers[cnt])
//   cnt++;
  
// }while(cnt < numbers.length);



// //while
// let price = 0;
// while(price <5 ){
//     console.log(price)
//       price++;
//     }



//form from html
//innerHtml: append a child to its parent
//innerText: 

// function addition(e){
// e.preventDefault();


// let numb1 =  document.querySelector('#numb1').value;

// let numb2 =  document.querySelector('#numb2').value;

// //output

// let output = document.querySelector('#output');


// output.innerText = eval(`${numb1} + ${numb2}`);
// }

// let output = document.querySelector('button');
// output.addEventListener('click', (e)=>{
// e.preventDefault();

//  let numb1 =  document.querySelector('#numb1').value;

// let numb2 =  document.querySelector('#numb2').value;

// //output

// let output = document.querySelector('#output');


// output.innerText = eval(`${numb1} + ${numb2}`);

// })



/*******************************
                unary operator
 ************************************** */

// // +x : Convert a string/value into a number
// let x = '10';
// let y = 6;

// console.log(+x + y); 


//REDUCE

// let numbers = [1,2,3,4,5];

// let sum = numbers.reduce((a, b)=>{
//     return a + b;
// })

// console.log

// (`sum: ${sum}`);

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);



//MAPPING: modifying an array

// let numbers = [1,2,3,4,5];

// let double = numbers.map((item)=>{

// return item*2

// })

// console.log("current array:", numbers)
// console.log("double",double);


//e.g2
// let numbers = [1,2,3,4,5];

//  for (let numbs of numbers){

// console.log(numbs *2);    
//  }

// let  people =[

//     {

//         id:1,
//         name:'siwe',
//         surname:'cele'
        
//     },
//     {

//         id:2,
//         name:'sivu',
//         surname:'mgi'
        
//     },
// ]



// console.table(people);
// let peopleName = people.map((item)=>{

//     return item.name;
// })

// console.log(peopleName);



//HOISTING

// addition(4,8);
// function addition(a,b){
// console.log(a+b);


// }




//REST OPERATOR


//activity//filter allow us to search for something
 
// function addition (...args){
//     let sum = args.filter(Number).reduce((a,b)=>{
//       return a+ b;
//     })
//     console.log(sum);
//     //console.log(args);
//   }
  
//   addition(1,2,'joel',3,4);
  
  
  
  

// Fetch API
//post: pushing data into your array
//

// fetch('/json/data.json')
// .then((res)=>{

// return res.json();

// })
// .then((data)=>{

// let results = data.results;

// // console.table(results);0
// })//returning data from the json


//Fetch API
//=======
fetch('../json/data.json')
.then((res)=>{
    return res.json();
})
.then( (data)=>{
    let results = data.results;
    console.table(results);
})
//

//keys:

fetch('https://api.chucknorris.io/jokes/random')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    let tbody = document.querySelector('tbody');
    Object.keys(data).forEach( (item)=>{
        if(data[item].length){
            console.log(`${item}: ${data[item]}`);
            tbody.innerHTML +=
            `
                <tr>
                    <td>${item}</td>
                    <td>${data[item]}</td>
                </tr>
            `
        }
    } )
})


//shopping list
var myList = [
    ["Canned Beans", 3],
    ["Milk Galon", 1],
    ["Cereal", 2],
    ["Toilet Paper", 12],
    ["Sack of Rice", 1]
  ];













































