import Login from "@/components/pages/Login";
import Register from "@/components/pages/Register";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginPage = () => {
  return (
    <>
      <div className="grid place-items-center mt-10 lg:mt-20 mx-5 md:mx-0">
        <Tabs defaultValue="account" className="max-w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <Login tabValue="account" />
          <Register tabValue="password" />
        </Tabs>
      </div>
    </>
  );
};

export default LoginPage;
