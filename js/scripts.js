///business logic
function Ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
}

Ticket.prototype.ticketPrice = function () {
  return this.movie + " " + this.age + " " + this.time;
}

function resetFields() {
  $().val("");
  $().val("");
  $().val("");
  $().val("");
}
//user interface
