### How to link between Gatsby pages:

**Intro:** This link is only used to link between internal pages in Gatsby. It prevents the "flashing" that you get due to a refresh. With the following method, Gatsby preloads the pages that have the <Link> element.

**Step 1**
`import { Link } from 'gatsby'`

**Step 2**
`<Link to="/path">Link destination</Link>`

**Note:** In case you want to link to an external website, use the regular ancor link provided by HTML: `<a href="/path">Link destination</a>`

### How to create Shared Page Components

**Intro:** Similar to React, you create your shared components into separate files and then import them to the pages that you need them.

**Step 1:**
Create a new folder under src/ named components: `~/project_name/src/components`

**Step 2:**
In this folder, create your component file(s), example: `footer.js`

**Step 3:**
Create your actual component inside your file:

```js
import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <p>Copyright, CMV 2019</p>
      <Link to="/privacy">Privacy Page</Link>
      <Link to="/imprint">Imprint Page</Link>
    </footer>
  )
}

export default Footer
```

Make sure you export it by:
```js
export default Component_name
```

**Step 4:**
Go to the page you want to import your component at and import it by:
```js 
import Footer from '../components/'
```

**Step 5:**
Render your component anywhere you need it in the page where you imported it:
```js
const IndexPage = () => {
  return (
    <div>
      <h1>This is my imported component</h1>
      <Footer />
    </div>
  )
}
```

### How to create Gatsby Page Layouts

**Intro:** This is a good technique to make your code cleaner

**Step 1:**
Create a new file inside the `components` folder. In our example we call it `layout.js`

**Step 2:**
Create a functional react component with `props` as the argument and export it:

```js
import React from "react"

const Layout = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Layout
```

**Step 3:**
Add the `{props.children}` expression in the body of the `div` that you're rendering. In this way, you will be able to pass in unique content in each (child) page where the layout is used

**Step 4:**
Import the components you want to include in your layout, in our case `Footer` and `Header`, and render them inside the `div` in a way that makes sense for your website.

```js
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
```

**Step 5:**
Import the Layout component in any page that you want to use it. In the `return` function, render the Layout and anything you put within it, reflects the `{props.children}` expression

```js
import React from "react"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
    <h1>This is the Home Page body</h1>
    </Layout>
  )
}

export default IndexPage
```
### How to start with Styling

**Intro:**
This leans more toward the technical side than the design side of things

**Step 1:**
Create a new folder under `src` named something like `styles`

**Step 2:**
Create a `.css` or `.scss` file in that folder (for example `index.css`) and write your css

**Step 3:**
Import the css file to the files you want to affect by including the following in the beginning of the file:
```js
import '../styles/index.css'
```
### How to install and configure plugins

**Intro:**
Some plugins require configuration while others don't. For more information, read the documentation of each individual plugin.

**Step 1:**
Go to Gatsby's site and under the "Plugins" tab search for your plugin.

**Step 2:**
Run `npm install {plugin_name_according_to_gatbsy_site} {may_require_more_npm_modules}` to install the wanted plugin. For example: `npm install gatsby-plugin-sass node-sass`

**Step 3:**
Create `gatsby-config.js` file in the root folder of the project (if it doesn't exist).
Configure the plugins array to include the newly installed plugin. For example:
```js
module.exports = {
  plugins: [
    'gatsby-plugin-sass'
  ]
}
```
### How to install and configure AirBnB ESlint and Prettier in Gatsby Website

**Intro:**
Best if used with a very pure gatsby template, without any configuration

**Step 1:**
- Install the `gatsby-plugin-eslint` by using the command:
`npm install --save-dev gatsby-plugin-eslint`
- Configure the plugin by adding the following in the `gatsby-config.js` file:
```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        exclude: /(node_modules|.cashe|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: true, //this is usually false on default, but I prefer to handle the errors first
        },
      },
    },
  ],
}
```
**Step 2:**
Install the following npm modules:
`npm install --save-dev eslint eslint-config-airbnb eslint-config-prettier eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier`

**Step 3:**
- Create a `.eslintrc.json` file in the root folder of the project and add the following:
```js
{
    "root": true,
    "extends": [
        "airbnb",
        "plugin:prettier/recommended"
    ],
    "settings": {
        "import/core-modules": [
            "gatsby"
        ]
    },
    "globals": {
        "graphql": true
    },
    "rules": {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                "components": [
                    "Link"
                ],
                "specialLink": [
                    "to"
                ],
                "aspects": [
                    "noHref",
                    "invalidHref",
                    "preferButton"
                ]
            }
        ]
    }
}
```
- Create a `.eslintignore` file in the project root folder and add the following:

```js
/node_modules/**
/public/**
```
- Create a `.prettierrc` file in the project root folder (if there is not already one) and add the following:

```js
{
  "endOfLine": "lf",
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```
- Create a `.prettierignore` file in the project root folder (if there is not already one) and add the following:

```
.cache
package.json
package-lock.json
public
```
**Step 4:**
Install the ESlint and Prettier plugins for VS Code and leave the default configurations. Then create a `.editorconfig` file in the project root folder and add the following:

```js
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```
**Step 5:**
Run your project and add rules to the errors or warnings you want to ignore

### How to use CSS Modules to style components

**Intro:**
The goal here is to explicitely style specific elements of each components and avoid accidental global styling issues

**Step 1:**
Create a new file in the `~/src/components/` directory called, for example, `header.module.scss`

**Step 2:**
Write your css in that file by creating named classes which then you'll use to target specific elements. (Example: use a name such as `link` instead of `a` -> ancor tag (global)

**Step 3:**
Import the scss file in the js file where you want to target elements for styling:

`import headerStyles from "./header.module.scss"`

Please note: The naming of the import, in this case `headerStyles` is not important. We can name it however we want

**Step 4:**
In your component, find the element you want to style, add the `className` attribute to it and pass a JavaScript expration like that:

```
<Link className={headerStyles.link} to="/">Home</Link>
```
