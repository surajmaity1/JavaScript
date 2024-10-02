const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

// Iterating the search parameters
for (const p of searchParams) {
    console.log(p);
}

console.log(searchParams.has("topic")); // true
console.log(searchParams.has("topic", "fish")); // false
console.log(searchParams.get("topic") === "api"); // true
console.log(searchParams.getAll("topic")); // ["api"]
console.log(searchParams.get("foo") === null); // true
console.log(searchParams.append("topic", "webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
console.log(searchParams.set("topic", "More webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
console.log(searchParams.delete("topic"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams"

console.log("_____________________");

// Search parameters can also be an object
const paramsObj = { foo: "bar", baz: "bar" };
const searchParam = new URLSearchParams(paramsObj);

console.log(searchParam.toString()); // "foo=bar&baz=bar"
console.log(searchParam.has("foo")); // true
console.log(searchParam.get("foo")); // "bar"

console.log("_____________________");

const paramStr = "foo=bar&foo=baz";
const urlParam = new URLSearchParams(paramStr);

console.log(urlParam.toString()); // "foo=bar&foo=baz"
console.log(urlParam.has("foo")); // true
console.log(urlParam.get("foo")); // bar, only returns the first value
console.log(urlParam.getAll("foo")); // ["bar", "baz"]


console.log("_____________________");


const paramsString1 = "http://example.com/search?query=%40";
const searchParams1 = new URLSearchParams(paramsString1);
console.log(searchParams1.toString());

console.log(searchParams1.has("query")); // false
console.log(searchParams1.has("http://example.com/search?query")); // true

console.log(searchParams1.get("query")); // null
console.log(searchParams1.get("http://example.com/search?query")); // "@" (equivalent to decodeURIComponent('%40'))

const paramsString2 = "?query=value";
const searchParams2 = new URLSearchParams(paramsString2);
console.log(searchParams2.has("query")); // true

const url = new URL("http://example.com/search?query=%40");
const searchParams3 = new URLSearchParams(url.search);
console.log(searchParams3.has("query")); // true
