import React, { useState, useEffect } from "react";
import "./Login.css";
import OtpInput from "react-otp-input";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { loginSchema, forgetSchema } from "../../Schema/index.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "@/SubComponent/InputField";
import IndicatoreSlider from "@/components/common/sliders";
import { alertIcon1 } from "@/assets/Icons";
const loginInitialValues = {
  email: "",
  password: "",
};
const forgetInitialValues = {
  email: "",
};
const Login = ({ checkLoggedIn }) => {
  const [isValidation, setIsValidation] = useState({
    vEmail: false,
    vPassword: false,
  });
  const [isForget, setisForget] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [isResetPAssword, setIsResetPassword] = useState(false);
  const [isTitlePara, setIsTitlePara] = useState({
    title: "Welcome Back !",
    para1: "Sign in to continue to UPSRTC",
    para2: "Depot Management System",
  });
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(30);
  const [InitialValues, setIsInitialValues] = useState(loginInitialValues);
  const emailPlaceHolder = "Enter Email id here";
  const passwordPlaceHolder = "Enter Password here";

  const navigate = useNavigate();
  //  formik Validation code start

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: InitialValues,
      validationSchema: loginSchema,
      onSubmit: (value) => {
        console.log("onSubmit formik-->>", value);
        if (value.email && value.password) {
          onLoginHandler({ email: value.email, password: value.password });
        }
      },
    });
  console.log("error for formik-->>", errors);
  // formik validation code end
  const onCheckValidate = (value) => {
    setIsValidation((prev) => ({ ...prev, vEmail: false }));
    if (true) {
      if (value === "forget") {
        setIsTitlePara((prev) => ({
          ...prev,
          title: "Verify your OTP",
          para1: "We have sent a 4-digit OTP to ",
          para2: "<Register Email id here>",
        }));
        setIsVerify(true);
      } else {
        // for login
      }
    }
  };
  const onLoginHandler = async ({ email, password }) => {
    console.log("check email-->>", email, password);
    const data = {
      loginEmail: email,
      loginMobile: "",
      password: password,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await axios
        .post("https://erp.sugamyatra.up.in/api/adminusers/login", data, {
          headers: headers,
        })
        .then((res) => res);

      if (response) {
        if (response?.data?.data?.token) {
          localStorage.setItem("userToken", response.data.data.token);
        }
        // console.log("REPOSNSE-->>",response.data.data.token);
        checkLoggedIn(true);
        navigate("/vehicles");
      }
      // console.log("login api->",response.data.token);
    } catch (error) {}
  };

  const onForgetHandler = () => {
    setIsTitlePara((prev) => ({
      ...prev,
      title: "Forgot Password?",
      para1: "Enter Registered Email to Reset Password",
      para2: "",
    }));
    setisForget(true);
    setIsInitialValues(forgetInitialValues);
  };
  const onForgetHandler2 = () => {
    onCheckValidate("forget");
  };

  const onOTPHandler = () => {
    setIsTitlePara((prev) => ({
      ...prev,
      title: "Verify your OTP",
      para1: "We have sent a 4-digit OTP to ",
      para2: "<Register Email id here>",
    }));
    setisForget(false);
    setIsVerify(true);
  };

  const onVerfyHandler = () => {
    setIsResetPassword(true);

    setIsTitlePara((prev) => ({
      ...prev,
      title: "Reset Password",
      para1: "Set up a strong password to secure your account.",
      para2: "",
    }));
  };
  const onCancleHandler = () => {};

  console.log("otp--->>>", otp);

  const handleCaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };
  const onRestHandler = () => {};
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);
  return (
    <div className="troo-login-row">
      <div className="troo-login-col-left">
        <IndicatoreSlider />
      </div>
      <div className="troo-login-col-right">
        <div className="login-right-section">
          <div className="overflow-container">
            <div className="login-form">
              <div className="login-form-container">
                <div className="login-top">
                  <div className="logo-section">
                    <div className="logo-img-div">
                      <img
                        className="w-100"
                        src="/assets/images/loginHeaderLogo.svg"
                        alt="logo.svg"
                      />
                    </div>
                    {/* <div>
        <div className='heading-600-35'>Sugam <span className='heading-600-35 c-orange'>Yatra</span></div>
    <div className='heading-400-12'>Revolutionizing transport for the public good!</div>
    </div>*/}
                  </div>

                  <div
                    className={`wel-alignment heading-600-26 ${
                      isResetPAssword ? "c-blue1" : ""
                    }`}
                  >
                    {isTitlePara.title}
                  </div>
                  <div className="sign-alignment heading-400-16">
                    {isTitlePara.para1}{" "}
                    <span
                      className={isVerify ? "c-gray1 heading-600-14" : "c-blue"}
                    >
                      {isTitlePara.para2}
                    </span>
                  </div>
                </div>

                <div className="login-middle">
                  {!isVerify && !isForget && (
                    <form
                      onSubmit={handleSubmit}
                      className={`login-email-div  ${
                        isValidation.vEmail ? "error-show" : ""
                      }`}
                    >
                      <InputField
                        labelName={"Email ID"}
                        type={"email"}
                        name={"email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        key={"login-email-input"}
                        placeholder={emailPlaceHolder}
                      />
                      {errors.email && touched.email && (
                        <div className="error-message">{errors.email}</div>
                      )}
                      <div className="login-password-div">
                        <InputField
                          labelName={"Password"}
                          type={"password"}
                          name={"password"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          key={"login-password-input"}
                          placeholder={passwordPlaceHolder}
                        />
                        {errors.password && touched.password && (
                          <div className="error-message">{errors.password}</div>
                        )}
                      </div>
                      {!isForget && (
                        <div className="remember-and-forget-div">
                          <div className="remember-section">
                            <input type="checkbox" id="check" />
                            <div className="heading-600-16">Remember me</div>
                          </div>
                          <div
                            className="forget-section curser-pointer"
                            onClick={onForgetHandler}
                          >
                            <div className="heading-600-16 c-blue">
                              Forgot Password?
                            </div>
                          </div>
                        </div>
                      )}

                      {!isForget && (
                        <div className="re-captcha">
                          <ReCAPTCHA
                            sitekey="6LcZYWYeAAAAAFFzV_pFdZBksDadFNggfpxTZMfS"
                            onChange={handleCaptchaChange}
                          />
                        </div>
                      )}
                      <button className="big-btn" type="submit">
                        LOGIN
                      </button>
                      <div className="heading-400-16 bottom-text mt-26">
                        Privacy Policy | Terms of use
                      </div>
                    </form>
                  )}
                  {isForget && (
                    <>
                      <form onSubmit={handleSubmit}>
                        <InputField
                          labelName={"Email ID"}
                          type={"email"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          key={"login-email-input"}
                          placeholder={emailPlaceHolder}
                        />
                        {errors.email && touched.email && (
                          <div className="error-message">{errors.email}</div>
                        )}
                        <button
                          className="big-btn mt-31"
                          onClick={onOTPHandler}
                          type="submit"
                        >
                          CONTINUE
                        </button>
                      </form>
                    </>
                  )}

                  {isVerify &&
                    (!isResetPAssword ? (
                      <>
                        <div className="otp-section">
                          <label className="heading-400-16 otp-section-lable">
                            Enter OTP<span style={{ color: "red" }}>*</span>
                          </label>
                          <OtpInput
                            className="otp-main"
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            isInputNum={true}
                            shouldAutoFocus={true}
                            renderSeparator={
                              <span style={{ width: "15px" }}> </span>
                            }
                            renderInput={(props, index) => (
                              <input
                                {...props}
                                className="otp-input"
                                placeholder="0" // Add placeholder '0'
                                onFocus={() =>
                                  console.log(`Input ${index + 1} is focused`)
                                }
                              />
                            )}
                          />
                        </div>
                        <div className="otp-bottom-section">
                          <div>
                            <p className="heading-400-16 c-black">
                              00:{seconds < 10 ? `0${seconds}` : seconds}
                            </p>
                          </div>
                          <div>
                            <p className="heading-400-16 text-end c-black">
                              Didn’t receive an OTP?
                              <span className="heading-500-16 c-blue">
                                {" "}
                                Resend OTP
                              </span>
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <InputField
                          labelName={"Enter New Password"}
                          type={"password"}
                          onChange={handleChange}
                          value={values.password}
                          key={"reset_new_password"}
                          placeholder={emailPlaceHolder}
                        />
                        <div className="confirm-password">
                          <InputField
                            labelName={"Confirm Password"}
                            type={"password"}
                            onChange={handleChange}
                            value={values.password}
                            key={"reset_confirm_password"}
                            placeholder={emailPlaceHolder}
                          />
                        </div>
                      </>
                    ))}
                </div>

                <div className="login-bottom">
                  {isVerify ? (
                    <button
                      className="big-btn heading-500-18"
                      onClick={isResetPAssword ? onRestHandler : onVerfyHandler}
                    >
                      {isResetPAssword ? "RESET PASSWORD" : "VERIFY"}
                    </button>
                  ) : null}
                  {isVerify &&
                    (!isResetPAssword ? (
                      <button
                        className="big-btn-outline heading-500-18"
                        style={{ marginTop: "15px" }}
                        onClick={onCancleHandler}
                      >
                        CANCLE
                      </button>
                    ) : (
                      <div className="reset-password-message">
                        <div className="d-center">{alertIcon1()}</div>
                        <div className="heading-400-12 c-gray2">
                          Password must be at least{" "}
                          <span className="heading-600-12">
                            8 characters ,{" "}
                          </span>
                          <span className="heading-600-12">1 number, </span>{" "}
                          <span className="heading-600-12">
                            1 uppercase letter ,
                          </span>
                          <span className="heading-600-12">
                            1 lowercase letter ,
                          </span>{" "}
                          and <span className="heading-600-12">symbol</span>.
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
