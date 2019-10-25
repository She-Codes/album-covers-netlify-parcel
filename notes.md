# Project Steps :thinking:

#### :key: Create project directory:

`mkdir [directory_name]`

`cd [directory_name]`

#### :key: Create a package.json:

`yarn init -y`

#### :key: Parcel can be added as a global package, but install as a local dev dependency because app will be deployed on Netlify:

`yarn add parcel-bundler --dev`

#### :key: Add these scripts to package.json

```json
"scripts": {
  "dev": "parcel <your entry file>",
  "build": "parcel build <your entry file>"
}
```

#### :key: Initialize Git:
`git init`

#### :key: Create src folder:
`mkdir src`

#### :key: Create index.js:
`touch src/index.js`

#### :key: Create index.html file:
`touch index.html`

#### :key: Link main Javascript file:
```html
<html>
<body>
  <script src="./index.js"></script>
</body>
</html>
```

#### :key: Create Sass file:
`touch src/styles.scss`

#### :key: Import styles:
```javascript
import './styles.scss';
```

#### :key: Prevent `regeneratorRuntime` error when using `async` functions.  Configure the app's browser targets in `package.json`:
```json
"browserslist": [
  "last 1 Chrome versions"
],
```

#### :key: Point the Parcel dev server at the entry file:
`yarn dev`

#### :key: Install Netlify CLI globally:
`yarn global add netlify-cli`

#### :key: Create your Netlify instance:
`netlify init`

Netlify will open in the browser and ask you to grant access.

#### :key: Create a repository on Github

#### :key: Add the remote:
`git remote add origin [url]`

#### :key: Create .gitignore.  Make sure yarn.lock file is not included so that Netlify knows to use Yarn and not NPM:

```
# Local Netlify folder
.netlify

# Dependency directories
node_modules
  
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json

# Parcel related files
dist/
.cache/
```

#### :key: Add, commit, and then push to github:

`git push -u origin master`

#### :key: Deploy to Netlify using the Netlify browser interface.  Using the build command `yarn build` and publish directory: `dist`

#### :key: Add a netlify.toml with the path to your functions folder:
```toml
[build]
  functions = "./functions"
```

#### :key: Start the Netlify server:
`netlify dev # or ntl dev`

#### :key: Add a Netlify function:
`netlify functions:create`

Choose the 'js-token-hider' template and name it 'callSpotifyApi'.

This will create a javascript file for the function and a package.json and package-lock.json in functions/callSpotifyApi

#### :key: Prepare functions directory for Yarn:

The template you installed above has it's own node_modules folder, as well as a package.json and package-lock.json because each function can have its own independently managed dependencies.  

If your function does not have dependencies the node_modules and package files can be deleted. If dependencies are needed, because we know there can be a conflict when deploying to Netlify if it is not clear that Yarn is being used, be sure to delete the package-lock.json file in the function's folder.  

The `yarn` command will lay out your node_modules folder using Yarn’s resolution algorithm that is compatible with the node.js module resolution algorithm. When you run either `yarn` or `yarn add <package>`, Yarn will generate a yarn.lock file:

```
cd functions/callSpotifyApi
rm package-lock.json
yarn
```

#### :key: Change back to your root directory:
`cd ../..`

#### :key: If your function does have dependencies add 'netlify-lambda'  

`yarn add netlify-lambda`

Make sure that this is not installed as a dev dependency as this can cause issues per the [Netlify Lambda docs](https://github.com/netlify/netlify-lambda).

This will add Netlify Lambda to your master package.json file which is a small utility function for installing your function's dependencies either on your local machine or as part of your build commands.

By default it just runs on the functions folder specified in netlify.toml.

#### :key: Add a postinstall script in package.json (this isn't Netlify specific, it is part of how npm and Yarn work):
```json
"scripts": {
  "postinstall": "netlify-lambda install"
}
```

#### :key: Fire up Netlify Dev again which is the local proxy server embedded in the CLI:

`netlify dev # or ntl dev`

Your app will now be accessible at http://localhost:8888 and your function will be accessible at http://localhost:8888/.netlify/functions/callSpotifyApi. 







