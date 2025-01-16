"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { z } from "zod";
import CustomInput from "../form/CustomInput";
import CustomForm from "../form/CustomForm";
import useFormHook from "@/hooks/useFormHook";
import { loginFormDefaultValue, loginSchema } from "@/schemas/auth/austhSchema";

const Login = ({ tabValue }: { tabValue: string }) => {
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }
  const [form] = useFormHook(loginSchema, loginFormDefaultValue);
  return (
    <div>
      <TabsContent value={tabValue}>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account here. Click save when youre done.</CardDescription>
          </CardHeader>
          <CardContent>
            <CustomForm onSubmit={onSubmit} form={form}>
              <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter Your Email"} />
              <CustomInput form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter Your Password"} />
              <Button type="submit">Submit</Button>
            </CustomForm>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </div>
  );
};

export default Login;
