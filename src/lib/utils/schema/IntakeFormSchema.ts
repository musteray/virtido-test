import * as z from "zod"; 
 
const IntakeFormSchema = z.object({ 
  name: z.string(),
  company: z.string().optional(),
  phone: z.string(),
  email: z.email(),
  address: z.string(),
  description: z.string(),
  isDifficult: z.boolean()
});

export default IntakeFormSchema;