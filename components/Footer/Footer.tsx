import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-300 mt-10">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex justify-center">
          <Image src="/logo.png" width={200} height={300} alt="logo" />
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Online Grocery. All rights reserved
          by Barış Tacirlioğlu
        </p>
      </div>
    </footer>
  );
};
export default Footer;
