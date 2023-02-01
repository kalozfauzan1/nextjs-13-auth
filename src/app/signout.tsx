"use client";
import { signOut } from "next-auth/react";
import stylesHome from '@styles/home.module.css' 
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const SignOut = () => {
  return (
    <div className={stylesHome.card} 
    onClick={()=> signOut()}>
        <h2 className={inter.className}>
          Sign Out
          </h2>
    </div>
  );
};

export default SignOut;