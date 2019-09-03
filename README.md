# Algorithm Challenge One

## Background

My colleagues and I were ~~goofing around~~ doing really hard work around when I suggested a challenge,

"Given a JSON data of trips i've taken in 2019 as ...

```json
{
  "trips": [
    {
      "city_from": "Lagos",
      "city_to": "Milan",
      "duration": "12 hours , 45 Mins"
    },
    {
      "city_from": "Milan",
      "city_to": "Berlin",
      "duration": "6 hour, 30 mins"
    },
    {
      "city_from": "Berlin",
      "city_to": "Frankfurt",
      "duration": "2 hour, 40 mins"
    }
  ]
}
```

Write a function that returns the total duration of my trips in the format 21 hours, 55 minutes or XY hours if no extra minutes".

## Functional Much

I thought i'd have my fun with this so I set up a Node project with

- Babel

- Jest tests
  and at I just knew I had to make it functional.
  Didn't use Lodash, Ramda or something like that, just wanted to have my fun with the things I have been reading on [Mostly Adequate](https://mostly-adequate.gitbooks.io)

## Running locally

```bash
npm install
```

or like me 😎

```bash
yarn
```

To run the tests

```bash
jest
```
