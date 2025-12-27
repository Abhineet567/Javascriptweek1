class Animal{                                //create class
    constructor(name , legCount , speaks){     //attributes of class
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){                        // static function whiich can be called directly on class here Animal
        console.log("Animal")
    }
    speak() {                                   //function that can be called on object of class not directly on class as it is not static function
    console.log("Hii there" + this.speaks);
    }
}


console.log(Animal.myType())                // calling satic function directly on class animal
let dog = new Animal("tommy", 4 , "bhow bhow gandit paw");                  //create object
dog.speak();                                    //calling function on object