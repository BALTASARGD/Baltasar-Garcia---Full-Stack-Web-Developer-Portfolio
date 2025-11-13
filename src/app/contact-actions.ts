
'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendContactMessage(input: z.infer<typeof contactFormSchema>) {
  const validationResult = contactFormSchema.safeParse(input);

  if (!validationResult.success) {
    return { success: false, error: "Invalid input." };
  }

  try {
    // En un escenario real, aquí se integraría con un servicio de email (p.ej. Resend, SendGrid)
    console.log("Nuevo mensaje de contacto:", validationResult.data);
    
    // Simular una llamada a API
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
    return { success: false, error: "Failed to send message due to a server error." };
  }
}
