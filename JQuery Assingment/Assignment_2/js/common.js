function addFields(){
  // var phoneField = $(".phoneFieldAppend").html();
  var addressField = $(".addressFieldAppend").html()
  var phoneFieldCounter = 0;
  // var addressFieldCounter = 0;

  // function readUrl(input) {
  //   if (input.files && input.files[0]) {
  //     var reader = new FileReader();

  //     reader.onload = function(e) {
  //       $("#profileImage").show();
  //       $("#profileImage").attr("src", e.target.result);
  //     };

  //     reader.readAsDataURL(input.files[0]);
  //   }
  // }

  // $("#imgInp").change(function() {
  //   readUrl(this);
  // });
  // appending and removing phone field

  $("#addPhoneNumber").click(function() {
    phoneFieldCounter+=1;
    $("#phoneNumberInputField").append(`<div class="addLine"><div class="phoneFieldAppend">
    <label for="phoneNumberInput" class="phoneNumberInput">Phone number</label>
    <input type="text" class="width80Percent" id="phoneNumberInput`+phoneFieldCounter+`" data-id="`+phoneFieldCounter+`" placeholder="Phone Number" />
  </div><button type="button" class="removeButton remove" id="removePhoneNumber"> - </button></div>`);
  // $("#phoneNumberInput").attr('data-id', phoneFieldCounter);
  });
  $(document).on("click","#removePhoneNumber",function(){
    phoneFieldCounter -=1;
    $(this).parents(".addLine").remove();
    return false;
  });

  // appending and removing address field

  // $("#addAddress").click(function() {
  //   addressFieldCounter += 1;
  //   $("#addressInputField").append('<div class="addLine">'+addressField+'<button type="button" class="removeButton remove" id="removeAddress"> - </button></div>');
  //   $("#addressInput").attr('id', 'addressInput'+addressFieldCounter);
  //   $("#selectCountry").attr('id', 'selectCountry'+addressFieldCounter);
  //   $("#selectState").attr('id', 'selectState'+addressFieldCounter);
  //   $("#selectCity").attr('id', 'selectCity'+addressFieldCounter);
  //   $("#addressInput").attr('data-id', addressFieldCounter);
  //   // console.log($(this).attr("data-id"));
  // });
  // // $("#removeAddress").click(function() {
  //   $(document).on("click","#removeAddress",function(){
  //     addressFieldCounter -=1;
  //     $(this).parents(".addLine").remove();
  //     return false;
  // });
}