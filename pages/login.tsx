import { LoginForm } from "@/components/auth";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

export interface ILoginPageProps {}

export default function LoginPage() {
  const router = useRouter();
  const { login, logout, profile } = useAuth({
    revalidateOnMount: false,
  });
  // async function handleLogin() {
  //   try {
  //     await login();
  //     console.log("success login,you can redirect now");
  //     await router.push("/dashboard");
  //   } catch (error) {
  //     console.log("login failed", error);
  //   }
  // }
  // async function handleGetProfile() {
  //   try {
  //     const response = profile();
  //     console.log("get profile success", response);
  //   } catch (error) {
  //     console.log("get profile failed", error);
  //   }
  // }
  async function handleLogout() {
    try {
      logout();
      console.log("logout success,redirect now");
    } catch (error) {
      console.log("logout failed", error);
    }
  }

  return (
    <div>
      {/* <div className="m-2">
        <h1 className="text-xl font-bold">Action data</h1>
        <div>{JSON.stringify(profile || {}, null, 4)}</div>
      </div>
      <h1>Login page</h1>
      <div className="m-2">
        <button
          className="m-2 bg-red-400 text-white font-semibold rounded p-2 transition-opacity duration-25 ease-in hover:opacity-80"
          onClick={handleLogin}
        >
          Login
        </button>
      </div> */}
      {/* <div className="m-2">
        <button
          className="m-2 bg-red-400 text-white font-semibold rounded p-2 transition-opacity duration-25 ease-in hover:opacity-80"
          onClick={handleGetProfile}
        >
          Get profile
        </button>
      </div> */}
      {/* <div className="m-2">
        <button
          className="m-2 bg-red-400 text-white font-semibold rounded p-2 transition-opacity duration-25 ease-in hover:opacity-80"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div> */}
      <LoginForm />
    </div>
  );
}
