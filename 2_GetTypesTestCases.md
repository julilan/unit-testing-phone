# Test cases for getTypes

## **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned. Type may be an empty string.

For example:

```json
["home", "work", "mobile"]
```

## Test 1: getType from default data json.

Create register with default data

```js
const register = new PhoneRegister(defaultData);
register.getTypes();
```

Returns:

```json
["home", "work", "mobile"]
```

## Test 2: getType with empty type in modified data json

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [{ "type": "home", "number": "56743290" }]
  }
]
```

Create register with modified data.

```js
const register = new PhoneRegister(Data);
register.getTypes();
```

Returns:

```json
["home", "", "work"]
```

## Test 3. Only home phones

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "home", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [{ "type": "home", "number": "56743290" }]
  }
]
```

Create register with modified data:

```js
const register = new PhoneRegister(newData);
register.getTypes();
```

Returns

```json
["home"]
```

## Test 4. Person have no phones

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

Create register with test data:

```js
const register = new PhoneRegister(testData);
register.getTypes();
```

returns an empty array []

## Test 5. No persons

Create register with empty array:

```js
const register = new PhoneRegister([]);
register.getTypes();
```
