# url


### Index
- URLSearchParams2

    <!-- properties -->
    <!-- properties -->
    <!-- staticproperties -->
    <!-- staticproperties -->
    <!-- methods -->
    - Methods
        - [`URLSearchParams2#append`](#astnode100000048)
        - [`URLSearchParams2#delete`](#astnode100000102)
        - [`URLSearchParams2#entries`](#astnode100000112)
        - [`URLSearchParams2#forEach`](#astnode100000141)
        - [`URLSearchParams2#get`](#astnode100000162)
        - [`URLSearchParams2#has`](#astnode100000180)
        - [`URLSearchParams2#keys`](#astnode100000191)
        - [`URLSearchParams2#set`](#astnode100000201)
        - [`URLSearchParams2#toString`](#astnode100000221)
        - [`URLSearchParams2#values`](#astnode100000260)
    <!-- methods -->
    <!-- staticmethods -->
    <!-- staticmethods -->
    <!-- events -->
    <!-- events -->
- URL2

    <!-- properties -->
    <!-- properties -->
    <!-- staticproperties -->
    <!-- staticproperties -->
    <!-- methods -->
    - Methods
        - [`URL2#toString`](#astnode100000480)
    <!-- methods -->
    <!-- staticmethods -->
    <!-- staticmethods -->
    <!-- events -->
    <!-- events -->

# URLSearchParams2


<!-- properties -->
<!-- properties -->
<!-- staticproperties -->
<!-- staticproperties -->
<!-- methods -->
### Methods

<div><a href="./docs/astnode100000048.md" name="astnode100000048"><code>URLSearchParams2#append(name,value)</code></a></div>


<div><a href="./docs/astnode100000102.md" name="astnode100000102"><code>URLSearchParams2#delete(name)</code></a></div>


<div><a href="./docs/astnode100000112.md" name="astnode100000112"><code>URLSearchParams2#entries()</code></a></div>


<div><a href="./docs/astnode100000141.md" name="astnode100000141"><code>URLSearchParams2#forEach(callback)</code></a></div>


<div><a href="./docs/astnode100000162.md" name="astnode100000162"><code>URLSearchParams2#get(name)</code></a></div>


<div><a href="./docs/astnode100000180.md" name="astnode100000180"><code>URLSearchParams2#has(name)</code></a></div>


<div><a href="./docs/astnode100000191.md" name="astnode100000191"><code>URLSearchParams2#keys()</code></a></div>


<div><a href="./docs/astnode100000201.md" name="astnode100000201"><code>URLSearchParams2#set(name,value)</code></a></div>


<div><a href="./docs/astnode100000221.md" name="astnode100000221"><code>URLSearchParams2#toString()</code></a></div>


<div><a href="./docs/astnode100000260.md" name="astnode100000260"><code>URLSearchParams2#values()</code></a></div>


<!-- methods -->
<!-- staticmethods -->
<!-- staticmethods -->
<!-- events -->
<!-- events -->

<!-- examples -->
### Examples

```js
// Usage// Normal usevar searchParams=new URLSearchParams2('q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8')// console.log(searchParams)// URLSearchParams2 {//     q: 'new+url',//     oq: 'new+URL',//     aqs: 'chrome.0.69i59j0i512l9.1448j0j4',//     sourceid: 'chrome',//     ie: 'UTF-8'// }// Parse from URLvar searchParams=new URLSearchParams2('https://www.google.com/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url')// console.log(searchParams)// URLSearchParams2 {//     q: 'new+url',//     oq: 'new+URL',//     aqs: 'chrome.0.69i59j0i512l9.1448j0j4',//     sourceid: 'chrome',//     ie: 'UTF-8'// }// result are the same
```

<!-- examples -->

# URL2


<!-- properties -->
<!-- properties -->
<!-- staticproperties -->
<!-- staticproperties -->
<!-- methods -->
### Methods

<div><a href="./docs/astnode100000480.md" name="astnode100000480"><code>URL2#toString()</code></a></div>


<!-- methods -->
<!-- staticmethods -->
<!-- staticmethods -->
<!-- events -->
<!-- events -->

<!-- examples -->
### Examples

```js
// Usage// Parse URLvar url = new URL2('https://www.google.com/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url')// console.log(url)// URL2 {//     href: 'https://www.google.com/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url',//     protocol: 'https:',//     scheme: 'https',//     authority: '//www.google.com',//     host: 'www.google.com',//     pathname: '/search',//     search: '?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',//     query: 'q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',//     hash: '#new+url',//     fragment: 'new+url',//     hostname: 'www.google.com',//     port: 443,//     origin: 'https://www.google.com',//     searchParams: URLSearchParams2 {//         q: 'new+url',//         oq: 'new+URL',//         aqs: 'chrome.0.69i59j0i512l9.1448j0j4',//         sourceid: 'chrome',//         ie: 'UTF-8'//     },//     path: '/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url'// }// Without origin, fallback to localvar url = new URL2('/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url')// console.log(url)// URL2 {//     href: 'http://localhost/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url',//     protocol: 'http:',//     scheme: 'http',//     authority: '//localhost',//     host: 'localhost',//     pathname: '/search',//     search: '?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',//     query: 'q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',//     hash: '#new+url',//     fragment: 'new+url',//     hostname: 'localhost',//     port: 80,//     origin: 'http://localhost',//     searchParams: URLSearchParams2 {//         q: 'new+url',//         oq: 'new+URL',//         aqs: 'chrome.0.69i59j0i512l9.1448j0j4',//         sourceid: 'chrome',//         ie: 'UTF-8'//     },//     path: '/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url'// }
```

<!-- examples -->

