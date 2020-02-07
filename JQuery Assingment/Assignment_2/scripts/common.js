function addFields(){
  window.phoneFieldCounter = 0;
  // appending and removing phone field

  $("#addPhoneNumber").click(function() {
    phoneFieldCounter+=1;
    $("#phoneNumberInputField").append(`<div class="addLine"><div class="phoneFieldAppend">
    <label for="phoneNumberInput" class="phoneNumberInput">Phone number</label>
    <input type="text" class="phoneNumberInputDynamic" id="phoneNumberInput`+phoneFieldCounter+`" data-id="`+phoneFieldCounter+`" placeholder="Phone Number" maxlength="12" />
    <small class="dynamicPhoneNumberError" id="dynamicPhoneNumberError`+phoneFieldCounter+`">Incorrect! Enter 10-12 digits number</small>
    </div><button type="button" class="removePhoneNumber"> x </button></div>`);
  });
  $(document).on("click",".removePhoneNumber",function(){
    phoneFieldCounter -=1;
    $(this).parents(".addLine").remove();
    return false;
  });

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
// remove image
function removeUpload() {
  $('.fileUploadInput').replaceWith($('.fileUploadInput').clone());
  $('.fileUploadSection-content').hide();
  $('.imageUploadWrapper').show();
}
$('.imageUploadWrapper').on('dragover', function () {
        $('.imageUploadWrapper').addClass('imageDrop');
});
$('.imageUploadWrapper').on('dragleave', function () {
    $('.imageUploadWrapper').removeClass('imageDrop');
});
