///business logic

var price = 10;

function Ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
  this.price = price;
}

Ticket.prototype.getTicketPrice = function() {
  debugger;
  if(this.age === "young") {
    var ticketPrice = price -3;
  }
  if(this.time === "5") {
    var ticketPrice = price -2;
  }
  // debugger;

//   if (this.age <= 12){
//     this.basePrice = this.basePrice -3; //$5
//   }
// } if (this.age >= 60){
//     this.basePrice = this.basePrice -5;
  return ticketPrice;
}


//user interface
$(document).ready(function() {
  $("#movieForm").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("#movieDropDown").val();
    var inputtedAge = $("#ageInput").val();
    var inputtedTime = $("#timeInput").val();

    var newTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime);
    var finalPrice = newTicket.getTicketPrice();
    $("#show-price").append("<li><span class='movieticket'>" + newTicket.movie + "<span></li>");

    $(".movieticket").last().click(function() {
      $("#show-price").fadeIn();
    $("#show-price h2").text(newTicket.movie);
    $(".name-of-movie").text(newTicket.movie);
    $(".timeOfMovie").text(newTicket.time);
    $(".ageOfUser").text(newTicket.age);
    $(".price").text(finalPrice);

    var result = newTicket.getTicketPrice();
    $("#show-price").append("your price is" + result);
    console.log(getTicketPrice);
    });
  });
});





    // var movie = $("#movieDropDown").val();
    // if ($("input:radio[name=age]:checked").val() === "young") {
    //   debugger;
    //   var age = true;
    // } else {
    //   var age = false;
    // }
    //
    // if ($("input:radio[name=age]:checked").val() === "old") {
    //   var old = true;
    // } else {
    //   var old = false;
    // }
    // if ($("input:radio[name=time]:checked").val() === "5") {
    //   var time = true;
    // } else {
    //   var time = false;
    // }
