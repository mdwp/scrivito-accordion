# Scrivito Accordion
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An accordion React Component/Scrivito widget for the Scrivito CMS that let you store an anchor ID.

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```
$ npm install scrivito-accordion
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```
import "scrivito-accordion";
```

Also add the styling of the widget to your app. This can be done by either loading it via `css-loader` (e.g. in `index.js` or `Widgets/index.js`):

```
import "scrivito-accordion/index.css";
```

Or by including the styling to your style sheets (e.g. in `index.scss`):

```scss
@import "~scrivito-accordion/index.css";
```

Also add the styling for react-accessible-accordeon a dependencie of this widget.

```scss
@import "~react-accessible-accordion/dist/fancy-example.css";
```


## Features
The Scrivito Headline Widget has one extra feature compared to the *normal* headline Widget.
It can store an anchor ID. The Widget should be used in conjunction with our Scrivito Advanced Button widget which offers a link to anchors and smooth scrolling.

## Development

With `npm run build` you can build the package into `build/`.

With `npm start` you'll start a continues process, that rebuilds `build/` automatically once the source code is changed.

To add this library locally do the following in your scrivito app:

```
npm install file:<path to build folder>
```

e.g.

```
npm install file:../scrivito-accordion/build/
```

To publish the package:

```
npm i && npm run build && cd build/ && npm publish
```

## Check code quality

With `npm run eslint` and `npm run es-check` you can check your coding quality.