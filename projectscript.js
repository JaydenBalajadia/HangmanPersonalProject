clearBtns(); 
var guessCount = 7;
var randStr = [];
var randWord = ""

// Chooses category upon clicking the button
function getCategory(category) { 
    if (category == "cat1") { 
        let cars = ["Tesla", "BMW", "Ferrari", "Ford", "Porsche", "Honda", "Lamborghini", "Toyota", "Bentley", "Maserati",
                    "Audi", "Jeep", "Subaru", "Cadillac", "Chrysler", "Dodge", "Hyundai", "Jaguar", "Mazda", "Nissan",
                    "Bugatti", "Buick", "Lexus", "Acura", "Chevrolet", "Kia", "Volkswagen", "Volvo", "McLaren", "Mitsubishi", 
                    "GMC", "Infiniti", "Lincoln", "Peugeot", "Pontiac", "Genesis", "Suzuki", "Fiat", "Mini", "Scion", 
                    "Datsun", "Pagani"];
        randWord = cars[Math.floor(Math.random() * cars.length)]; 
        printPattern(setPattern(randWord)); 
    } else if (category == "cat2") { 
        let animals = ["Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Anteater", "Antelope", "Ape",
                        "Armadillo", "Donkey", "Baboon", "Badger", "Barracuda", "Bat", "Bear", "Beaver", "Bee",
                        "Bison", "Boar", "Buffalo", "Butterfly", "Camel", "Capybara", "Caribou", "Cassowary", 
                        "Cat", "Caterpillar", "Cattle", "Chamois", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla",
                        "Chough", "Clam", "Cobra", "Cockroach", "Cod", "Cormorant", "Coyote", "Crab", "Crane", "Crocodile", 
                        "Crow", "Curlew", "Deer", "Dinosaur", "Dog", "Dogfish", "Dolphin", "Dotterel", "Dove", "Dragonfly",
                        "Duck", "Dugong", "Dunlin", "Eagle", "Echidna", "Eel", "Eland", "Elephant", "Elk", "Emu", "Falcon",
                        "Ferret", "Finch", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gaur","Gazelle", "Gerbil", "Giraffe", 
                        "Gnat", "Gnu","Goat", "Goldfinch", "Goldfish", "Goose", "Gorilla", "Goshawk", "Grasshopper", "Grouse",
                        "Guanaco", "Gull", "Hamster", "Hare", "Hawk", "Hedgehog", "Heron", "Herring", "Hippopotamus", "Hornet",
                        "Horse", "Human", "Hummingbird", "Hyena", "Ibex", "Ibis", "Jackal", "Jaguar", "Jay", "Jellyfish", 
                        "Kangaroo", "Kingfisher", "Koala", "Kookabura", "Kouprey", "Kudu", "Lapwing", "Lark", "Lemur", "Leopard", 
                        "Lion", "Llama", "Lobster", "Locust", "Loris", "Louse", "Lyrebird", "Magpie", "Mallard", "Manatee", 
                        "Mandrill", "Mantis", "Marten", "Meerkat", "Mink", "Mole", "Mongoose", "Monkey", "Moose", "Mosquito",
                        "Mouse", "Mule", "Narwhal", "Newt", "Nightingale", "Octopus", "Okapi", "Opossum", "Oryx", "Ostrich", 
                        "Otter", "Owl", "Oyster", "Panther", "Parrot", "Partridge", "Peafowl", "Pelican", "Penguin", "Pheasant",
                        "Pig", "Pigeon", "Pony", "Porcupine", "Porpoise", "Quail", "Quelea", "Quetzal", "Rabbit", "Raccoon", "Rail", 
                        "Ram", "Rat", "Raven", "Red deer", "Red panda", "Reindeer", "Rhinoceros", "Rook", "Salamander", "Salmon", 
                        "Sand Dollar", "Sandpiper", "Sardine", "Scorpion", "Seahorse", "Seal", "Shark", "Sheep", "Shrew", "Skunk", 
                        "Snail", "Snake", "Sparrow", "Spider", "Spoonbill", "Squid", "Squirrel", "Starling", "Stingray", "Stinkbug", 
                        "Stork", "Swallow", "Swan", "Tapir", "Tarsier", "Termite", "Tiger", "Toad", "Trout", "Turkey", "Turtle", 
                        "Viper", "Vulture", "Wallaby", "Walrus", "Wasp", "Weasel", "Whale", "Wildcat", "Wolf", "Wolverine", "Wombat",
                        "Woodcock", "Woodpecker", "Worm", "Wren", "Yak", "Zebra"]; 
        randWord = animals[Math.floor(Math.random() * animals.length)];
        printPattern(setPattern(randWord));  
    } else { 
        let food = ["Anchovies", "Asparagus", "Avocados", "Alfredo sauce", "Arugula", "Almonds", "Apples",  "Bacon", 
                    "Bagels", "Bananas", "Barbecue", "Barley", "Basil", "Beans", "Beef", "Beets", "Blackberries", "Blueberries", 
                    "Bread", "Broccoli", "Burgers", "Cabbage", "Cake", "Calzones", "Cheese", "Chicken", "Chili", "Coconut", "Cod", 
                    "Coffee", "Collards", "Cookies", "Crepes", "Curry","Daikon", "Dairy", "Dal", "Danishes", "Dates", "Dill", "Dosa", 
                    "Doubles", "Doughnuts", "Duck", "Duff", "Dumplings", "Durian", "Eclairs", "Edamame", "Eel", "Eggnog", "Eggplant", 
                    "Eggrolls", "Eggs", "Empanadas", "Enchiladas", "Escargot", "Espresso", "Falafel", "Fennel", "Figs", "Fish", "Frankfurters", 
                    "French Fries", "Frittatas", "Fritters", "Frogs", "Fruit", "Fruitcakes", "Fungi", "Goose", "Gooseberries", "Graham Crackers", 
                    "Granola", "Grapes", "Gravy", "Guacamole", "Gumbo", "Gyoza", "Gyros", "Ham", "Hamburger", "Hash Browns", "Herring", "Hoisin Sauce", 
                    "Honey", "Honeydew", "Horseradish", "Hot Dogs", "Hot Sauce", "Huckleberries", "Hummus", "Ice", "Ice Cream", "Iceberg Lettuce",  
                    "Inarizushi", "Italian Sausage", "Jackfruit", "Jalapeno", "Jam", "Jambalaya",  "Jelly", "Jerk Chicken", "Kaiser Roll", "Kale", 
                    "Kasha", "Kelp", "Kimchi", "Kombucha", "Lard", "Lasagna", "Lemon", "Lima Beans", "Limes", "Lingonberries", "Liver", "Lo Mein", 
                    "Lollipop", "Lutefisk", "Macaroon", "Mango",  "Maple Syrup", "Margarine", "Mayonnaise", "Melon", "Millet", "Mochi", "Mulberries", 
                    "Mustard", "Naan", "Nachos", "Natto", "Navy Beans", "Nectarines",  "Noodles", "Nori", "Nougat", "Nuts", "Oatmeal", "Octopus", 
                    "Oil", "Okra", "Olives", "Onion", "Oranges", "Oregano", "Oysters", "Pad Thai", "Pears", "Peas", "Pecans", "Pepperoni", "Peppers", 
                    "Pie", "Poi", "Pork", "Pumpkins", "Quail", "Quesadillas", "Queso", "Quinoa", "Radishes", "Raisins", "Ramen", "Raspberries", "Ravioli", 
                    "Relish", "Rhubarb", "Rice", "Rigatoni", "Romaine", "Rye Bread", "Salami", "Sesame Seeds", "Sorbet", "Sorghum", "Soybeans", 
                    "Spaghetti", "Spinach", "Squash", "Sugar", "Sukiyaki", "Tacos", "Tempura", "Tiramisu", "Tofu", "Tomatoes", "Tortellini", 
                    "Truffles", "Tuna", "Turnips", "Ube", "Udon", "Unagi", "Vanilla", "Venison", "Vermicelli", "Vinegar", "Wafers", "Waffles", 
                    "Walnuts", "Wasabi", "Watermelon", "Wheat", "Wine", "Wontons", "Yakitori", "Yams", "Yeast", "Yogurt", "Yorkshire Pudding", "Zucchini"]; 
        randWord = food[Math.floor(Math.random() * food.length)]; 
        printPattern(setPattern(randWord));  
    }
    document.getElementById("vict").innerHTML = "Guesses left: " + guessCount; 
    document.addEventListener("keypress", (event) => {
        getID(event.key);
    })
}

