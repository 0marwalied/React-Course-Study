# React Course Folder Summary

This file summarizes the course folders in this repository and highlights the main new items introduced in each section. It focuses on the course material and project source code, not generated dependency folders such as `node_modules`, compiled output such as `dist`, or lock files.

## Repository Overview

The repository is organized as a progressive learning path. It starts with TypeScript and JavaScript fundamentals, moves into asynchronous programming, then builds React applications with TypeScript, routing, lifecycle concepts, API integration, state management, Redux Toolkit, and RTK Query. Later sections are more project-oriented and show how these concepts work together in real app structures.

The main folders are:

- `1-TypeScript-Course`
- `2-JavaScript-Refresher`
- `3-Synchronous-VS-Asynchronous-Programming`
- `4-Javascript-Promises`
- `5-React.js-Basics`
- `6-Project-1(React.js+TypeScript+Sass)`
- `7-Project-2(products Builder)`
- `8-Component-Lifecycle`
- `9-Routing-Clone React.js Docs`
- `10-todo-app`
- `11-performance-and-optimization`
- `12-Redux-Toolkit-for-State-Management`
- `12-Redux-Toolkit-training`
- `13-VSCode-clone`
- `14-Redux-Toolkit-Query`

The root `README.md` also links to the published notes site and gives the high-level module list.

## 1-TypeScript-Course

### Purpose

This section introduces TypeScript basics and prepares the project environment for running TypeScript examples directly. It is mostly a concepts-and-notes section rather than a full application.

### Main New Items

- Creating a TypeScript configuration with `tsc --init`.
- Running TypeScript directly with `ts-node`.
- Compiling TypeScript files with `tsc`.
- Understanding typed variables, object shapes, and TypeScript configuration.
- Using `readonly` properties to prevent reassignment after initialization.
- Using `Record<string, number>` for objects with string keys and number values.
- Using `keyof` to extract the keys of a type as a union.
- Using generics to create reusable type-safe functions, such as a generic `swap<T>()`.
- Using `Partial<T>` to make all properties of an existing type optional.
- Using index signatures for objects with dynamic keys.

### Folder Structure

- `src`: Intended for TypeScript source examples. The current `src/index.ts` is empty.
- `notes`: HTML and JavaScript note files for the section.
- `tsconfig.json`: TypeScript compiler configuration.
- `package.json`: Includes TypeScript and `ts-node` as development dependencies.

### Key Takeaway

This folder builds the foundation for type safety before the course moves into React and larger TypeScript projects. The important skill is learning how TypeScript describes data, restricts invalid values, and improves confidence while coding.

## 2-JavaScript-Refresher

### Purpose

This section refreshes modern JavaScript syntax before moving deeper into async programming and React. It uses small examples rather than a UI project.

### Main New Items

- Reviewing object literals.
- Accessing object properties with dot notation, such as `person.name`.
- Accessing object properties with bracket notation, such as `person["age"]`.
- Understanding the difference between method syntax and function syntax inside objects.
- Practicing simple console output to inspect JavaScript values.

### Folder Structure

- `src/index.ts`: Contains a simple object example and property access examples.
- `notes`: Contains note files for the refresher content.
- `tsconfig.json`: Allows the examples to be written and checked as TypeScript.
- `package.json`: Includes TypeScript tooling.

### Key Takeaway

This folder is a quick bridge between basic JavaScript and the more structured TypeScript and React sections. The focus is on syntax clarity and object handling.

## 3-Synchronous-VS-Asynchronous-Programming

### Purpose

This section introduces the difference between synchronous and asynchronous programming by using a todo-fetching example with callbacks.

### Main New Items

- Synchronous programming as blocking execution.
- Asynchronous programming as non-blocking execution.
- Using `setTimeout` to simulate delayed work.
- Passing a callback function into another function.
- Creating a typed callback signature: `(todoList: Todo[]) => void`.
- Understanding how async code completes later, after the surrounding code has already continued.
- Introducing callback hell as a readability and maintenance problem.

### Folder Structure

- `src/index.ts`: Defines a `Todo` interface, simulates fetching todos, and executes a callback when the fake request completes.
- `notes`: Contains notes for sync versus async concepts.
- `tsconfig.json`: TypeScript configuration.
- `package.json`: TypeScript and `ts-node` tooling.

### Key Takeaway

