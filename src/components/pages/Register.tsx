"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { z } from "zod";
import CustomInput from "../form/CustomInput";
import CustomForm from "../form/CustomForm";
import useFormHook from "@/hooks/useFormHook";
import { registerFormDefaultValue, registerSchema } from "@/schemas/auth/austhSchema";
import CustomSelect from "../form/CustomSelect";
import { roleOptions } from "@/constants/constants";

const Register = ({ tabValue }: { tabValue: string }) => {
  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
  }
  const [form] = useFormHook(registerSchema, registerFormDefaultValue);
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
              <CustomInput form={form} fieldName={"fullName"} label={"Full Name"} inputType={"text"} placeholder={"Enter Your Full Name"} />
              <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter Your Email"} />
              <CustomInput form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter Your Password"} />
              <CustomInput
                form={form}
                fieldName={"confirmedPassword"}
                label={"Confirmed Password"}
                inputType={"password"}
                placeholder={"Confirm Your Password"}
              />
              <CustomSelect form={form} fieldName={"role"} label={"Role"} placeholder={"Choose your role"} options={roleOptions} />
              <Button type="submit">Submit</Button>
            </CustomForm>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </div>
  );
};

export default Register;
