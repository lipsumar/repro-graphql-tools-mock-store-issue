This repository reproduces an issue with @graphql-tools/mock.

## How to reproduce

1. Clone this repo and `cd` into it
2. `yarn install`
3. `node index.js`

This should produce the following output:

```json
{
  "data": {
    "book": {
      "id": 63,
      "title": "Mock value for Book.title"
    },
    "booksViaMocks": [
      {
        "id": -52,
        "title": "Mock value for Book.title"
      },
      {
        "id": -99,
        "title": "Mock value for Book.title"
      },
      {
        "id": -43,
        "title": "Mock value for Book.title"
      }
    ],
    "booksViaResolvers": [
      null,
      null,
      null
    ],
    "booksViaResolvers2": [
      {
        "id": 70,
        "title": "Hello World"
      },
      {
        "id": 59,
        "title": "Hello World"
      },
      {
        "id": 6,
        "title": "Hello World"
      }
    ]
  }
}
```