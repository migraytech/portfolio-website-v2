
import React from 'react';


import './contact.css';

const Contact = ()  => {

    return (
    <section id="contact">
      <div class="col-sm-8">
        <form class="contact-form validate-form" id="contact-form">
        <div class="row">
            <div class="form-group col-sm-6">
                <input name="name" id="name" type="text" class="form-control bordered" placeholder="Name"/>
            </div>
            <div class="form-group col-sm-6">
                <input name="email" id="email" type="text" class="form-control bordered" placeholder="E-mail address"/>
            </div>
        </div>
        <div class="form-group">
            <textarea name="message" id="message" cols="30" rows="7" class="form-control bordered" placeholder="Message"></textarea>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <button class="btn btn-filled btn-primary btn-block">Send it <i class="i-after ti-arrow-right"></i></button>
            </div>
        </div>
        </form>
        </div>
    </section>
    );
}

export default Contact;