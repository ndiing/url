# Install

```
npm install @ndiinginc/url
```

## URLSearchParams2

<!-- constructor -->
### Constructor
<dl>
    <dt><code><a href="./docs//urlsearch-params-2.md">URLSearchParams2()</a></code></dt>
    <dd></dd>
</dl>
<!-- constructor -->

<!-- properties -->
<!-- properties -->

<!-- staticproperties -->
<!-- staticproperties -->

<!-- methods -->
### Methods
<dl>
    <dt><code><a href="./docs/urlsearch-params-2/append.md">URLSearchParams2#append()</a></code></dt>
    <dd></dd>
    <dt><code><a href="./docs/urlsearch-params-2/delete.md">URLSearchParams2#delete()</a></code></dt>
    <dd></dd>
    <dt><code><a href="./docs/urlsearch-params-2/entries.md">URLSearchParams2#entries()</a></code></dt>
    <dd></dd>
    <dt><code><a href="./docs/urlsearch-params-2/for-each.md">URLSearchParams2#forEach()</a></code></dt>
    <dd></dd>
    <dt><code><a href="./docs/urlsearch-params-2/get.md">URLSearchParams2#get()</a></code></dt>
    <dd></dd>
    <dt><code><a href="./docs/urlsearch-params-2/has.md">URLSearchParams2#has()</a></code></dt>
    <dd></dd>
    <dt><code><a href="./docs/urlsearch-params-2/keys.md">URLSearchParams2#keys()</a></code></dt>
    <dd></dd>
    <dt><code><a href="./docs/urlsearch-params-2/set.md">URLSearchParams2#set()</a></code></dt>
    <dd></dd>
    <dt><code><a href="./docs/urlsearch-params-2/to-string.md">URLSearchParams2#toString()</a></code></dt>
    <dd></dd>
    <dt><code><a href="./docs/urlsearch-params-2/values.md">URLSearchParams2#values()</a></code></dt>
    <dd></dd>
</dl>
<!-- methods -->

<!-- staticmethods -->
<!-- staticmethods -->

<!-- examples -->
### Examples
```js
// Usage// Normal usevar searchParams=new URLSearchParams2('q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8')// console.log(searchParams)// URLSearchParams2 {//     q: 'new+url',//     oq: 'new+URL',//     aqs: 'chrome.0.69i59j0i512l9.1448j0j4',//     sourceid: 'chrome',//     ie: 'UTF-8'// }// Parse from URLvar searchParams=new URLSearchParams2('https://www.google.com/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url')// console.log(searchParams)// URLSearchParams2 {//     q: 'new+url',//     oq: 'new+URL',//     aqs: 'chrome.0.69i59j0i512l9.1448j0j4',//     sourceid: 'chrome',//     ie: 'UTF-8'// }// result are the same
```

<!-- examples -->

<!-- see -->
<!-- see -->
## URL2

<!-- constructor -->
### Constructor
<dl>
    <dt><code><a href="./docs//url2.md">URL2()</a></code></dt>
    <dd></dd>
</dl>
<!-- constructor -->

<!-- properties -->
<!-- properties -->

<!-- staticproperties -->
<!-- staticproperties -->

<!-- methods -->
### Methods
<dl>
    <dt><code><a href="./docs/url2/to-string.md">URL2#toString()</a></code></dt>
    <dd></dd>
</dl>
<!-- methods -->

<!-- staticmethods -->
<!-- staticmethods -->

<!-- examples -->
### Examples
```js
// Usage// Parse URLvar url = new URL2('https://www.google.com/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url')// console.log(url)// URL2 {//     href: 'https://www.google.com/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url',//     protocol: 'https:',//     scheme: 'https',//     authority: '//www.google.com',//     host: 'www.google.com',//     pathname: '/search',//     search: '?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',//     query: 'q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',//     hash: '#new+url',//     fragment: 'new+url',//     hostname: 'www.google.com',//     port: 443,//     origin: 'https://www.google.com',//     searchParams: URLSearchParams2 {//         q: 'new+url',//         oq: 'new+URL',//         aqs: 'chrome.0.69i59j0i512l9.1448j0j4',//         sourceid: 'chrome',//         ie: 'UTF-8'//     },//     path: '/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url'// }// Without origin, fallback to localvar url = new URL2('/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url')// console.log(url)// URL2 {//     href: 'http://localhost/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url',//     protocol: 'http:',//     scheme: 'http',//     authority: '//localhost',//     host: 'localhost',//     pathname: '/search',//     search: '?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',//     query: 'q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',//     hash: '#new+url',//     fragment: 'new+url',//     hostname: 'localhost',//     port: 80,//     origin: 'http://localhost',//     searchParams: URLSearchParams2 {//         q: 'new+url',//         oq: 'new+URL',//         aqs: 'chrome.0.69i59j0i512l9.1448j0j4',//         sourceid: 'chrome',//         ie: 'UTF-8'//     },//     path: '/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url'// }
```

<!-- examples -->

<!-- see -->
### See also
- [Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986)
<!-- see -->
