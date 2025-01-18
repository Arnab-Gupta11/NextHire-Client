"use client";
import React from "react";

import { z } from "zod";

import useFormHook from "@/hooks/useFormHook";
import { registerFormDefaultValue, registerSchema } from "@/schemas/auth/austhSchema";

import { roleOptions } from "@/constants/constants";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import CustomPassword from "@/components/form/CustomPassword";
import Logo from "../shared/Logo";

const Register = () => {
  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
  }
  const [form] = useFormHook(registerSchema, registerFormDefaultValue);
  return (
    <div>
      <Card className="bg-primary-bg-light dark:bg-primary-bg-dark shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
        <CardHeader>
          <CardTitle className="mx-auto">
            <Logo width={200} />
          </CardTitle>
          <CardDescription className="text-center text-sm font-medium text-slate-800 dark:text-slate-200">
            Create your account to explore jobs and grow your career.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomInput form={form} fieldName={"fullName"} label={"Full Name"} inputType={"text"} placeholder={"Enter your full name"} />
            <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
            <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />
            <CustomPassword
              form={form}
              fieldName={"confirmedPassword"}
              label={"Confirmed Password"}
              inputType={"password"}
              placeholder={"Confirm your password"}
            />
            <CustomSelect form={form} fieldName={"role"} label={"Role"} placeholder={"Select your role"} options={roleOptions} />
            <Button className="w-full mt-8" type="submit">
              Sign Up
            </Button>
          </CustomForm>
        </CardContent>
        <CardFooter>
          <p className="text-sm font-medium text-center text-slate-700 dark:text-slate-300">
            <Link href="/account/login">
              Already have an Account? <span className="font-semibold text-primary-text hover:underline">Sign In</span>
            </Link>
          </p>
        </CardFooter>
      </Card>
      {/* </TabsContent> */}
    </div>
  );
};

export default Register;
