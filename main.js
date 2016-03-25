

/*
 {
 var a = "a";
 let b = "b";
 }

 console.log(a);
 console.log(b);

 for(let i = 0; i < 2; i++){console.log(i);}
 console.log(i);



 var a = [];

 for(var i = 0; i < 10; i++){
 a[i] = function(){
 console.log(i);
 };
 }

 a[6]();



 var a = [];

 for(let i = 0; i < 10; i++){
 a[i] = function(){
 console.log(i);
 };
 }


 console.log(foo);
 console.log(bar);

 var foo = 2;
 let bar = 2;

 var tmp = 123;

if(true){
    tmp = "123";
    let tmp = 100;
}

console.log(tmp);



console.log(typeof x);

let x;


function bar(x = y, y = 2){

    return [x, y];
}

console.log(bar());



(function(){
    var a = 10;
    let a = 10;
})();

(function(){
    let a = 10;
    let a = 10;
})();



(function(){

    var a = 10;

    {
        let a = 123;
        console.log(a);
    }

    console.log(a);
})();



var tmp = new Date();

function f(){
    console.log(tmp);

    if(false){
        var tmp = "Hello world!!!";
    }
}

f();



var s = "hello";

for(var i = 0; i < s.length; i++){

}

console.log(i);



function f1(){
    var n = 5;
    if(true){
        let n = 10;
        console.log(n);
    }
    console.log(n);
}

f1();



{
    let a = 10;

    {
        console.log(a);
    }
}

console.log(a);

if(true){

    a();

    {
        function a(){
            console.log("aaa");
        }
    }
}



function f(){
    console.log("");
}



let f;

{
    let str = "这里有好多内容";

    f = function(){
        console.log(str);
    }
}

f();
console.log(str);

 */

let a = 10;
