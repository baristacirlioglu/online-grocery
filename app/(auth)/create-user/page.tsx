"use client";
import registerUser from "@/actions/register";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuthStore from "@/hooks/useAuthStore";
import { startSession } from "@/lib/session";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const CreateUserPage = () => {
  const {
    email,
    username,
    password,
    loader,
    setEmail,
    setUsername,
    setPassword,
    setLoader,
  } = useAuthStore();
  const router = useRouter();
  const onSignup = async () => {
    setLoader(true);
    try {
      const resp = await registerUser(username, email, password);
      startSession(resp.user, resp.jwt);
      toast.success("Account Created Successfully.", {
        style: {
          background: "#16a34a", // Tailwind green-600
          color: "white",
        },
        icon: "✅",
      });
      router.push("/");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error?.message || "Something went wrong",
        {
          style: {
            background: "#dc2626", // Tailwind red-600
            color: "white",
          },
          icon: "❌",
        }
      );
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex items-baseline justify-center my-20">
      <div className="flex flex-col items-center justify-center p-10 border border-gray-300">
        <Image src="/logo.png" width={200} height={200} alt="logo" />

        <h2 className="font-bold text-3xl mt-4">Create an Account</h2>
        <h2 className="text-gray-500">
          Enter your Username, Email and Password
        </h2>

        <div className="w-full flex flex-col gap-5 mt-8">
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            disabled={!email || !password || !username}
            onClick={onSignup}
            className="bg-green-600 cursor-pointer"
          >
            {loader ? <Loader2Icon className="animate-spin" /> : "Sign Up"}
          </Button>

          <p className="font-semibold text-center">
            You already have an account?
            <br />
            <Link href="/sign-in" className="text-green-600">
              Click here to sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CreateUserPage;
