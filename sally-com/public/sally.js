// 方法一 CORS
// const request = new XMLHttpRequest()
// request.open('GET','http://qq.com:8888/friend.json')
// request.onreadystatechange = () => {
//     if(request.readyState ===4 && request.status === 200){
//         console.log(request.response)
//     }
// }
// request.send()

// 方法二 JSONP
function jsonp(url) {
    return new Promise((resolve,rejects) => {
        const random = 'sallyJSONPCallbackName'+Math.random()
        window[random] = data => {
            resolve(data)
        };
        const script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        script.onload = () => {
            script.remove()
        };
        script,onerror = () => {
            rejects();
        }
        document.body.appendChild(script)
    })
}

jsonp('http://qq.com:8888/friends.js')
  .then((data) => {
      console.log(data)
  })