function dynamicAdress(){
    window.addressFieldCounter = 0;
    $("#addAddress").click(function() {
          addressFieldCounter += 1;        
          $("#addressInputField").append(`<div class="addLine"><div class="addressFieldAppend">
          <label for="addressInput" class="addressInput">Address</label>
          <br>
          <textarea class="addressInputFieldClass" id="addressInput`+addressFieldCounter+`" data-id="`+addressFieldCounter+`" rows="2" cols="50" placeholder="Address"></textarea>
          <small class="addressDynamic" id="addressError`+addressFieldCounter+`">Enter Address</small>
          <div class="flexContainer marginTop3Percent" id="addressExtras">
              <div class="addressSelector">
                  <label for="selectCountry`+addressFieldCounter+`"> Country:</label>
                  <br>
                  <select id="selectCountry`+addressFieldCounter+`" ctrlid="`+addressFieldCounter+`" class="countrySelect">
                      <option value="">Select Country</option>
                      <option value="INDIA">India</option>
                      <option value="USA">USA</option>
                      <option value="CHINA">China</option>
                  </select>
                  <br>
                  <small class="addressDynamic" id="selectCountryError`+addressFieldCounter+`">Incorrect! Select Country</small>
              </div>
              <!-- country col ends here -->

              <div class="addressSelector">
                  <label for="selectState`+addressFieldCounter+`"> State:</label>
                  <br>
                  <select id="selectState`+addressFieldCounter+`" class="selectStateAppendDiv">
                      <option value="">Select State</option>
                  </select>
                  <br>
                  <small class="addressDynamic" id="selectStateError`+addressFieldCounter+`">Incorrect! Select State</small>
              </div>

              <div class="addressSelector" id="cityField">
                    <label for="cityInput`+addressFieldCounter+`">City:</label>
                    <br>
                    <input type="text" id="cityInput`+addressFieldCounter+`" placeholder=""/>
                    <br>
                    <small class="addressDynamic" id="cityInputError`+addressFieldCounter+`">Incorrect! Only Alphabets</small>
              </div>
              <div class="addressSelector" id="pincodeField"> 
              <label for="pincodeInput`+addressFieldCounter+`">Pincode</label>
              <input type="text" id="pincodeInput`+addressFieldCounter+`" placeholder="Enter Pincode" maxlength="6" />
              <small class="addressDynamic" id="pincodeInputError`+addressFieldCounter+`">Incorrect! Enter 6 digit number</small>
          </div>
          </div>
        </div><button type="button" class="removeAddress"> x </button></div>`);
         
        });
          $(document).on("click",".removeAddress",function(){
            addressFieldCounter -=1;
            $(this).parents(".addLine").remove();
            return false;
        });
}   
// changing the country-state list of static address fields
$(document).on("change",".countrySelect",function(){
    var ctrlId = $(this).attr('ctrlid');
    if(ctrlId==="0"){
        ctrlId="";
    }
    var countrySelected = $('#selectCountry'+ctrlId).val();
    if (countrySelected === "INDIA") {
        var addState = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh","Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"];
    }else if (countrySelected === "USA") {
        var addState = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
    }else  if(countrySelected === "CHINA") {
        var addState = ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"];
    }
    else{
        var addState = [];
    }
    // var ctrlId = $(this).attr('ctrlid');
    var string = " <option>Select State</option>";

    for (i = 0; i < addState.length; i++) {
        string = string + "<option value=" + addState[i] + ">" + addState[i] + "</option>";
    }
    $('#selectState'+ctrlId).html(string);
});