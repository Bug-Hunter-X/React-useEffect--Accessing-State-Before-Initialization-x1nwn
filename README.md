# React useEffect: Accessing State Before Initialization

This example demonstrates a common error in React's `useEffect` hook: accessing a state variable before it has been initialized.  The `useState` hook's initial value is not immediately available, so accessing it directly within `useEffect` can lead to unexpected behavior (undefined values).

## Bug
The initial `console.log` in `useEffect` attempts to display the value of `count` before it is initialized by `useState`.  This causes 'undefined' to be logged, not 0 as might be expected.

## Solution
The issue is solved by using the `count` variable only after the initial render completes.  The problem is most easily solved by using functional updates with `setCount`. 