# Scrivito Accessible Accordion
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/scrivito)

An accordion React Component/Scrivito widget for the Scrivito CMS that let you store an anchor ID.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-accessible-accordion/master/accordion-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```shell
$ npm install scrivito-accessible-accordion
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```js
import "scrivito-accessible-accordion";
```

Also add the styling for react-accessible-accordeon a dependency of this widget.

```scss
@import "~react-accessible-accordion/dist/fancy-example.css";
```

## Features
An accordion widget, useful for FAQ's.

## Widget properties

In the widget properties you can set:
- Accordion items
- Title and text per item
