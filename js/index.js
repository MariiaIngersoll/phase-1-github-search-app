const format = document.getElementById('github-form')
format.addEventListener("submit", (event) => {

    event.preventDefault()
    event.target[0].value
    fetch(`https://api.github.com/search/users?q=${event.target[0].value}`)
        .then(response => response.json())
        .then(response => {
            response.items.map(item => {
                const li = document.createElement("li")
                const h2 = document.createElement("h2")
                h2.textContent = item.login
                h2.addEventListener("click", showUserRepos(item.login, event))
                const img =document.createElement("img")
                img.src = item.avatar_url
                
                const userList = document.querySelector("#user-list")
                li.append(h2, img)
                userList.append(li)

                
                
             } )
        })
})
function showUserRepos(username, e) {
    e.preventDefault()
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(response => response.map(repo => {
        const li = document.createElement("li")
        const h1 = document.createElement("h1")
        h1.textContent = repo.name
        const repoList = document.getElementById("repos-list")

       li.append(h1)
        repoList.append(li)

    }))
        
}