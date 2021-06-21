# nlw-06-together

## Aula 01

	- Criando o projeto - `yarn create react-app letmeask --template typescript`
	
	- Abrir o projeto no VS Code - Digite `code .` dentro da pasta do projeto
	
	- Remover o arquivo README.md
	
	- Na pasta public, remover tudo menos o index.html
	
	- Na pasta src, deixar apenas os arquivos: App.tsx, index.tsx e react-app-env.d.ts
	
	- Arquivo index.html:
		```html
		<!DOCTYPE html>
		<html lang="en">

		<head>
		  <meta charset="utf-8" />
		  <meta name="viewport" content="width=device-width, initial-scale=1" />

		  <title>Letmeask</title>
		</head>

		<body>
		  <noscript>You need to enable JavaScript to run this app.</noscript>
		  <div id="root"></div>
		</body>

		</html>
		```
		
	- Arquivo index.tsx:
		```typescript
		import React from 'react';
		import ReactDOM from 'react-dom';
		import App from './App';

		ReactDOM.render(
		  <React.StrictMode>
		    <App />
		  </React.StrictMode>,
		  document.getElementById('root')
		);
		```
		
	- Arquivo App.tsx:
		```typescript
		function App() {
		  return (
		    <h1>Hello World</h1>
		  );
		}

		export default App;
		```
	
	- Abra o terminal dentro do VS Code: ctrl+shift+´ ou no Menu Terminal -> New Terminal
	
	- Inicie a aplicação: `yarn start`
	
	- Export Default vs Named Export: Prefira sempre exportar o componente pelo "Named Export", pois se você mudar o nome do componente, em todas as importações irá dar erro de compilação. Ou seja, fica mais difícil de errar.
	
		- Export Default:
			```typescript
			function Button() {
			    return (
				<button>Clique aqui</button>
			    )
			}

			export default Button;
			```
		- Import com Export Default: `import Button from './components/Button'`
		
		- Named Export:
			```typescript
			export function Button() {
			    return (
				<button>Clique aqui</button>
			    )
			}
			```
		
		- Import com Named Export: `import { Button } from './components/Button'`
	
	- Propriedades: Todo componente tem a propriedade children
		```typescript
		type ButtonProps = {
		    text?: string;
		    children?: string;
		}

		export function Button(props: ButtonProps) {
		    return (
			<button>{props.children || props.text || 'Default'}</button>
		    )
		}
		```
		```typescript
		import { Button } from './components/Button'

		function App() {
		  return (
		    <div>
		      <h1>Hello World</h1>
		      <Button text="Botão 1" />
		      <Button />
		      <Button>Clique aqui</Button>
		    </div>
		  );
		}

		export default App;
		```
	
	- Estado: Sempre que alguma informação muda em um componente, essa informação é encontrada no estado.
		```typescript
			import { useState } from "react";

			export function Button() {
			    //let counter = 0;

			    const [counter, setCounter] = useState(0);

			    function increment() {
				//counter++;
				setCounter(counter + 1);
				//ver video do maikao sobre closer no javascript para entender pq o valor de counter só aparece 					atualizado no próximo clique
				console.log(counter);
			    }

			    return (
				<button onClick={increment}>
				    {counter}
				</button>
			    )
			}
		```
		
		```typescript
			import { Button } from './components/Button'

			function App() {
			  return (
			    <div>
			      <h1>Hello World</h1>
			      <Button />
			      <Button />

			    </div>
			  );
			}

			export default App;
		```
		
	- Firebase:
		- Instalação: `yarn add firebase`
		- Criar aquivo /src/services/firebase.ts. A pasta service serve para arquivos de configuração para serviços externos
		- Configuração da integração no arquivo firebase.ts:
			```typescript
			import firebase from 'firebase/app';

			import 'firebase/auth';
			import 'firebase/database';

			const firebaseConfig = {
			    apiKey: process.env.REACT_APP_API_KEY,
			    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
			    databaseURL: process.env.REACT_APP_DATABASE_URL,
			    projectId: process.env.REACT_APP_PROJECT_ID,
			    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
			    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
			    appId: process.env.REACT_APP_APP_ID
			};

			firebase.initializeApp(firebaseConfig);

			export const auth = firebase.auth();
			export const database = firebase.database();
			```
		- Variáveis de ambiente
			- Na raiz do projeto, criar o arquivo .env.local
			- Para que as váriaveis de ambiente sejam visiveis no create react-app, elas tem que iniciar com REACT_APP_
			```
			REACT_APP_API_KEY=""
			REACT_APP_AUTH_DOMAIN=""
			REACT_APP_DATABASE_URL="https://..."
			REACT_APP_PROJECT_ID=""
			REACT_APP_STORAGE_BUCKET=""
			REACT_APP_MESSAGING_SENDER_ID=""
			REACT_APP_APP_ID=""
			```
		- Importando no arquivo index.tsx: `import './services/firebase';`
		- Pare e inicie novamente a aplicação: `yarn start`
		
	- código da aula 01: #together


