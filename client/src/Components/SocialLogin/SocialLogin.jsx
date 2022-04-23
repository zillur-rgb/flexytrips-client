import { BsGoogle } from "react-icons/bs";
import { RiFacebookFill, RiGithubFill } from "react-icons/ri";
import "./SocialLogin.css";
import { auth } from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFb, loadingFb, errorFb] =
    useSignInWithFacebook(auth);

  const navigate = useNavigate();

  let errorElem = "";
  if (error || errorFb) {
    errorElem = (
      <div className="errorMessage">
        Error: {error?.message} {errorFb?.message}
      </div>
    );
  }

  if (loading || loadingFb) {
    return <div>Loading...</div>;
  }

  if (user || userFb) {
    navigate("/");
  }

  return (
    <div className="socialLogin-container">
      {errorElem}
      <button
        className="google"
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <BsGoogle /> Sign in with Google
      </button>
      <br />
      <button
        className="facebook"
        onClick={() => {
          signInWithFacebook();
        }}
      >
        <RiFacebookFill /> Sign In With Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
