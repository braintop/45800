const animals = [
    "Kitten",
    "Puppy",
    "Bunny",
    "Parakeet",
    "Scorpion",
    "Spider",
    "Cockroach"
];

function generateCuteAnimalAfterDelayAsync() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const randomIndex = Math.floor(Math.random() * animals.length);

            const animal = animals[randomIndex];

            if (
                animal === "Kitten" ||
                animal === "Puppy" ||
                animal === "Bunny" ||
                animal === "Parakeet"
            ) {
                resolve(animal);
            } else {
                reject(new Error(animal + " is not a cute animal"));
            }

        }, 1000);

    });
}


async function displayCuteAnimal() {

    try {

        const animal = await generateCuteAnimalAfterDelayAsync();

        document.getElementById("result").innerHTML = animal + " is cute!";
           

    } catch (error) {

        document.getElementById("result").innerHTML =  error.message;
           

    }

}