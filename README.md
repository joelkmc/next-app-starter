## Getting Started

```bash
yarn install
```

## Enable Husky

```bash
yarn husky install
```

## Add this to vscode settings.json

```bash
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // Add those two lines:
  "editor.formatOnSave": true, // Tell VSCode to format files on save
  "editor.defaultFormatter": "esbenp.prettier-vscode" // Tell VSCode to use Prettier as default file formatter
}
```