This folder explains why asynchronous patterns are needed. It shows the first async style, callbacks, before moving into Promises and `async/await`.

## 4-Javascript-Promises

### Purpose

This section continues the async topic by replacing callback-style flows with Promises and `async/await`.

### Main New Items

- Promise states: pending, resolved, rejected, and settled.
- Using `resolve` when async work succeeds.
- Using `reject` when async work fails.
- Handling fulfilled Promises with `.then()`.
- Handling rejected Promises with `.catch()`.
- Running cleanup or final logic with `.finally()`.
- Using `Promise.race()`, `Promise.all()`, and `Promise.any()`.
- Creating a Promise around `setTimeout`.
- Chaining asynchronous operations.
- Refactoring Promise chains to `async/await`.
- Handling async errors with `try/catch`.
- Filtering todo data based on a fetched user.

### Folder Structure

- `src/index.ts`: Defines todo and user types, simulates fetching a current user, fetches todos for that user, and uses `async/await` to coordinate the sequence.
- `notes`: Contains notes for Promise concepts.
- `tsconfig.json`: TypeScript configuration.
- `package.json`: TypeScript-related tooling.

### Key Takeaway

This folder teaches the core async patterns needed for React API requests later in the course. It shows how Promises make async flow easier to structure than nested callbacks.

## 5-React.js-Basics

### Purpose

This section starts React fundamentals using a Vite React TypeScript app inside the nested `react-basics` folder.

### Main New Items

- Running a Vite React development server with `yarn dev`.
- Building and previewing a Vite app.
- Understanding the public folder and the React entry file.
- Understanding the root component, usually `App`.
- Writing function components that return JSX.
- Passing and reading props.
- Using React component naming rules, especially capitalized component names.
- Understanding default exports and named exports.
- Using fragments to return grouped JSX without adding DOM nodes.
- Following JSX rules: one top-level returned element, closing tags, expressions inside `{}`, and `className` instead of `class`.
- Applying inline styles in JSX.
- Using `FC` and custom component prop types.
- Rendering lists with `key`.
- Introducing `useState` and `useEffect`.

### Implementation Highlights

The current app demonstrates a small login-style UI:

- `App.tsx` stores user data in state.
- `Navbar` receives navigation items and login state.
- `LoginForm` updates user data and login state.
- The UI conditionally displays either the login form or a welcome message.

### Folder Structure

- `5-React.js-Basics/README.md`: Course notes for React basics.
- `react-basics/src/App.tsx`: Main React component for the basic login example.
- `react-basics/src/components/Navbar`: Navigation component.
- `react-basics/src/components/LoginForm`: Form component for entering user data.
- `react-basics/src/types`: Shared TypeScript types.
- `react-basics/notes`: Additional note files.

### Key Takeaway

This folder introduces the mental model of React: UI is built from components, components receive props, and state changes cause the UI to update.

## 6-Project-1(React.js+TypeScript+Sass)

### Purpose

This is the first small React project that combines React, TypeScript, Sass, and reusable UI component design.

### Main New Items

- Building a reusable `Alert` component.
- Typing component props with TypeScript interfaces.
- Accepting `children` as `ReactNode`.
- Using union types for allowed alert variants.
- Styling components with Sass.
- Passing icons as props.
- Using `lucide-react` icons, including `BellRing` and `X`.
- Rendering several visual variants of the same component.

### Implementation Highlights

`App.tsx` renders multiple alerts:

- Warning alert.
- Error alert.
- Info alert.
- Success alert.
- Note alert.

The `Alert` component supports two content modes:

- A simple `message` string.
- Custom JSX passed through `children`.

The component also accepts:

- `title`
- `icon`
- `type`
- Optional `message`
- Optional `children`

### Folder Structure

- `src/App.tsx`: Renders the alert examples.
- `src/components/ui/Alert/Alert.tsx`: Reusable typed alert component.
- `src/components/ui/Alert/index.scss`: Sass styles for alert variants.
- `src/assets`: React/Vite assets.
- Vite and TypeScript config files.

### Key Takeaway

This folder practices building a reusable component API. The main lesson is how props, union types, children, and Sass work together to create flexible UI components.

## 7-Project-2(products Builder)

### Purpose

This project is a product management UI. It moves beyond static components into a CRUD-like interactive app with forms, validation, modal dialogs, color selection, categories, and notifications.

