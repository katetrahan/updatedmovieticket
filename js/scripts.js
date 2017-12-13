///business logic

var discountPrice = 10;
var price = 12

function Ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
}

Ticket.prototype.getTicketPrice = function() {
  // debugger;
  if(this.age === "Teen (10-13 years)") {
    var ticketPrice = discountPrice;
  } else {
     var ticketPrice = price;
   }
  if(this.time === "5:00pm") {
    var ticketPrice = discountPrice;
  } else {
    var ticketPrice = price;
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
    var inputtedAge = $("input[name=age]:checked").val();
    var inputtedTime = $("input[name=time]:checked").val();

    var newTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime);
    var finalPrice = newTicket.getTicketPrice();
    $("ul#show-price").append("<li><span class='movieticket'>" + newTicket.movie + "<span></li>");

    var result = newTicket.getTicketPrice();
    $("#show-price").show();
    $("#show-price").append("your price is: " + "$" + result);
    $(".movieticket").last().click(function() {
    $("#show-price").fadeIn();
    $("#show-price h2").text(newTicket.movie);
    $(".name-of-movie").text(newTicket.movie);
    $(".timeOfMovie").text(newTicket.time);
    $(".ageOfUser").text(newTicket.age);
    $(".price").text(finalPrice);
    // console.log(getTicketPrice);
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
