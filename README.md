# Easy gulp Gulp-startKit

Template uses:
- [Gulp](http://gulpjs.com/)
- [Browser-sync](https://www.browsersync.io/) - automatic restart when changing the code page
- [Sass](http://sass-lang.com/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- Merge and compress CSS and JavaScript
- Combining images into a sprite
- [Sass Guidelines](http://sass-guidelin.es/) An opinionated styleguide for writing sane, maintainable and scalable Sass.
- [Breackpoint]

## Get started
Install packages:
```bash
npm install
```

And run command:
```bash
gulp
```

## Commands gulp
- `gulp start` - run browserSync
- `gulp reload` - reload browserSync
- `gulp build:sprites` - combining images into a sprite
- `gulp build:css` - merge and compress CSS
- `gulp build:js` - merge and compress JavaScript
- `gulp build:html` - build html from twig
- `gulp compile` - run commands `build:sprites`, `build:css`, `build:js`, `build:html`
- `gulp` - run command `start`, `compile` and watch file

## Сonfig
In config.json file specifies the path to the source