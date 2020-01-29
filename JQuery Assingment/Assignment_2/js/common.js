$(document).ready(function () {
    var phoneCounter = 0 ; 
    var addressCounter= 0;

    function readUrl(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          
          reader.onload = function(e) {
            $('#profileImage').show();
            $('#profileImage').attr('src', e.target.result);
          }
          
          reader.readAsDataURL(input.files[0]);
        }
      }
      
      $("#imgInp").change(function() {
        readUrl(this);
      });
     // appending and removing contact field

     $("#addPhoneNumber").click(function(){
        phoneCounter+=1;
        console.log(phoneCounter);
        $("#phoneNumberInputField").append(' <div id="newPhoneNumber"><input type="text" class="w-80" id="newPhoneNumber'+phoneCounter+'" placeholder="Phone Number"><button type="button" class="remove-button remove" id="removePhoneNumber"> - </button></div>');
    });
    $(document).on("click",".remove",function(){
        $(this).parents("#newPhoneNumber").remove();
        return false;
        phoneCounter-=1;
    });

    // appending and removing address field

    $("#addAddress").click(function(){
        addressCounter+=1;
        console.log(addressCounter);
        $("#addressInputField").append('<div id="newAddressInputField"><label for="addressInput" class="addressInput">Address</label><input type="text" class="w-80" id="addressInput'+addressCounter+'" placeholder="Address"><button type="button" class="remove-button remove" id="removeAddess"> - </button></div>');
    });
    $(document).on("click",".remove",function(){
        $(this).parents("#newAddressInputField").remove();
        return false;
        addressCounter-=1;
    });


});