import React, {Component} from 'react';
import FA from 'react-fontawesome';

class ContactLinks extends Component {
  render() {
    return(
      <div class="section-links">
        <div class="row">
          <div class="col-1-of-5">
            <a href="https://www.linkedin.com/in/cory-hoban-182735125/">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="linkedin" />
              </div>
              <p class="link-box__text">
                Find me on LinkedIn
              </p>
            </div>
            </a>
          </div>

          <div class="col-1-of-5">
            <a href="https://github.com/Khaladin">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="github" />
              </div>
              <p class="link-box__text">
                Find me on Github
              </p>
            </div>
            </a>
          </div>

          <div class="col-1-of-5">
          <a href="./CoryHobanResume2018.doc">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="file" />
              </div>
              <p class="link-box__text">
                Checkout my Resume
              </p>
            </div>
            </a>
          </div>

          <div class="col-1-of-5">
            <a href="mailto:hobancor@gmail.com">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="paper-plane" />
              </div>
              <p class="link-box__text">
                Send me an email
              </p>
            </div>
            </a>
          </div>

          <div class="col-1-of-5">
            <a href="http://coryhoban.blogspot.com/">
            <div class="link-box">
              <div class="link-box__icon">
                <FA name="pencil" />
              </div>
              <p class="link-box__text">
                Checkout my Blog
              </p>
            </div>
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default ContactLinks;
