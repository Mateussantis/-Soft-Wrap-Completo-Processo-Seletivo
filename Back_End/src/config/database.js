module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'softwrap',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}