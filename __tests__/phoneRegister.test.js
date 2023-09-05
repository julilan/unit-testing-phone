'use strict';

const PhoneRegister = require('../phoneRegister');
const phones = require('../phones.json');

describe('Testing constructor', () => {
  test('Test 1: missing parameter throws an exception', () => {
    expect(() => new PhoneRegister()).toThrow('phone data missing');
  });
});

describe('Testing getTypes method', () => {
  test('Test 1: getTypes from default data json.', () => {
    const register = new PhoneRegister(phones);
    expect(register.getTypes()).toEqual(['home', 'work', 'mobile']);
  });
  // same as above but more readable
  test('Test 1: getTypes from default data json.', () => {
    const register = new PhoneRegister(phones);
    const expectedResult = ['home', 'work', 'mobile'];
    expect(register.getTypes()).toEqual(expectedResult);
  });

  test('Test 2: getType with empty type in modified data json', () => {
    const testData = [  {
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
    }];
    const expectedResult = ['home',"" ,'work'];
    expect(new PhoneRegister(testData).getTypes()).toEqual(expectedResult);
  });

  test('Test 3: Only home phones in modified data json', () => {
    const testData = [  {
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
    }];
    const expectedResult = ['home'];
    expect(new PhoneRegister(testData).getTypes()).toEqual(expectedResult);
  });

  test('Test 4: No phones in modified data json', () => {
    const testData = [ 
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
    ];
    const expectedResult = [];
    expect(new PhoneRegister(testData).getTypes()).toEqual(expectedResult);
  });

  test('No person', () => {
    const register = new PhoneRegister([]);
    expect(register.getTypes()).toEqual([]);
  });
});

describe('Testing getPersonsNumbersByType method', () => {
  const register = new PhoneRegister(phones);

  describe('Tests 1-3 wrong type or name', () => {
    const testValues = [
      ['Leila', 'Hökki', 'work', ["87654321", "05040302"]],
      ['Matt', 'River', 'mobile', ["040981265"]],
      ['Matt', 'River', 'x', []],
      ['Matt', 'x', 'mobile', []],
      ['x', 'River', 'mobile', []],
    ];

    test.each(testValues)('%s, %s, %s returns %s', (fn, ln, type, result) => {
      expect(register.getPersonsNumbersByType(fn, ln, type)).toEqual(result);
    });
  });

  describe('Tests 4, at least one parameter missing', () => {
    test('one parameter missing',()=>{
      expect(()=>register.getPersonsNumbersByType('Matt', 'River').toThrow('missing parameter'))
    })
    test('two parameters missing',()=>{
      expect(()=>register.getPersonsNumbersByType('Matt').toThrow('missing parameter'))
    })
    test('all parameters missing',()=>{
      expect(()=>register.getPersonsNumbersByType().toThrow('missing parameter'))
    })
  });

  describe('Test 5: testing empty string as type using modified data',()=>{
    const testData = [  {
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
    }];
    test('Yest firstname:Leila, lastname:Hökki and type:""', ()=>{
      const modifiedregister = new PhoneRegister(testData);
      expect(modifiedregister.getPersonsNumbersByType('Leila','Hökki', '')).toEqual(["353553732"])
    })
  })
});

