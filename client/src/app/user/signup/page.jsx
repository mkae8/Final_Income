"use client";
import { Loader } from "@/components/user.components/Loader";
import { UserHead } from "@/components/user.components/UserHead";
import { userUser } from "@/provider/UserProvider";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const { push } = useRouter();
  const { isLoggedIn, loginLoading } = userUser();

  if (isLoggedIn) {
    push("/user");
    return;
  }

  const [error, setError] = useState("");
  const [userinput, setUserinput] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const nameHandler = (e) => {
    e.preventDefault();
    setUserinput((prev) => ({ ...prev, username: e.target.value }));
  };
  const emailHandler = (e) => {
    e.preventDefault();
    setUserinput((prev) => ({ ...prev, email: e.target.value }));
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setUserinput((prev) => ({ ...prev, password: e.target.value }));
  };
  const rePasswordHandler = (e) => {
    e.preventDefault();
    setUserinput((prev) => ({ ...prev, repassword: e.target.value }));
  };
  const register = async () => {
    const { username, email, password, repassword } = userinput;
    if (username && email && password && repassword !== "") {
      if (userinput.password === userinput.repassword) {
        try {
          const { repassword, ...rest } = userinput;
          await axios.post("http://localhost:8000/api/user/signup", rest);

          setError("");
          push("/user/login");
        } catch (error) {
          setError(error);
        }
      } else {
        setError("password wrong");
      }
    } else {
      setError("invalid inputs");
    }
  };

  if (loginLoading) {
    return <Loader />;
  }

  return (
    <div className="flex">
      <div className="w-[50%] flex justify-center items-center h-screen">
        <div className="w-[384px] flex flex-col  items-center gap-10 ">
          <img className="w-[92px] h-[34px]" src="/user/image.png" alt="" />
          <UserHead
            text={{
              head: "Create Geld account",
              title: "Sign up below to create your Wallet account",
            }}
          />
          <div className="flex flex-col items-center w-full gap-4">
            <input
              onChange={(e) => {
                nameHandler(e);
              }}
              type="text"
              placeholder="Name"
              className="input input-bordered bg-[#F3F4F6] w-full h-[48px]"
            />
            <input
              onChange={(e) => {
                emailHandler(e);
              }}
              type="email"
              placeholder="Email"
              className="input input-bordered bg-[#F3F4F6] w-full h-[48px]"
            />
            <input
              onChange={(e) => {
                passwordHandler(e);
              }}
              type="password"
              placeholder="Password"
              className="input input-bordered bg-[#F3F4F6] w-full h-[48px]"
            />
            <input
              onChange={(e) => {
                rePasswordHandler(e);
              }}
              type="password"
              placeholder="Re-password"
              className="input input-bordered bg-[#F3F4F6] w-full h-[48px]"
            />
            {error && <div className="text-red-500">{error}</div>}
            <button
              onClick={register}
              className="btn btn-primary w-full text-xl font-normal bg-[#0166FF] hover:bg-[#0166FF] text-white rounded-[20px]"
            >
              Sign up
            </button>
          </div>
          <div>
            Already have account?
            <Link className="text-[#0166FF] ml-3" href="/user/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] right-0 fixed h-screen w-1/2"></div>
    </div>
  );
};

export default SignUp;
