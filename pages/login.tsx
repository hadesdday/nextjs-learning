import { authApi } from "@/api-client";
import axios from "axios";
import * as React from "react";

export interface ILoginPageProps {}

export default function LoginPage() {
  const [data, setData] = React.useState<any>();

  async function handleLogin() {
    try {
      const response = await authApi.login({
        username: "testw",
        password: "123123w",
      });
      console.log("success", response);
      setData(response.data);
    } catch (error) {
      console.log("login failed", error);
    }
  }
  async function handleGetProfile() {
    try {
      const response = await authApi.getProfile();
      console.log("get profile success", response);
      setData(response.data);
    } catch (error) {
      console.log("get profile failed", error);
    }
  }
  async function handleLogout() {
    try {
      const response = await authApi.logout();
      console.log("logout success", response);
      setData(null);
    } catch (error) {
      console.log("logout failed", error);
    }
  }

  return (
    <div>
      <div className="m-2">
        <h1 className="text-xl font-bold">Action data</h1>
        <div>{JSON.stringify(data)}</div>
      </div>
      <h1>Login page</h1>
      <div className="m-2">
        <button
          className="m-2 bg-red-400 text-white font-semibold rounded p-2 transition-opacity duration-25 ease-in hover:opacity-80"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <div className="m-2">
        <button
          className="m-2 bg-red-400 text-white font-semibold rounded p-2 transition-opacity duration-25 ease-in hover:opacity-80"
          onClick={handleGetProfile}
        >
          Get profile
        </button>
      </div>
      <div className="m-2">
        <button
          className="m-2 bg-red-400 text-white font-semibold rounded p-2 transition-opacity duration-25 ease-in hover:opacity-80"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
