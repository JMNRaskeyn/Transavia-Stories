// Voegt een removeClass toe voor de tekst bij het hartje
$(document).ready(function(){
    $("#like").click(function() {
      $("#htext").addClass("textlikes");
      $("#htext").removeClass("textlike");
     
    });

    
  });
  // Dit zorgt ervoor dat de achtergrond wordt geblurd zodra op het account icoontje wordt geklikt 
  $("#account").click(function() {
    
    $("section").addClass("blur");
    $("#background").addClass("blur");
    $("h3").addClass("blur");
    $("h5").addClass("blur");

   //Dit maakt de achtergrond weer unblurred (zichtbaar) wanneer de gebruiker op cancel klikt
   $('#cancel').click(function(){
    
    $("section").removeClass("blur");
    $("#background").removeClass("blur");
    $("h3").removeClass("blur");
    $("h5").removeClass("blur");
  });
  });