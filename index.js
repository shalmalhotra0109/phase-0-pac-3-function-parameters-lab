function introduction(name = "Aki") {
    return `Hi, my name is ${name}.`;
  }
  console.log(introduction('Aki'));

  
  function introductionWithLanguage(name = "Aki", language = "Ember.js") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguage('Aki', 'Ember.js'));

  function introductionWithLanguageOptional(name = 'Gracie', language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
 }
 console.log(introductionWithLanguageOptional('Gracie', 'JavaScript'));