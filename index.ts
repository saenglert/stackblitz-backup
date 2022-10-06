import { of, switchMap, concatMap, exhaustMap, fromEvent, interval, take, map } from 'rxjs';

/*
 * # Map
 * 
 * Wende eine Funktion auf alle Elemente einer Liste an
 * 
 * ## Switch
 * 
 * Wechsle (switch) zu einem neuen Observable
 */

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   switchMap(() => interval(1000))
// );
// result.subscribe(x => console.log(x));

/*
 * # Concat
 *
 * Wende eine Funktion auf alle Elemente eines Source-Observables an,
 * die wiederum Inner-Observables enthalten kann
 */

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   concatMap(ev => interval(1000).pipe(take(4)))
// );
// result.subscribe(x => console.log(x));


const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap(() => interval(1000).pipe(take(5)))
);
result.subscribe(x => console.log(x));