# Ares Designer

Minimalist and Elegant theme for Ghost. Demo @ https://carloscaballero.io

[<img src="https://i.postimg.cc/fWY2QX89/ghost.png">](https://carloscaballero.io)

- [Ares Designer](#ares-designer)
  - [Introduction](#introduction)
  - [Authors](#authors)
  - [Features](#features)
  - [Installation](#installation)
  - [Setup](#setup)
  - [Development and Customization](#development-and-customization)
  - [Screenshots](#screenshots)
  - [Roadmap](#roadmap)
  - [Are you using **Ares Designer**?](#are-you-using-ares-designer)
  - [Related](#related)
  - [License](#license)

---

## Introduction

**Ares Desginer** is a theme for Ghost built from scratch which providing a set of interesting features that are aligned with minimalist design style.

## Authors

This theme has been developed by [Alejandro Torres](https://github.com/torresalejandro) and Carlos Caballero initially for the [CarlosCaballero.io](https://carloscaballero.io) blog. If you want to contribute to improve this blog, do not hesitate to do PR and we will be happy to improve this project!

### Features

- Totally write using HTML5 and CSS3.
- Mobile-First Design Approach.
- Fully Responsive layout.
- ITCSS architecture to structure your SASS project.
- Use header images in cards.
- Automatic figcaption generation from image alt tags (and image).
- Improved development workflow with npm's scripts
- Improved responsive and mobile experience.
- Improved SEO Content with meta tags.
- Multiaccount support.
- Estimation about the time of reading.
- Series blog posts.
- FontAwesome implemented for easy use of icons fonts
- Highlight.js integrated for Syntax highlighting - [Highlight JS](http://highlightjs.org).

You can see a [demo](https://carloscaballero.io) in my own blog. Also you can check the [ITCSS architecture](https://carloscaballero.io/understanding-itcss-real-case-using-itcss-https-carloscaballero-io) to view how it looks.

## Installation

1. Clone the repo.
2. Compress the contents of this repo in a Zip file.
3. Upload your Zip file via the Ghost admin panel.
4. Switch your theme to this theme.
5. Have fun.

## Setup

All configurable files are located in ghostium/partials/custom.

post.hbs
Configurable javascript identifiers.

disqus_shortname: Your Disqus unique identifier

Instead, you need to paste one into the `Blog Header` in the `Code injection` of your Ghost installation:

```html
<link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-UID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-UID');
</script>
```

And the `Blog Footer`:

```html
<link
  href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
  rel="stylesheet"
/>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js"></script>
<script>
  hljs.initHighlightingOnLoad();
</script>
<link
  rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/tomorrow-night-eighties.min.css"
/>
```

## Development and Customization

You can configure your template by editing the `settings.scss` file and executing the stylesheet generation script: `` `npm run prod```.

Finally, compress the entire template directory and upload it using the Ghost control panel.

The content of `settings.scss` file is as follows:

```css
@font-face {
  font-family: 'Source Sans Pro';
  src: url(../../font/Source_Sans_Pro/SourceSansPro-Regular.ttf);
}

@font-face {
  font-family: 'Ailerons';
  src: url(../../font/Ailerons-Regular.ttf);
}

@font-face {
  font-family: 'Fira Mono';
  src: url(../../font/Fira_Mono/FiraMono-Regular.ttf);
}

$colorPrimary: #ff9617;
$colorSecondary: #4078c0;
$colorFontsDark: #2c2c2c;
$colorFontsMedium: rgba(38, 41, 58, 0.6);
$colorFontsLight: #fafafa;
$colorLight: #f6f9fa;
$colorMedium: #201f2d;
$colorDark: #26293a;
$colorShadow: rgba(0, 0, 0, 0.4);
$colorSeparateMedium: rgba(250, 250, 250, 0.6);
$colorSeparateDark: rgba(0, 0, 0, 0.2);
$colorListMedium: rgba(38, 41, 58, 0.04);

$fontType: 'Source Sans Pro', sans-serif;
$fontTypeTitle: 'Ailerons', sans-serif;
$fontTypeCode: 'Fira Mono', monospace;

$pcFormatBig: 1920px;
$pcFormatStandard: 1770px;
$pcFormatSmall: 1135px;
$pcFormatHabitual: 1366px;
$pcFormatHD: 1190px;
$pcFormatUltraHD: 1443px;
$mobileFormatBig: 860px;
$mobileFormatStandard: 640px;
```

## Screenshots

[<img src="https://i.postimg.cc/fWY2QX89/ghost.png">](https://carloscaballero.io)
[<img src="https://i.postimg.cc/NG6fZJmv/mobile01.jpg">](https://carloscaballero.io)

## Roadmap

- A good 404 page error.
- Search support.
- Loading progress state for each page.

## Are you using **Ares Designer**?

If you're using **Ares Designer** on a live site, I'd love if you'd send me a message with the URL. I enjoy seeing the customizations and implmentations taking place all over the world. Regardless, thanks for using **Ares Designer**!

## Related

- [ITCSS architecture](https://carloscaballero.io/understanding-itcss-real-case-using-itcss-https-carloscaballero-io)
- [ITCSS: Scalable and maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).
- [How to Organize your Styles with ITCSS](https://blog.codeminer42.com/how-to-organize-your-styles-with-itcss-3787cbc6dcbf).
- [Manage large CSS projects with ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528).
- [CSS at trivago — Part 1: Structure and ITCSS](https://medium.com/@pistenprinz/css-at-trivago-part-1-structure-and-itcss-52f63ed557ca).
- [Intro to ITCSS for Web Developers](https://www.hongkiat.com/blog/inverted-triangle-css-web-development/).

## License

MIT © [Carlos Caballero](carloscaballero.io)
