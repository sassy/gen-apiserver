# gen-apiserver

Generate REST API Server.

## Example

Create example.json file.
following:

```
[
{
  "name" : "createUser",
  "method" : "POST",
  "path" : "/user"
},
{
    "name": "getUser",
    "method" : "GET",
    "path" : "/user/:user_id"
}
]
```
and use following command.

```
$ npm start example.json
```

so generat app.js file.
