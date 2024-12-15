# Conventional Commits
### Commit message structure

The commit message should be structured as follows:

```
<type>[optional scope]: [optional gitmoji] <description>

[optional body]

[optional footer(s)]
```

### Conventional commit examples

#### Good commits

✅ _`build: add shadcn package`_

✅ _`feat: ✨ add login button`_

✅ _`fix(auth): 🐛 token validation`_

✅ commit message with ! to draw attention to **breaking change**:

✅ _`feat!: send an email to the customer when a product is shipped`_

✅ _`feat(api)!: send an email to the customer when a product is shipped`_

✅ commit message with **description** and **breaking change footer** (BREAKING CHANGE)

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

✅ message with **multi-paragraph body** and **multiple footers**

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

#### Bad commits

❌ _`Add LOgin BUTTON`_

❌ _`add login button`_

❌ _`commit message that is too large to fit in one commit, this means that the commit has too many changes to describe and you should split it into multiple commits or you require to use a multi-paragraph body and/or footers.`_

### Gitmoji

gitmoji: [gitmoji.dev](https://gitmoji.dev/)<br>

![gitmoji](./images/gitmoji.png)

Gitmoji is an initiative to standardize and explain the use of emojis on GitHub commit messages.

Using emojis on commit messages provides an easy way of identifying the purpose or intention of a commit with only looking at the emojis used. As there are a lot of different emojis I found the need of creating a guide that can help to use emojis easier.

### Commit types and recommended emojis

| Commit Type | Title                    | Description                                                                                                 | Emoji |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: |
| `feat`      | Features                 | A new feature                                                                                               |  ✨   |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   |  🐛   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |  📝   |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  🎨   |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  ♻️   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |  ⚡   |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |  ✅   |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |  📦️  |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  👷   |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |  🔧   |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |  ⏪️  |

### Other gitmojis

| Emoji | Use case                                               |
| ----- | ------------------------------------------------------ |
| 🎉    | Begin a project.                                       |
| 🚀    | Deploy stuff.                                          |
| 💄    | Add or update the UI and style files.                  |
| 🚑️   | Critical hotfix.                                       |
| 🚧    | Work in progress.                                      |
| 🔥    | Remove code or files.                                  |
| 🔇    | Remove logs.                                           |
| 🗑️    | Deprecate code that needs to be cleaned up.            |
| ⚰️    | Remove dead code.                                      |
| ➕    | Add dependency.                                        |
| ➖    | Remove dependency.                                     |
| 🚚    | Move or rename resources (e.g.: files, paths, routes). |
| 🍱    | Add or update assets.                                  |
| 💡    | Add or update comments in source code.                 |
| 💫    | Add or update animations and transitions.              |
| 🙈    | Add or update a .gitignore file.                       |

# references
- [TypeOrm](https://typeorm.io)
- [monorepo with typescript](https://github.com/bakeruk/modern-typescript-monorepo-example)
- [typed linting](https://typescript-eslint.io/getting-started/typed-linting/)
- [monorepo typescript linting](https://typescript-eslint.io/troubleshooting/typed-linting/monorepos)
- [conventional commits website](https://www.conventionalcommits.org/en/v1.0.0/)
- [conventional commits npm repo](https://www.npmjs.com/package/@commitlint/config-conventional)
