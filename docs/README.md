# Fortune Cookies App

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Application created to display fortune cookie phrases dynamically within a VTEX IO store. 

## Preview

You can preview this app by following this link: ***[https://davidvaltech--valtech.myvtex.com/fortune-cookies](https://davidvaltech--valtech.myvtex.com/fortune-cookies)***

##

<img width="1505" alt="image" src="https://github.com/user-attachments/assets/65d69ed7-f7e5-44d3-b6df-6f47a488a9cd" />

##

<div align="center">
  <img width="330" src="https://github.com/user-attachments/assets/fa0eb23a-04be-4e00-b844-690774eb0bf2" />
  <img width="330" src="https://github.com/user-attachments/assets/88c53cc2-7133-46f0-b782-847dab122ba2" />
  <img width="330" alt="image" src="https://github.com/user-attachments/assets/48c37850-ea74-4f3b-a75a-73a4cfe161d5" />
</div>

## Features

- Displays a lucky number with a XX-XX-XXXX format.
- Displays a random phrase.
- Uses [React Intl](https://github.com/vtex/react-intl) to translate the texts displayed on the UI.
- Built on standards.

## Guidelines

Some of the best practices and optimizations used for the development of this app were:

- Internationalization of texts.
- Optimization of backend services consumption through Hooks.
- Mobile first development and use of ```CSS_HANDLES``` to style the components.

## Configuration 

To configure this component, you must follow these steps.

### Adding the app as a theme dependency

In your theme's ```manifest.json```, add the *Fortune Cookies Component* app as a dependency:

```json
"dependencies": {
  "valtech.fortune-cookies": "0.x"
}
```

Now, you can use all the blocks exported by the fortune-cookies app.

Add the fortune-cookies app inside a custom page. In the example below, we are using the component in a custom page called Fortune Cookies, which renders the route to use this app:

```json
{
    "store.custom#fortune-cookies": {
        "blocks": ["fortune-cookies"]
    }
}
```

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
| `fortuneCookieMainBtn` | 
| `fortuneCookieMainText` | 
| `fortuneCookieMainContainer` | 
| `fortuneCookieCard` | 
| `fortuneCookieLeft` |
| `fortuneCookieRight` |
| `fortuneCookiePhrase` |

