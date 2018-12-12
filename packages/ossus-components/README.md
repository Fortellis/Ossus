# Ossus Components

Ossus components are a set of default components you can use when creating an Ossus documentation site. These components are configurable based on the default theme configuration defined for Ossus. However if the default theming is not powerful enough for your needs you can create your own version of these components and use them in your Ossus site!

## Ossus Component APIs

Here are the APIs you need to implment for each of the components to keep your application working exactly as expected:

### Breadcrumbs

Breadcrumbs are the navigation displayed above the documentation that allow you to quickly jump back to the Home ('/') or to the top of the Documentation page (to the first document on a page).

The breadcrumbs can be implemented in any way and aren't important to the functioning of an Ossus site so feel free to replace them with however you want to do breadcrumbs!

#### Removing Breadcrumbs

Breadcrumbs are an optional component for the layout of Ossus. If you decide you don't want to use breadcrumbs just remove the component from the `doc.js` page and set the theme variable `breadcrumbs` to 0. This will ensure that any components basing height or position based off of the breadcrumbs will display normally.

### Footer

No other pieces of Ossus rely on the Footer so you can modify or remove at will!

### Header

The header can be implemented in any way and aren't important to the functioning of an Ossus site so feel free to replace them with however you want to do breadcrumbs!

#### Removing Header

The header is an optional component for the layout of Ossus. If you decide you don't want to use a header just remove the component from the `_app.js` page and set the theme variable `header` to 0. This will ensure that any components basing height or position based off of the header will display normally.

### Layout

### MarkdownComponents

### Menu

### Paging

The paging component controls the links to the previous and next document within a page.

#### API

The paging component takes in the nextDoc and prevDoc as well as the current page these are important for creating links in Ossus. The signature of nextDoc and prevDoc looks like this:

```json
{
    "section": "section-path",
    "doc": "doc-path",
    "label": "Document Title"
}
```

You can create a link using the Routes from the ossus package like so:

```js
import { Routes } from 'ossus';

// Where targetDoc is either prevDoc or nextDoc
function LinkComponent({page, targetDoc}) {
    return (
        <Routes.Link route='docs' params={{
            page: page,
            section: targetDoc.section,
            doc: targetDoc.doc
        }}>
            <a>{targetDoc.label}</a>
        </Routes.Link>
    )
}
```

### ScrollToTop

### TableOfContents