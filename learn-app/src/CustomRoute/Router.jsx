import React from "react";
import PropTypes from "prop-types"; 
import { pathToRegexp } from "path-to-regexp"



const matchPath = (pathName, options) => {
  const { path, exact = false } = options
  
  if (!path) {
    return {
      path: null,
      url: pathName,
      isExact:true
    }
  }

  const keys = []
  const res =pathToRegexp(path,keys,{end:false})
  let match = res.exec(pathName)
  // no match then null
  if (!match) {
    return  null  
  }

  //array of items

  const [url,...values]   = match
  const isExact = pathName === url

  // if exact was true and isExact false
  if (exact && !isExact) return null
  

  return {
    path,
    url: path === "/" && url === "" ? "/" : url,
    isExact,
    params: keys.reduce((acc, key, index) => {
      acc[key.name]=values[index]
      return  acc
    },{})
    
  }

  //path
  //reg exp
  
}


const instances = []
const register = (comp)=>instances.push(comp)
const unregister = (comp) => instances.slice(item => item === comp, 1)
const getInstances = ()=>instances

class Route extends React.Component{


  componentDidMount() {
    register(this)
    // console.log("registering",getInstances())
    window.onpopstate = ()=>this.forceUpdate
}

  
  componentWillUnmount() {
    unregister(this)
    window.removeEventListener("popstate",this.forceUpdate)
  }

  render() {
    const { exact, path, render, component,children } = this.props
    
    //if the path matches

    const match = matchPath(window.location.pathname,{path,exact});

    //if its not a match

    if (!match) {
      return  null
    }

    // if component return component
    if (component) {
      return  React.createElement(component,{match})
    }

    // if render return render
    if (render) {
      return  render({match})
    }

    // if children
    if (children) {
      return  React.cloneElement(children,{match})
    }
    
    //if no match
    else return null
    
    
  }
}


Route.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func,
  component: PropTypes.func,
};

class Link extends React.Component{

  handleClick = (e)=>{
    e.preventDefault();
    const { to, replace } = this.props;

    // logic to change url


    replace ? (window.history.replaceState({}, null, to)) : window.history.pushState({}, null, to)
    getInstances().forEach(instance=>instance.forceUpdate())

  }
  
  render() {

    const { to, children, replace } = this.props
    
    return (
      <div>
        <a href={to}  onClick={this.handleClick}>
      {children}
        </a>
       </div>
    );
  }
}



Link.propTypes = {
  replace: PropTypes.bool,
  to:PropTypes.string.isRequired
}

export {Route,Link}