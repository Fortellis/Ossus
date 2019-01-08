---
title: Getting Started
author: Jared Jones
last updated: today
---

## Welcome to Ossus!

Ossus is a documentation for getting your documentation off the ground quickly without sacrificing customization and power.

### Tooling

At it's core Ossus is built around [Next.js](https://nextjs.org/) a powerful Javascript framework for React. We chose Next.js for its built in routing and server rendering. We were tired of handling our documentation in the mindset of a traditional React app, and loading in our documentation through requests. With Next we build the documentation directly into the site where it is rendered out by the server reducing the load and response times for our end users. Next also gives us built in prefetching, so our content is already there when the user needs it without impacting the intial page load.

### Installation

Ossus can be set up easily with the `create-ossus` package. `create-ossus` automatically generates a sample app with boiler plate that can get you writing documentation immediately.

1. Make sure you have [Node](https://nodejs.org/en/) installed on your machine
2. Create a new directory on your computer (ex: `my-docs`) and enter that directory on the command line
3. Run the Ossus boilerplate script `npx create-ossus`
4. Install the required packages `npm install`
5. Run the site with `npm run dev`

Once you have it started, go to <http://localhost:3000> to view your new documentation site. Now that the site is running any changes you make to files will automatically cause the site to reload. However if you add, remove, or rename documentation files you may need to run the site again.