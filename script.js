const ramos = [
  {
    id: "parv111",
    nombre: "Parv 111 Bases Socio Antropológicas Y Filosóficas De La Educación"
  },
  {
    id: "parv112",
    nombre: "Parv 112 Infancia Y Transformaciones De La Modernidad"
  },
  {
    id: "parv113",
    nombre: "Parv 113 Desarrollo Personal, Emocionalidad Autorregulación"
  },
  {
    id: "parv114",
    nombre: "Parv 114 Lenguaje Y Cognición"
  },
  {
    id: "parv115",
    nombre: "Parv 115 Fundamentos Y Practica De La Educación Parvularia"
  },
  {
    id: "parv116",
    nombre: "Parv 116 Sensibilidad, Creatividad Y Lenguajes Expresivos"
  },
  {
    id: "parv117",
    nombre: "Parv 117 Biología Humana"
  },
  {
    id: "parv121",
    nombre: "Parv 121 Teorías De La Educación Y Corrientes Pedagógicas Contemporáneas"
  },
  {
    id: "parv124",
    nombre: "Parv 124 Lenguajes Artísticos",
    requisitos: ["parv116"]
  },
  {
    id: "parv125",
    nombre: "Parv 125 Profesionalismo Y Practica Inicial I",
    requisitos: ["parv115"]
  },
  {
    id: "parv126",
    nombre: "Parv 126 Bases Neurobiológicas Del Ser Humano",
    requisitos: ["parv117"]
  },
  {
    id: "parv127",
    nombre: "Parv 127 Psicología General Y Del Desarrollo"
  },
  {
    id: "parv212",
    nombre: "Parv 212 Psicología Del Aprendizaje",
    requisitos: ["parv127"]
  },
  {
    id: "parv214",
    nombre: "Parv 214 Didáctica De Los Lenguajes Artísticos",
    requisitos: ["parv124"]
  },
  {
    id: "parv215",
    nombre: "Parv 215 Profesionalismo Y Practica Inicial II",
    requisitos: ["parv125"]
  },
  {
    id: "parv216",
    nombre: "Parv 216 Didáctica Del Desarrollo Personal Y Oscila",
    requisitos: ["parv115"]
  },
  {
    id: "parv221",
    nombre: "Parv 221 Evaluación Educativa",
    requisitos: ["parv211"]
  },
  {
    id: "parv224",
    nombre: "Parv 224 Didáctica Para La Comprensión Del Entorno Natural",
    requisitos: ["parv211"]
  },
  {
    id: "parv227",
    nombre: "Parv 227 Profesionalismo Y Practica Intermedia I",
    requisitos: ["parv215"]
  },
  {
    id: "parv228",
    nombre: "Parv 228 Promoción De La Salud",
    requisitos: ["parv217"]
  },
  {
    id: "parv314",
    nombre: "Parv 314 Didáctica Del Lenguaje Oral Y Escrito",
    requisitos: ["parv221"]
  },
  {
    id: "parv315",
    nombre: "Parv 315 Didáctica Para La Comprensión Del Entorno Sociocultural",
    requisitos: ["parv221"]
  },
  {
    id: "parv316",
    nombre: "Parv 316 Didáctica De La Motricidad Infantil",
    requisitos: ["parv226"]
  },
  {
    id: "parv317",
    nombre: "Parv 317 Profesionalismo Y Practica Intermedia II",
    requisitos: ["parv227"]
  },
  {
    id: "parv324",
    nombre: "Parv 324 Didáctica Para El Desarrollo Del Pensamiento Matemático",
    requisitos: ["parv221"]
  },
  {
    id: "parv325",
    nombre: "Parv 325 Profesionalismo Y Practica Intermedia III",
    requisitos: ["parv317"]
  },
  {
    id: "parv327",
    nombre: "Parv 327 Taller De Integración Perfil UV I"
  },
  {
    id: "parvpds414",
    nombre: "PARV-PDS 414 Tesis I",
    requisitos: ["plancomunaprobado"]
  },
  {
    id: "parvpds423",
    nombre: "PARV-PDS 423 Tesis II",
    requisitos: ["parvpds414"]
  },
  {
    id: "parvpds424",
    nombre: "PARV-PDS 424 Practica Mención Promoción De La Salud II",
    requisitos: ["parvpds415"]
  },
  {
    id: "parvpds425",
    nombre: "PARV-PDS 425 Taller De Integración Perfil UV II",
    requisitos: ["parv327"]
  },
  {
    id: "parvctl423",
    nombre: "PARV-CTL 423 Tesis II",
    requisitos: ["parv414"]
  },
  {
    id: "parvctl424",
    nombre: "PARV-CTL 424 Practica Mención Comunicación Trastornos Del Lenguaje II",
    requisitos: ["parvctl415"]
  },
  {
    id: "parvctl425",
    nombre: "PARV-CTL 425 Taller De Integración Perfil UV II",
    requisitos: ["parv327"]
  },
  {
    id: "parv513",
    nombre: "Parv 513 Taller De Integración Perfil Uv II",
    requisitos: ["parvpds425", "parvctl425"]
  }
];
