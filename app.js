// Java Script: js is easy as we can directly interact with the data.


//alert("hi")

// let const var (to create variable)

// let myName = "uta"; // js is deeply typed language(can store anything) not type safe language

// const myAge=21;
// const productDetail= true;
// const typeDefine={}; // [] for array
// const productPrice=34;
// console.log(typeof myName);
// console.log(myAge);
// console.log(productDetail); // to print use console.log
// console.log(typeof typeDefine);

// let productDescription=`this is product description and price is ${productPrice}`; // `` using this we can add js in our code in between data.
// console.log(productDescription);

// const age1="32";
// const age2=32;

// console.log(age1 === age2); // == to compare and === to checks the equality of two values without performing any type conversion
// console.log(!!!true);

// const myArray=[12,23,34,45,56]; // as its not type safe lang we can also add string bool in array
// console.log(myArray[4]);

// // to create function

// function myFunction(age,name)//() parameter
// {
//     console.log([age,name]);
//     return([age,name]);
// }
// myFunction(21,"uta");// to call function, () argument

//  // return value is the value of the function
// console.log(myFunction(21,"uta")); 

// // arrow function
// //()=>{}


// // const function=(data)=>{
// //     console.log(data);
// // };
// // myFunction("uta");

// const Function=num=>num*num; // in case of curly brases we use have to use return to return our function

// console.log(Function(5));

// const agee=25;
// if(agee>20){
//     console.log("u r old");
// }else{
//     console.log("u r not old");
// }

// // switch case

// switch(1){
//     case 1:
//         console.log("one");
//         //break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     default:
//         console.log("default");
//         break;
// }

// for(i=0;i<5;i++){
//     console.log(i);
// }

// let j=11;
// while(j<=15){
//     console.log(j);
//     j++;

// }

//do{} 
// conditon executed atleast once
//while(i)

// const arr=[23,13,35,45,54,74];
// console.log(arr.length);

// arr.forEach((items,a)=>{ // 1st the codition then index (item,index)
//     console.log(items*2) // easy way then for loop
//     console.log(a)
// })


//function test(cb){
 //   cb();
//}
//test(()=>{}) 
// while calling function we can give another function

// const data=arr.find((items)=>{
//     //console.log(items);
//     return items>50; // check for the nearest item
// })
// console.log(data);

// const numbers=[2,3,4];
// const newNum=numbers.pop();
// console.log(newNum);
// console.log(numbers);


// arr.map((list)=>{ // to convert arr to list i.e to map one type to another
//     let html;
//     html =`<li>${list}</li>`;
//     console.log(html);
// });


//const array=[12,2,34,56,7,3,5,25];

// const filteredarr=arr.filter((items)=>{ // to filter out 
//     console.log(items);
//     return items >50;
// });
//
//console.log(filteredarr);

// const totalPrice=array.reduce((accumator,current)=>{
//     return accumator+current;
// },0);

// console.log(totalPrice); // to reduce all array into single value

// const items=[23,45,76,98,94];

// const data=items.some((item)=>item>23); //to fulful atleast one condition
// console.log(data);

// sorteditems=items.sort((a,b)=>a-b);
// console.log(sorteditems);

// const user={
//     fname:"uta",
//     lname:"haru",
//     age:21,
//     address:{
//         city:"Shinjuku",
//         state:"tokyo"
//     },
//     fullName:function(){
//         return this.fname + " " + this.lname
//     }
// };

// user.lname="hibiki";
// console.log(user);

// DOM(Document object Model) : browser do parsing(html page) and create dom tree and dom tree is printed in the browser.
// With the help of js we can create a dom tree and manipulate our data on the browser without affecting the html page.

// const btn = document.getElementById("btn");
// console.log(btn);

// const text=btn.innerText="dont click me"


// btn.addEventListener("dblclick",()=>{
//     console.log("clicked");
// });

// const ele=document.getElementsByClassName("one"); 
// console.log(ele);

// const ele=document.querySelectorAll(".one"); // get node list
// console.log(ele); // it will return the all items and for one remove all

// const anchor=document.getElementById("link");
// anchor.setAttribute("href","http://www.google.com");

// const anchor=document.getElementById("test");
// anchor.setAttribute("class","xyz");
// anchor.classList.add("zyx");
// anchor.classList.remove("one");
// console.log(anchor.classList);

// const div=document.getElementById("div");
// let mypara=document.createElement("p");
// mypara.textContent="this is new paragraph generated using java script";
// div.appendChild(mypara);
// console.log(mypara);

const button=document.getElementById("button");

const div=document.getElementById("div");

button.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log(e.target);
    console.log("button clicked")
});

div.addEventListener("click",(e)=>{
    console .log(e.target);
    console.log("div called");
})