'use server';

export async function loginAction(data: any) {
  const res = await fetch(
    'https://api2.ippanel.com/api/v1/sms/send/webservice/single',
    {
      body: JSON.stringify({
        recipient: [data.phone_number],
        sender: '+983000505',
        //   "time": "2025-03-21T09:12:50.824Z", not required
        message: 'به ایران اورجینال خوش آمدید. \n رمز عبور: 7546',
      }),
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        apikey:
          'OWVhNDA0YjMtNjU0Ni00NTI3LThlODktYjU0MThkYTFjNmI5OGE5NDcwMGI2NWVjZjAzOTQyNGRjNzEyM2MzZDhlYjM=',
      },
    },
  );

  const datas = await res.json();

  console.log(datas);

  return 'text';
}
