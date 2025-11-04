import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
// import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const {signInUser, loginWithGoogle} = use(AuthContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signInUser(email, password)
        .then(res => {
            toast.success("Sign In successfully! 💕")
            form.reset()
            console.log(res);
        })
        .catch(error => {
            toast.error(error)
            console.log(error);
        })

        console.log({ email, password});
    }

    const handleGoogleSignIn = () => {
        loginWithGoogle()
        .then(res => {
            toast.success("Successfully Sign In with Google!")
            console.log(res);
            const newUser = {
              name: res.user.displayName,
              email: res.user.email,
              image: res.user.photoURL
            }

            // create user in the database
            fetch("http://localhost:3000/users", {
              method: "post",
              headers: {
                "content-type" : "application/json"
              },
              body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => console.log("users:", data))
        })
        .catch(error => {
            console.log(error);
        })
    }






  return (
    <div className=" min-w-screen">
      <div className="flex justify-center items-center bg-base-100">
        <div className="bg-white p-10 shadow-md w-[500px] rounded-xl mt-20">
          <h3 className="text-4xl mt-5 text-center font-bold">Login</h3>
          <p className="text-center mb-8 mt-2.5">
            Don't have an account?{" "}
            <Link
              to={"/auth/register"}
              className="text-primary font-semibold my-2.5"
            >
              Register Now
            </Link>
          </p>

          <div>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="font-semibold text-blk text-[16px]">
                  Email
                </label>
                <input
                  type="email"
                  className="input outline-gray-100 bg-white w-full"
                  required
                  name="email"
                  placeholder="example@email.com"
                />
                <label className="font-semibold text-blk text-[16px]">
                  Password
                </label>
                <input
                  name="password"
                  required
                  type="password"
                  className="input  outline-gray-100 bg-white w-full"
                  placeholder="****************"
                />
                <div>
                  <a className="link link-hover ">Forgot password?</a>
                </div>
                <button className="btn btn-neutral border-none bg-primary mt-3.5 text-[16px]">
                  Sign In
                </button>
                <p className="text-center text-[18px] font-semibold text-gray-700">or</p>
              </fieldset>
            </form>
                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
