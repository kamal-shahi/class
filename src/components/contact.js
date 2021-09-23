import React from "react";
const ContactUs = ()=> {
    return(
      <div>
        <form>
          <h1 className="text-center">Contact me</h1> <hr/>
          <div class="form-group">
            <label for="exampleInputEmail1">Full Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Contact Number</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <h1 className="text-center mt-5">My Location</h1> <hr/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.605917069595!2d85.3608102347778!3d27.689439731864695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport!5e0!3m2!1sen!2snp!4v1632317800060!5m2!1sen!2snp" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    )
  }
export default ContactUs;  