### Main New Items

- Managing a list of products with React state.
- Adding new products.
- Editing existing products.
- Removing products.
- Opening and closing modals.
- Creating reusable UI components such as `Button`, `Input`, `Modal`, and `Select`.
- Creating a `ProductCard` component.
- Using TypeScript interfaces for product, category, and form input data.
- Validating form values before adding or editing products.
- Validating URL format with a regular expression.
- Validating title, description, price, and selected colors.
- Using `uuid` to generate product ids.
- Using `react-hot-toast` for feedback messages.
- Using color swatches with a `CircleColor` component.
- Using Tailwind CSS for layout and styling.

### Implementation Highlights

The app keeps several pieces of state:

- `products`: the current product list.
- `product`: the product currently being created.
- `editedProduct`: the product currently being edited.
- `errors`: validation messages.
- `tempColors`: selected colors.
- `selectedCategory`: selected product category.
- `isOpen` and `isEditOpen`: modal visibility.
- `productIdx`: index of the product being edited.

The product validation checks:

- Title length from 10 to 80 characters.
- Description length from 10 to 900 characters.
- Valid image URL.
- Numeric price.
- At least one selected color.

### Folder Structure

- `src/App.tsx`: Main product builder logic and rendering.
- `src/components/ProductCard.tsx`: Displays product information and action buttons.
- `src/components/Image.tsx`: Product image handling.
- `src/components/CircleColor.tsx`: Color selector UI.
- `src/components/ErrorMessage.tsx`: Validation error display.
- `src/components/ui`: Reusable form and modal components.
- `src/data`: Initial product list, category list, color list, and form input definitions.
- `src/interfaces`: TypeScript interfaces.
- `src/validation`: Product validation logic.
- `src/util`: Utility functions.

### Key Takeaway

This folder is where React state management becomes more practical. It shows how to build a real form-driven UI with validation, reusable components, and user feedback.

## 8-Component-Lifecycle

### Purpose

This section explains React component lifecycle concepts and compares class component lifecycle methods with hook-based function components.

### Main New Items

- Class components with `Component`.
- Constructor setup for initial state.
- `componentDidMount` for running code after mounting.
- `componentDidUpdate` for responding to updates.
- `componentWillUnmount` for cleanup.
- Fetching data after a component mounts.
- Function component lifecycle behavior with `useEffect`.
- Dependency arrays in `useEffect`.
- Cleanup functions in `useEffect`.
- Using `AbortController` to cancel fetch requests on unmount.
- Simple manual navigation with page state.

### Implementation Highlights

`App.tsx` uses a `page` state value to switch between:

- `HomePage`
- `AboutUsPage`
- `ProductsPage`
- `HooksPage`

`ProductsPage` is a class component. It fetches products from `https://dummyjson.com/products` in `componentDidMount`, logs unmounting in `componentWillUnmount`, and logs updates in `componentDidUpdate`.

`HooksPage` is a function component. It uses:

- `useState` for a counter.
- `useEffect` that runs when the counter changes.
- `useEffect` for fetching products once.
- `AbortController` cleanup to cancel the fetch when the component unmounts.

### Folder Structure

- `src/App.tsx`: Main page-switching logic.
- `components/Navbar.tsx`: Navigation for changing active page.
- `pages/HomePage.tsx`: Home page.
- `pages/AboutUsPage.tsx`: About page.
- `pages/ProductsPage.tsx`: Class component lifecycle example.
- `pages/HooksPage.tsx`: Hooks lifecycle example.
- `notes`: Supporting notes.

### Key Takeaway

This folder teaches when side effects run, how cleanup works, and how older class lifecycle methods map conceptually to modern hooks.

## 9-Routing-Clone React.js Docs

### Purpose

This project introduces routing by building a small React documentation-style site with nested pages, layouts, protected routes, and error handling.

### Main New Items

- Creating a browser router.
- Defining routes with `createRoutesFromElements`.
- Nesting routes under layout components.
- Using `Outlet` to render child routes.
- Building a shared root layout.
- Building a separate nested `Learn` layout.
- Creating protected routes.
- Redirecting users depending on authentication state.
- Adding error elements to route definitions.
- Handling a catch-all 404 route.
- Building route-based pages such as home, about, contact, contribute, login, and learn pages.

