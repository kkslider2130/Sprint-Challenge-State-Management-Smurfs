1. What problem does the context API help solve?
   context solves the problem of prop drilling by wrapping a context provider around component trees where they can all access the same stored state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   The store is the core of redux which keeps the single source of truth which all components may access. This store takes in our reducer which compiles down all the states and global functions we can use. The action is a separate piece which bridges the two by specifying the functions each reducer case can dispatch.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state describes the state that's top level and meant to be shared across all or multiple components below it. Component state refers to the states within, but not entirely exclusive to one single component. Component states have a smaller scope and are better kept for handling isolated pieces of information that's reusable and independent of a larger system of state, a good example would be a state handling form changes that are temprorary and ever changing. An application state shines when we have large projects where many branches and ends of our component trees benefit from accessing the same state(s) and can do so without drilling props. They can be used together and often are in large applications.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   redux-thunk is a middleware package that handles asynchronous tasks in redux. Since redux is by nature synchronous, we need something extra like hooks, or another program to step in the middle of it's process to decide what to do when the redux store is called to dispatch. In the case of redux thunk, it steps in to decide what to do before dispatching from the reducer based on the conditionals and functions we pass into it. In our action-creators, we get to use thunk to make another function call before dispatch to achieve an async call to an api.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like the structure and organization of redux the most. Maybe because we spent more time on it and I've gotten used to it but I quite like the idea of having a giant source of truth with pieces of big state objects the whole app system can use. I also like the idea that we are making immutable copies of state each time as I'm not comfortable with the idea of mutating our objects and states that the whole app might depend on. Immutability allows us to achieve more controlled and predictable results with the caveat of being harder to code.
