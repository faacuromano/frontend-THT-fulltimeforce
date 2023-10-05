
<p align="center">
<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin: 10px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React Logo" width="130" height="130" />
</a>

<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin: 10px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="TypeScript Logo" width="130" height="130" />
</a>

<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin: 10px;">
  <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="130" height="130" />
</a>

  </a>  <h1 align="center"> React + TypeScript + Vite</h1>
</p>



## 📑 Description 

The goal of this test will be to create an app that shows git commit history on the same public
repository you are working on. You need to do well-stated and defined commits while working on this
test and regularly push them up. No need to make the app able to access a private repository.


<h1>💻 How to run</h1> 

## 1. Download

```bash
#clone repo
$ git clone https://github.com/faacuromano/frontend-THT-fulltimeforce.git

#change to repo directory
$ cd .\frontend-THT-fulltimeforce\
```

## 2. Installation

```bash
#install packages
$ npm install
```

## 3. Running the app

```bash
# development
$ npm run dev (⭐)
```

## License

Nest is [MIT licensed](LICENSE).



## <h1>Expanding the ESLint configuration</h1>

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
