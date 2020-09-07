<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://github.com/awaketogether">
    <img alt="Awake" src="https://user-images.githubusercontent.com/2495908/82945138-b5152d80-9f9c-11ea-8cdc-c16a6c02e0f4.png" width="250" />
  </a>
</p>
<h1 align="center">
    <a href="https://awaketogether.netlify.app/">Awake Static Site</a>
</h1>

## 🚀 Quick start

**Start Developing**

Use the Gatsby CLI to launch the site's dev environment.

    ```shell
    gatsby develop
    ```

The site will now be running at `http://localhost:8000`!


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).


10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.


## 📦 CI/CD

This site will automatically be tested and served with **Netlify**.

**Integration**

To verify the integrity of new source code, before being able to merge, every new pull-request is tested and a snapshot build is generated.

**Delivery**

When updates are detected on the **master** branch, netlify will rebuild and serve a new version of the site.

**E2E Testing**

End to End testing is done with Cypress, all the tests are in the /cypress/ folder.