const { pathToRegexp } = require("path-to-regexp");

let path = "/dashboard/:userid/:contestid/:challengeid";

let pathname = "/dashboard/masai-admin/500/200";

const keys = [];
const res = pathToRegexp(path, keys, { end: false });
// console.log(keys);
// console.log(res);
let match = res.exec(pathname);
// no match then null
if (!match) {
  return null;
}

// console.log(match);

//array of items

const [url, ...values] = match;
const isExact = pathname === url;

// console.log(isExact, pathname, url);

// // if exact was true and isExact false
// if (exact && !isExact) return null;

return {
  path,
  url: path === "/" && url === "" ? "/" : url,
  isExact,
  params: keys.reduce((acc, key, index) => {
    acc[key.name] = values[index];
    return acc;
  }, {}),
};
