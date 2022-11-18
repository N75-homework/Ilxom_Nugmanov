        // ~~~~1~~~
// 100 gacha bolgan sonlar 

// for(let i = 0; i <= 100; i++){
//    console.log(i);
// }

       // ~~~2~~~
// 100 gach toq sonlar

// for(let i = 0; i <= 100; i++){
//     if (i % 2 != 0 ) {
//         console.log(i);
//     }
// }

    //   ~~~3~~~
// 100 dan 0 gacha bolgan sonlar

// for(let i = 100; i >= 0; i--){
  
//     console.log(i);
    
// }

       // ~~~4~~~
// sonlarni yaxlitlab modulda cqarish

// let numbers = [-234456.04 , -3.55 , -56.006]


// numbers.forEach(function (element) { 
//    if(element < 0){
//     element = element / -1

//     console.log(Math.trunc(element))
//    }else{
//     console.log(Math.trunc(element))
       
//    }
// })


     //   ~~~5~~~

// sonlarni qowiw

// let nums = [1, 2, 3]

// let result = nums.reduce((jami, hozirgiEl) => jami += hozirgiEl, 0);

// console.log(result)  


       // ~~~6~~~

       
// berilgan matini ichidan eng uzun sozi topish => hali tugamagan

let str = 'salom dunyo yrt t43re 534t23r4t4'
let strarr = str.split(' ')
let full = strarr.sort()[0];


console.log(full);