### Implementation Highlights

The router has two main route groups:

- `/`: root layout with home, contact, about, contribute, and login.
- `/learn`: learn layout with quick start, thinking in React, and installation pages.

Protected route behavior is demonstrated with:

- `/contribute`: only allowed when logged in.
- `/login`: redirects away when already logged in.

The project uses hardcoded auth-like data:

- `isLoggedIn`
- `userData`

That keeps the routing lesson focused without needing a real backend.

### Folder Structure

- `src/routes/index.tsx`: Main router configuration.
- `src/pages/Layout.tsx`: Root layout with navbar and `Outlet`.
- `src/pages/Learn/Layout.tsx`: Nested learn layout.
- `src/pages/Learn`: Learn section pages.
- `src/components/auth/ProtectedRoute.tsx`: Route protection wrapper.
- `src/components/errors`: Error and not-found components.
- `src/components/ui`: Basic reusable UI components.
- `src/components/Navbar.tsx`: Main navigation.
- `src/components/LearnAside.tsx`: Learn section navigation.

### Key Takeaway

This folder teaches how React apps become multi-page experiences without full page reloads. It also introduces nested layouts and route guards.

## 10-todo-app

### Purpose

This is a full-stack todo workspace with a Vite React frontend and a Strapi backend in one folder. Running `npm run dev` from `10-todo-app` starts both apps, matching the structure used by `15-full-stack-project`.

### Main New Items

- Registering users through a backend API.
- Logging users in through a backend API.
- Storing authenticated user data in `localStorage`.
- Reading user data from local storage with helper utilities.
- Protecting routes based on authentication state.
- Building login and register forms with `react-hook-form`.
- Validating forms with Yup and `@hookform/resolvers`.
- Making API calls with Axios.
- Using an Axios instance configured with a base URL.
- Fetching authenticated data with TanStack Query.
- Creating a custom query hook.
- Passing JWT tokens in request headers.
- Displaying todos from the backend.
- Paginating todos.
- Sorting todos by creation date.
- Generating fake todo data with `@faker-js/faker`.
- Showing toast notifications with `react-hot-toast`.
- Building reusable UI controls: button, input, form, select, paginator, modal, label, password input, nav, and textarea.
- Handling page-level errors.

### Implementation Highlights

The project root uses npm workspaces:

- `frontend`: Vite React todo app.
- `backend`: Strapi API.

The root `dev` script runs both workspace dev servers with `concurrently`.

The app uses routes for:

- `/`: protected home route.
- `/login`: login form.
- `/register`: registration form.
- `/profile`: user profile page.
- `/todos`: todo listing page.

`Login.tsx` posts to `/auth/local`, saves the returned user data, and redirects after success.

`Register.tsx` posts to `/auth/local/register`, then redirects to the login page after success.

`Todos.tsx` fetches todos with:

- Page number.
- Page size.
- Sort order.
- Auth token headers.

It also includes a `generateTodos` function that creates 10 fake todo records through the backend API.

### Folder Structure

- `frontend/src/components/ui`: Reusable UI components.
- `frontend/src/components/errors`: Error message components.
- `frontend/src/components/notification`: Toast notification helpers.
- `frontend/src/config/axios.config.ts`: Axios base URL setup.
- `frontend/src/data`: Form definitions and shared data.
- `frontend/src/hooks/useAuthenticatedQuery.ts`: TanStack Query wrapper for API requests.
- `frontend/src/interfaces`: Shared TypeScript interfaces.
- `frontend/src/pages/auth`: Login and register pages.
- `frontend/src/pages/Todos.tsx`: Todo list, sorting, pagination, and generation.
- `frontend/src/pages/Profile.tsx`: Profile page.
- `frontend/src/pages/layouts`: Layout wrapper.
- `frontend/src/routes`: Router and protected route logic.
- `frontend/src/utils/auth`: Local storage auth helpers.
- `frontend/src/validation`: Yup schemas.

### Key Takeaway

The frontend side shows how routing, forms, validation, API calls, authentication, and server data fetching fit together in a practical React application.

### Backend Purpose

The backend is the Strapi application that supports the todo frontend. It provides authentication through the users-permissions plugin and defines the content types needed by the frontend.

### Backend Main New Items

