import React, { useState } from "react";
import { PostUser } from "../../../Services/Users";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: (Form: any) => PostUser("auth/local/", Form),
    onError: () => {
      alert("Error:");
    },
    onSuccess(data) {
      sessionStorage.setItem("jwt", data.jwt);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      Form.identifier = "";
      Form.password = "";
      navigate("/");
      window.location.reload();
    },
  });

  const [Form, SetForm] = useState({
    identifier: "",
    password: "",
  });

  const ChangeEvents = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };
  const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(Form);
  };
  return (
    <div className="bg-[#2B2B2B]">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-center ">
          <div className="bg-black w-[500px] h-[434px] my-40 rounded-[10px] p-[16px]">
            <h1 className="text-[28px] font-normal pb-[24px] text-white">
              Sign In
            </h1>
            <div>
              <form onSubmit={SubmitForm}>
                <div className="flex items-start flex-col gap-[15px] mb-[16px]">
                  <label
                    htmlFor="identifier"
                    className="text-[16px] font-normal text-white"
                  >
                    Email
                  </label>
                  <input
                    onChange={ChangeEvents}
                    value={Form.identifier}
                    name="identifier"
                    type="email"
                    placeholder="Email"
                    required
                    className="p-[16px] rounded-[8px] text-[16px] leading-[16px]  font-normal bg-[#0D0D0D] text-[#696969] border border-gray-700 duration-300 w-full"
                  />
                </div>

                <div className="flex items-start flex-col gap-[15px] mb-[16px]">
                  <label
                    htmlFor="password"
                    className="text-[16px] font-normal text-white"
                  >
                    Password
                  </label>
                  <input
                    required
                    onChange={ChangeEvents}
                    value={Form.password}
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="p-[16px] rounded-[8px] text-[16px] leading-[16px]  font-normal bg-[#0D0D0D] text-[#696969] border border-gray-700 duration-300 w-full"
                  />
                </div>
                <button
                  disabled={isPending}
                  className="p-[16px] disabled:opacity-50 disabled:cursor-not-allowed rounded-[8px] text-[16px] leading-[16px]  font-normal bg-[#fff] text-[#000]  duration-300 w-full cursor-pointer"
                >
                  Sign Up
                </button>
              </form>
            </div>

            <div className="text-white font-normal text-center mt-[16px]">
              <p
                onClick={() => {
                  navigate("/register");
                }}
                className="cursor-pointer"
              >
                Don't you have an account?{" "}
                <span className="text-blue-600">Sign Up</span>
              </p>
              <p className="text-[#777]">Activate License</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
