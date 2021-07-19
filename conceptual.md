### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
 React Router allows for additional navigational components around an existing react app. This allows for bookmarking or allowing for the back button to function on the client-side. 
- What is a single page application?
    Single page applications are sites that exclusively use client-side routing. Current web pages can be rewritten with new data from the web server rather than having to load entirely new pages. 
- What are some differences between client side and server side routing?
Client-side allows for updates to be made as a user is going through an application. Server-side routing uses <a> tags to create page request, which replaces an entire DOM. The server then decides what HTMl to return based on the request that was made.
- What are two ways of handling redirects with React Router? When would you use each?
    Handling redirects can be used with the `<Redirect>` which is used when users are not where they should be and will be redirectly immediately to the appropriate path. Using the .push method on the history object also is an alternate method to redirect and comes in handy when a form is submitted and the user should be redirectly elsewhere. 
- What are two different ways to handle page-not-found user experiences using React Router? 
When a page is not found, a 404 can be made to catch an error at the bottom of the switch statement. `<Redirect>` can also be used to redirect to an alternate path. 
- How do you grab URL parameters from within a component using React Router?
URL params are grabbed with the React Router componenet: useParams. Calling the key of the URL parameter that was set in Routes will return a value of the appropriate URL parameter.
- What is context in React? When would you use it?
Context is used in React to pass down props to ancestors from a top level component. This prevents unnecessary passing (prop drilling) of props middle components that do not need the props. 
- Describe some differences between class-based components and function
  components in React.
Class based componenets required lifecycle methods to be used such as `componentDidMount, componentDidUpdate, and ComponentWillUnmount` instead of `useEffect` in functional components. Each component also requires declaration of props in the constructor of the class and calling `super(props)` to child elements in order to use prop values. Functional components pass props down using parameters and context.

- What are some of the problems that hooks were designed to solve?
Hooks were designed to minimize the amount of code such as useEffects. They also allow for the creation of custom hooks that allows for reusability. Hooks also allow for React to work without requiring classes. 