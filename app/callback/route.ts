import { handleAuth, getSignInUrl } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = handleAuth({
  onError: async (error) => {
    console.error("Error authenticating", error);

    return NextResponse.json(
      { error: "Authentication failed, reason: " + JSON.stringify(error) },
      { status: 500 }
    );
    // TODO: Should probably do something more than just redirect back to the
    // sign-in page (without even an error message!)
    // redirect(await getSignInUrl());
  },
});
