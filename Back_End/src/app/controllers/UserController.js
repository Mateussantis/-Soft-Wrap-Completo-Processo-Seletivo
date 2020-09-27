const User = require('../models/User');

class UserController {

  async store(req, res) {
    try {
      const { id, nome, idade, estado_civil, cpf, cidade, estado } = await User.create(req.body);

      return res.json({
        id,
        nome,
        idade,
        estado_civil,
        cpf,
        cidade,
        estado
      });
    }
    catch {
      return res.json({ Message: "Não foi possivel cadastrar este usuario, por gentileza insira todos os dados!"})
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const user = await User.findByPk(id);

    if(user == null) {
      return res.json({ Message: "Lamentamos, este Id de Usuario não existe!"});
    }

    const { nome, idade, estado_civil, cpf, cidade, estado } = await user.update(req.body);

    return res.json({
      id,
      nome,
      idade,
      estado_civil,
      cpf,
      cidade,
      estado
    });
  }

  async delete(req, res) {
    const id = req.params.id;
    const user = await User.findByPk(id);

    if(!user) {
      return res.json({ message: "Lamentamos, este Id de Usuario não existe!"})
    }

    await User.destroy( { where: { id } } );

    return res.json({ message: `Este Usuario acaba de ser excluido!`});
  }

  async get(req, res) {
    const user = await User.findAll();

    return res.json(user);
  }

}

module.exports = new UserController();