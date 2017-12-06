interface printOptions {
    name: string;
    type: string;
    id?: number;
}

function print1(options: printOptions) {
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

