// // //Boolean

let bb: boolean = true;

if (bb) {
    console.log(bb);
}

// // //Numbers

let n: number = 10;
let n2: number = 20;
n = n + n2;
n += n2;
//n +="0";
console.log(n);

// // //Text, string
let myName: string = "Jan";

// // //Template string
let ts: string = "Hey " + myName + "!";
let ts2: string = `Hey ${myName} ${myName}!`;
console.log(ts, ts2);
// // //Any
let x: any;
x = true;
x = 1;
x = "text";
x = [1, "a", true];

// // //Arrays
let ar: number[] = [1, 2, 3, 4, 5, 6];
let ar2: Array<number> = [1, 2, 3, 4, 5, 6];
let ar3: Array<string> = ["a", "b"];
let ar4: Array<any> = [1, "a", true, false, 5, 6];
let ar5: Array<boolean> = [true, false];

// // //Void
function foo3(a: string, b?: any): void {
    console.log(a);

}

function foo4(a: string): string {
    console.log(a);
    return a;
}

function foo6(a: number): string {
    console.log(a);
    return a + "!";
}

// // //Enums
enum Colors { red, blue, green, black }
// //////
if (Colors.blue) {
    console.log("Alarm");
    console.log(Colors.blue);
    console.log(Colors[0]);
}

let color:Colors = 0;

switch (color)
{
  case Colors.red :{
    console.log("Red");
    break;
}
  case Colors.black :{
    console.log("Black");;
    break;
  }
  default : console.log("Nothing");
}

enum Grades {A,B,C,D}

var grade = 1;

switch (grade) {
   case Grades.A: {
      console.log("Excellent");
      break;
   }

   case Grades.B: {
      console.log("Good");
      break;
   }

   case Grades.C: {
      console.log("Fair");
      break;
   }

   case Grades.D: {
      console.log("Poor");
      break;
   }

   default: {
      console.log("Invalid choice");
      break;
   }
}