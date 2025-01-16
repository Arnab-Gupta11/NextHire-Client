import { Form } from "../ui/form";
import { TCustomForm } from "@/types/form.types";

const CustomForm = ({ children, form, onSubmit }: TCustomForm) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {children}
      </form>
    </Form>
  );
};

export default CustomForm;
