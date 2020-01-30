function dynamicAdress(){
    var addressFieldCounter = 0;
    $("#addAddress").click(function() {
          addressFieldCounter += 1;
          $("#addressInputField").append(`<div class="addLine"><div class="addressFieldAppend">
          <label for="addressInput" class="addressInput">Address</label>
          <input type="text" class="addressInputState" id="addressInput`+addressFieldCounter+`" data-id="0" placeholder="Address" />
          <!-- <button type="button" class="addButton" id="addAddress">
              +
          </button> -->
          <div class="flexContainer marginTop3Percent" id="addressExtras">
              <div class="addressSelector">
                  <label for="selectCountry`+addressFieldCounter+`"> Country:</label>
                  <br>
                  <select id="selectCountry`+addressFieldCounter+`">
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="China">China</option>
                  </select>
                  <br>
              </div>
              <!-- country col ends here -->

              <div class="addressSelector">
                  <label for="selectState`+addressFieldCounter+`"> State:</label>
                  <br>
                  <select id="selectState`+addressFieldCounter+`">
                      <option value="">Select State</option>
                      <option value="Jharkhand" class="indiaState">Jharkhand</option>
                      <option value="Odisha" class="indiaState">Odisha</option>
                      <option value="California" class="usaState">California</option>
                      <option value="Florida" class="usaState">Florida</option>
                      <option value="Yunnan" class="chinaState">Yunnan</option>
                      <option value="Bejeing" class="chinaState">Beijing</option>
                  </select>
              </div>

              <div class="addressSelector">
                  <label for="selectCity`+addressFieldCounter+`">City:</label>
                  <br>
                  <select id="selectCity`+addressFieldCounter+`">
                      <option value="3">Select City</option>
                      <option value="Bhubhaneshwar" class="odishaCity">Bhubhaneshwar</option>
                      <option value="Puri" class="odishaCity">Puri</option>
                      <option value="Jamshedpur" class="jharkhandCity">Jamshedpur</option>
                      <option value="Ranchi" class="jharkhandCity">Ranchi</option>
                      <option value=" losAngeles" class="californiaCity">Los Angelees</option>
                      <option value="sanFransisco" class="californiaCity">San Fransisco</option>
                      <option value="Miami" class="floridaCity">Miami</option>
                      <option value="Orlando" class="floridaCity">Orlando</option>
                      <option value="shangai" class="yunnanCity">Shangai</option>
                      <option value="wuhan" class="yunnanCity">Wuhan</option>
                      <option value="harbin" class="beijingCity">Harbin</option>
                      <option value="hongkong" class="beijingCity">Hongkong</option>
                  </select>
              </div>
          </div>
        </div><button type="button" class="removeButton remove" id="removeAddress"> - </button></div>`);
         
        });
        // $("#removeAddress").click(function() {
          $(document).on("click","#removeAddress",function(){
            addressFieldCounter -=1;
            $(this).parents(".addLine").remove();
            return false;
        });
}   