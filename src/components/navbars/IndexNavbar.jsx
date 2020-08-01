import React from 'react';
import Router, { Link } from 'next/router';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from 'reactstrap';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor('navbar-transparent');
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={`fixed-top ${navbarColor}`} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="javascript::void();"
              onClick={() => {
                Router.push('/');
              }}
            >
              Logo
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar" />
              <span className="navbar-toggler-bar middle-bar" />
              <span className="navbar-toggler-bar bottom-bar" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93" />
                  <p>Beranda</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1" />
                  <p>Tentang Kami</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1" />
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1" />
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="javascript::void();"
                  onClick={() => {
                    Router.push('/demo');
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93" />
                  <p>Demo</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93" />
                  <p>Simulasi</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
