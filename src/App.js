import * as React from "react";
const welcome = {
  greeting:"Hey",
  title:"React",
};

function App(){
  const title="React";
  return(
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"/>
    </div>
  );
}
export default App;