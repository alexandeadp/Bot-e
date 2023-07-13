// Array de insultos
const insults = [
    "Eres tan [adjetivo] como un [sustantivo] en un [lugar].",
    "Tu [parte del cuerpo] es tan [adjetivo] que parece un [objeto].",
    "No eres más que un [adjetivo] [sustantivo].",
    "Tu inteligencia es tan baja que ni siquiera podrías [verbo].",
    "Eres [adjetivo] como un [animal]."
  ];
  
  // Función para generar un insulto aleatorio
  function generateInsult(name) {
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
   
    const adjectives = ["estúpido", "idiota", "incompetente", "patético","tarado"];
    const nouns = ["estúpido", "idiota", "incompetente", "patético"];
    const locations = ["percia", "aruba", "colombia", "argentina", "peru", "brasil", "chile", "perú", "argentina", ];
    const bodyParts = ["estomago", "pies", "zobaco", "trasero"];
    const objects = ["armario", "silla", "estufa", "martillo"];
    const animals = ["perro", "nutria", "cucaracha", "serpiente"];
    const verbs = ["eres", "soy", "son", "ellos"];
    const somethime = ["escroto", "sandia", "avion", "oceano"];

   
   
   
    const insult = randomInsult
      .replace("[adjetivo]", getRandomElement(adjectives))
      .replace("[sustantivo]", getRandomElement(nouns))
      .replace("[lugar]", getRandomElement(locations))
      .replace("[parte del cuerpo]", getRandomElement(bodyParts))
      .replace("[objeto]", getRandomElement(objects))
      .replace("[verbo]", getRandomElement(verbs))
      .replace("[animal]", getRandomElement(animals))
      .replace("[somethime]", getRandomElement(somethime));

      return insult.replace("[nombre]", name);
  }
  
  // Función para obtener un elemento aleatorio de un array
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  // Ejemplo de uso
  const name = "John"; // Reemplaza con el nombre deseado
  const insult = generateInsult(name);
  

  module.exports = { generateInsult };

  