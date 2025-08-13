# Motivation

The motivation is to separate a logic, data and view layers. React (other UI lib) must only render, nothing more.

# Benefits

- App entry point not related to UI and can perform any logic: building dependencies, making redirects, data preloading, caching views, etc.
- Logic and data layer can be tested independently from UI
- UI layer can be tested independently from logic and data
- Data storage can be replaced with any other storage. Here it is MobX in the example
- UI lib can be replaced. Here it is React, but can be replaced to Svelte

# Metrics

- `tsx` files are used only in view related files
- UI components delegate all the logic calls to prop handlers or models methods
- UI components don't load data and don't do side effects
- React hooks maybe used only for UI specific logic