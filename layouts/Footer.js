const Footer = () => {
  return <DefaultFooter />;
};
export default Footer;

const DefaultFooter = () => {
  return (
      <footer className="main-footer footer-one rel z-1 mt-100">
        <div className="container">
          <div className="footer-newsletter text-white">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-5">
                <div
                    className="logo-part"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                >
                  <h2 className="text-white">Stay in the loop.</h2>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div
                    className="form-part"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                >
                  <form className="newsletter-form mt-15" action="#">
                    <input type="email" placeholder="Email Address" required="" />
                    <button type="submit">
                      Join Waitlist ✨
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                  className="footer-widget widget-about"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
              >
                <h6 className="footer-title">About Company</h6>
                <p>
                  Bilingual uses AI to help software and service businesses expand to new territories.

                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
              <div
                  className="footer-widget widget-contact"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1500}
                  data-aos-offset={50}
              >
                <h6 className="footer-title">Contact</h6>
                <ul>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:support@gmail.com">support@bilinqual.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-30 py-15">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-6">
                <div
                    className="copyright-text pt-10 text-lg-start text-center"
                    data-aos="fade-left"
                    data-aos-duration={1000}
                    data-aos-offset={50}
                >
                  <p>
                    Copyright @2024, <span className='fw-bold'>Bilinqual</span> All Rights
                    Reserved
                  </p>
                </div>
              </div>
            </div>
            {/* Scroll Top Button */}
            <button className="scroll-top scroll-to-target" data-target="html">
              <span className="far fa-angle-double-up" />
            </button>
          </div>
        </div>
      </footer>
  );
};