// Gets the letter that was chosen
function getID(ltr) { 
    let elemID = "btn" + ltr.toUpperCase(); 
    let button = document.querySelector("#btn" + ltr.toUpperCase());
    button.disabled = true;
    document.getElementById(elemID).style.opacity = 0.3;
    ifContains(ltr);
}

// Checks if the letter is correct
function ifContains(ltr) {
    for (let i = 0; i < randWord.length; i++) {
        if (ltr.toUpperCase() == randWord.charAt(i).toUpperCase()) {
            randStr[i] = ltr;
        }
    }
    makePattern(ltr);
}

// Creates the pattern that is displayed to the user
function makePattern(ltr) {
    if (guessCount > 0) { 
        if (isPatternEqual(randStr)) { 
            printPattern(randStr);
            guessCount = 0; 
            document.getElementById("vict").innerHTML = "You win!"; 
            document.getElementById("word").innerHTML = " "; 
            genResetButton();
            clearBtns();
        } else {  
            correctChars(ltr);
            printPattern(randStr);  
        }
    }
}

// Checks if chosen word matches the pattern
function isPatternEqual(randStr) { 
    for (let i = 0; i < randWord.length; i++) { 
        if (randStr[i].toUpperCase() != randWord.charAt(i).toUpperCase()) { 
            return false; 
        }
    }
    return true;
}

