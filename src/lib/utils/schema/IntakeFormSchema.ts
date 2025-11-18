import * as z from "zod"; 
 
const IntakeFormSchema = z.object({ 
  name: z.string()
    .min(1, "Name is required."),
  company: z.string().optional(),
  phone: z.string()
    .min(1, "Phone is required."),
  email: z.email({
    message: "Invalid email address.",
  }),
  address: z.string()
    .min(1, "Address is required."),
  description: z.string()
    .min(1, "Description is required."),
  isDifficult: z.boolean()
});

export default IntakeFormSchema;