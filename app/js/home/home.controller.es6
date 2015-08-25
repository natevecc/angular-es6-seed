class HomeController {
  constructor(Users) {
    this.Users = Users

    this.users = Users.findAll()
    this.newUser = {}
  }

  addUser() {
    this.Users.create(this.newUser)
    this.newUser = {}
  }
}

HomeController.$inject = ['Users']
export default HomeController