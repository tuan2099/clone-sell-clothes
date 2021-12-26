var api = 'https://jsonplaceholder.typicode.com/posts'


fetch(api)
    .then(function (response) {
        return response.json()
    })
    .then(function (posts) {
        var htmls = posts.map((post , index) => {
            return `<div>${post.title}</div>`
        })

        var html = htmls.join('')
        document.getElementById('root').innerHTML = html
    })
    .catch(function (err) {
        console.log(err)
    })