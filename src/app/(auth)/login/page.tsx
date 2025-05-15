'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginAction } from './_action';
const formSchema = z.object({
  phone_number: z
    .string({
      required_error: 'شماره موبایل الزامی است.',
    })
    .min(2, 'نام کاربری می بایست حداقل 2 کاراکتر باشد.')
    .max(50),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone_number: '',
    },
  });

  const onSubmit = async (data: any) => {
    console.log('form submitted', data);

    const response = await loginAction(data);
    console.log(response);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[500px] mx-auto mt-10"
        >
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>شماره موبایل</FormLabel>
                <FormControl>
                  <Input placeholder="مثال: 09123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {form.formState.isSubmitting ? '......' : 'ادامه'}
          </Button>
        </form>
      </Form>
      <Button
        onClick={() => {
          window.open('google.com', '_blank');
        }}
      >
        باز کردن صفحه جدید
      </Button>
    </>
  );
}
