class Person {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
    introduceSelft(){
        console.log("Hi, i am "+ this.name + "!")
    }
}
let personA = new Person("Sally");
personA.introduceSelft();

class Friend extends Person {
    yearsKnown: number;
    constructor(name: string, years: number){
        super(name);
        this.yearsKnown = years;
    }
    timeKnown(){
        console.log("We have been friends for "+ this.yearsKnown + "years");        
    }
}

let friendA = new Friend("Jacob",6);
friendA.introduceSelft();
friendA.timeKnown();