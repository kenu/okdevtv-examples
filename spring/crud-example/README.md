# Spring Data REST - CRUD Application Tutorial and Examples

## Referenced Tutorial
- [Spring Data REST CRUD Example](https://www.amitph.com/spring-data-rest-example/)
- https://github.com/amitrp/spring-examples

### Git Checkout
```
git clone https://github.com/kenu/okdevtv-examples.git
cd okdevtv-examples/spring/crud-example
```

## How to Run
- **Edit 2 files to match your database**
  - `pom.xml`
  - `src/main/resources/application.properties`
- `mvn spring-boot:run`
- `curl localhost:8080/students`
- `curl -XPOST localhost:8080/students -H "content-type: application/json" -d '{"name": "hello"}'`
- `curl localhost:8080/students/1`
- `curl -XDELETE localhost:8080/students/1`
