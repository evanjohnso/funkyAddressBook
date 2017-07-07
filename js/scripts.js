$(document).ready(function(){

  // PROMPT THE USER HOW MANY FRIENDS THEY HAVE AND GET BRANCHED TO WHATEVER THEY SAY
  //   var friendCount = parseInt(prompt("If you don't mind, tell us how many friends you have. Be honest."));
  //
  //   if (friendCount < 20 && friendCount !== 0){
  //     alert("Go make some friends!");
  //   } else if (friendCount >= 20) {
  //     alert("Here's your address book!");
  //     $(".needBook").show();
  //   } else if (friendCount === 0) {
  //     alert("That is so sad! Here are some cute animals!!");
  //     $("img").show();
  //   } else {
  //     alert("Please enter a number!");
  // }
// THIS SHOWS THE CLICKED INFORMATION AND HIDES THE REST

//   $("#puppyPic").click(function() {
//     // $(".children(col1)".hide();
//     $("#otterInfo").hide();
//     $("#cobraInfo").hide();
//     $("#puppyInfo").hide();
//     $("#puppyInfo").show();
//   });
//   $("#otterPic").click(function() {
//     $("#otterInfo").hide();
//     $("#cobraInfo").hide();
//     $("#puppyInfo").hide();
//     $("#otterInfo").show();
//   });
//   $("#cobraPic").click(function() {
//     $("#otterInfo").hide();
//     $("#cobraInfo").hide();
//     $("#puppyInfo").hide();
//     $("#cobraInfo").show();
//   });
// });


  // ADD CONTACT INFORMATION TO CONTACT LIST
  $("#rsvpinfo").submit(function(event){
    var name=$("#name").val();
    var phone=$("#phone").val();
    var email=$("#email").val();
    var address=$("#address").val();

    // $(".name").append(name);
    // $(".uphone").append(phone);
    // $(".uemail").append(email);
    // $(".uaddress").append(address);

    $(".hiddenInfo").show();

    // $("#newContact").append("<li>" + name + "</li>");
    $("#newContact").append(
      '<div class="panel panel default">
      <div class="panel-heading"> ' + name + ' </div>
      <div class="panel-body">
      <ul>
      <li>Address: '+ uaddress + '</li>
      <li>Email: ' + uemail + ' </li>
      <li>Phone: ' + uphone + ' </li>
      </ul>
    </div>
    </div>');

    event.preventDefault();
    });
  });
  // APPEND CONTACT CARD
  // <div class="panel panel default">
  // <div class="panel-heading"> ' + name + ' </div>
  // <div class="panel-body">
  //   <ul>
  //   <li>Address: '+ uaddress + '</li>
  //   <li>Email: ' + uemail + ' </li>
  //   <li>Phone: ' + uphone + ' </li>
  //   </ul>
  // </div>
  // </div>
    }
  }

  // // OPEN AND CLOSE CONTACT INFORMATION
  //
