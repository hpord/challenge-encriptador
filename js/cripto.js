export function encriptar(text) {
  return [...text]
    .map((c) => {
      switch (c) {
        case "a":
          return "ai";
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "o":
          return "ober";
        case "u":
          return "ufat";
        default:
          return c;
      }
    })
    .join("");
}

export function desencriptar(text) {
  const reemplazos = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  return text.replace(/enter|imes|ai|ober|ufat/g, (match) => reemplazos[match]);
}