- Running a Strapi application.
- Using Strapi scripts such as `develop`, `start`, and `build`.
- Using the users-permissions plugin for authentication.
- Defining collection types and single types.
- Creating a `todo` collection type.
- Connecting todos to users with a relation.
- Defining global site settings.
- Defining an about page content type with dynamic zones.
- Using reusable Strapi components for content blocks.
- Storing uploaded media and seed data.

### Backend Implementation Highlights

The custom `todo` content type includes:

- `title`: required string.
- `description`: optional text.
- `user`: many-to-one relation to Strapi users.

The `global` single type includes:

- `siteName`
- `favicon`
- `siteDescription`
- `defaultSeo`

The `about` single type includes:

- `title`
- `blocks` dynamic zone with media, quote, rich text, and slider components.

### Backend Folder Structure

- `backend/src/api/todo`: Todo content type, controller, route, and service.
- `backend/src/api/global`: Global site settings content type.
- `backend/src/api/about`: About page content type.
- `backend/src/components/shared`: Shared Strapi content components.
- `backend/src/extensions/users-permissions`: User model extension.
- `backend/config`: Strapi configuration.
- `backend/database`: Database-related files.
- `backend/data/uploads` and `backend/public/uploads`: Uploaded media.
- `backend/scripts/seed.js`: Example seed script.
- `backend/types/generated`: Generated TypeScript content type definitions.

### Key Takeaway

This combined folder teaches both sides of a full-stack React app. The frontend depends on the backend for authentication and todo data, and the root workspace script keeps the development workflow in one command.

## 11-performance-and-optimization

### Purpose

This section appears to be a Vite React project prepared for performance and optimization topics. The current implementation is still close to the starter template, but it provides a base for discussing React rendering, assets, HMR, and build behavior.

### Main New Items

- React and Vite starter structure.
- Using `useState` for a counter.
- Using imported image assets.
- Linking to documentation resources.
- Understanding Vite HMR.
- Using public SVG symbols through `/icons.svg`.
- Working with React 19 and TypeScript 6-era project setup.

### Implementation Highlights

`App.tsx` renders:

- A hero section with React, Vite, and local hero images.
- A counter button using `useState`.
- Documentation and social link sections.
- Public SVG icons referenced with `<use href="/icons.svg#...">`.

### Folder Structure

- `src/App.tsx`: Starter-style UI and counter.
- `src/App.css`: Main styling.
- `src/assets`: React, Vite, and hero assets.
- `public/icons.svg`: Public icon sprite.
- `public/favicon.svg`: Favicon.
- Vite, TypeScript, and ESLint config files.

### Key Takeaway

This folder is positioned as a performance/optimization module, but the present code is mainly a starter app. It can be used to introduce how Vite apps are structured before adding memoization, code splitting, profiling, or render optimization examples.

## 12-Redux-Toolkit-for-State-Management

### Purpose

This section introduces Redux Toolkit state management with a simple counter application.

### Main New Items

- Installing Redux Toolkit and React Redux.
- Creating a Redux store with `configureStore`.
- Creating a slice with `createSlice`.
- Defining initial state.
- Defining reducers inside a slice.
- Exporting generated action creators.
- Using Immer-powered mutable-looking reducer syntax.
- Typing `RootState` and `AppDispatch`.
- Creating a typed `useAppDispatch` hook.
- Connecting Redux state to React components.

### Implementation Highlights

The app contains a `counter` slice with:

- `increment`
- `decrement`
- `incrementByAmount`

The store registers the `counter` reducer under the `counter` key.

`App.tsx` renders the `Counter` component, which is the main UI for dispatching counter actions and reading counter state.

### Folder Structure

- `src/app/store.ts`: Redux store setup and typed dispatch/state exports.
- `src/app/features/counter/counterSlice.ts`: Counter slice and actions.
- `src/components/Counter.tsx`: Counter UI.
- `src/components/Button.tsx`: Reusable button component.
- `src/App.tsx`: Renders the counter.

### Key Takeaway

This folder teaches Redux Toolkit from the simplest useful example: global counter state. It introduces the Redux structure that later projects reuse for cart and file-tree state.

## 12-Redux-Toolkit-training

### Purpose

This section expands Redux Toolkit practice into a product listing and cart-style app. It also includes routing, reusable components, Axios, and TanStack Query.

### Main New Items

