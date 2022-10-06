import {
  of,
  switchMap,
  concatMap,
  exhaustMap,
  fromEvent,
  interval,
  take,
  map,
  mergeAll,
} from 'rxjs';

/**
 * # Join
 *
 * Verbinde eine Liste von Elementen
 */

/**
 * ## Merge All
 * 
 * Fasse alle inneren Observables zu einem einzelnen zusammen (merge)
 */
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(map(() => interval(1000)));
const firstOrder = higherOrder.pipe(mergeAll());

firstOrder.subscribe((x) => console.log(x));

/**
 * # Map
 *
 * Wende eine Operation auf alle Elemente einer Liste an
 *
 * # Flat Map
 *
 * Glätte eine Liste von Listen und wende auf jedes
 * Elemente eine Operation an
 */

/**
 * ## ConcatMap
 *
 * Verkette(concat) die Werte alle Observables
 */

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   concatMap(ev => interval(1000).pipe(take(4)))
// );
// result.subscribe(x => console.log(x));

/**
 * ## SwitchMap
 *
 * Wechsle (switch) zum nächsten Observable sobald es aktiv wird
 */

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   switchMap(() => interval(1000))
// );
// result.subscribe(x => console.log(x));

/**
 * ## ExhaustMap
 *
 * Ignoriere neue Observables, bis das aktuelle voll ausgeschópft (exhausted) ist.
 */

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   exhaustMap(() => interval(1000).pipe(take(5)))
// );
// result.subscribe(x => console.log(x));
