# RequireJS-Scaffold
  A scaffold for creating **web applications user interface** with RequireJS as the js module manager.
  The JavaScript host environment here is: **web browser**. The purpose of this scaffold as well, is to find ways to write web applications front end without Webpack, Gulp or any other buldle tools.

# Branches
1. master <br/>No specific purpose. Not even merge with any other branches.
2. ES6-Modules<br/>Just ES6 native modules with import/export syntax
3. RequireJS-Modules<br>Make use of require.js and r.js to manage js modules in the browser environment
4. RequireJS-with-ReactJS<br>Use require.js and r.js to work with ReactJS ecosystem.

# P.S.
  Since requirejs does not depend on NodeJS, there is no need of npm, yarn,<br>
package.json and so on... In fact, requirejs exists before them.
  So in this scaffold the NodeJS facilities are only for eslint, babel and<br>
http-server, which are all devDependencies, and there are no (NodeJS)dependencies.