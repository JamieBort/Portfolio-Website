# Accessibility Issue Questions

Questions that need to be addressed to resolve my Accessibility Issues.

Things to address with Crystal Scott (see the https://trello.com/c/PeariN22/ Trello card.)

1. 
The order of Anchor Pseudo Classes. What should it be?

Currently it is:

  a:link{}

  a:visited{}

  a:focus{}

  a:hover{}

  a:active{}

2. 
Can I get away with not using a:link{} in the styles.css file?

3. 
The order of Button Pseudo Classes. What should it be?

Currently it is:

  button:focus{}

  button:hover{}

  button:active{}

4. 
Am I forgetting any anchor or button pseudo classes?

5. 
Regarding the language button, for the sighted user the text in the button says the language that will be displayed. For example, if English is displayed on the website, the button says "Español". And when Spanish is displayed on the website, the text in the button is "English".
However this posses a problem for people who do not see well. 
The screen reader and text-to-speech apps read the text in the button and do not convey to people who cannot see well that this button toggles between languages.
I would like them to dictate something to the effect of "Change language to English" or "Toggle between Spanish and English. Spanish currently selected."
Things of note:
I am not currently using "aria-label" there.
I stumbled upon the "aria-pressed" from this "Toggle buttons" section of this https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#toggle_buttons document.
So I started using it for the above mentioned language button. And for the "Nav" button in the mobile version of the website.

6. 
When the screen readers (Talkback on my Android and VoiceOver on my MacOS) are dictating my website to me they do not read the text in the buttons.
Rather they gloss over those buttons as if they were not on the page.
I've attempted to address this with aria-label's to no success. 
I am not sure how to address this.
Things of note:
When I select a portion of the site to dictate to me, for example 3 rows/sentences, the text in the buttons are read without any issue.