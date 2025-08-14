"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateUserPage = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const router = useRouter();
  const [loader, setLoader] = useState();
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
