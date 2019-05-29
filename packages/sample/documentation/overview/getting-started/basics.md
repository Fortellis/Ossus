---
title: Basics
author: Jared Jones
last updated: today
---

In your Ossus documenation site you have a `/pages`, `/config`, `/src`, and a `/documentation` directory. The overall structure should look like this:

```text
root
|-- config
|-- documentation
| |-- example-page
| | |-- example-section
| | | |-- example.md
| | | |-- index.json
| | |-- index.json
| |-- index.json
|-- pages
| |-- _app.js
| |-- doc.js
| |-- index.js
|-- src
| |-- getDoc.js
|-- static
```

## Documentation Structure

The documentation $[testEnv] of the site is held under the `/documentation` directory and requires some specific structure to ensure that all of the automagic greatness happens when you run the site.

The sites structure is dynamically created by the structure of your documentation *(any files under `/documenation`)*. It is important to remember this because Ossus uses automated scripts to generate your file structure, so if a file falls where it isn't supposed to be it won't be picked up. To give you more fine grained control over the layout of the site each folder under documentation must have an `index.json`. This file allows for you to determine the order of files and folders and the human readable names that will be displayed in the table of contents and the breadcrumbs. It's also important to note that if a file or directory is not defined in your `index.json` file it won't get displayed on the site.

Your site structure is controlled by three main concepts, and the `index.json` will be just a bit different for each one:

### Pages

Pages are top level folders that define a single page on your site that can contain multiple sections and documents about a topic.

There is only one `index.json` for the pages and it is directly under `/documentation`. Here you can add meta-data like 'label' to the pages which will give them human readable names.

```js
{
    "developer-docs": {
        "label": "Developer Docs"
    },
    // ... any other pages you want
}
```

### Sections

Inside of each page there are sections which are the folders nested directly underneath the page folder. These sections have no content themselves but allow us to divide the content displayed to the user in the table of contents.

In the sections the order matters because they will be displayed in the table of contents so we will define the order we want for the documents. If we don't define this order sections will appear in alphabetical order.

```js
{
    "order": [
        {
            "route": "overview", // MUST COORESPOND TO A SECTION FOLDER NAME
            "label": "Overview"
        },
        {
            "route": "concepts",
            "label": "Core Concepts"
        }
    ]
}
```

### Documents

Lastly there are the documents, documents are markdown files (.md extension) and are dynamically rendered into HTML on the documentation site.

Like the sections the order of the documents on the page is very important so we will define the order we want. In this case though we only need to put the name of the document because we can define things like title, author, and lastupdated in the frontmatter.

```js
{
    "order": [
        "getting-started.md", // MUST COORESPOND TO A DOCUMENT FILE NAME
        "some-other-doc.md"
    ]
}
```

## Inside a .md file

Ossus supports all avaliable [markdown](https://en.wikipedia.org/wiki/Markdown) syntax and HTML. If you need help with the syntax used to style markdown documents check out this handy resource: [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/). The only thing Next Docs suggests that you do is avoid h1 (#) tags. An h1 is automatically generated from the document title and the right menu that is automatically generated based on the content of the doc expects h2 to be the highest h tag on the page. H1 tags won't break the page but they will display as on the same level as h2's in the menu.

If you want to link images that you upload, simply add them to the `static/` directory and reference them the same as external images: `![image](static/image.jpg)`

Ossus also supports a special syntax called *frontmatter* that allows for you to define document metadata like:

- title
- author
- last updated date

Define it at the top of your markdown files like so:

```yaml
---
title: Page Title
author: Your Name
last updated: 1/9/1996
---
```
