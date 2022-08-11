import "../../App.css";
import "../../DarkMode.css";
import "../NavBar/NavBar.css";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../Sources/Images/Untitled-1.png";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";
import Modal1 from "../../Components/Modal/Modal";
import { Container, Nav, Form, Navbar, Button } from "react-bootstrap";
import DarkMode from "../../DarkMode";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    // dir: "rtl",
    country_code: "ly",
  },
];

const GlobeIcon = () => (
  <i style={{ fontSize: "xx-large" }} className="fa-solid fa-earth-africa"></i>
);
function NavBar({ serviceData, servicesfun, setIsAuth, isAuth }) {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <Navbar fixed="top" className="color-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white", fontSize: "x-large" }}>
          <img src={logo} alt="test" height="70px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              className={(navLink) =>
                navLink.isActive ? "selectedLink" : "navLink"
              }
            >
              {t("Home")}
            </NavLink>
            <NavLink
              to="/cards"
              className={(navLink) =>
                navLink.isActive ? "selectedLink" : "navLink"
              }
            >
              {t("Services")}
            </NavLink>

            <NavLink
              to="/Complaint"
              className={(navLink) =>
                navLink.isActive ? "selectedLink" : "navLink"
              }
            >
              {t("Complaints")}
            </NavLink>
            <NavLink
              to="/Footer"
              className={(navLink) =>
                navLink.isActive ? "selectedLink" : "navLink"
              }
            >
              {t("About")}
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <div className="filterdiv">
              {/* <Form.Label>{t("Enter Service Name")}</Form.Label> */}

              {/* <Filter filterName={filterName} setFilterName={setFilterName} /> */}
              {isAuth ? (
                <Modal1 serviceData={serviceData} servicesfun={servicesfun} />
              ) : null}

              <Form className="d-flex" style={{ margin: "2%" }}>
                <NavLink to={`/${isAuth ? `` : `login`}`}>
                  <Button
                    style={{ marginTop: "9%" }}
                    variant="secondary"
                    onClick={() => (isAuth ? setIsAuth(!isAuth) : null)}
                  >
                    {isAuth ? t("Logout") : t("Login")}
                  </Button>
                </NavLink>
                <div className="language-select">
                  <div
                    style={{ marginTop: "10%" }}
                    className="d-flex justify-content-end align-items-center language-select-root"
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn-link dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <GlobeIcon />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <span className="dropdown-item-text">
                            {t("language")}
                          </span>
                        </li>
                        {languages.map(({ code, name, country_code }) => (
                          <li key={country_code}>
                            <a
                              href="/#"
                              className={classNames("dropdown-item", {
                                disabled: currentLanguageCode === code,
                              })}
                              onClick={() => {
                                i18next.changeLanguage(code);
                              }}
                            >
                              <span
                                className={`flag-icon flag-icon-${country_code} mx-2`}
                                style={{
                                  opacity:
                                    currentLanguageCode === code ? 0.5 : 1,
                                }}
                              ></span>
                              {name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <DarkMode />
              </Form>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
