class Greeter {
  constructor(public greeting: string) { }
  greet(): any {
      return `<h1> ${this.greeting} </h1>`;
  }
};

const greeter = new Greeter("Todo App in Typescript");

document.body.innerHTML = greeter.greet();