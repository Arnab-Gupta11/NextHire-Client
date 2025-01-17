"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { z } from "zod";
import CustomInput from "../form/CustomInput";
import CustomForm from "../form/CustomForm";
import useFormHook from "@/hooks/useFormHook";
import { loginFormDefaultValue, loginSchema } from "@/schemas/auth/austhSchema";
import Logo from "./shared/Logo";

const Login = () => {
  const [form] = useFormHook(loginSchema, loginFormDefaultValue);
  // console.log(form);
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <div>
      <Card className="bg-primary-bg-light dark:bg-primary-bg-dark shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
        <CardHeader>
          <CardTitle className="mx-auto">
            <Logo width={200} />
          </CardTitle>
          <CardDescription>Make changes to your account here. Click save when youre done.</CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter Your Email"} />
            <CustomInput form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter Your Password"} />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CustomForm>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      {/* </TabsContent> */}
    </div>
  );
};

export default Login;
