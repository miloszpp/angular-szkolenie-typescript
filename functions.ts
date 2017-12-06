function greet(firstName: string, lastName: string = "Cos", id?: number): any {
    console.log(`Hey ${firstName} ${lastName}! ID: ${id}`);
}

greet("Jan", "Kowalski");
greet("Jan", "Kowal", 9);;
greet("Jan");

let g = () => {
    console.log("test");
};

g();