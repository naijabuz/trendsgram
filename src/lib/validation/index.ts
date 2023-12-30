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

export const postValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Caption too short. Should be more than 5 characters" })
    .max(2200, { message: "You have reached the limit of 2200 characters" }),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