// Counts the amount of characters the user got correct
function correctChars(guess) { 
    let count = 0; 
    for (let i = 0; i < randWord.length; i++) { 
        if (randWord.charAt(i).toUpperCase() == guess.toUpperCase()) { 
            count++;
        } 
    }
    if (count == 0) { 
        guessCount--;
        document.getElementById("vict").innerHTML = "Guesses left: " + guessCount;
    }
    if (guessCount == 0) { 
        document.getElementById("vict").innerHTML = "You lost...";
        document.getElementById("word").innerHTML = "The word was: " + "\"" + randWord + "\"";
        clearBtns(); 
        genResetButton();  
    }
}

// Disables buttons 
function clearBtns() { 
    for (let i = 0; i < 26; i++) { 
        let alpha = String.fromCharCode(i + 65).toUpperCase();
        document.querySelector("#btn" + alpha).disabled = false;
        document.querySelector("#btn" + alpha).disabled = true; 
    }
}

// Enables buttons (assumming they were previously disabled)
function unclearBtns() { 
    for (let i = 0; i < 26; i++) { 
        let alpha = String.fromCharCode(i + 65).toUpperCase();
        document.querySelector("#btn" + alpha).disabled = true;
        document.querySelector("#btn" + alpha).disabled = false; 
    }
}

// Creates the pattern to display to the user
function setPattern(word) { 
    for (let i = 0; i < word.length; i++) {
        randStr.push(" _ ");
    }  
    return randStr; 
}

function printPattern(patt) { 
    document.getElementById("pattern").innerHTML = "";
    for (let i = 0; i < patt.length; i++) { 
        document.getElementById("pattern").innerHTML += patt[i].toUpperCase() + " ";
    }
}

function disGenreBtn(elemD) { 
    document.querySelector("#" + elemD).disabled = true; 
    document.getElementById(elemD).style.opacity = 0.3;
    for (let i = 1; i < 4; i++) { 
        document.querySelector("#cat" + i).disabled = true;
    }
}

function genResetButton() { 
    var div = document.getElementById("reset"); 
    var button = document.createElement("button"); 
    var text = document.createTextNode("Reset Game"); 
    button.appendChild(text); 
    div.appendChild(button); 
    button.addEventListener("click", () => { 
        window.location.reload();
    });
}
