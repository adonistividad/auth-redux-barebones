import React, { useState } from "react";
import OtpInput from "react-otp-input";
import firebase from "firebase/compat/app";
// import "firebase/auth";
import "firebase/compat/auth";
import firebaseConfig from "../../config/firebase.config";
import PhoneInput from "react-phone-input-2";

firebase.initializeApp(firebaseConfig);

const OtpVerification: React.FC = () => { 
  //   const [phoneNumber, setPhoneNumber] = useState("+639771794521");
  const [phoneNumber, setPhoneNumber] = useState("+971509608995");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [verificationId, setVerificationId] = useState<string>("");

  const sendOtp = async () => {
    try {
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier
      );
      setVerificationId(verificationId);
      console.log("verificationId::", verificationId)
      console.log("sendOtp successful");
    } catch (error) {
      console.log("error:", error);
    }
  };

  const verifyOtp = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );

    //   console.log("verificationId::", verificationCode, verificationId)
      console.log("verificationCode::", verificationCode)
      await firebase.auth().signInWithCredential(credential);
      console.log("OTP verification successful!");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };
 

  return (
    <div>
 
      <PhoneInput
        // country={"ph"}
        country={"ae"}
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      <button
        //   onClick={onSignup}
        onClick={sendOtp}
        className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
      >
        {/* {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )} */}
        <span>Send code via SMS</span>
      </button>
      <div id="recaptcha-container"></div>

      <br />
      <OtpInput
        value={verificationCode}
        onChange={setVerificationCode}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <button onClick={verifyOtp}>Verify OTP {verificationCode}</button>
    </div>
  );
};

export default OtpVerification;
