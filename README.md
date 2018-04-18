# My Portfolio Site

[https://joosep.xyz](https://joosep.xyz)

My portfolio for displaying my notable projects. Recently migrated to use
[Gatsby](https://www.gatsbyjs.org/) instead of Jekyll.

## Set up

```bash
# Clone the project
git clone https://github.com/JoosepAlviste/JoosepAlviste.github.io.git -b gatsby

# Install dependencies
yarn
```

You could also use `npm install`, but there is no `package-lock.json` file
provided, since the project uses [Yarn](https://yarnpkg.com/).

## Start

Start the development server:

```
yarn develop
```

This should output the port the server runs on.

## Deploying

The project is hosted on GitHub Pages, on the `master` branch. This branch needs
to be `master`, because the _user_ page is used, which does not support the
`gh-pages` branch.

The page gets automatically deployed (using [Travis CI](https://travis-ci.org/))
whenever something is committed and pushed to the `gatsby` branch. However, if a
manual deployment is needed, the following command can be run:

```
yarn deploy
```

This builds the project into the `public/` folder and uses the `gh-pages` plugin
to deploy the built project into the `master` branch. This updates the live site
automatically.
