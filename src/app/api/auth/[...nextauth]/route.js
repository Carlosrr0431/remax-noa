import { supabaseClient } from "@/supabase/client";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "36313790560-dnkqfkvlerrb2ujdpaqsn8q7avs72p5k.apps.googleusercontent.com",
      clientSecret: "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",

      // authorization solo es para modo de desarrollo
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
 
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? "user",
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("user: " + user.email);

      const result = await supabaseClient
        .from("usuarios")
        .select("email")
        .match({ email: user?.email });

      const data = result.data;

      console.log("data: " + data);

      if (data?.length == 0) {
        const result2 = await supabaseClient.from("usuarios").insert({
          nombre: user.name,
          email: user.email,
          imagenUrl: user.image,
        });

        console.log("se creo el usuario: " + result2);
      }

      return true;
    },

    async jwt({ token, user }) {
      let { data: usuarios, error } = await supabaseClient
        .from("usuarios")
        .select("*").order('id', { ascending: true });

      if (user?.email != undefined) {
        if (
          usuarios
            .filter((e) => e.role == "admin")
            .find((e) => e.email == user?.email)
        )
          token.role = "admin";
        else if (
          usuarios
            .filter((e) => e.role == "user admin")
            .find((e) => e.email == user?.email)
        )
          token.role = "user admin";
        else token.role == "member";
      }

      return token;
    },
  },
});

export { handler as GET, handler as POST };
