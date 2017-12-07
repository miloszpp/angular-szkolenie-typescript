// funkcja z parametrem opcjonalnym oraz z wartością domyślną parametru
function greet(firstName: string, lastName: string = "Cos", id?: number): any {
    console.log(`Hey ${firstName} ${lastName}! ID: ${id}`);
}

greet("Jan", "Kowalski");
greet("Jan", "Kowal", 9);;
greet("Jan");

// arrow function
let g = () => {
    console.log("test");
};

g();

// typowe zastosowanie arrow function
const names = [ "Jan", "Ewa", "Wojciech" ];
const lengths = names.map(name => name.length); 
