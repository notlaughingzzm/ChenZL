# storage
seeing the name of a thing one thinks of its function o(´^｀)o

## Basic Usage

```bash
# if you use npm
npm install @chenzl/storage --save-dev
# or if you use yarn
yarn add @chenzl/storage
```

### Get Start

```js
import storage from '@chenzl/storage'

storage.local.set('name', 'your value')

storage.session.set('name', 'your value')

// cookie api is the same as 'js-cookie'
storage.cookie.set('name', 'your value')

```
