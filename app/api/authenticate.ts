import { User } from "@/lib/definition";
import { apiUrl } from "./apiurl";

export const SignIn = async (formData: FormData): Promise<User | null> => {
  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Perform email and password validation here:
  // const validationErrors = validateEmailPassword(credentials);
  // if (validationErrors.length > 0) {
  //   throw new Error(
  //     "Invalid email or password: " + validationErrors.join(", "),
  //   );
  // }

  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Login failed: " + response.statusText);
    }

    const user = (await response.json()) as User;
    return user;
  } catch (error) {
    // Handle other potential errors here, e.g., network issues
    console.error("SignIn error:", error);
    throw error;
  }
};

// Improved email and password validation function:
function validateEmailPassword(credentials: {
  email: string;
  password: string;
}): string[] {
  const errors = [];

  // Email validation:
  if (!isEmailValid(credentials.email)) {
    errors.push("Invalid email format.");
  }

  // Password validation:
  if (!isPasswordValid(credentials.password)) {
    errors.push(
      "Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and symbols.",
    );
  }

  return errors;
}

// Improved email validation function (consider incorporating more specific checks):
function isEmailValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Improved password validation function (consider adjusting requirements based on your security standards):
function isPasswordValid(password: string): boolean {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
}
