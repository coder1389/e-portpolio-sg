import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const CardAnimation = trigger('fade', [
  // ...
  state(
    'void',
    style({
      opacity: 0,
    })
  ),
  state(
    '*',
    style({
      opacity: 1,
    })
  ),
  transition('void => *', [animate('1s')]),
]);
