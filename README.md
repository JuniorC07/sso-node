
# Documentação de desenvolvimento:


**Rodando projeto**

Dependências:

```jsx
yarn
```

Start projeto:

```jsx
yarn dev
```

Testes:

```jsx
yarn test
```

Testes assistidos:

```jsx
yarn test:watch
```

### Padrão de Commits

Será utilizado o <a target="_blank" href="https://commitizen-tools.github.io/commitizen/">Commitizen</a> neste projeto para padronizar as mensagens de commit.
Para utilizar é bem simples:

```bash
# Para adicionar todos os arquivos modificados
$ git add .

# Este comando vai executar o commitizen atravéz de alguns scripts
$ yarn commit
```

Por padrão, existem 7 campos a serem preenchidos para manter essa padronização sendo eles:

- Tipo de commit* (fix/feat/refactor etc...)
- Short description* (É uma descrição curta sobre o commit.)
- Longer description (É uma descrição longa sobre o commit.)
- Breaking changes (É um indicador se este commit afeta outras partes do sistema)
- Issues this commit closes (Tarefa que o commit fecha)

Depois disso é só fazer o `git push` enviar o commit para a branch.


# Jest (Testes):

- Todos os testes estão configurados com Jest.
- Jest é o principal frame de teste do mercado, com diversas referencias além de uma excelente <a target="_blank" href="https://jestjs.io/">documentação</a>.

# Husky:

- Graças ao Husky, a fim de reforçar os padrões de projeto o commit só é permitido após a correção de qualquer problema relacionado a esses padrões, tais como testes, warnings e outros. 

# Eslint 

- Usado para seguir com a formatação do código e organização dos arquivos.
