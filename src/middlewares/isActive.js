const { UserServices } = require('../services');
const userServices = new UserServices();

module.exports = async (req, res, next) => {
  const { id_user } = req.params;
    const user  = await userServices.getRegister("id_user", id_user);
    if(user.activeState === 1) {
      next();
    } else {
      return res.status(401).json({ message: "Usuario desativado" });
    }
}