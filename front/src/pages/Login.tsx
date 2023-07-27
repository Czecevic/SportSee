import { Navbar } from "../components/Navbar";
import { ContextButton } from "../components/ContextButton";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <h1>Login</h1>
      <button>
        <a href="/user/12">user 12</a>
      </button>
      <button>
        <a href="/user/18">user 18</a>
      </button>
      <ContextButton></ContextButton>
    </div>
  );
};
