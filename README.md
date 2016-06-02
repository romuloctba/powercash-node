# PowerCash NodeJS module

Wrapper for PowerCash API.

---

### How to

1. `npm install --save this_repo`

2. Instantiate module with options, example:

```[javascript]
var powercash = require('powercash-node');

//Instantiate as a global, so you can use anywhere in your APP
PowerCash = new powercash({type:'auth_type', name:'type_of_authorization', key:'your_key_or_token' }, { customerId: 'your_customer_id' });
```
3. Consume the API
```[javascript]

PowerCash.employee.list(function(err, data){
  if(err)
    throw err;

    console.log("PowerCash's response: ", data);
  })

```
