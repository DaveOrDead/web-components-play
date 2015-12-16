// Complete custom example

var davesElementPrototype = Object.create(HTMLElement.prototype);

davesElementPrototype.createdCallback = function() {
  // this.textContent = "Dave's Element !";
  this.value = function() {

    var shadow = this.createShadowRoot();
    // The child nodes, including 'i' tags, have now disappeared

    shadow.innerHTML =
      'The "i" tags from the light DOM are: ' +
      '<content select="i" />';
    // Now, only the 'i' tags are visible inside the shadow DOM
    }
};

davesElementPrototype.foo = function() {
  console.log('foo() called');
};

var davesElement = document.registerElement('daves-element', {
  prototype: davesElementPrototype
});


// Extend example

var superButtonPrototype = Object.create(HTMLButtonElement.prototype);
superButtonPrototype.createdCallback = function() {
  this.textContent = "I'm a super button!";
};

var superButton = document.registerElement('super-button', {
  prototype: superButtonPrototype,
  extends: 'button'
});