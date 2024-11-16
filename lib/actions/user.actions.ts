'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {
      const { account } = await createAdminClient();
      const response = await account.createEmailPasswordSession(email,paxsword)

    } catch (error) {
        console.log(error);
    }
};


export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData;
    try {
        const { account } = await createAdminClient();

    const newUserAccount = await account.create(
        ID.unique(), 
        email,
       password, 
        `${firstName} ${lastName}`);

  const session = await account.createEmailPasswordSession(email, password);

  (await cookies()).set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
  return parseStringify(newUserAccount);
    } catch (error) {
        console.log(error);
    }
};

// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();
      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }
  