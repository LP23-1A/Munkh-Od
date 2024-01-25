"use client";
import { Button } from "@/components/button";
import { SizeEnum, Title } from "@/components/Title";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const router = useRouter();

  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const BASE_URL = "http://localhost:8000/auth/signup";

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (input.password !== input.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post(BASE_URL, {
        ...input,
      });

      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/login");
    } catch (error: any) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div className="max-w-[960px] mx-20 mt-10">
      <Title size={SizeEnum.S}>Sign Up</Title>
      <form className="flex flex-col gap-4">
        <label>
          Username
          <input
            onChange={(e) =>
              setInput((prev) => ({ ...prev, username: e.target.value }))
            }
            className="ml-2"
            placeholder="Enter your username"
            type="text"
          />
        </label>
        <label>
          Password
          <input
            onChange={(e) =>
              setInput((prev) => ({ ...prev, password: e.target.value }))
            }
            className="ml-2"
            placeholder="Enter your password"
            type="password"
          />
        </label>
        <label>
          Confirm Password
          <input
            onChange={(e) =>
              setInput((prev) => ({ ...prev, confirmPassword: e.target.value }))
            }
            className="ml-2"
            placeholder="Confirm your password"
            type="password"
          />
        </label>
        {error && <p className="text-red-600 my-2">{error}</p>}

        <Button onClick={submitHandler}>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpPage;
