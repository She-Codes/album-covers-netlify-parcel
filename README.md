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

#### :key: Create .gitignore:

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
yarn.lock*
package-lock.json

# Parcel related files
dist/
.cache/
```

#### :key: Add, commit, and push to github





