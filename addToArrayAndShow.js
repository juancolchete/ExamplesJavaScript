array = []

function addToArray(array, element){
    array.push(element)
    return array
}

function printElements(array){
    array.forEach(element => {
        console.log(element)
    });
}
addToArray(array, "Hi");
addToArray(array, "Hello");
addToArray(array, "Hello World");
addToArray(array, "Hi world");
addToArray(array, "Hi universe");
printElements(array);

