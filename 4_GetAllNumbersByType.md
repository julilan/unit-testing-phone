### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, an empty array [] is returned.
If a person have multiple numbers of same type, each of them will be in it's own object.

If a parameter is missing, the method throws an exception `missing parameter`.

The format of the returned object is:

```json
{ "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
```

## Tests

### Testing type: work with default data

returns json

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "05040302" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "2468159" }
  }
]
```

### type: mobile

returns:

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": "040981265" }
  }
]
```

### type: x

returns []

### type: ""

returns [] when default data is used

### Missing parameter

to throw an exception `missing parameter`

### testing type "" with modified data

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "", "number": "353553732" },
      { "type": "home", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [{ "type": "work", "number": "56743290" }]
  }
]
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [{ "type": "", "number": "353553732" }]
  }
]
```
