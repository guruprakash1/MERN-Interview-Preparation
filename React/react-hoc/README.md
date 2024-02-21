# What it is?

Higher-order components (HOCs) are a powerful feature of the React library. They allow you to reuse component logic across multiple components. 

In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.

## More about it

HOCs allow you to add additional functionality to a component without modifying the component's code

For example: you can use a HOC to add authentication or routing capabilities to a component or to apply a specific style or behavior to multiple components.

HOCs can take additional arguments, which lets you customize the behavior of the HOC. This makes them a flexible and reusable way to add functionality to your components.

### Benefits of Using Higher-Order Components in React:

    Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.
    Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.
    Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.
    Composition: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.
    Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, performance tracking, and many other features.

### When to use it:

Authentication:

Suppose you have an application with various routes, some of which require the user to be authenticated before accessing them.

Instead of duplicating the authentication logic in each component or route, you can create an HOC called withAuth that checks if the user is authenticated and redirects them to the login page if not. Then, you can wrap the specific components or routes that need authentication with this HOC, reducing duplication and enforcing consistent authentication behavior.

Logging:

Imagine you want to log some data every time a specific set of components mount or update. Rather than adding the logging logic to each component, you can create an HOC called withLogger that handles the logging functionality.

By wrapping the relevant components with withLogger, you can achieve consistent logging across those components.

Styling and Theming:

You might have a design system with reusable styles and themes. You can create an HOC named withTheme that provides the necessary theme-related props to a component.

This way, the wrapped component can easily access and apply the appropriate styles based on the provided theme.

### How we can memorize:

A person with money is Rich Person

Rich = Money(Person)

Here Rich is updated component, we pass Person and money function updated it.
