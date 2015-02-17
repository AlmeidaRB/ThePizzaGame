

// character constructor

function Character(spec) {
  var spec = spec || {};
  this.name = spec.name || "person";
  this.eat = function (pizza) {
    var gobble = Math.floor(Math.random() * 5);
    console.log("nom nom");
    pizza.consumed(gobble);
  }
}


//pizza constructor

function Pizza() {
  this.slices = 0;
  this.consumed = function(gobble) {
    if(this.slices <= 22) {
    this.slices = this.slices + gobble;
    console.log("keep gobbling!");
  } else if (this.slices===23) {
    console.log("You ate the perfect amount! YOU WIN!");
  } else {
    console.log("Too much pizza, you have a tummyache. YOU LOSE!")
  }
};
}

var myPage = {
  init: function() {
    myPage.initEvents();

  },
  initStyling: function() {

  },
  initEvents: function() {

    $("#createGame").on('submit', function(e) {
      e.preventDefault();
      var traits = {
        name: $('#character input[name="name"]').val(),
      };
      myPage.character =  new Character(traits);
      myPage.pizza = new Pizza();
      myPage.renderBoard()

    });

    $("#board").on("click", "button", function(e) {
      e.preventDefault();
      myPage.character.eat(myPage.pizza);
      $(".status").text(myPage.pizza.slices);
    })

  },
  renderBoard: function() {
    $("#board").append("<img src='http://drawception.com/pub/panels/2014/1-25/mTZNsx62g3-1.png'><button>Gobble</button>");
  }

};

$(document).ready(function () {
  myPage.init();
});
