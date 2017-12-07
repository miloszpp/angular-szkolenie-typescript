// deklaracja z uzyciem let
let s1: string = "";

// deklaracja z uzyciem var
var s2: string = "";

// zwykły JavaScript jest równiez TypeScriptem
console.log("");

// funkcja zwracajaca dowolny typ
function foo(): any {
    var i = 1;
    return "";
}

// funkcja przyjmujaca liczba i zwracajaca napis
var foo2 = function(i: number): string{
    return i + "";
}

// zasięg var
function test(x: number) {
    if (x > 5) {
        var y = "tak";
    }
    else {
        var y = "nie";
    }
    return y;
}

// zasięg let
function test2(x: number) {
    if (x > 5) {
        let y = "tak";
    }
    else {
        let y = "nie";
    }
    // return y; // y nie jest dostepne
}
