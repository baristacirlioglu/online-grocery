"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const router = useRouter();
  const [loader, setLoader] = useState();
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
            disabled={!email || !password}
            className="bg-green-600 cursor-pointer"
          >
            {loader ? <Loader2Icon className="animate-spin" /> : "Sign In"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
