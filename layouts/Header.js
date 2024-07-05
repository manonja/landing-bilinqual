"use client";

const Header = ({ header, onePage }) => {
  switch (header) {
    case 1:
      return <DefaultHeader onePage={onePage} />;
    default:
      return <DefaultHeader onePage={onePage} />;
  }
};
export default Header;

const DefaultHeader = () => {
  return (
      <header className="main-header menu-absolute header-white no-border">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container container-1660 clearfix">
            <div className="header-inner py-15 rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <h2 className="text-white">Bilinqual.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
  );
};