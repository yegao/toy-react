export class Component {
  constructor(){
    this.props = Object,create(null);
    this._root = null;
    this.children = [];
  }
  appendChild(component){
    this.children.push(component);
  }

  setAttribute(name, value) {
    this.props[name] = value;
  }

  get root(){
    if(!this.root) {
      this._root = this.render().root;
    }
    return this._root;
  }
}

export const createElement = (type, attributes, ...children) => {
  let e 
  if(typeof type === 'string') {
    e = document.createElement(type);
  } else {
    e = new type;
  }
  for(attrName in attributes) {
    e.setAttribute(attr, attributes[attrName]);
  }
  for(let child of children) {
    if(typeof child === 'string') {
      e.appendChild(document.createTextNode(child));
    }
    else {
      e.appendChild(child);
    }
  }
  return e;
}

export const render = (component, parent) => {
  parent.appendChild(component.root);
}