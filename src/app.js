window.onload = function() {
  let articles = ["the", "an", "some", "another", "any"];
  let adjectives = ["awesome", "nice", "fantastic", "cool", "happy"];
  let nouns = ["website", "blog", "webapp", "spot", "hub"];
  let tlds = [".com", ".es", ".au", ".org", ".dev", ".nz"];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          let domain = article + adjective + noun + tld;
          console.log(domain);
        }
      }
    }
  }
};
