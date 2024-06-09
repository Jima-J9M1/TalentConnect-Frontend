const BASE_URL = 'https://talent-connect.onrender.com';

export interface ContactUsBody {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface ContactUsResponse {
  success: boolean;
  message: string;
}

export async function contactUs(body: ContactUsBody): Promise<ContactUsResponse> {
  const response = await fetch(`${BASE_URL}/v1/contact/sendEmail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export default contactUs;
