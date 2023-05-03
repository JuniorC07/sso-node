# Development Documentation:

**Running Project**

Dependencies:

```jsx
yarn
```

Start project:

```jsx
yarn dev
```

Tests:

```jsx
yarn test
```

Watch Tests:

```jsx
yarn test:watch
```

### Commit Standard

The <a target="_blank" href="https://commitizen-tools.github.io/commitizen/">Commitizen</a> will be used in this project to standardize commit messages. To use it is quite simple:

```bash
# To add all modified files
$ git add .

# This command will execute commitizen through some scripts
$ yarn commit
```

By default, there are 7 fields to be filled in order to maintain this standardization, which are:

- Commit type* (fix/feat/refactor etc...)
- Short description* (A short description about the commit)
- Longer description (A long description about the commit)
- Breaking changes (An indicator if this commit affects other parts of the system)
- Issues this commit closes (Task that the commit closes)

After that, just `git push` and send the commit to the branch.

# Jest (Tests):

- All tests are configured with Jest.
- Jest is the main testing framework in the market, with several references beyond an excellent <a target="_blank" href="https://jestjs.io">documentation</a>.

# Husky:

- Thanks to Husky, in order to reinforce project standards, commits are only allowed after fixing any problems related to these standards, such as tests, warnings, and others.

# Eslint

- Used to follow the code formatting and file organization.