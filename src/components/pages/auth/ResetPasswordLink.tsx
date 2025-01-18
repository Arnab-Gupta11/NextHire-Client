"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import Logo from "../shared/Logo";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { Button } from "@/components/ui/button";
import useFormHook from "@/hooks/useFormHook";
import { resetPasswordLinkDefaultValue, resetPasswordLinkSchema } from "@/schemas/auth/austhSchema";
import Link from "next/link";

const ResetPasswordLink = () => {
  const [form] = useFormHook(resetPasswordLinkSchema, resetPasswordLinkDefaultValue);
  // console.log(form);
  function onSubmit(values: z.infer<typeof resetPasswordLinkSchema>) {
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
          <CardDescription className="text-center text-sm font-medium text-slate-800 dark:text-slate-200">
            Enter your email to receive a password reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
            <Button type="submit" className="w-full mt-8">
              Submit
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

export default ResetPasswordLink;
