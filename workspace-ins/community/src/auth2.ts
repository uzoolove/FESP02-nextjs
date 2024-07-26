import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

// OAuth 2.0
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      // email/password 로그인
      async authorize(credentials) {
        // 사용자가 입력한 정보를 이용해 로그인 처리
        const res = await fetch(`${SERVER}/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        const resJson = await res.json();
        if (resJson.ok) {
          const user = resJson.item;
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            image: user.profileImage && SERVER + user.profileImgage,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // default
    maxAge: 60 * 60 * 24, // s * m *h
  },
  pages: {
    signIn: "/login", // default "/auth/signin"
  },
  callbacks: {
    // 로그인 처리를 계속 할 지 여부
    // user: authorize()가 리턴한 값
    async signIn({ user }) {
      // true를 리턴하면 로그인 처리를 계속, false 리턴 혹은 Error throw하면 로그인 흐름 중단
      return true;
    },
    // 로그인 성공한 회원 정보로 token 객체 설정
    async jwt({ token, user }) {
      // 토큰 만료 체크, refreshToken으로 AccessToken 갱신
      // refreshToken도 만료되었을 경우 로그아웃 처리
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },

    // 클라이언트에서 세션 정보 요청시 호출
    // token 객체 정보로 session 객체 설정
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session;
    },
  },
});