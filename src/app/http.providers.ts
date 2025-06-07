import {
  httpErrorHandlerInterceptorFn,
  httpHeaderHandlerInterceptorFn,
  httpSuccessHandlerInterceptorFn,
} from '@core/interceptors';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const provideCustomHttpClient = () => {
  return [
    provideHttpClient(
      withInterceptors([
        httpErrorHandlerInterceptorFn,
        httpHeaderHandlerInterceptorFn,
        httpSuccessHandlerInterceptorFn,
      ])
    ),
  ];
};
