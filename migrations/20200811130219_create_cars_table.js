//cars table
// The client for this API is a car dealer who has provided the following specs:

//     The critical information for each car is the VIN, make, model, and mileage.
//     They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

// the changes we want to make
exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.text("VIN", 255).notNullable().unique();
    tbl.string("make", 255).notNullable();
    tbl.string("model", 255).notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("transmission type", 255);
    tbl.string("status", 255);
  });
};
// undo the changes
exports.down = function (knex) {
  // drop the cars table
  return knex.schema.dropTableIfExists("cars");
};
