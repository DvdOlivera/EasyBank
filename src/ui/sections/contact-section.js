export default `<div id="contact" >

  <form id="formcontact" >

    <div  class="form-row ">

      <div class="contenedoropcionform">
        <label for="validationDefault01"> Name</label>
        <input type="text" class="w3-input form-control" id="validationDefault01"   required>
      </div>

      <div class="contenedoropcionform">
        <label for="validationDefault02">Company</label>
        <input  type="text" class="w3-input form-control" id="validationDefault02"   required>
      </div>

      <div class="contenedoropcionform">
        <label for="validationDefault05">Email</label>
        <input   type="email" class="w3-input form-control" id="validationDefault05"  required>
      </div>

    </div>

    <div class="form-row">
      <div class="contenedoropcionform inputhelp">
        <label for="validationDefault03">How can we help you?</label>
        <textarea id="help"type="text" class=" form-control" id="validationDefault03"  required></textarea>
      </div>
    </div>

    <div id="submitform"  class="form-group">

      <div class="form-check">
        <input id="checkterms"  type="checkbox" value="" id="invalidCheck2" required>
        <label class="form-check-label" for="invalidCheck2">
          <span id="termsandconditions"> 
            Agree to terms and conditions
          </span> 
        </label>
      </div>
      <button class="botonrequest" type="submit">Submit form</button>
    </div>
  </form>
  </div>`