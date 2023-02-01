"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import styles from "@styles/login.module.css"

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const LoginPage = ({ searchParams }: IProps) => {
  const userName = useRef("");
  const pass = useRef("");
  console.log(searchParams)

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div>
      <div className={styles.form}>
      {searchParams?.error && <p>Login failed</p>}
        <input placeholder="Email" type={"email"} onChange={(e) => (userName.current = e.target.value)} />
        <input placeholder="Password" type={"password"} onChange={(e) => (pass.current = e.target.value)} />
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;