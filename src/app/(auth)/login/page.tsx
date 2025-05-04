'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const formSchema = z.object({
  username: z
    .string()
    .min(2, 'نام کاربری می بایست حداقل 2 کاراکتر باشد.')
    .max(50),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    const res = await fetch('');
    const datas = await res.json();
    console.log('form submitted', data);
  };

  return (
    <>
      {/* <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[500px] mx-auto"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام کاربری</FormLabel>
                <FormControl>
                  <Input placeholder="مثال: amir_ahmadi" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">ثبت</Button>
        </form>
      </Form> */}

      <form className=" w-[500px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">نام کاربری</label>
        <Input
          id="username"
          {...register('username')}
          placeholder="نام کاربری"
        />
        <p>{!!errors && errors.username?.message}</p>

        {isSubmitting && <p>is submitting</p>}

        <Button type="submit">ارسال</Button>
      </form>
    </>
  );
}
