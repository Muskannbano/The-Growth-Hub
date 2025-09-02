import z from "zod";

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(50, { message: "Name must not be more than 50 characters." }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address." })
    .max(255, { message: "Email must not be more than 255 characters." }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .regex(/^\d{10,20}$/, {
      message: "Phone number must be between 10 and 20 digits.",
    }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(128, { message: "Password can't be greater than 128 characters." }),
});

export default signupSchema;
