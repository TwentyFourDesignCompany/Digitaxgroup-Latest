import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import login_bg from "../assets/login_bg.png";
import login_logo from "../assets/login_logo.png";
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
  const [displayName, setDisplayName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorNameMessage, setErrorNameMessage] = useState("");
  const [errorEmail, setErrorEmaill] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

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

  useEffect(() => {
    if (!user) return;
    fetchName();
  }, [user]);

  return (
    <div className="login__container">
      {user ? (
        <>
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
        </>
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
            <div className="login__container__content__right__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              augue lorem, commodo at tortor non, mattis tristique mi. Cras
              volutpat venenatis pretium. Pellentesque suscipit malesuada
              tincidunt. Integer ut euismod tellus.
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="login__container__content__right__form"
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
                      setErrorNameMessage("Please enter username");
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
                  class="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
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
              <div className="login__container__content__form__checkbox">
                <input
                  className="styled-checkbox"
                  id="styled-checkbox"
                  type="checkbox"
                  required
                  name="Remember"
                />
                <label
                  style={{ color: "#1c0a15", fontSize: 13 }}
                  htmlFor="styled-checkbox"
                >
                  Remember Me
                </label>
                <button
                  style={{
                    marginTop: "2em",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  type="submit"
                  className="nav__header__link__btn__filled"
                  onClick={() => loginWithEmailAndPassword(email, password)}
                >
                  Login
                </button>
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
                    Don't already have account?
                  </div>
                  <Link
                    to="/sign-up"
                    className="login__container__content__right__login"
                  >
                    Signup
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
