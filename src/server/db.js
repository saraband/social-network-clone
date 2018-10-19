import Sequelize from 'sequelize'
import _ from 'lodash'
import Faker from 'faker'

const db = new Sequelize(
  'postgres',
  'postgres',
  'password',
  {
    dialect: 'postgres',
    host: 'localhost'
  }
)

const User =  db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

/* RELATIONSHIPS */
User.hasMany(Post)
Post.belongsTo(User)

/* MOCK DATA */
db.sync({force: true}).then(() => {
  _.times(10, () => {
    return User.create({
      username: Faker.name.firstName()
    }).then(user => {
      return user.createPost({
        title: `Sample title by ${user.username}`,
        content: 'This is a sample article.'
      })
    })
  })
})


export default db