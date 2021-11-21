# Github Portfolio 👨🏽‍💻

O projeto foi gerado em [Angular CLI](https://github.com/angular/angular-cli) na versão 8.0.6.

Neste projeto, será construido um aplicativo baseado no perfil do usuário github.

Usaremos a `CLI Angular` para criar: 
- o `scaffold` de um aplicativo Angular que interaja com a API do GitHub.
- buscar dados específicos do usuário. 
- também usaremos a biblioteca `CSS do Bootstrap` para estilizar nosso aplicativo e criar uma bela interface de usuário.

Depois de criar nosso aplicativo Angular: 
- vamos transformá-lo em um aplicativo renderizado do lado do servidor usando Angular Universal. 

Veremos como instalar e configurar o Angular Universal e aprenderemos como processá-lo previamente durante o tempo de compilação. 

Em seguida, configuraremos nosso aplicativo para ser renderizado corretamente usando SEO nas plataformas sociais mais populares. 

Por fim, descobriremos como usar a biblioteca de pré-inicialização para reproduzir eventos do navegador que não são totalmente suportados em aplicativos SSR.

## Construindo um aplicativo Angular com a API GitHub

GitHub contém uma API: 
- que podemos usar para buscar várias informações sobre o perfil de um usuário GitHub. 
- o aplicativo Angular que estamos construindo se comunicará com a API do GitHub e exibirá um breve portfólio para nosso perfil do GitHub. 
  
Nosso aplicativo consistirá nos seguintes recursos:

- Dashboard : a página de destino do aplicativo e exibirá um resumo de nosso perfil no GitHub.
- Informações : Isso exibirá informações pessoais sobre nós.
- Repositórios : Isso exibirá uma lista de nossos repositórios públicos .
- Organizações : isso exibirá uma lista de organizações

GitHub das quais somos membros.Nota importanteA saída resultante de cada recurso exibido nas capturas de tela deste capítulo será diferente de acordo com seu perfil no GitHub.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

