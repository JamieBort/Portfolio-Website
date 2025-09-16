# Issues Raised By Other People

Raised by https://trello.com/c/PeariN22/:

1.  Currently the only announcement with NVDA on is pressed/not pressed, which does not relay what is dynamically changing.

    I can see your comment to do:

    > \<!-- TODO: For accessibility purposes, have the screen reader dictate "English" when English is displayed. And "Spanish" when Spanish is displayed. It currently reads the text on the button, which is the OPPOSITE of what is displayed. -->

    I would recommend Add a visually hidden live region:

    1. Insert a visually hidden element on the page using a <div> with a class like "sr-only" to ensure it is not visible to sighted users. (Tailwind has a great sr-only CSS block to borrow https://tailwindcss.com/docs/screen-readers#screen-reader-only-elements)
    2. Add aria-live="polite" to the element with the "sr-only" class.
    3. Create an event listener that injects the text "Showing page in English" and "mostrando página en Español" into the live region when the button toggles and the language changes.
    4. Use a setTimeout to remove the text from the live region after it has been announced. So it is emptied before the next insertion.

2.  Why is "Jamie Bort" a button? Will it have a function because currently it does nothing and should not be programmed as a `<button>`.

3.  Your "Nav" button on mobile needs to lose the aria-pressed and gain a toggling aria-expanded and aria-controls.

    Please check out this website that I just built for the company I work for - I have a good mobile menu example you can see. https://www.zenythgroup.com/

<!-- A comment about this Trello card (above) is in a block `...Trello card regarding [[Portfolio Website]] is tied to...` on journal 20250916 of my Digital Knowledge Base -->
