
import React from 'react';


import './contact.css';

const Contact = ()  => {

    return (
    <section id="contact">
        <div class="col-sm-4">
        <img class="img-circle mb-25" width="72" src="assets/img/avatars/envato-avatar.jpg" alt="envato avatar"/>
            <div>
                <strong>Address:</strong><br/>
                A795 Folsom Ave, Suite 600<br/>
                San Francisco, CA 94107<br/><br/>
                <strong>Phone:</strong><br/>
                +48 221 909 99<br/><br/>
                <strong>E-mail:</strong><br/>
                <a href="#">your.name@example.com</a>
            </div>
    </div>
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