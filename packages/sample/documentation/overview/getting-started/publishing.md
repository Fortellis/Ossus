---
title: Publishing
author: Jared Jones
last updated: today
---

Now that you have created a sample Ossus site with `create-ossus`, written your documentation, and customized it to your brands needs, you will want to be able to publish it so others can see your awesome documentation. Using the Next.js framework Ossus can easily export your whole site to static HTML so that you can host a lightning fast site easily.

## Building

To get started you need to build your site, simply run:

```bash
npm run build
```

If you don't want to create a fully static version of your site, you can run a production grade SSR app with:

```bash
npm run start
```

## Exporting

If your goal is to get a static site you have one extra step, to run:

```bash
npm run export
```

This will export your site as static HTML files to the `/out` directory. Creating a static site will give you fast loads, great SEO, and the ability to host cheaper. Here are a couple of great hosting platforms that allow you to host static sites:

- [Github Pages](https://pages.github.com/)
- [Now](https://zeit.co/now)
- [Netlify](https://www.netlify.com/)
- [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)

If you want to see your static site locally you can use the npm package [serve](https://www.npmjs.com/package/serve):

1. Download `serve` globally: `npm install -g serve`
2. Change into the `/out` directory
3. Run `serve`
4. A static version of your site is now avaliable at <http://localhost:5000>