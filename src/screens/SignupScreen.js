import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import login_bg from "../assets/login_bg.png";
import login_logo from "../assets/login_logo.png";
import Select from "react-select";
import {
  auth,
  db,
  loginWithEmailAndPassword,
  logInWithGoogle,
  logout,
  registerWithEmailAndPassword,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { signOut } from "@firebase/auth";

export default function Login() {
  const [isUser, setIsUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [errorName, setErrorName] = useState(false);
  const [errorNameMessage, setErrorNameMessage] = useState("");
  const [errorEmail, setErrorEmaill] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [errorConfirmPasswordMessage, setErrorConfirmPasswordMessage] =
    useState("");
  const [errorIndustryMessage, setErrorIndustryMessage] = useState("");
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorPhoneMessage, setErrorPhoneMessage] = useState("");
  const [errorCompanyName, setErrorCompanyName] = useState(false);
  const [errorCompanyNameMessage, setErrorCompanyNameMessage] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const fetchName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = await doc.docs[0].data();
      setDisplayName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured!");
    }
  };
  const options = [
    { value: "IOSS", label: "IOSS" },
    { value: "Facial", label: "Facial" },
    { value: "Partnership", label: "Partnership" },
    { value: "TaxPay", label: "TaxPay" },
  ];

  useEffect(() => {
    if (!user) return;
    fetchName();
  }, [user]);
  return (
    <div className="login__container">
      {user ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 26, fontWeight: "bold" }}>
            <span style={{ fontWeight: 400 }}> Welcome,</span> {""}
            {displayName}
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: "400",
              textAlign: "center",
              width: "80%",
              marginTop: ".5em",
            }}
          >
            Thanks for confirming your email. Our Admin team is aware of your
            application and will be in contact in due course to progress your
            application. In the mean time if you have any urgent questions
            kindly contact our team at support@digitax.com
          </div>
          <button
            style={{
              marginTop: "2em",
              width: 250,
              justifyContent: "center",
              alignItems: "center",
            }}
            className="nav__header__link__btn__filled"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="login__container__content">
          <div className="login__container__content__left">
            <img
              src={login_bg}
              alt="login_bg"
              className="login__container__content__left__img"
            />
            <div className="login__container__content__left__overlay">
              <div className="login__container__content__left__overlay__content">
                <div className="login__container__content__left__overlay__content__logo">
                  <img
                    src={login_logo}
                    alt="login_logo"
                    className="login__container__content__left__overlay__content__logo__svg"
                  />
                </div>
                <div className="login__container__content__left__overlay__content__heading">
                  Welcome
                </div>
                <div
                  style={{ color: "#fff" }}
                  className="login__container__content__left__overlay__content__para"
                >
                  Digitax, As A Thought Leader, Is Disrupting This Marketplace
                  By Automating The Fiscal Representation Process And Offering
                  Numerous Risk- Mitigated, Automated Services Around It, Such
                  As Compliance & Testing Automation, Payments Facilitation, And
                  Support Services To Facilitate The Timely Payment Of VAT By
                  Smes And Mncs.
                </div>
              </div>
            </div>
          </div>
          <div className="login__container__content__right">
            <div className="login__container__content__right__heading">
              We are your transparent and trusted partner
            </div>
            <div className="login__container__content__left__overlay__content__para">
              Digitax, As A Thought Leader, Is Disrupting This Marketplace By
              Automating The Fiscal Representation Process And Offering.
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="login__container__content__right__form__signup"
            >
              <div className="login__container__content__right__form__input__wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input
                  type="text"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setErrorName(true);
                      setErrorNameMessage("Please enter name");
                    } else {
                      setErrorName(false);
                      setErrorNameMessage("");
                      setName(e.target.value);
                    }
                  }}
                  required={true}
                  placeholder="Enter Username"
                  className="login__container__content__right__form__input"
                />
                <div className="login__container__content__right__form__input__error__message">
                  {errorNameMessage}
                </div>
              </div>

              <div className="inputs__row">
                <div className="login__container__content__right__form__input__wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-list"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    placeholder="Registering as"
                    options={options}
                  />
                  <div className="login__container__content__right__form__input__error__message">
                    {errorIndustryMessage}
                  </div>
                </div>
                <div className="login__container__content__right__form__input__wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>

                  <input
                    type="text"
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setErrorCompanyName(true);
                        setErrorCompanyNameMessage("Please enter company name");
                      } else {
                        setErrorCompanyName(false);
                        setErrorCompanyNameMessage("");
                        setCompanyName(true);
                      }
                    }}
                    placeholder="Company Name"
                    className="login__container__content__right__form__input"
                  />
                  <div className="login__container__content__right__form__input__error__message">
                    {errorCompanyNameMessage}
                  </div>
                </div>
              </div>
              <div className="login__container__content__right__form__input__wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <input
                  type="email"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setErrorEmaill(true);
                      setErrorEmailMessage("Please enter email");
                    } else {
                      setErrorEmaill(false);
                      setErrorEmailMessage("");
                      setEmail(e.target.value);
                    }
                  }}
                  required={true}
                  placeholder="Enter your email"
                  className="login__container__content__right__form__input"
                />
                <div className="login__container__content__right__form__input__error__message">
                  {errorEmailMessage}
                </div>
              </div>
              <div className="login__container__content__right__form__input__wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setErrorPhone(true);
                      setErrorPhoneMessage("Please enter phone number");
                    } else {
                      setErrorPhone(false);
                      setErrorPhoneMessage("");
                      setPhone(e.target.value);
                    }
                  }}
                  className="login__container__content__right__form__input"
                />
                <div className="login__container__content__right__form__input__error__message">
                  {errorPhoneMessage}
                </div>
              </div>
              <div className="inputs__row">
                <div className="login__container__content__right__form__input__wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-lock"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>

                  <input
                    type="password"
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setErrorPassword(true);
                        setErrorPasswordMessage("Please enter password");
                      } else {
                        setErrorPassword(false);
                        setErrorPasswordMessage("");
                        setPassword(e.target.value);
                      }
                    }}
                    required={true}
                    placeholder="Enter Password"
                    className="login__container__content__right__form__input"
                  />
                  <div className="login__container__content__right__form__input__error__message">
                    {errorPasswordMessage}
                  </div>
                </div>
                <div className="login__container__content__right__form__input__wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-lock"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    type="password"
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setErrorPassword(true);
                        setErrorConfirmPasswordMessage(
                          "Please enter confirm password"
                        );
                      } else {
                        setErrorPassword(false);
                        setErrorConfirmPasswordMessage("");
                        setPassword(e.target.value);
                      }
                    }}
                    required={true}
                    placeholder="Enter Password"
                    className="login__container__content__right__form__input"
                  />
                  <div className="login__container__content__right__form__input__error__message">
                    {errorConfirmPasswordMessage}
                  </div>
                </div>
              </div>
              <div className="login__container__content__form__checkbox">
                <input
                  className="styled-checkbox"
                  id="styled-checkbox"
                  type="checkbox"
                  name="Remember"
                  required
                />
                <label
                  style={{ color: "#1c0a15", fontSize: 13 }}
                  htmlFor="styled-checkbox"
                >
                  I agree with the term and conditions
                </label>
                <div className="login__btn__container">
                  <button
                    style={{
                      marginTop: "1em",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    type="submit"
                    className="nav__header__link__btn__filled"
                    onClick={() =>
                      registerWithEmailAndPassword(name, email, password)
                    }
                  >
                    Sign Up
                  </button>
                  <button
                    style={{
                      marginTop: "1em",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="nav__header__link__btn__filled"
                    onClick={() => logInWithGoogle(name, email, password)}
                  >
                    Login with Google
                  </button>
                </div>
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{ marginTop: "1em" }}
                    className="login__container__content__right__para"
                  >
                    Already have account?
                  </div>
                  <Link
                    to="/login"
                    className="login__container__content__right__login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
