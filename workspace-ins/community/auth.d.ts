export declare module '@auth/core/types' {

  /*
  export interface User {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
  } 
  */

  interface User {
    type: string,
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