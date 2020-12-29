//Same keys and values
const createInstructor = (firstName, lastName) => ({firstName, lastName});

//Computed Property Names
const favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods
const instructor = {
    firstname: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstname + " says bye!";
    }
}

//CreateAnimal
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}