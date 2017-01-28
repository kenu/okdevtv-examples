## 컨셉
```
var result = [];

// 명단
var users = getUsers();

// 사람별 Article
for(user in users) {
   var articles = getArticlesByUser(user.seq);
   result.push({"user": user, "articles": articles})
}

return result;
```
