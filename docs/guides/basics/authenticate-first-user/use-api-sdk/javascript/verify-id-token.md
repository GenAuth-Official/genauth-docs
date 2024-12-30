Node.js can use [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) to verify the IdToken:

```javascript
const jwt = require('jsonwebtoken')

try {
  const data = jwt.verify('YOUR_ID_TOKEN', 'YOUR_APP_SECRET')
} catch (error) {
  // token might be invalid or expired
  console.error(error)
}
```