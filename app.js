// for-------------->
// for(var i=1;i<=5;i++){
//     console.log("for:"+i)
// }
//while,loop------------->
// var a=1;
// while(a<=5){
//     console.log("while:"+a);
//     a++;
// }
//do while-------------->
// var k=1;
// do{
//     console.log("do while:"+k)
//     k++;
// }while(k<=5){
// }
//nested loop------------->
// for(var i=1;i<=5;i++){
//     console.log('i:'+i);
//     for(var j=1;j<=5;j++){
//         console.log("j:"+j)
//     }
//}
//-- --------exersice------- -->
// for(var i=1;i<=10;i++){
//     console.log("urjver:"+i);
//     for(var j=1;j<=10;j++){
//         urgver=i*j;
//         console.log(i + "*" + j + "="+urgver)
//     }
// }
//  *
//  
//*** 
//**** 
//***** 
// for(var i=1;i<=5;i++){
//     var space= "";
//     for(var j=1;j<=i;j++){
//        space=space+"*"
//     }
//     console.log(space)
// }

var randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber)
alert("Togloomd tavtai moril ta 1-10 hurtel toog taana uu.tand 3 bolomj bga")
var chance=3
for(var i=1;i<=chance;i++){
var myNUMBER = +prompt("1 ees 10 hurtel too oruulna uu.")
if(randomNumber==myNUMBER){
    alert(i+" dahi udagaar ta yllaa")
    break;
}else if(randomNumber>myNUMBER || randomNumber<myNUMBER&&myNUMBER<=0&&myNUMBER>10){
alert("dahiad oroldood uzerei")
}else if(myNUMBER>10&&myNUMBER<0){
alert("tuguu zuv oruulna uu.")
}if(i>chance){
    alert("ta hoigdloo")
}
}
