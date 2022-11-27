class Tag extends Model {}
Tag.init({
  name: Sequelize.STRING
}, { sequelize, modelName: 'tag' });
    
Product.hasMany(Tag);
// Also works for `belongsToMany`.