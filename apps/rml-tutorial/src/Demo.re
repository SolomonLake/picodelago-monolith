Js.log("Hello, BuckleScript and Reason, this is my tutorial!");

type animal = Cat(string) | Dog(string);

let speak = (animal) => 
        switch (animal) {
        | Cat(name) => name ++ " says: meow"
        | Dog(name) => name ++ " says: woof"
      };

Js.log(speak(Cat("Rooni")))