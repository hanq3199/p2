const db=require("./db");

exports.findPokemonByName=function findPokemonByName(name) {
    const data = db.db.find((p) => p.name.toLowerCase() === name.toLowerCase());
    if (!data) {
      return null;
    }
    return data;
  }

  exports.findPokemonByType=function findPokemonByType(type) {
    const data = db.db.find((p) => p.types.toLowerCase() === type.toLowerCase());
    if (!data) {
      return null;
    }
    return data;
  }