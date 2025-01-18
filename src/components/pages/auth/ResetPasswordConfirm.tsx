"use client";
import React from "react";

import { z } from "zod";

import useFormHook from "@/hooks/useFormHook";
import { resetPasswordConfirmSchema, resetPasswordConfirmValue } from "@/schemas/auth/austhSchema";
import CustomForm from "@/components/form/CustomForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import CustomPassword from "@/components/form/CustomPassword";
import Logo from "../shared/Logo";

const ResetPasswordConfirm = () => {
  function onSubmit(values: z.infer<typeof resetPasswordConfirmSchema>) {
    console.log(values);
  }
  const [form] = useFormHook(resetPasswordConfirmSchema, resetPasswordConfirmValue);
  return (
    <div>
      <Card className="bg-primary-bg-light dark:bg-primary-bg-dark shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
        <CardHeader>
          <CardTitle className="mx-auto">
            <Logo width={200} />
          </CardTitle>
          <CardDescription className="text-center  font-semibold text-primary-text text-xl xsm:text-3xl ">Reset Your Password.</CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomPassword
              form={form}
              fieldName={"password"}
              label={"New Password"}
              inputType={"password"}
              placeholder={"Enter your new password"}
            />
            <CustomPassword
              form={form}
              fieldName={"confirmedPassword"}
              label={"New Confirmed Password"}
              inputType={"password"}
              placeholder={"Confirm your new password"}
            />
            <Button className="w-full mt-8" type="submit">
              Reset Password
            </Button>
          </CustomForm>
        </CardContent>
        <CardFooter>
          <p className="text-sm font-medium text-center text-slate-700 dark:text-slate-300">
            <Link href="/account/register">
              Don&apos;t have an Account? <span className="font-semibold text-primary-text hover:underline">Sign Up</span>
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResetPasswordConfirm;
