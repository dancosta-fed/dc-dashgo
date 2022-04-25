import faker from '@faker-js/faker'
import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'
// Use the active record from rails here.

type User ={
  name: string,
  email: string,
  created_at: string,
}

export function makeServer() {
  const server = createServer({
    // this will allow me to work with user registrations and also work with relations
    serializers: {
      applications: ActiveModelSerializer, // activer records
    },

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
      server.createList('user', 200) // creating 10 fake users
    },
    
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users', function (schema, request){
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('user').length
        const pageStart = (Number(page) - 1)* Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

        return new Response(
          200,
          {'x-total-count': String(total)},
          { users }
        )
      })
      this.get('users/:id')
      this.post('/users')
    
      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}