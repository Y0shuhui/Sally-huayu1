# Sally-huayu1
## 跨域被阻止方法
1. 方法一：CORS（款与资源共享）
* 缺点是不兼容 IE

``javascript
Access-Control-Allow-Origin:http://sally.com:9999
``


2. 方法二：JSONP

``
优点：兼容 IE，可以跨域
缺点：由于是 script，拿不到状态码，不支持 POST
``
