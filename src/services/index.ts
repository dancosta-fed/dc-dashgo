import faker from '@faker-js/faker'
import { createServer, Factory, Model } from 'miragejs'

<<<<<<< HEAD
// type of info from user
=======
// Types user is gonna have
>>>>>>> d5d19f9f5ff69d6577106f24d91405e37a653a22
type User ={
  name: string,
  email: string,
  created_at: string,
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i) {
          // return `User ${i + 1}`
          return  faker.name.findName()
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          // Create new recent date in 10 days rage, from today
          return faker.date.recent(10, new Date())
        },
      })
    },

    seeds(server){
      server.createList('user', 10) // creating 10 fake users
    },
    
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users')
      this.post('/users')
    
      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}