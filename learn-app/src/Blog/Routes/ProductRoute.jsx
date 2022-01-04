import { render } from "react-dom";
import { Route, Switch } from "react-router-dom";

import productList from "../Lists/List";

var result;
const ProductRoute = (prop) => {
  const { url } = prop.match
  console.log(url)
  
  return (
    <>
      <Switch>
        <Route
          path={`${url}/accessories`}
          render={() => <div>hello world</div>}
        />
      </Switch>
    </>
  );
};
// {productList.map((item, i) => {
//   const paths = item.toLowerCase();
//   console.log(paths)
//   return <Route
//     key={i} exact
//     path={`${url}/${paths}`}
//     render={() => <div>hello</div>}
//   />;
//  })}

export default ProductRoute;
