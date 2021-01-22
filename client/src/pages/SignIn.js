import React from "react";
import SignIn from "../components/SignIn/index";
import Header from "../components/Header/index";
import Navigation from "../components/Navigation/index";

function SignInPage() {
  return (
    <div>
      <Header />
      <Navigation />
      <SignIn />
    </div>
  );
}

export default SignInPage;