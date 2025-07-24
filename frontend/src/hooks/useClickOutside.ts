// ./frontend/src/hooks/useClickOutside

import { useEffect, RefObject } from "react";

// A hook that closes the FloatingChoicePrompt when the end user clicks or taps outside of the prompt.
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
