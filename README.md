<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-odin/main/media/odin.png" alt="Icon of Odin" width="256" height="256">
  <h1>Odin</h1>
</div>

<br>

<h4 align="center">
  🔱 Odin is an Object wrapper that allows you to create objects and set their attributes - all at once! 🔺
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- ⚡ Fast merge - Assigns all source props to target in one go
- 🛡 Type‑safe - Leverages TS generics for compile‑time checks
- 🧩 Shallow copy - Efficiently copies only top‑level properties
- 🔄 In‑place update - Mutates and returns the target object
- 📝 Clear signature - Simple, predictable API
- 📦 Zero dependencies - Pure TypeScript, no extras
- 🌍 Cross‑platform - Works in browser and Node.js
- 🧠 Safe defaults - Handles missing or invalid inputs gracefully

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/odin
```

```bash
yarn add @igorskyflyer/odin
```

```bash
npm i @igorskyflyer/odin
```

<br>
<br>

## 🤹🏼 API

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

> ℹ️ **NOTE**
>
> *Shallow vs deep copy*
>
> This function uses the method of shallow copying of the source object, for deep/true copied objects consider using [clone.js](https://github.com/igorskyflyer/npm-clone-js).
>
> For more info, see, [shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) vs [deep copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy).
>

<br>
<br>

## 🗒️ Examples

```ts
import { odin } from '@igorskyflyer/odin'

const cloned: object = odin({ a: 1, b: 2 }, { c: 3 }) // returns { a: 1, b: 2, c: 3 }
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-odin/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-odin/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/common-color](https://www.npmjs.com/package/@igorskyflyer/common-color)

> _🎨 Provides common Color-related TypeScript types. 🌈_

<br>

[@igorskyflyer/magic-queryselector](https://www.npmjs.com/package/@igorskyflyer/magic-queryselector)

> _🪄 A TypeScript-types patch for querySelector/querySelectorAll, make them return types you expect them to! 🔮_

<br>

[@igorskyflyer/upath](https://www.npmjs.com/package/@igorskyflyer/upath)

> _🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬_

<br>

[@igorskyflyer/strip-yaml-front-matter](https://www.npmjs.com/package/@igorskyflyer/strip-yaml-front-matter)

> _🦓 Strips YAML front matter from a String or a file. 👾_

<br>

[@igorskyflyer/registry-apppaths](https://www.npmjs.com/package/@igorskyflyer/registry-apppaths)

> _🪀 A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt. 🗃_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
