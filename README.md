# test

If you don't have Yarn installed yet, run:

```sh
corepack prepare yarn@stable --activate
```

Install dependencies:

```sh
yarn
```

Run each app with different themes:

```
yarn workspace @tailwind/app-base run start
yarn workspace @tailwind/app-blue run start
```

Run all applications at once:

```
yarn workspaces foreach -pi run start
```

Build all applications:

```
# Builds to */app-*/dist/*
yarn workspaces foreach -pi run build

# Runs vite-bundle-analyzer
yarn workspaces foreach -pi run postbuild
```