- Combining multiple slices in a Redux store.
- Managing cart state with Redux Toolkit.
- Dispatching cart actions from product cards.
- Selecting Redux state with selectors.
- Fetching product data with TanStack Query.
- Creating a custom query hook with Axios.
- Using React Router layouts.
- Building a grid of product cards.
- Reusing UI components across a more complete app.
- Using utility functions to add items to the shopping cart.

### Implementation Highlights

The store includes:

- `counter`
- `cart`

The `cartSlice` stores `cartItems` and exposes:

- `addtoCartAction`
- `cartSelector`

`ProductList.tsx` fetches products from DummyJSON with:

```text
/products?limit=10&select=title,price,thumbnail
```

Each `ProductCard` can dispatch `addtoCartAction(product)`.

The router defines:

- Root layout.
- Home page.
- Page-not-found fallback.
- Error handler.

### Folder Structure

- `src/app/store.ts`: Store with counter and cart reducers.
- `src/app/features/counter`: Counter slice.
- `src/app/features/cart`: Cart slice.
- `src/ProductList.tsx`: Product fetching and grid rendering.
- `src/components/ProductCard.tsx`: Product card with add-to-cart action.
- `src/hooks/useCustomQuery.ts`: TanStack Query plus Axios helper.
- `src/config/axios.config.ts`: Axios setup.
- `src/router`: Router configuration.
- `src/pages`: Layout, home, and not-found pages.
- `src/components/ui`: Reusable UI components.
- `src/util`: Cart utility logic.
- `src/interfaces`: Product and shared types.

### Key Takeaway

This folder takes Redux Toolkit beyond a counter. It shows how global state is useful when UI actions in one component, like product cards, need to update shared app state, like cart items.

## 13-VSCode-clone

### Purpose

This project builds a VS Code-style file explorer and editor interface. It combines recursive rendering, Redux Toolkit state, tab management, resizable panels, file icons, and syntax highlighting.

### Main New Items

- Building a recursive component for nested file trees.
- Rendering folders and files differently.
- Expanding and collapsing folders.
- Opening files into an editor tab bar.
- Preventing duplicate open tabs.
- Tracking the active tab.
- Closing open tabs.
- Selecting the next active tab when the current tab is closed.
- Storing file tree UI state in Redux Toolkit.
- Using `react-resizable-panels` for split-panel layout.
- Using `react-syntax-highlighter` for code display.
- Mapping file and folder names to icons.
- Memoizing components with `memo` to reduce unnecessary rerenders.

### Implementation Highlights

`App.tsx` renders a two-panel editor:

- Left panel: recursive file explorer.
- Right panel: open tabs and syntax-highlighted file content.

If no files are open, the right panel shows a VS Code icon.

The `fileTreeSlice` tracks:

- `activeTabId`
- `openFiles`
- `clickedFile`

Important reducer behavior:

- `setOpenFiles` opens a file only if it is not already open, then makes it active.
- `removeOpenFile` removes a tab and chooses a new active file if needed.
- `setClickedFile` updates the selected file content.
- `setActiveTabId` switches the active tab.

### Folder Structure

- `src/App.tsx`: Main VS Code clone layout.
- `src/app/store.ts`: Redux store.
- `src/app/feature/fileTreeSlice.ts`: File tree and open-tab state.
- `src/components/RecursiveComponent.tsx`: Recursive folder/file renderer.
- `src/components/OpenFilesBarTabs.tsx`: Open tabs container.
- `src/components/OpenFileTab.tsx`: Individual tab component.
- `src/components/FileSyntaxhigHlighter.tsx`: Syntax-highlighted code viewer.
- `src/components/ResizablePanel.tsx`: Resizable split panel wrapper.
- `src/components/RenderIcon.tsx`: Icon selection logic.
- `src/components/SVG`: Local SVG arrow and file/folder icons.
- `src/data`: File tree data.
- `src/interfaces`: File tree TypeScript interfaces.
- `src/constants` and `src/styles`: Shared constants and style helpers.
- `public/icons`: Large icon library used for file/folder visuals.

### Key Takeaway

This folder is a strong applied React project. It practices recursive UI, global state, tab logic, conditional rendering, layout composition, and editor-like user interactions.

## 14-Redux-Toolkit-Query

### Purpose

This section introduces RTK Query as the Redux Toolkit way to fetch and cache server data. It builds on the product/cart app pattern from the Redux training section.

