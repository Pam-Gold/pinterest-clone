import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
const Auth = (props) => {
  const [emailData, setEmailData] = useState("");

  const [passwordData, setPasswordData] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "Account Created 😊",
      status: "success",
      duration: 2000,
      isClosable: true,
      position:"top"
    });
    setTimeout(() => {
      createUserWithEmailAndPassword(auth, emailData, passwordData);
    }, 2000);
  };

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-[100]">
      <i className="fa-solid fa-close text-4xl absolute top-[10px] right-[10px]"></i>
      <form className="h-[fit-content]  flex flex-col bg-black p-3 gap-y-5 rounded-lg sm: w-[300px] md:w-[350px] lg:w-[350px] xl:w-[350px]">
        <h1 className="text-center text-white text-3xl font-bold">
          Sign Up or Login
        </h1>
        <p className="text-center text-slate-300">
          Log back into your account or create a new one
        </p>
        <input
          className="h-10 w-full rounded-lg px-2"
          placeholder="Email..."
          onChange={(e) => setEmailData(e.target.value)}
        />
        <input
          type="password"
          className="h-10 w-full rounded-lg px-2"
          placeholder="Password..."
          onChange={(e) => setPasswordData(e.target.value)}
        />

        <button
          type="button"
          className="bg-red-400 p-2 rounded-lg font-bold"
          onClick={handleSubmit}
        >
          Initialize
        </button>
        <p className="text-center text-lg text-white">or</p>
        <button
          type="button"
          className="bg-blue-500 text-white p-2 mt-4 rounded-lg font-bold"
          onClick={loginWithGoogle}
        >
          Sign in with Google{" "}
          <i className="ml-2 text-red-400 fa-brands fa-google"></i>
        </button>
      </form>
    </div>
  );
};

export default Auth;
