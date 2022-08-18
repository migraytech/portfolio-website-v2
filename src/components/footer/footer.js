
import './footer.css';

import {
    MDBFooter,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Footer = () =>{
    return (
 <div>
  <MDBFooter className='bg-dark text-center text-white'>
    <div className='row'>
   <MDBContainer className='p-4 pb-0' class ="col-lg-10 mt-4">
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-8 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for my Blogs for new projects</strong>
                <p>.</p>
              </p>
            </MDBCol>

            <MDBCol md='4' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' placeholder='Email address' />
            </MDBCol>

            <div class="col-lg-1">
                    <button class="btn btn-dark btn btn-filled btn-primary btn-block">Subscribe<i class="i-after ti-arrow-right"></i></button>
                </div>
          </MDBRow>
        </form>
        </MDBContainer>
      <MDBContainer className='p-4 pb-0' class="col-lg-2 mt-4">
      <span>Get connected with me on social networks:</span>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/mignon_g/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/mignon-gakuba-700247180/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.youtube.com/channel/UCgC5yEhIxRPiOxiNa20el2A' role='button'>
            <MDBIcon fab icon='youtube' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/MignonGakuba' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        ©2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Mignon Gakuba
        </a>
      </div>
    </MDBFooter>
  </div>
  

    );
}

export default Footer;