/**
 * @example
 * // Usage
 *
 * // Normal use
 * var searchParams=new URLSearchParams2('q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8')
 *
 * // console.log(searchParams)
 * // URLSearchParams2 {
 * //     q: 'new+url',
 * //     oq: 'new+URL',
 * //     aqs: 'chrome.0.69i59j0i512l9.1448j0j4',
 * //     sourceid: 'chrome',
 * //     ie: 'UTF-8'
 * // }
 *
 * // Parse from URL
 * var searchParams=new URLSearchParams2('https://www.google.com/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url')
 *
 * // console.log(searchParams)
 * // URLSearchParams2 {
 * //     q: 'new+url',
 * //     oq: 'new+URL',
 * //     aqs: 'chrome.0.69i59j0i512l9.1448j0j4',
 * //     sourceid: 'chrome',
 * //     ie: 'UTF-8'
 * // }
 *
 * // result are the same
 */
class URLSearchParams2 {
    /**
     *
     */
    constructor(init = "") {
        init = init
            .replace(/[^\?]+\?/, "")
            .replace(/^\?/, "")
            .replace(/#[^#]+/, "")
            .matchAll(/([^\=&]+?)\=([^\=&]+?)?(&|$)/g);

        for (const [, name, value] of init) {
            this.append(name, value);
        }
    }

    /**
     *
     */
    append(name, value) {
        value = decodeURIComponent(value || "");
        if (this[name]) {
            if (Array.isArray(this[name])) {
                this[name].push(value);
            } else {
                this[name] = [this[name], value];
            }
        } else {
            this[name] = value;
        }
    }

    /**
     *
     */
    delete(name) {
        delete this[name];
    }

    /**
     *
     */
    entries() {
        const values = [];

        for (const name of this.keys()) {
            values.push([name, this[name]]);
        }
        return values;
    }

    /**
     *
     */
    forEach(callback) {
        for (const name of this.keys()) {
            callback(this[name], name);
        }
    }

    /**
     *
     */
    get(name) {
        return this[name];
    }

    getAll(name) {
        return this[name];
    }

    /**
     *
     */
    has(name) {
        return !!this[name];
    }

    /**
     *
     */
    keys() {
        return Object.getOwnPropertyNames(this);
    }

    /**
     *
     */
    set(name, value) {
        value = decodeURIComponent(value || "");
        this[name] = value;
    }

    // sort() {}

    /**
     *
     */
    toString() {
        const values = [];

        for (const name of this.keys()) {
            values.push([name, encodeURIComponent(this[name])].join("="));
        }
        return values.join("&");
    }

    /**
     *
     */
    values() {
        const values = [];

        for (const name of this.keys()) {
            values.push(this[name]);
        }
        return values;
    }
}

/**
 * @example
 * // Usage
 *
 * // Parse URL
 * var url = new URL2('https://www.google.com/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url')
 *
 * // console.log(url)
 * // URL2 {
 * //     href: 'https://www.google.com/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url',
 * //     protocol: 'https:',
 * //     scheme: 'https',
 * //     authority: '//www.google.com',
 * //     host: 'www.google.com',
 * //     pathname: '/search',
 * //     search: '?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',
 * //     query: 'q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',
 * //     hash: '#new+url',
 * //     fragment: 'new+url',
 * //     hostname: 'www.google.com',
 * //     port: 443,
 * //     origin: 'https://www.google.com',
 * //     searchParams: URLSearchParams2 {
 * //         q: 'new+url',
 * //         oq: 'new+URL',
 * //         aqs: 'chrome.0.69i59j0i512l9.1448j0j4',
 * //         sourceid: 'chrome',
 * //         ie: 'UTF-8'
 * //     },
 * //     path: '/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url'
 * // }
 *
 * // Without origin, fallback to local
 * var url = new URL2('/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url')
 *
 * // console.log(url)
 * // URL2 {
 * //     href: 'http://localhost/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url',
 * //     protocol: 'http:',
 * //     scheme: 'http',
 * //     authority: '//localhost',
 * //     host: 'localhost',
 * //     pathname: '/search',
 * //     search: '?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',
 * //     query: 'q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8',
 * //     hash: '#new+url',
 * //     fragment: 'new+url',
 * //     hostname: 'localhost',
 * //     port: 80,
 * //     origin: 'http://localhost',
 * //     searchParams: URLSearchParams2 {
 * //         q: 'new+url',
 * //         oq: 'new+URL',
 * //         aqs: 'chrome.0.69i59j0i512l9.1448j0j4',
 * //         sourceid: 'chrome',
 * //         ie: 'UTF-8'
 * //     },
 * //     path: '/search?q=new+url&oq=new+URL&aqs=chrome.0.69i59j0i512l9.1448j0j4&sourceid=chrome&ie=UTF-8#new+url'
 * // }
 */
class URL2 {
    /**
     * @see [Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986)
     */
    constructor(url = "", base = "http://localhost") {
        const regexpOrigin = /^(([^:/?#]+):)(\/\/([^/?#]*))/;

        if (!regexpOrigin.test(url)) {
            url = base + url;
        }
        const regexp = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
        const [href, protocol, scheme, authority, host, pathname = "/", search = "", query = "", hash = "", fragment = ""] = ("" + url).match(regexp);
        const [hostname, port] = ("" + host).split(":");

        this.href = href;
        this.protocol = protocol;
        this.scheme = scheme;
        this.authority = authority;
        this.host = host;
        this.pathname = pathname ?? "/";
        this.search = search;
        this.query = query;
        this.hash = hash;
        this.fragment = fragment;
        this.hostname = hostname;
        this.port = parseInt(port || (this.protocol == "https:" ? 443 : 80));

        this.origin = this.protocol + this.authority;
        // this.password;
        this.searchParams = new URLSearchParams2(this.search);
        // this.username;
        this.path = this.pathname + this.search + this.hash;
    }
    // createObjectURL(){}
    // revokeObjectURL(){}
    // toJSON(){}

    /**
     *
     */
    toString() {
        let searchParams = "" + this.searchParams;

        if (searchParams) {
            searchParams = "?" + searchParams;
        }
        return this.origin + this.pathname + searchParams + this.hash;
    }
}

URL2.URLSearchParams2 = URLSearchParams2;

module.exports = URL2;
