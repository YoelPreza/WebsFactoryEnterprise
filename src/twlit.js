
    import { css } from "lit";
    export const TWStyles = css` /*
! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured sans font-family by default.
5. Use the user's configured sans font-feature-settings by default.
6. Use the user's configured sans font-variation-settings by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from html so users can set them as a class directly on the html element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured mono font family by default.
2. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.visible {
  visibility: visible;
}

.collapse {
  visibility: collapse;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.bottom-0 {
  bottom: 0px;
}

.bottom-2 {
  bottom: 0.5rem;
}

.bottom-28 {
  bottom: 7rem;
}

.bottom-8 {
  bottom: 2rem;
}

.left-0 {
  left: 0px;
}

.left-1 {
  left: 0.25rem;
}

.left-1\\/2 {
  left: 50%;
}

.left-2 {
  left: 0.5rem;
}

.left-20 {
  left: 5rem;
}

.left-24 {
  left: 6rem;
}

.left-28 {
  left: 7rem;
}

.left-3 {
  left: 0.75rem;
}

.left-36 {
  left: 9rem;
}

.left-4 {
  left: 1rem;
}

.left-40 {
  left: 10rem;
}

.left-48 {
  left: 12rem;
}

.left-5 {
  left: 1.25rem;
}

.left-56 {
  left: 14rem;
}

.left-6 {
  left: 1.5rem;
}

.left-64 {
  left: 16rem;
}

.left-7 {
  left: 1.75rem;
}

.left-8 {
  left: 2rem;
}

.left-9 {
  left: 2.25rem;
}

.right-0 {
  right: 0px;
}

.right-1 {
  right: 0.25rem;
}

.right-10 {
  right: 2.5rem;
}

.right-9 {
  right: 2.25rem;
}

.top-0 {
  top: 0px;
}

.top-1 {
  top: 0.25rem;
}

.top-10 {
  top: 2.5rem;
}

.top-2 {
  top: 0.5rem;
}

.top-28 {
  top: 7rem;
}

.top-32 {
  top: 8rem;
}

.top-5 {
  top: 1.25rem;
}

.top-full {
  top: 100%;
}

.z-10 {
  z-index: 10;
}

.z-50 {
  z-index: 50;
}

.m-0 {
  margin: 0px;
}

.m-10 {
  margin: 2.5rem;
}

.m-2 {
  margin: 0.5rem;
}

.m-3 {
  margin: 0.75rem;
}

.m-5 {
  margin: 1.25rem;
}

.m-auto {
  margin: auto;
}

.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}

.mx-10 {
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}

.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}

.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.mx-7 {
  margin-left: 1.75rem;
  margin-right: 1.75rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mt-14 {
  margin-top: 3.5rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.flex {
  display: flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.contents {
  display: contents;
}

.list-item {
  display: list-item;
}

.hidden {
  display: none;
}

.h-1 {
  height: 0.25rem;
}

.h-1\\/2 {
  height: 50%;
}

.h-1\\/3 {
  height: 33.333333%;
}

.h-10 {
  height: 2.5rem;
}

.h-2 {
  height: 0.5rem;
}

.h-2\\/3 {
  height: 66.666667%;
}

.h-28 {
  height: 7rem;
}

.h-3 {
  height: 0.75rem;
}

.h-32 {
  height: 8rem;
}

.h-36 {
  height: 9rem;
}

.h-4 {
  height: 1rem;
}

.h-40 {
  height: 10rem;
}

.h-44 {
  height: 11rem;
}

.h-48 {
  height: 12rem;
}

.h-5 {
  height: 1.25rem;
}

.h-8 {
  height: 2rem;
}

.h-96 {
  height: 24rem;
}

.h-\\[100px\\] {
  height: 100px;
}

.h-\\[calc\\(100vh-200px\\)\\] {
  height: calc(100vh - 200px);
}

.h-auto {
  height: auto;
}

.h-full {
  height: 100%;
}

.h-max {
  height: -moz-max-content;
  height: max-content;
}

.h-screen {
  height: 100vh;
}

.max-h-96 {
  max-height: 24rem;
}

.max-h-\\[600px\\] {
  max-height: 600px;
}

.min-h-full {
  min-height: 100%;
}

.min-h-screen {
  min-height: 100vh;
}

.w-1 {
  width: 0.25rem;
}

.w-10 {
  width: 2.5rem;
}

.w-11 {
  width: 2.75rem;
}

.w-11\\/12 {
  width: 91.666667%;
}

.w-2 {
  width: 0.5rem;
}

.w-20 {
  width: 5rem;
}

.w-3 {
  width: 0.75rem;
}

.w-3\\/4 {
  width: 75%;
}

.w-4 {
  width: 1rem;
}

.w-40 {
  width: 10rem;
}

.w-5 {
  width: 1.25rem;
}

.w-52 {
  width: 13rem;
}

.w-8 {
  width: 2rem;
}

.w-9 {
  width: 2.25rem;
}

.w-96 {
  width: 24rem;
}

.w-\\[1\\2c 095px\\] {
  width: 1,095px;
}

.w-\\[365px\\] {
  width: 365px;
}

.w-\\[400px\\] {
  width: 400px;
}

.w-auto {
  width: auto;
}

.w-full {
  width: 100%;
}

.w-max {
  width: -moz-max-content;
  width: max-content;
}

.w-screen {
  width: 100vw;
}

.max-w-\\[350px\\] {
  max-width: 350px;
}

.border-collapse {
  border-collapse: collapse;
}

.-translate-x-0 {
  --tw-translate-x: -0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1 {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-5 {
  --tw-translate-x: -1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-\\[120\\%\\] {
  --tw-translate-x: -120%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-10 {
  --tw-translate-x: 2.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-20 {
  --tw-translate-x: 5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.cursor-pointer {
  cursor: pointer;
}

.resize {
  resize: both;
}

.list-disc {
  list-style-type: disc;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.grid-rows-3 {
  grid-template-rows: repeat(3, minmax(0, 1fr));
}

.flex-row {
  flex-direction: row;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col {
  flex-direction: column;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.place-content-center {
  place-content: center;
}

.place-items-center {
  place-items: center;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-10 {
  gap: 2.5rem;
}

.justify-self-start {
  justify-self: start;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-scroll {
  overflow: scroll;
}

.overflow-x-auto {
  overflow-x: auto;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-y-hidden {
  overflow-y: hidden;
}

.overflow-x-scroll {
  overflow-x: scroll;
}

.scroll-smooth {
  scroll-behavior: smooth;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.rounded-s-full {
  border-start-start-radius: 9999px;
  border-end-start-radius: 9999px;
}

.border {
  border-width: 1px;
}

.border-blue-800 {
  --tw-border-opacity: 1;
  border-color: rgb(30 64 175 / var(--tw-border-opacity));
}

.border-green-800 {
  --tw-border-opacity: 1;
  border-color: rgb(22 101 52 / var(--tw-border-opacity));
}

.border-pink-700 {
  --tw-border-opacity: 1;
  border-color: rgb(190 24 93 / var(--tw-border-opacity));
}

.border-red-100 {
  --tw-border-opacity: 1;
  border-color: rgb(254 226 226 / var(--tw-border-opacity));
}

.border-red-400 {
  --tw-border-opacity: 1;
  border-color: rgb(248 113 113 / var(--tw-border-opacity));
}

.border-red-50 {
  --tw-border-opacity: 1;
  border-color: rgb(254 242 242 / var(--tw-border-opacity));
}

.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-red-800 {
  --tw-border-opacity: 1;
  border-color: rgb(153 27 27 / var(--tw-border-opacity));
}

.bg-\\[\\#4db8e1\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(77 184 225 / var(--tw-bg-opacity));
}

.bg-\\[\\#9ec59f\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(158 197 159 / var(--tw-bg-opacity));
}

.bg-\\[\\#F5F5F5\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.bg-\\[\\#bfa588\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(191 165 136 / var(--tw-bg-opacity));
}

.bg-\\[\\#e97950\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(233 121 80 / var(--tw-bg-opacity));
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity));
}

.bg-blue-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(147 197 253 / var(--tw-bg-opacity));
}

.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity));
}

.bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 58 138 / var(--tw-bg-opacity));
}

.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
}

.bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(187 247 208 / var(--tw-bg-opacity));
}

.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(74 222 128 / var(--tw-bg-opacity));
}

.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity));
}

.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}

.bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 101 52 / var(--tw-bg-opacity));
}

.bg-orange-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(154 52 18 / var(--tw-bg-opacity));
}

.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 231 243 / var(--tw-bg-opacity));
}

.bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 207 232 / var(--tw-bg-opacity));
}

.bg-pink-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 168 212 / var(--tw-bg-opacity));
}

.bg-pink-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(244 114 182 / var(--tw-bg-opacity));
}

.bg-pink-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(236 72 153 / var(--tw-bg-opacity));
}

.bg-pink-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 39 119 / var(--tw-bg-opacity));
}

.bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(190 24 93 / var(--tw-bg-opacity));
}

.bg-pink-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(157 23 77 / var(--tw-bg-opacity));
}

.bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(233 213 255 / var(--tw-bg-opacity));
}

.bg-purple-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(216 180 254 / var(--tw-bg-opacity));
}

.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity));
}

.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 34 206 / var(--tw-bg-opacity));
}

.bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity));
}

.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}

.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity));
}

.bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(153 27 27 / var(--tw-bg-opacity));
}

.bg-red-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(127 29 29 / var(--tw-bg-opacity));
}

.bg-rose-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(136 19 55 / var(--tw-bg-opacity));
}

.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}

.bg-slate-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
}

.bg-slate-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity));
}

.bg-slate-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

.bg-slate-800\\/60 {
  background-color: rgb(30 41 59 / 0.6);
}

.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}

.bg-transparent {
  background-color: transparent;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 240 138 / var(--tw-bg-opacity));
}

.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity));
}

.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 204 21 / var(--tw-bg-opacity));
}

.bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity));
}

.bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(202 138 4 / var(--tw-bg-opacity));
}

.bg-none {
  background-image: none;
}

.bg-contain {
  background-size: contain;
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.bg-no-repeat {
  background-repeat: no-repeat;
}

.p-0 {
  padding: 0px;
}

.p-10 {
  padding: 2.5rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-20 {
  padding: 5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.p-5 {
  padding: 1.25rem;
}

.p-8 {
  padding: 2rem;
}

.p-28 {
  padding: 7rem;
}

.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.px-20 {
  padding-left: 5rem;
  padding-right: 5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.pl-1 {
  padding-left: 0.25rem;
}

.pt-10 {
  padding-top: 2.5rem;
}

.pt-14 {
  padding-top: 3.5rem;
}

.pt-20 {
  padding-top: 5rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.font-serif {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.uppercase {
  text-transform: uppercase;
}

.capitalize {
  text-transform: capitalize;
}

.text-\\[\\#bfa588\\] {
  --tw-text-opacity: 1;
  color: rgb(191 165 136 / var(--tw-text-opacity));
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 64 175 / var(--tw-text-opacity));
}

.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(22 101 52 / var(--tw-text-opacity));
}

.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(154 52 18 / var(--tw-text-opacity));
}

.text-pink-100 {
  --tw-text-opacity: 1;
  color: rgb(252 231 243 / var(--tw-text-opacity));
}

.text-pink-200 {
  --tw-text-opacity: 1;
  color: rgb(251 207 232 / var(--tw-text-opacity));
}

.text-pink-300 {
  --tw-text-opacity: 1;
  color: rgb(249 168 212 / var(--tw-text-opacity));
}

.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(236 72 153 / var(--tw-text-opacity));
}

.text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(190 24 93 / var(--tw-text-opacity));
}

.text-red-100 {
  --tw-text-opacity: 1;
  color: rgb(254 226 226 / var(--tw-text-opacity));
}

.text-red-200 {
  --tw-text-opacity: 1;
  color: rgb(254 202 202 / var(--tw-text-opacity));
}

.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity));
}

.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(153 27 27 / var(--tw-text-opacity));
}

.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(127 29 29 / var(--tw-text-opacity));
}

.text-slate-500 {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}

.text-slate-800 {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}

.text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-yellow-200 {
  --tw-text-opacity: 1;
  color: rgb(254 240 138 / var(--tw-text-opacity));
}

.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity));
}

.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(250 204 21 / var(--tw-text-opacity));
}

.underline {
  text-decoration-line: underline;
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.outline {
  outline-style: solid;
}

.outline-dotted {
  outline-style: dotted;
}

.outline-pink-700 {
  outline-color: #be185d;
}

.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-black {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}

.ring-pink-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(244 114 182 / var(--tw-ring-opacity));
}

.ring-pink-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(236 72 153 / var(--tw-ring-opacity));
}

.ring-pink-700 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 24 93 / var(--tw-ring-opacity));
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.backdrop-blur-md {
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-1000 {
  transition-duration: 1000ms;
}

.duration-700 {
  transition-duration: 700ms;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

.hover\\:animate-bounce:hover {
  animation: bounce 1s infinite;
}

.hover\\:bg-pink-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(236 72 153 / var(--tw-bg-opacity));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

@media (min-width: 640px) {
  .sm\\:relative {
    position: relative;
  }

  .sm\\:my-0 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-max {
    height: -moz-max-content;
    height: max-content;
  }

  .sm\\:h-screen {
    height: 100vh;
  }

  .sm\\:h-auto {
    height: auto;
  }

  .sm\\:w-1\\/2 {
    width: 50%;
  }

  .sm\\:w-11\\/12 {
    width: 91.666667%;
  }

  .sm\\:w-auto {
    width: auto;
  }

  .sm\\:w-max {
    width: -moz-max-content;
    width: max-content;
  }

  .sm\\:-translate-x-0 {
    --tw-translate-x: -0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:flex-row {
    flex-direction: row;
  }

  .sm\\:justify-end {
    justify-content: flex-end;
  }

  .sm\\:overflow-x-hidden {
    overflow-x: hidden;
  }

  .sm\\:bg-transparent {
    background-color: transparent;
  }
}

@media (min-width: 768px) {
  .md\\:absolute {
    position: absolute;
  }

  .md\\:relative {
    position: relative;
  }

  .md\\:left-0 {
    left: 0px;
  }

  .md\\:top-0 {
    top: 0px;
  }

  .md\\:left-1\\/2 {
    left: 50%;
  }

  .md\\:top-1\\/2 {
    top: 50%;
  }

  .md\\:bottom-0 {
    bottom: 0px;
  }

  .md\\:right-0 {
    right: 0px;
  }

  .md\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .md\\:my-20 {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:h-\\[calc\\(100vh-124px\\)\\] {
    height: calc(100vh - 124px);
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:h-full {
    height: 100%;
  }

  .md\\:h-screen {
    height: 100vh;
  }

  .md\\:h-\\[180px\\] {
    height: 180px;
  }

  .md\\:h-\\[100px\\] {
    height: 100px;
  }

  .md\\:h-\\[150px\\] {
    height: 150px;
  }

  .md\\:w-1\\/2 {
    width: 50%;
  }

  .md\\:w-\\[500px\\] {
    width: 500px;
  }

  .md\\:w-full {
    width: 100%;
  }

  .md\\:-translate-x-1\\/2 {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .md\\:-translate-y-1\\/2 {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8,0,1,1);
    }

    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
  }

  .md\\:animate-bounce {
    animation: bounce 1s infinite;
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:flex-col {
    flex-direction: column;
  }

  .md\\:items-center {
    align-items: center;
  }

  .md\\:justify-between {
    justify-content: space-between;
  }

  .md\\:justify-self-start {
    justify-self: start;
  }

  .md\\:p-20 {
    padding: 5rem;
  }

  .md\\:p-28 {
    padding: 7rem;
  }

  .md\\:text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}

@media (min-width: 1024px) {
  .lg\\:absolute {
    position: absolute;
  }

  .lg\\:relative {
    position: relative;
  }

  .lg\\:bottom-0 {
    bottom: 0px;
  }

  .lg\\:left-0 {
    left: 0px;
  }

  .lg\\:left-1\\/2 {
    left: 50%;
  }

  .lg\\:right-0 {
    right: 0px;
  }

  .lg\\:top-0 {
    top: 0px;
  }

  .lg\\:top-1\\/2 {
    top: 50%;
  }

  .lg\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .lg\\:flex {
    display: flex;
  }

  .lg\\:h-\\[180px\\] {
    height: 180px;
  }

  .lg\\:h-\\[500px\\] {
    height: 500px;
  }

  .lg\\:h-\\[600px\\] {
    height: 600px;
  }

  .lg\\:h-\\[calc\\(100vh-124px\\)\\] {
    height: calc(100vh - 124px);
  }

  .lg\\:h-full {
    height: 100%;
  }

  .lg\\:h-screen {
    height: 100vh;
  }

  .lg\\:w-1\\/2 {
    width: 50%;
  }

  .lg\\:w-\\[500px\\] {
    width: 500px;
  }

  .lg\\:w-full {
    width: 100%;
  }

  .lg\\:-translate-x-1\\/2 {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .lg\\:-translate-y-1\\/2 {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8,0,1,1);
    }

    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
  }

  .lg\\:animate-bounce {
    animation: bounce 1s infinite;
  }

  .lg\\:flex-row {
    flex-direction: row;
  }

  .lg\\:flex-row-reverse {
    flex-direction: row-reverse;
  }

  .lg\\:items-center {
    align-items: center;
  }

  .lg\\:justify-center {
    justify-content: center;
  }

  .lg\\:p-0 {
    padding: 0px;
  }

  .lg\\:p-20 {
    padding: 5rem;
  }

  .lg\\:py-0 {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .lg\\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .lg\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .lg\\:font-bold {
    font-weight: 700;
  }
}

@media (min-width: 1280px) {
  .xl\\:h-96 {
    height: 24rem;
  }

  .xl\\:w-1\\/2 {
    width: 50%;
  }

  .xl\\:w-\\[2280px\\] {
    width: 2280px;
  }

  .xl\\:w-\\[760px\\] {
    width: 760px;
  }

  .xl\\:flex-row {
    flex-direction: row;
  }

  .xl\\:flex-nowrap {
    flex-wrap: nowrap;
  }
} `
    