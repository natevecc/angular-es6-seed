import _ from 'lodash'

class Users {
  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Ben Garvey',
        occupation: 'Senior Software Engineer',
        employer: 'RJMetrics'
      },
      {
        id: 2,
        name: 'Nate Vecchiarelli',
        occupation: 'Software Engineer',
        employer: 'Jefferson University TICE'
      }
    ]
  }

  findAll() {
    return this.users
  }

  find(id) {
    return _.find(this.users, {id: +id})
  }

  create(data) {
    const newData = _.clone(data)
    const maxId = _(this.users)
      .map(user => user.id)
      .max()
    newData.id = maxId + 1
    this.users.push(newData)
    return newData
  }

  delete(id) {
    this.users = _.without(this.users, this.find(id))
  }
}
Users.$inject = []

export default Users