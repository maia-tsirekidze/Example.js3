//დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
var number1 = Number( prompt("ჩაწერე რიცხვი:"));
if (number1 % 2 == 0 ){
    
    console.log("ლუწი:" + number1);
}else{
    console.log("კენტი:" + number1 );
};
//დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
var number2 = Number (prompt ('ჩაწერე რიცხვი:'));
if(number2<0 ){
    console.log('უარყოფითია:' + number2);
}else if(number2===0){
    console.log('ნულის ტოლია:' + number2);

}else if(number2>0){
    console.log('დადებითია:' + number2);
}
//დაწერეთ პროგრამა, რათა შეამოწმოთ იყოფა თუ არა რიცხვი სხვა რიცხვზე.
var number3 = Number (prompt('ჩაწერე რიცხვი:'));
var number4 = Number (prompt('ჩაწერე რიცხვი'));

if (number3 % number4 == 0){
    console.log("იყოფა:"  );

}else{
 console.log("არ იყოფა");
};

//დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.

var string1 =("hello world");
if(string1.length===0){
    console.log('carielia');
}else{
 console.log('ara carieli');
};


//დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
var string2=("welcome");
if(string2===0){
    console.log('არ შეიცავს სიტყვას');
}else{
 console.log('შეიცავს სიტყვას');
}
//დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.
let x = 5;
let y = 10;
console.log(Math.min(x,y));
//დაწერეთ პროგრამა, რომ იპოვოთ მაქსიმალური ორი რიცხვიდან.
let min = 6;
let max = 9;
console.log(Math.max(min,max));

//დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება თავის ასაკს და დაადგენს არის თუ არა 18 
//წლის ან უფრო მეტის. თუ არის, გამოპრინტეთ "Adult", თუარადა - "Minor".
 let age = Number(prompt('რამდენი წლის ხარ?'));
 if (age >= 18){
    console.log("Adult");
 }else{
console.log("Minor");
 };
 //დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას.
 // 91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. 
 //გამოიყენეთ ორივე - if/else if/else და switch.
 let score = Number(prompt('ჩაწერე შენი შეფასება:'));
 
 if(score>90 && score<=100){
    console.log("A");
 }else if (score>=81 && score <=90){
    console.log("B");
 }else if(score>=71 && score<=80){
    console.log(C);
 } else if (score >=61 && score<=70){
    console.log(D);
 }else if (score >= 51 && score<= 60 ){
    console.log(E);

}else if (score >=0 && score<=50){
    console.log("invalid input");
};
let num1 = Number(prompt('ჩაწერე შენი შეფასება:'));
switch(true){
    case num1>90 && num1<=100:
        console.log("A");
        break;
        case num1>80 && scnum1ore<=90:
            console.log("B");
            break;
            case num1>70 && num1<=80:
                console.log("C");
                break;
                case num1>60 && num1<=70:
                    console.log("D");
                    break;
                    case num1>50 && num1<=60:
                        console.log("E");
                        break;
                    default:
                        case num1>=0 && num1<=50:
                            console.log("invalid input");
                            break;

}

//დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F)
// ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით.
// მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
switch (prompt('ჩაწერე შენი შეფასება:')){
    case "A":
         console.log("შესანიშნავი");
         break;
             case "B":
                 console.log("საშუალოზე მაღალი");
                 break;

                  case "C":
                        console.log("საშუალო");
                        break;
                       case "D":
                              console.log("საშუალოზე დაბალი");
                              break;
                              default:
                               case "F":
                                    console.log("დაბალი");
                                    break;
}
/*
//დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) 
//და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.
switch (prompt("რიცხვი")) {
    case "1":
        console.log("31")
        break;
        case "2":
            console.log("29");
            break;
            default:
                case "3";
                console.log(30);
                break;

  }*/
