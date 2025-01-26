# URL Shortener

![url-shortener](.github/banner.png)

[API SHORTENER](https://github.com/Matheus1714/url-shortener-api) is a project that is a solution as the challenge of the [Bootcamp Eduzz Fullstack Developer](https://www.dio.me/bootcamp/eduzz-fullstack-developer) program offered by DIO ([dio.me](https://web.dio.me/)). It is a dynamic API harnesses the power of [TypeScript](https://www.typescriptlang.org/) and [Node.js](https://nodejs.org/) to provide a solution for aspiring fullstack developers.

## Technologies

The main technologies in this project are:

* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)
* [TypeORM](https://typeorm.io/)



## Start Project

```bash
docker compose up -d
```

## Test API

To test the API, POST to the [/shorten](http://localhost:5000/shorten) route using the terminal or [Postman](https://www.postman.com/).

**[REST Client]**

```r
@base_url=http://localhost:5000

###

# shortener

POST {{base_url}}/shorten
content-type: application/json

{
    "originURL": "https://www.youtube.com/watch?v=9X7I3bW49S8&ab_channel=CamelliaOfficial"
}
```