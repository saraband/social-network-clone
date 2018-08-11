import Sequelize from 'sequelize'
import _ from 'lodash'
import Faker from 'faker'

const Conn = new Sequelize(
  'social-network-clone',
  'postgres',
  'password',
  {
    dialect: 'postgres',
    host: 'localhost'
  }
)

const User =  Conn.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Post = Conn.define('post', {
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
Conn.sync({force: true}).then(() => {
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


export default Conn