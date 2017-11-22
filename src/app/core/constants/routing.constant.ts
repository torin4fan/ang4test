import { isDevMode } from '@angular/core';

const env = (isDevMode()) ? 'http://localhost:3000' : '';

export const RoutingConstant = {
  courses: env + '/courses'
};
