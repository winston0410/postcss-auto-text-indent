# PostCSS Sparrow Auto Text Indent

A PostCSS Sparrow plugin that helps you append `text-indent` to a selector when `letter-spacing` is found, in order to center words correctly.

```css
/* Before transformations */
.foo {
  letter-spacing: 10px;
}
```

```css
/* After transformations */
.foo {
  letter-spacing: 10px;
  text-indent: 10px;
}
```

## Why do I need this plugin?

Letter spacing is added to the **right** instead of **in between** characters, thus you will need to offset it with `text-indent` or `padding-left` in order to center it correctly with `text-align: center`.

This plugin helps you achieve this automatically, which is particularly useful if you use [Tailwind CSS](https://tailwindcss.com/), as you do not need to create a new utility class for `text-indent`.

## Installation

This plugin require you to use [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow) for matching with selectors you want.

Download both `postcss-sparrow` and this plugin through NPM.

```shell

npm i postcss-sparrow postcss-sparrow-auto-text-indent

```

Then import this plugin as the callback for [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow).

```javascript
//postcss.config.js
module.exports = {
  plugins: [
    //Other plugins...

    require('postcss-sparrow')({
      transformations: [
        {
          selectors: ['*'],
          inclusion: true,
          callback: [
            require('postcss-auto-text-indent')
          ]
        }
      ]
    })
  ]
}
```

##Full Code example

```css
/* Before transformations */
.foo {
  letter-spacing: 10px;
}
```

```javascript
//postcss.config.js
module.exports = {
  plugins: [
    //Other plugins...

    require('postcss-sparrow')({
      transformations: [
        {
          selectors: ['*'],
          inclusion: true,
          callback: [
            require('postcss-auto-text-indent')
          ]
        }
      ]
    })
  ]
}
```

```css
/* After transformations */
.foo {
  letter-spacing: 10px;
  text-indent: 10px;
}
```
