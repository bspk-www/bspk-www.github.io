# BSPK website

## Branches
- `main` - result static pages, branched used by GitHub Pages
- `source` - source code for development
- `backup` - backup branch for previous version of the website

## Local development

1. Go to `source` branch
2. `cd docs`
3. `yarn install`
4. After packages installed run `yarn dev` to serve development page on localhost
5. To deploy your changes run `yarn deploy` to run bash script which will build static version and push it to `main` branch automatically

## Tech stack
- Vuepress - [https://vuepress.vuejs.org/]
- Formspree - [https://formspree.io/]
- GitHub Pages for deploy