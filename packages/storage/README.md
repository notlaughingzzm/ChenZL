# storage
seeing the name of a thing one thinks of its function o(´^｀)o

## Basic Usage

```bash
# if you use npm
npm install @chenzeliang/storage --save-dev
# or if you use yarn
yarn add @chenzeliang/storage
```

### Get Start

```js
import storage from '@chenzeliang/storage'

storage.local.set('name', 'your value')

storage.session.set('name', 'your value')

// cookie api is the same as 'js-cookie'
storage.cookie.set('name', 'your value')

```
