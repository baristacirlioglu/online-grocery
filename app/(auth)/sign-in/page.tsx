"use client";
import loginUser from "@/actions/login";
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

const SignInPage = () => {
  const { email, password, setEmail, setPassword, loader, setLoader } =
    useAuthStore();
  const router = useRouter();
  const handleSignIn = async () => {
    setLoader(true);
    try {
      const resp = await loginUser(email, password);
      startSession(resp.user, resp.jwt);
      toast.success("Login Successfully.", {
        style: {
          background: "#16a34a", // Tailwind green-600
          color: "white",
        },
        icon: "✅",
      });
      router.push("/");
    } catch (error) {
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

        <h2 className="font-bold text-3xl mt-4">Sign in to Account</h2>
        <h2 className="text-gray-500">Enter your email and password</h2>

        <div className="w-full flex flex-col gap-5 mt-8">
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
            onClick={handleSignIn}
            disabled={!email || !password}
            className="bg-green-600 cursor-pointer"
          >
            {loader ? <Loader2Icon className="animate-spin" /> : "Sign In"}
          </Button>

          <p className="font-semibold text-center">
            Don't have an account yet?
            <br />
            <Link href="/create-user" className="text-green-600">
              Click here to create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
