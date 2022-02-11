
exports.up = function(knex) {
  knex.schema.createTable("users", (table)=>{
      table.increments("id");
      tablle.string("username")
      table.string("password")
  })
};

exports.down = function(knex) {
return knex.schema.dropTable("users");
};
