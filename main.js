import { createElement, render, Component} from './toy-react.js';

class MyComponent extends Component {
  render(){
    return <div></div>
  }
}

render(
  <MyComponent id="a">
    <div>abcdefg</div>
  </MyComponent>
)
