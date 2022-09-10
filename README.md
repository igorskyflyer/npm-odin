# 🔱 Odin 🔺

🔱 Odin is an Object wrapper that allows you to create objects and set their attributes - all at once! 🔺

<br>

## Usage 🎡

Install it by executing

```shell
npm i "@igor.dvlpr/odin"
```

then, import it into your project, i.e.:

```js
const { odin } = require('@igor.dvlpr/odin')

const cloned = odin({ a: 1, b: 2 }, { c: 3 }) // returns { a: 1, b: 2, c: 3 }
```

<br>

## API 📚

```ts
odin(target: object, source: object): object
```

Assigns all properties of the source object to the target object.

 <br>

`target: object` - the target object to copy properties to,

`source: object` - the source object to copy properties from.

<br>

Returns the target object.

If the **_target_** object is not provided and empty object is returned.

If the **_source_** object is not provided the **_target_** object is returned unchanged.

<br>
 
 NOTE: this function uses the method of shallow copying of the source object, for deep/true copied objects consider using [clone.js](https://github.com/igorskyflyer/npm-clone-js).

For more info, see, [shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) vs [deep copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy).
