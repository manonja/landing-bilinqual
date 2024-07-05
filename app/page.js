import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";


const Index = () => {
  return (
      <AkpagerLayout>
        {/* Hero area start */}
        <section
            className="hero-area bgs-cover py-250 rpy-150 overlay"
            // className="bg-gradient-to-r from-indigo-500"
            style={{backgroundImage: "url(assets/images/hero/gradient_bg.jpg)"}}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10 col-md-11">
                <div className="hero-content text-center text-white">
                  <h1
                      data-aos="fade-up"
                      data-aos-delay={200}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                      className="gradient-title"
                  >
                    Meet Bilinqual
                  </h1>
                  <div
                      className="hero-btns"
                      data-aos="fade-up"
                      data-aos-delay={400}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                  >
                    <h2 className="mt-20">The simplest way to test new markets and grow your business, globally.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container ">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-8">
                  <div className="xl:mw-xl-4 lg:mw-xl-4 mt-50">
                    <div
                        className="form-part"
                        data-aos="fade-right"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                    >
                      <form className="newsletter-form" action="#">
                        <input type="email" placeholder="Email Address" required=""/>
                        <button className="lg" type="submit">
                          Join Waitlist ✨
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* Hero area End */}
        {/* Services Area Start */}
        <section
            className="services-area bgp-bottom bgc-navyblue pb-55 rel z-2"
            // style={{
            //   background: ,
            // }}
        >
          <div className="container">
            <div className="services-wrap">
              <div className="row justify-content-center">
                <div
                    className="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                >
                  <div className="iconic-box">
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Multilingual Capabilities
                        </Link>
                      </h4>
                      <p>
                        Expand your reach with AI SDRs and chatbots that communicate fluently in multiple
                        languages. Break down language barriers and engage with prospects in their native
                        tongue, providing a personalized experience that drives conversions.
                      </p>
                      {/*<hr />*/}

                    </div>
                  </div>
                </div>
                <div
                    className="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                >
                  <div className="iconic-box">
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Market Validation
                        </Link>
                      </h4>
                      <p>
                        Quickly and efficiently test new markets without the need for extensive resources.
                        Our AI solutions gather valuable insights, helping you determine market viability and optimize
                        your strategy.

                      </p>
                      {/*<hr />*/}
                      {/*<Link legacyBehavior href="/service-details">*/}
                      {/*  <a className="read-more">*/}
                      {/*    Read More <i className="far fa-arrow-right" />*/}
                      {/*  </a>*/}
                      {/*</Link>*/}
                    </div>
                  </div>
                </div>
                <div
                    className="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                >
                  <div className="iconic-box">
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Intelligent Lead Qualification
                        </Link>
                      </h4>
                      <p>
                        Automate the lead qualification process with our AI SDRs. Identify high-potential
                        prospects and prioritize them for your sales team, ensuring a focused and
                        effective sales strategy.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AkpagerLayout>
  );
};
export default Index;
