$(document).ready(function(){

  $("#rsvpinfo").submit(function(event){
  var name=$("#name").val();
  var phone=$("#phone").val();
  var email=$("#email").val();
  var address=$("#address").val();

  $(".name").append(name);
  $(".phone").append(phone);
  $(".email").append(email);
  $(".address").append(address);

  $(".message").show();

  $("#newContact").append("<li>"+name+"</li>");
  event.preventDefault();
  });
});
