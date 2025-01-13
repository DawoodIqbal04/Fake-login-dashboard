"use client";

import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailResponse = email?.current?.value;
    const passwordResponse = password?.current?.value;
    console.log(`Email: ${emailResponse}\nPassword: ${passwordResponse}`);

    const url = await fetch("api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailResponse,
        password: passwordResponse,
      }),
    });
    const data = await url.json();

    if (data.redirectUrl) {
      router.push(data.redirectUrl);
    } else {
      alert(data.alert);
    }
  };

  return (
    <main className="flex flex-col bg-gray-300 gap-3 items-center justify-center min-h-screen py-2">
      <form
        onSubmit={HandleSubmit}
        className="flex flex-col gap-3 items-center justify-center"
      >
        <input
          ref={email}
          type="email"
          placeholder="Enter Your Email"
          className="py-4 px-8 bg-gray-100 rounded-md text-black outline-none border text-lg border-gray-50 focus:border-2 focus:border-indigo-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Your Password"
          className="py-4 px-8 bg-gray-100 rounded-md text-black outline-none border text-lg border-gray-50 focus:border-2 focus:border-indigo-600"
        />
        <button className="w-full py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-600">
          Log In
        </button>
      </form>
    </main>
  );
}
