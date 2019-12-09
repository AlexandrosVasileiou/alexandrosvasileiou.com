---
title: "How to implement multilingual support for Gatsby site"
author: "Alexandros Vasileiou"
publishedDate: "2019-12-08"
---

### Multilingual Support for Gatbsy Site

**Introduction:**

This is a fast and easy approach to multilingual support for Gatsby Sites. It is based in creating copies of all the pages for each language you want to have on your website.
I use this approach for situations where I need to support 2-3 different languages in total. This may not be the best option for websites that feature many languages. If you're in this category, I would highly recommend reading [Kalin's](https://kalinchernev.github.io/multilingual-gatsbyjs) post on the same subject

In our case, we will use the `gatsby-plugin-intl` as well as a few components to create the base for multilingual support.

**Step 1:** Install and configure the `gatsby-plugin-intl`

In your terminal use the command:
`npm install --save gatsby-plugin-intl`

Then, edit your plugins array in the `gatsby-config.js` file to include the following settings:

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      // language JSON resource path
      path: `${__dirname}/src/intl`,
      // supported languages. You can adde as many as you want
      languages: [`en`, `de`],
      // language file path
      defaultLanguage: `en`,
      // option to redirect to `/en` when connecting `/`
      redirect: true,
    },
  },
]
```
**Step 2:** Create the `intl` folder and the language json files

Inside your `src` folder, create a new folder called `intl`. You can name this folder anything you like, just make sure to also change the path name in your `gatsby-config.js` file.

Inside your `intl` folder, create one json file for each of your supported languages. In my case:

`en.json` and `de.json`

Your language json files should have a key value pair format like the following:

```json
// en.json
{
    "title": "My Website",
    "description": "A multilingual website!",
    "test_link": "This is a test link"
}
```

```json
// de.json
{
    "title": "Meine Webseite",
    "description": "Eine mehrsprachige Webseite!",
    "test_link": "Dies ist ein Testlink"
}
```
In this files, you will have all your key value pairs. The key needs to be the same in both files and the value will change depending on the language you sellect.
But how do we switch between languages?
Let's create an ugly component for this case!

**Step 3:** Create the `language.js` component

This is the component that will allow us to trigger the language switch. I will implement a very quick and dirty component here, but you can go as crazy with CSS and dropdowns as you want!
The core concept is that we change the language key and let Gatsby know that we now want to see the same content in a different language.

In your components folder, create a new file called `language.js` (or whatever sails your boat).

```js
// /src/components/language.js
import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  de: "Deutsch",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#666666` : `#999999`,
                marginRight: `1.3rem`,
                textDecoration: `none`,
                cursor: `pointer`,
                fontSize: `.9rem`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
```

I imported the above component to my header component to serve as an "extension" of my navbar in order to be able to test my results.

**Step 4:** Import the plugin components in the pages you want to translate

- Import the `useIntl` and `Link` (methods?) (components?) from the `gatsby-plugin-intl`

```js
import { useIntl, Link } from "gatsby-plugin-intl"
```
The above can replace your { Link } import from `gatsby` itself

- Store the `useIntl()` method in a const for easier reference. Then use the methon in the following way:

```js
// src/pages/index.js
import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
    // Here the "title" is fetched dynamicly using graphql in the head.js component 
      <Head title={intl.formatMessage({ id: "title" })} />
      <h1>{intl.formatMessage({ id: "description" })}</h1>
      <Link to="/about">
        {intl.formatMessage({ id: "test_link" })}
      </Link>
    </Layout>
  )
}

export default IndexPage
```

**Step 5:** Test your work

Restart the gatsby server if you haven't already and test your work by clicking the language buttons in the navbar.

**Expected Results:**
- The url changes between: `yoursite.com/en` and `yoursite.com/de`
- The `title`, `p` and `link` tags change their contents depending on what you've imported in your translation files.