// Task01
// console.log("My name is Nurane");

// Task 02
// const name="Nurane";
// console.log(name);

// Task 03
// person
// $add

// Task 04

// let bookPrice = 750;
// let bookAmount = 14;
// let umumiQiymet = bookPrice*bookAmount;
// console.log(umumiQiymet);

// Task 05
// let kmhSpeed = 75;
// let msSpeed = 75*1000/3600;
// console.log(msSpeed);

// Task 06
// let year = 1996;
// let age = (2024-1996)*360;
// console.log(age);

// Task 07
//  let num = 10**5;
//  let end = (10**5)/3;
//  console.log(end)

//  Task 8
// let firstName = 'Alan';
// let lastName = 'Turing';
// console.log(`Sizin adınız ${firstName} ${lastName}.Tanışlığımıza çox şadam!`);

// Task 9
// let firstName = "Nermin";
// let lastName = "Alxasova";
// console.log(`Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}.`)

// Task 10
// let fullName = "Hesenova Nurane";
// let add = fullName.length;
// console.log(add)

// Task 11
// let name = 'Nurane';
// let surname = "Hesenova";
// let fullName = name.charAt(0)+surname.charAt(0);
// console.log(fullName)

// let fullName ="Hesenova Nurane";  
// console.log(fullName[0], fullName[9]);


// Task 12
// let fullName ="AD Soyad" ;
// let text = fullName.indexOf(' ');
// let name=fullName.slice(0,text);
// let surname=fullName.slice(text+1);
// console.log(surname,name);

// Task 13

// let ad = prompt("Adinizi daxil edin");
// console.log(`Salam,${ad}`)

// Task 14
// let a =Number(prompt("Birinci reqem")); 
// let b =Number(prompt("Ikinci reqem"));
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

// Task 15
// let a = 12345;
// let b = 98765;
// let result = String(a*b);
// console.log(result[6])

// Task 16
// "" + 1 + 0 ="10"

// "" - 1 + 0 = Nan

// "true" - false =Nan

// 6 / "3" =2

// 4 + 5 + "px" =9px

// "$" + 4 +5 =  $45

// "4" - 2 =2

// "4px" - 2 + "px" =Nanpx

// 7 / 0 =0

// "-9" + 5 =-95

// "-9" - 5 =-14

// null + 1 =1

// undefined + 1 =Nan1

// Task 17
// let nomre = Number(prompt("dord reqemli eded daxil edin:"));
// let result=1+2+3+4;
// console.log(result)


// Task 18
// let name = prompt ("Istifadeçinin ad və soyadı");
// console.log(name);

// Task 19

// let price = prompt("qiymet daxil edin.(530.90)")
// let manat = price.slice(0,price.indexOf("."));
// let qepik = price.slice(price.indexOf(".")+1);
// console.log(manat + "manat", qepik + "qepik");


// Task 20 
// let emekhaqqi = Number(prompt("emek haqqini daxil edin:"));
// let faiz =Number(prompt("vergi faizi:"))
// let faizqaliq = emekhaqqi*faiz/100;
// let tamEmekhaqqi = emekhaqqi-faizqaliq;
// console.log(tamEmekhaqqi)

// Task21
// let fullName="İvanov Pyotr Sergeevich";
// let text = fullName.split(" ");
// console.log(text[0]);
// console.log(text[1]);
// console.log(text[2]);
// console.log(`${text[0]} ${text[1][0]}.${text[2][0]}.`);

// Task 22

// let mebleg = Number(prompt("emanetin meblegini qeyd edin"));
// let muddet = Number(prompt("Emanetin muddetini qeyd edin"));
// let faiz = Number(prompt("Emanetin faiz derecesini qeyd edin"));
// let result = (mebleg*faiz*muddet)/100;
// console.log(result)

// Task 23

// let value = 10;
// let value2 = 20;

// console.log( value>5)
// console.log(value=="10")
// console.log(value<=15)
// console.log(value===10)
// console.log(value!=15)

// console.log( value2>=30)
// console.log(value2=="20"&&value2=="10")
// console.log(value2<=15)
// console.log(value2===10)
// console.log(value2!=20&&value2==20)

// Task 24

// let yas = Number(prompt("Yasinizi daxil edin:"));

// if(yas<18){
//     console.log("Access denied")
// }else{
//     console.log("Access granted")
// }

// Task 25

// let eded = prompt("nomre daxil edin");
// let reqem = eded.split(" ");
// let a = reqem[0]
// let b = reqem[1]
// let c = reqem[2]


// // 47 46 45
//  if(a>b&&b>c){
// console.log(b)
//  }
//  // 45 46 47
//  else if(c>b&&b>a){
//     console.log(b)
//  }
//  // 46 45 47
//  else if(c>a&&a>b){
//     console.log(a)
//  }
//  // 46 47 45
//  else if(b>a&&a>c){
//     console.log(a)
//  }
//  //47 45 46
//  else if(a>c&&c>b){
//     console.log(c)
//  }
//  // 45 47 46
//  else if(b>c&&c>a){
//     console.log(c)
//  }else{
//     console.log("error")
//  }

//Task 26

// let il = Number(prompt("il daxil edin:"));
// if(il%4===0){
//     console.log("İl uzun il deyil")
// }else{
//     console.log("İl uzun ildir")
// }

// Task 27
// let id = prompt ('enter product id:');
// switch ("2") {
//     case "1":
//   alert ('Available 10 pcs.');
// break;
// case "2": (id === '2') 
//   alert ('Available 256 pcs.');
//  break;
// case "3": (id === '3') 
//   alert ('Available 53 pcs.');
//  break;
//   case "4": (id === '4') 
//   alert ('There are 3 available.');
//  break;
// default:
//   alert ('Out of stock');
// break;}

// Task 28

// let cins = prompt("cinsinizi daxil edin:")
// switch (cins) {
//     case "Male":
//         console.log("male")
//         break;
//     case "Female":
//         console.log("female")
//         break;
// }

// Task 29

// let ay = prompt("Ayin adini daxil edin:");
// switch (ay) {
//     case "1":
//         console.log("Yanvar")
//         break;
//     case "2":
//         console.log("Fevral")
//         break;
//     case "3":
//         console.log("Mart")
//         break;
//     case "4":
//         console.log("Aprel")
//         break;
//     case "5":
//         console.log("May")
//         break;
//     case "6":
//         console.log("Iyun")
//         break;
//     case "7":
//         console.log("Iyul")
//         break;
//     case "8":
//         console.log("Avqust")
//         break;
//     case "9":
//         console.log("Sentyabr")
//         break;
//     case "10":
//         console.log("Oktyabr")
//         break;
//     case "11":
//         console.log("Noyabr")
//         break;
//     case "12":
//         console.log("Dekabr")
//         break;
//     default:
//         alert("xeta");
// }

// Task 30
// let tarix = prompt("tarixi qeyd edin");
// let reqem = tarix.split(".");
// let il = reqem[0]
// let ay = reqem[1]
// let gun = reqem[2]
// console.log(gun + "dekabr", il + "-cu il");



