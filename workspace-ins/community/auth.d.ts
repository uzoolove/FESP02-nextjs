export declare module '@auth/core/types' {
  interface User {
    accessToken: string,
    refreshToken: string,
  }

  interface Session {
    accessToken: string,
    refreshToken: string,
  }
}

export declare module '@auth/core/jwt' {
  interface JWT {
    accessToken: string,
    refreshToken: string,
  }
}