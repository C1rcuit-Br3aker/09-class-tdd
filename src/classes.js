
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
  constructor(size) {
    this.size = size;
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
aMan.name;

class Lion extends Cat {
  constructor(size) {
    super ('BIG');
  }
}

class KeepSecret {

  constructor(secret) {
    this.squeal = function() {
      return secret;
    }
  }
}

class Key {

}

class Safe {
  constructor(secret, Key){
    this.unlock = function(open) {
      if (open == Key) {
        return secret;
      } else {
        return 0;
      }
    }
  }
}
