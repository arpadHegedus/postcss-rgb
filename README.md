A [PostCSS] plugin to use rgb and rgba with hex values

[PostCSS]: https://github.com/postcss/postcss
[Gulp]: https://github.com/gulpjs/gulp

## Installation

```js
npm install postcss-rgb
```

## Example

```css
div {
    background: rgba(black, 0.4)
}
```

will produce

```css
div {
    background: rgba(0, 0, 0, 0.4);
}
```

## Usage

Using [Gulp].

```js
var gulp            = require('gulp'),
    postcss         = require('gulp-postcss'),
    rgb             = require('postcss-rgb');

gulp.task('css', function() {
    gulp.src('path/to/dev/css').
        .pipe(postcss({
            rgb
        }))
        .pipe(gulp.dest('path/to/build/css'));
});

// rest of the gulp file
```
