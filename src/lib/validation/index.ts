import * as z from "zod";

export const signupValidation = z.object({
  name: z
    .string()
    .min(3, { message: "Your name must be more than 3 characters" }),

  username: z.string().min(4, { message: "This username is too Short" }),

  email: z.string().email(),

  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters." }),
});

export const signInValidation = z.object({
  email: z.string().email(),

  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters." }),
});
