## pub-pkg-font-source-sans-pro
- Enables [Source Sans Pro](https://www.adobe.com/products/type/font-information/source-sans-pro-readme.html) for any [pub-server](https://github.com/jldec/pub-server) design.
- Serves fonts to browsers in woff and eot formats.


### Installation
1. `npm install --save pub-pkg-font-source-sans-pro`
2. add `pub-pkg-font-source-sans-pro` to your pub-config `pkgs`
3. use the font-family in your CSS E.g.

```css
body {
  font-family:"Source Sans Pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```


### CSS
This package will inject a link pointing to [/css/source-sans-pro.css](/css/source-sans-pro.css) into your main template.

When you generate to output, the css and font files will be included under `/css` and `/css/fonts`.

### Why distribute fonts with your website?
- to work offline
- to reduce the number of 3rd parties visitors to your site will need to trust.

The drawback is that the fonts are less likely to be in readers' cache, and will consume bandwidth.

Including only **eot** and **woff** formats makes the site lighter to host, without significantly reducing browser platform coverage.

### npm dependencies
Font files are npm installed via [npm-font-source-sans-pro](https://www.npmjs.com/package/npm-font-source-sans-pro)


### Font Attribution
Source Sans Pro is a sans serif typeface created by Paul D. Hunt for Adobe Systems. It is the first open-source font family from Adobe, distributed under the SIL Open Font License.
