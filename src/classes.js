
class Foo {

}

var bar = new Foo;

class Dog {
  constructor(says) {
    this.says = `life is ruff`;
  }

}

class Cat {
  growl() {
    return `meow`;
  }

}

var garfield = new Cat;

garfield.growl;

class FacelessMan {
  constructor(name) {
    this.name = name;
  }

}

var aMan = new FacelessMan(`Jaqen H'ghar`);
aMan.name();
