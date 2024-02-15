"use server";
import { SignIn } from "../api/authenticate";

export async function authenticate(formData: FormData) {
  try {
    await SignIn(formData);
    console.log("formDataaaaaaaaaaa", formData);
  } catch (error) {
    if (error) {
      console.error(error);
      return error;
    }
    throw error;
  }
}
