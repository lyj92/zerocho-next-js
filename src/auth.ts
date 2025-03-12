import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  pages: {
    signIn: "/i/flow/login",
    newUser: "/i/flow/signIn",
  },
  callbacks: {
    // Add JWT callback to ensure token is properly handled
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
        // Add any other custom fields you want in the token
      }
      return token;
    },

    async session({ session, token }) {
      console.log("session callback", session, token);

      // Only fetch user data if needed and not already in token
      try {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            headers: {
              Authorization: `Bearer ${token.id}`,
            },
          }
        );

        if (authResponse.ok) {
          const userData = await authResponse.json();
          session.user = {
            ...session.user,
            id: token.id as string,
            ...userData,
          };
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      // Add name and credentials to make NextAuth happy
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        try {
          const authResponse = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: credentials.username,
                password: credentials.password,
              }),
            }
          );

          if (!authResponse.ok) {
            return null;
          }

          const user = await authResponse.json();
          console.log("user", user);

          // Return only the fields that NextAuth expects
          return {
            id: user.id,
            email: user.id, // NextAuth expects an email field
            name: user.nickname,
            image: user.image,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  // Add session configuration to ensure tokens work correctly
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // Recommended: add a secret for production
  secret: process.env.NEXTAUTH_SECRET,
});
