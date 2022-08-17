1. What is the difference between Component and PureComponent? give an
example where it might break my app.

Pure Component is react component which is updated only by passing new props. Pure component doesn’t not implementing shouldComponentUpdate method.
In used for improving performance of react app by avoiding too many re-rendering.
It could lead to some problems due to using shallow comparison -> so this solution should need to be used carefully.
We need to remember that all children of ‘pure components ‘ will not get re-render.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

When using context child components will be updated, so shouldComponentUpdate result on parent will be ignored.

3. Describe 3 ways to pass information from a component to its PARENT.
By callback function, using context API, using useReducter/ Redux solution

4. Give 2 ways to prevent components from re-rendering.

  use useMemo/useCallback hooks, use Pure Components

5. What is a fragment and why do we need it? Give an example where it might
break my app.

React not allow us to return multiple elements 

return {
    <div>aaa<div> <div> aaa </div>
    
    }

    Not every time we want to add extra 'div' to DOM to wrap other elements. We could use react fragment

   return {
    <> 
    <div>aaa<div> <div> aaa </div>
    </>
    
    } 

    React fragment will not be added to DOM.

    Possible problems -> we can't use 'key' with short version <> </> we need use there React.Fragment syntax.
    Returning fragment from function could lead to hard to debug bugs related to styles.

6. Give 3 examples of the HOC pattern.
withTranslation, withRouter, adding wrappers - > for example adding extra styles to component

7. what's the difference in handling exceptions in promises, callbacks and
async...await.

  Promises -> catch method

ExamplePromise
  .then(() => {
      // ok scenario

  })
  .catch(() => { 
      // error      
  })

  Async / await is just Promises but looking like sync code, error handling ->  try, catch method

  try {
    await ExampleFunction();
    // ok scenario

  }
  catch(){ 
     // error  
  }

 Callback -> try / catch but it's not recommended -> 'callback hell'

8. How many arguments does setState take and why is it async.
2 arguments -> updated value and callback
setState is async for adding possibility to batching updates and avoiding browser unresponsiveness

9. List the steps needed to migrate a Class to Function Component.
   - change class to function
   - change 'render' to just return
   - remove constructor and transform setting state/ changing state to hooks
   - remove all 'this' references + bindings
   - change functions structure
     foo(e) {

     }

     to 
     const foo = (e) => {}
   - replace lifecycle methods with useEffect

     ComponentDidMount => useEffect(()=>{},[])
     ComponentWillUnmount => useEffect(() => {
        return () => {}
     }, []) 
     ComponentDidUpdate => useEffect(() => {})

   - replace React.memo with useMemo 

10. List a few ways styles can be used with components.

     Inline styles, ‘classic’ css classes, styled components

11. How to render an HTML string coming from the server.

 We could use dangerouslySetInnerHTML or use third library like react-html-parser