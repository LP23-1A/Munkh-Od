"use client";
import axios from "axios";

const Page = () => {
  const BASE_URL = "http://localhost:8000/auth/login";

  const submithandler = async (e: any) => {
    e.preventDefault();
    const result = await axios.post(BASE_URL, {
      username: "testname",
      password: "testname@mail.com",
    });
    console.log(result);
  };

  return (
    <div className="max-w-[960px] mx-20 mt-10">
      <h1 className="text-xl font-semibold mb-8">Login</h1>
      <form className="flex flex-col gap-4">
        <label>
          Username
          <input
            className="ml-2"
            placeholder="Enter your username"
            type="text"
          />
        </label>
        <label>
          Password
          <input
            className="ml-2"
            placeholder="Enter your username"
            type="password"
          />
        </label>

        <button
          className="w-fit bg-gray-800 text-white px-2 py-1"
          onClick={submithandler}
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Page;
