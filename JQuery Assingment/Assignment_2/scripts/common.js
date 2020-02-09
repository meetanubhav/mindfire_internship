function addFields(){
    // appending and removing phone field

    $("#addPhoneNumber").click(function() {
        $("#phoneNumberInputField").append(`<div class="addLine"><div class="phoneFieldAppend">
        <label for="phoneNumberInput" class="phoneNumberInput">Phone number</label>
        <input type="text" class="phoneNumberInputDynamic" placeholder="Phone Number" maxlength="12" />
        <small class="dynamicPhoneNumberError">Incorrect! Enter 10-12 digits number</small>
        </div><button type="button" class="removePhoneNumber"> x </button></div>`);
    });
    $(document).on("click",".removePhoneNumber",function(){
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
            // $('.imageTitle').html(input.files[0].name);
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