### Main New Items

- Creating an API slice with `createApi`.
- Using `fetchBaseQuery`.
- Defining `reducerPath`.
- Registering an API reducer in the Redux store.
- Adding RTK Query middleware to the store.
- Defining query endpoints.
- Exporting auto-generated query hooks.
- Fetching data through `useGetProductListQuery`.
- Handling loading and error states from an RTK Query hook.
- Keeping existing cart state beside RTK Query state.
- Comparing RTK Query with manual `createAsyncThunk` and custom Axios query approaches.

### Implementation Highlights

The store includes:

- `counter`
- `cart`
- `productsApiSlice.reducer`

The store middleware adds:

- `productsApiSlice.middleware`

The RTK Query API slice uses:

- `reducerPath: "products"`
- `baseUrl: "https://dummyjson.com"`
- `getProductList` query endpoint

`ProductList.tsx` calls:

```ts
useGetProductListQuery({ page: 1, limit: 10 })
```

It then renders product cards from `data.products`.

The folder also contains `createAsyncThunkEx.ts`, which demonstrates the older/manual async-thunk pattern for fetching products with Axios. That file is useful for comparing RTK Query against manual async state management.

### Folder Structure

- `src/app/store.ts`: Redux store with RTK Query reducer and middleware.
- `src/app/features/products/productsSlice.ts`: RTK Query API slice.
- `src/app/features/products/createAsyncThunkEx.ts`: Manual async thunk example.
- `src/app/features/cart/cartSlice.ts`: Cart state.
- `src/app/features/counter/counterSlice.ts`: Counter state.
- `src/ProductList.tsx`: Product list using the generated RTK Query hook.
- `src/components/ProductCard.tsx`: Product UI and add-to-cart action.
- `src/router`: Basic route setup.
- `src/pages`: Root layout, home page, and not-found page.
- `src/components/ui`: Reusable UI components.
- `src/config`, `src/hooks`, `src/util`, `src/interfaces`: Supporting utilities and types.

### Key Takeaway

This folder shows why RTK Query is useful: it reduces the amount of manual loading/error/data state code needed for API calls while keeping server state integrated with Redux Toolkit.

## Supporting Folders and Files

### `.github`

Contains GitHub-related repository configuration. It is not part of the course learning path itself, but it supports repository workflows.

### Root Files

- `README.md`: Course overview and notes link.
- `index.html` and `style.css`: Root-level static page files for the notes/course presentation.
- `package.json`: Minimal root package metadata.
- `.gitignore`: Git ignore rules.
- Lock files: Dependency lock files for package managers.

## Overall Learning Progression

The course progresses in a practical order:

1. Start with TypeScript syntax and types.
2. Refresh JavaScript objects and functions.
3. Learn asynchronous programming with callbacks.
4. Improve async code with Promises and `async/await`.
5. Learn React component basics, props, state, JSX, and hooks.
6. Build typed reusable UI with Sass.
7. Build a form-heavy product manager with validation and modals.
8. Understand class lifecycle and hook lifecycle behavior.
9. Build multi-page React apps with routing and protected routes.
10. Build a full-stack todo workspace with authentication, server data, and a Strapi backend.
11. Prepare for performance and Vite app optimization topics.
12. Learn Redux Toolkit through a counter.
13. Expand Redux Toolkit into cart and product-list state.
14. Build a VS Code-style interface with recursive UI and Redux state.
15. Use RTK Query for server-state fetching and caching.

## Main Technologies Covered

- TypeScript
- JavaScript async programming
- React
- Vite
- JSX
- React hooks
- React class lifecycle methods
- React Router
- Tailwind CSS
- Sass
- Axios
- TanStack Query
- React Hook Form
- Yup validation
- React Hot Toast
- Redux Toolkit
- React Redux
- RTK Query
- Strapi
- DummyJSON API
- Faker
- React Syntax Highlighter
- React Resizable Panels

## Notes About Generated or External Content

Several folders contain generated or installed files:

- `node_modules`: Installed dependencies.
- `dist`: Built output.
- `.tmp`, `.strapi`, generated Strapi types, and uploaded media in the backend.
- Large icon libraries in `13-VSCode-clone/public/icons`.

These are useful for running the projects, but they are not the main learning material. The summaries above focus on source files, configuration, and implemented course concepts.
