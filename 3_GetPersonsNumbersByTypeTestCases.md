# Test cases for getPersonsNumbersByType

## **getPersonsNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of the given `type` belonging to given person with `firstname` and `lastname`.

For example Leila Hökki and work:

```json
["87654321", "05040302"]
```

Matt River and mobile:

```json
["040981265"]
```

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If at least one parameter is missing, an exception `missing parameter` is thrown.

All tests use the default data

```js
const register = new PhoneRegister(defaultData);
```

### Test 1: Leila Hökki and work

Returns

```json
["87654321", "05040302"]
```

### Test 2: Matt River and mobile

Returns

```json
["040981265"]
```

### Test 3: Wrong type or name

Test with values

- firstname Matt, lastname River, type x
- firstname Matt, lastname x, type mobile
- firstname x, lastname River, type mobile

Returns []

### Test 4: At least one parameter is missing

- 1 parameter missing: `Matt`, `River`
- 2 parameter missing: `Matt`
- All parameters missing

Throws an exception `missing parameter`

### Test 5: testing empty string as type using modified data
