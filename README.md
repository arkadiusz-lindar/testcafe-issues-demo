# Minimal working example for TestCafe issues

## Description

We have been using TestCafe for more than three years and have successfully created numerous automated tests.
Recently, we attempted to enable native automation mode, but unfortunately, we encountered some serious issues. 
So far, we have identified at least two problems:
- The test hangs after the `navigateTo` function is called.
- The test hangs after the `eval` function is called (e.g., when performing a page reload).

We have tried several different versions of Chrome and Chromium, but the problems appear to be independent of the browser version.

We were able to replicate the issues on several different websites. The following demo reproduces the issue using the Google Finance page.

The test works perfectly fine when native automation mode is disabled.

## Prerequisites

- Node.js v22.11.0
- Chrome 131.0.6778.109 (or older)

### Install Dependencies :

`$ npm install`

### Running the Test :

`$ npm test`
