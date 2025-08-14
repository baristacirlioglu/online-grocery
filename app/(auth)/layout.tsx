import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

interface AuthLayoutPageProps {
  children: React.ReactNode;
}

const AuthLayoutPage = ({ children }: AuthLayoutPageProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default AuthLayoutPage;
