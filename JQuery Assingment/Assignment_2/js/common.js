function addFields(){
  window.phoneFieldCounter = 0;
  // appending and removing phone field

  $("#addPhoneNumber").click(function() {
    phoneFieldCounter+=1;
    $("#phoneNumberInputField").append(`<div class="addLine"><div class="phoneFieldAppend">
    <label for="phoneNumberInput" class="phoneNumberInput">Phone number</label>
    <input type="text" class="phoneNumberInputDynamic" id="phoneNumberInput`+phoneFieldCounter+`" data-id="`+phoneFieldCounter+`" placeholder="Phone Number" />
    <small class="dynamicPhoneNumberError" id="dynamicPhoneNumberError`+phoneFieldCounter+`">Enter Phone Number.</small>
    <small class="dynamicPhoneNumberRegexError" id="dynamicPhoneNumberRegexError`+phoneFieldCounter+`"></small>
    </div><button type="button" class="removePhoneNumber"> x </button></div>`);
  // $("#phoneNumberInput").attr('data-id', phoneFieldCounter);
  });
  $(document).on("click",".removePhoneNumber",function(){
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
// image upload
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.imageUploadWrapper').hide();

      $('.fileUploadImage').attr('src', e.target.result);
      $('.fileUploadSection-content').show();
      // $('#getImage').attr('src', e.target.result);
      $('.image-title').html(input.files[0].name);
      window.imagePath = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.fileUploadInput').replaceWith($('.fileUploadInput').clone());
  $('.fileUploadSection-content').hide();
  $('.imageUploadWrapper').show();
}
$('.imageUploadWrapper').bind('dragover', function () {
        $('.imageUploadWrapper').addClass('imageDrop');
    });
    $('.imageUploadWrapper').bind('dragleave', function () {
        $('.imageUploadWrapper').removeClass('imageDrop');
});
