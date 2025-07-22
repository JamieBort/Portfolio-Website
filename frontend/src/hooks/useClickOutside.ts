// ./frontend/src/hooks/useClickOutside

import { useEffect, RefObject } from "react";

export function useClickOutside(ref: RefObject<HTMLElement>, onClickOutside: () => void) {
  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, onClickOutside]);
}

// import { useEffect, RefObject } from "react";

// export function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, onClickOutside: () => void) {
//   useEffect(() => {
//     function handleClick(event: MouseEvent | TouchEvent) {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         onClickOutside();
//       }
//     }

//     document.addEventListener("mousedown", handleClick);
//     document.addEventListener("touchstart", handleClick);

//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//       document.removeEventListener("touchstart", handleClick);
//     };
//   }, [ref, onClickOutside]);
// }

// // import { useEffect } from "react";

// // export function useClickOutside(ref: React.RefObject<HTMLElement>, onClickOutside: () => void) {
// //   // export function useClickOutside<T extends HTMLElement>(ref: React.RefObject<T>, onClickOutside: () => void) {
// //   useEffect(() => {
// //     function handleClick(event: MouseEvent | TouchEvent) {
// //       if (ref.current && !ref.current.contains(event.target as Node)) {
// //         onClickOutside();
// //       }
// //     }

// //     document.addEventListener("mousedown", handleClick);
// //     document.addEventListener("touchstart", handleClick);

// //     return () => {
// //       document.removeEventListener("mousedown", handleClick);
// //       document.removeEventListener("touchstart", handleClick);
// //     };
// //   }, [ref, onClickOutside]);
// // }
