interface PrintOptions {
    readonly name: string; // pole tylko do odczytu
    type: string;
    id?: number; // pole opcjonalne
}

// funkcja przyjmująca parametr, który musi spełniać interfejs PrintOptions
function print1(options: PrintOptions) {
    let name = options.name;
    let type = options.type;
    let id = options.id;
    console.log(name, type);
}

print1({
    name: "test",
    type: "A",
    id: 1
});

