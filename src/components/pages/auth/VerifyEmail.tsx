"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { z } from "zod";
import CustomForm from "../../form/CustomForm";
import useFormHook from "@/hooks/useFormHook";
import { emailOtpVerificationDefaultValue, emailOtpVerificationSchema } from "@/schemas/auth/austhSchema";
import Logo from "../shared/Logo";
import Link from "next/link";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useParams } from "next/navigation";

const VerifyEmail = () => {
  const { id } = useParams();
  console.log(id);
  const [form] = useFormHook(emailOtpVerificationSchema, emailOtpVerificationDefaultValue);
  // console.log(form);
  function onSubmit(values: z.infer<typeof emailOtpVerificationSchema>) {
    console.log({ ...values });
    form.reset();
  }

  return (
    <div>
      <Card className="bg-primary-bg-light dark:bg-primary-bg-dark shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
        <CardHeader>
          <CardTitle className="mx-auto">
            <Logo width={200} />
          </CardTitle>
          <CardDescription className="text-center  font-semibold text-primary-text text-2xl sm:text-4xl ">Verify Your Email.</CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm onSubmit={onSubmit} form={form}>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="space-y-5">
                  <p className="text-slate-800 dark:text-slate-200 text-center text-sm font-medium mb-2">
                    Enter the 4-digit code sent to your email address.
                  </p>
                  <FormControl>
                    <InputOTP maxLength={4} {...field} className="mb-4">
                      <InputOTPGroup className="mx-auto">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-10">
              Verify Email
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
      {/* </TabsContent> */}
    </div>
  );
};

export default VerifyEmail;
