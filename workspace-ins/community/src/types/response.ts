export interface Pagination {
  page: number,
  limit: number,
  total: number,
  totalPages: number,
}

// 기본 응답
export interface CoreRes {
  ok: 0 | 1,
}

// 성공 기본 응답
export interface CoreSuccessRes extends CoreRes{
  ok: 1,
}

// item 한개 응답
export interface SingleItem<T> extends CoreSuccessRes{
  item: T
}

// item 여러개 응답
export interface MultiItem<T> extends CoreSuccessRes{
  item: T[],
  pagination: Pagination,
}

// 실패 기본 응답
export interface CoreErrorRes extends CoreRes{
  ok: 0,
  message: string,
}

// 인증 실패 응답
export interface AuthErrorRes extends CoreErrorRes{
  errorName: "EmptyAuthorization | TokenExpiredError | JsonWebTokenError"
}

// 데이터 검증 실패 메세지(E: 검증에 사용될 속성값 목록)
export interface ValidationError<E> {
  type: string,
  value: string,
  msg: string,
  path: keyof E,
  location: string
}

// 데이터 검증 실패 응답
export interface ValidationErrorRes<E> extends CoreErrorRes{
  errors: ValidationError<E>[]
}

// 데이터 검증 로직이 있는 요청의 응답
export type ApiResWithValidation<T, E> = T | CoreErrorRes | AuthErrorRes | ValidationErrorRes<E>;

// 데이터 검증 로직이 없는 요청의 응답
export type ApiRes<T> = T | CoreErrorRes | AuthErrorRes;

// export type ErrorRes<E> = CoreErrorRes | AuthErrorRes | ValidationErrorRes<E>;

/**
 * @param T: 성공했을 때의 데이터 타입
 * @param E: ValidationError을 응답할 경우 Form의 name 값 목록
 *  
 * 
 */ 
// export type ApiRes<T> = T | ErrorRes;

/**
 * E의 전달 여부에 따라 ApiRes 타입 선택
 * @param T: 데이터 패칭에 성공했을 때의 데이터 타입
 * @param E: 서버에서 ValidationError을 응답할 경우 표함 될 수 있는 path 값 목록
 *  
 * 
 */ 
// export type ApiRes<T, E = never> = E extends never ? ApiResWithoutValidation<T> : ApiResWithValidation<T, E>;
