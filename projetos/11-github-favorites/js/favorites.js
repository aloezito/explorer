import { GithubUser } from "./githubuser.js"
// classe que vai contar a lógica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()

    GithubUser.search("maykbrito").then((user) => console.log(user))
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || []
    /* this.entries = [
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "76",
        followers: "120000",
      },
      {
        login: "diego3g",
        name: "Diego Fernandes",
        public_repos: "76",
        followers: "120000",
      },
    ]
    this.entries = entries */
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries))
  }

  async add(username) {
    try {
      const userExists = this.entries.find((entry) => entry.login === username)

      if (userExists) {
        throw new Error("Usuário já cadastrado!")
      }

      const user = await GithubUser.search(username)

      if (user.login === undefined) {
        throw new Error("Usuário não encontrado!")
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()
    } catch (error) {
      alert(error.message)
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter((entry) => entry.login !== user.login)
    console.log(filteredEntries)

    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

//classe que vai criar a visualização e everntos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody")

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector(".search button")
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input")

      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entries.forEach((user) => {
      const row = this.createRow()

      row.querySelector(".user img").src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `Imagem de ${user.name}`
      row.querySelector(".user a").href = `https://github.com/${user.login}`
      row.querySelector(".user p").textContent = user.name
      row.querySelector(".user span").textContent = user.login
      row.querySelector(".repositories").textContent = user.public_repos
      row.querySelector(".followers").textContent = user.followers
      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja remover esse favorito?")
        if (isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement("tr")

    tr.innerHTML = `
          <td class="user">
            <div class="user-wrapper">
              <a href="https://github.com/maykbrito" target="_blank">
                <img src="https://github.com/maykbrito.png" alt="Imagem de Mayk Brito">
                <div class="links-wrapper">
                  <p>Mayk Brito</p>
                  <span>maykbrito</span>
                </div>
              </a>
            </div>
          </td>
          <td class="repositories">
            76
          </td>
          <td class="followers">
            9589
          </td>
          <td class="remove">
            <button>&times;</button>
          </td>
    `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove()
    })
  }
}
