import React, {Component} from 'react';
import FA from 'react-fontawesome';

class ContactLinks extends Component {
  render() {
    return(
      <div class="section-links">
        <div class="row">
          <div class="col-1-of-5">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="linkedin" />
              </div>
              <p class="link-box__text">
                Find me on LinkedIn
              </p>
            </div>
          </div>

          <div class="col-1-of-5">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="github" />
              </div>
              <p class="link-box__text">
                Find me on Github
              </p>
            </div>
          </div>

          <div class="col-1-of-5">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="file" />
              </div>
              <p class="link-box__text">
                Checkout my Resume
              </p>
            </div>
          </div>

          <div class="col-1-of-5">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="paper-plane" />
              </div>
              <p class="link-box__text">
                Send me an email
              </p>
            </div>
          </div>

          <div class="col-1-of-5">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="pencil" />
              </div>
              <p class="link-box__text">
                Checkout my Blog
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ContactLinks;
