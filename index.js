// var a=10
// var a=20 
// a=30
// console.log(a)


// var a
// console.log(a)	


// var a=10
// if (true) {
//     var a=40
// }
// console.log(a)



// var a=10
// if (true) {
//     var a=40
// }
// for (var i=1; i<=5;i++) {}
// console.log(i)
// console.log(a)


// function x() {
//     var b=10
//     console.log(b)
// }
// x()
// console.log(b)


// console.log(a)
// if (true) {
//     var a=40
// }
// for (var i=1;i<=1;i++) {
//     console.log(a,i)
// }


// console.log(a)
// if (true) {
//     var a=40
// }
// for (var i=1;i<=1;i++) {
//     console.log(a,i)
// }
// function x() {
//     var d=10
//     console.log(d)
// }
// x()
// console.log(a)


// let a=10
// let a=10
// console.log(a)


// let a=30
// {
//     let a=10
// }
// console.log(a)

// {
//     let a=10
// }
// console.log(a)  // a is not defined


// if (true) {
//     let a=10
//     console.log(a)
// }
// console.log(a)


// let a=30
// a=40
// console.log(a)  // re assign possible


// let a=30
// a=40
// console.log(a)
// {
//     console.log(a)
// }


// let =30
// a=40
// console.log(a)
// {
//     console.log(a)
// }
// function x() {
//     console.log(a)
// }


// let a=30
// a=40
// console.log(a)
// {
//     console.log(a)
// }
// function x() {
//     console.log(a)
// }
// x()


// let a=30
// a=40
// console.log(a)
// {
//     let b=30
//     console.log(a,b)
// }
// function x() {
//     console.log(a)
//     console.log(b)  // b is not declared
// }
// x()


// const a
// console.log(a) // missing initializer in const declaration


// const a=67
// console.log(a)


// const a=67   // re declare re assign not possible
// a=70
// console.log(a)

// const a=67
// const a=50    // re declare not possible
// console.log(a)  // identifier a is already declared


// const a=67
// let a=50    
// console.log(a)  // syntax error: identifier "a" has already declared

// const a=67
// const a=50    
// console.log(a)  // syntax error: identifier "a" has already declared


// const a=67
// {
// const a=50    
// console.log(a) 
// } 
// console.log(a)  



// const a=67
// {
//     const a=50    
//     console.log(a) 
// } 
// function x() {
//     const i=10
//     console.log(i)
// }
// console.log(a,i)  

// const a=67
// {
//     const a=50    
//     console.log(a) 
// } 
// for (const i=1; i <=2; i++)   // for (const i=1; i <=2; i++)            
// function x() {                // Type Error: Assignment to constant variable
//     const i=10
//     console.log(i)
// }
// console.log(a,i)  


// const a=67
// {
//     const a=50    
//     console.log(a) 
// } 
// function x() {
//     const i=10
//     console.log(i)
// }
// x()
// console.log(a,i) 




// var a = 10;
// if (true) {
//     var a = 20;
// }
// console.log(a);



// let a = 10;
// if (true) {
//     let a = 20;
// }
// console.log(a);




// const a = 5;
// {
//     const a = 10;
//     console.log(a);
// }
// console.log(a);



// var x = 1;
// function test() {
//     var x = 2;
//     if (true) {
//         var x = 3;
//     }
//     console.log(x);
// }
// test();



// var x = 10;
// {
//     var x = 20;
// }
// console.log(x);



// let a = 5;
// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a);


// var x = 10;
// function test() {
//     var x = 20;
//     console.log(x);
// }
// test();
// console.log(x);



// let x = 5;
// function outer() {
//     let x = 10;
//     function inner() {
//         let x = 15;
//         console.log(x);
//     }
//     inner();
// }
// outer();



// function test() {
//     let y = 30;
//     if (true) {
//         let y = 40;
//     }
//     console.log(y);
// }
// test();




// var a = 5;
// function myFunction() {
//     if (true) {
//         var a = 10;
//     }
//     console.log(a);
// }
// myFunction();



// let x = 100;
// {
//     const x = 50;
//     console.log(x);
// }
// console.log(x);



// function test() {
//     var x = 1;
//     if (true) {
//         var x = 2;
//         console.log(x);
//     }
// }
// test();


// function foo() {
//     let x = 20;                     // x is declared in the function scope of foo
//     return function() {             // Returns a function that has access to x
//         console.log(x);              // This inner function will access x
//     };
// }
// const bar = foo();                 // foo() is called, and bar is assigned the returned function
// bar();                             // Calling the returned function




// let a = 10;
// function test() {
//     let a = 20;
//     {
//         let a = 30;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();
// console.log(a);





let x = 50;
function test() {
    let x = 100;
    {
        const x = 200;
        console.log(x);
    }
    console.log(x);
}
test();
console.log(x);










