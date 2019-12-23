#### Install dependencies

```
npm i
```

for install packages

```
npm i
```

for instal frontend packages(u must be in "client folder")

```
npm run dev
```

for runnig backend + frontend

```
npm run front
```

for runnig only forntend

```
// eslint 
This configuration contains: 
-AirBnB package
-custom ESLint config
-custom Prettier config
-Husky
-Lint-staged

Attention!Pre-push checks!!!
You cannot push your code if it is not formatted.
If the checks fail then the push is not made and an error shown,
while if all checks pass the push is made as normal.

Before executing the command "git push", you must format the code using hot keys,
and then fix the remaining errors manually.

1.Enable eslint and prettier for WebShtorm:

- Settings - Languages & Frameworks - ESLint - Automatic ESLint configuration;

2.Add hotkeys(WebShtorm):

- Settings - Appearance & Behavoir - Keymap - Search:esLint 
- Fix ESlint Problems - right click - Add Keyboard Shortcut - (...add shortcut)

- Settings - Appearance & Behavoir - Keymap - Search:prettier 
- Reformat with Prettier - right click - Add Keyboard Shortcut - (...add shortcut)

3.git commit

4.git pull 

5.git checkout dev

6.Marge dev into your branch

7.npm install

Instructions of .eslintrc are explained below:

For enabling the rule. 0=off, 1=warn, 2=error

"extends": ["airbnb","airbnb/hooks","prettier"], - enable "airbnb","airbnb/hooks" + integration with "prettier" package, 
"plugins": ["prettier"], - enable "prettier" plugin,
"rules": {
    "func-names":  
    "no-console": This rule disallows calls to methods of the console object,
    "react/prop-types": PropTypes check,
    "no-dupe-args": This rule disallows duplicate parameter names in function declarations or expressions,
    "no-duplicate-case": This rule disallows duplicate test expressions in case clauses of switch statements,
    "no-debugger": This rule disallows debugger statements,
    "no-dupe-keys": This rule disallows duplicate keys in object literals,
    "react/button-has-type": -This rules enforces an explicit type attribute for all the button elements 
	and checks that its value is valid per spec (i.e., is one of "button", "submit", and "reset"),
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }] - The set of allowed extensions is configurable,
    "react/destructuring-assignment": ["error","always"] - By default rule is set to always enforce destructuring assignment.
    "padding-line-between-statements": ["error",{ "blankLine": "always", "prev": "const", "next": "return" }] - empty line before "return"  
      
  }

Instructions of .prettierrc are explained below:

{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "semi": true
}
npm install:

npm install eslint --save-dev
eslint --init
npm install prettier --save-dev
npm install --save-dev eslint-config-prettier eslint-plugin-prettier  - // Integrate Prettier with ESLint
npx install-peerdeps --dev eslint-config-airbnb
npm install --save-dev husky
npx mrm lint-staged
npm install --save-dev lint-staged

literature:

https://dev.to/thomlom/how-to-setup-eslint-and-prettier-for-your-react-apps-1n42
https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6
https://habr.com/ru/company/ruvds/blog/428173/

https://maxfarseer.gitbooks.io/redux-course-ru-v2/content/chapter1/eslint-i-prettier.html

```


    
