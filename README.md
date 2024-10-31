# TkBook Website

This documentation website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator created by Facebook/Meta that makes it easy to maintain open-source documentation.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are eflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

After making changes to the documentation, follow these steps to deploy:

1. Commit your changes to the main branch:
```bash
git add .
git commit -m "your commit message"
git push origin main
```

2. Deploy to GitHub Pages:
```bash
$ npm run deploy
```

> **Note**: Before deploying, make sure you have:
> - Set up your GitHub authentication
> - Configured the `docusaurus.config.js` with the correct `organizationName` and `projectName`
> - Have permissions to push to the repository

The deploy command will automatically build the website and push the changes to the `gh-pages` branch, making your updates live on the TkBook documentation site.
