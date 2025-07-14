const ramos = [
  // Primer Año - Primer Semestre
  { id: "parv111", nombre: "Parv 111 Bases Socio Antropológicas Y Filosóficas De La Educación" },
  { id: "parv112", nombre: "Parv 112 Infancia Y Transformaciones De La Modernidad" },
  { id: "parv113", nombre: "Parv 113 Desarrollo Personal, Emocionalidad Autorregulación" },
  { id: "parv114", nombre: "Parv 114 Lenguaje Y Cognición" },
  { id: "parv115", nombre: "Parv 115 Fundamentos Y Practica De La Educación Parvularia" },
  { id: "parv116", nombre: "Parv 116 Sensibilidad, Creatividad Y Lenguajes Expresivos" },
  { id: "parv117", nombre: "Parv 117 Biología Humana" },

  // Primer Año - Segundo Semestre
  { id: "parv121", nombre: "Parv 121 Teorías De La Educación Y Corrientes Pedagógicas Contemporáneas" },
  { id: "parv122", nombre: "Parv 122 Ética, Valores Y Ciudadanía" },
  { id: "parv123", nombre: "Parv 123 Construcción De La Identidad Profesional" },
  { id: "parv124", nombre: "Parv 124 Lenguajes Artísticos", requisitos: ["parv116"] },
  { id: "parv125", nombre: "Parv 125 Profesionalismo Y Practica Inicial I", requisitos: ["parv115"] },
  { id: "parv126", nombre: "Parv 126 Bases Neurobiológicas Del Ser Humano", requisitos: ["parv117"] },
  { id: "parv127", nombre: "Parv 127 Psicología General Y Del Desarrollo" },

  // Segundo Año - Tercer Semestre
  { id: "parv211", nombre: "Parv 211 Currículum En Educación" },
  { id: "parv212", nombre: "Parv 212 Psicología Del Aprendizaje", requisitos: ["parv127"] },
  { id: "parv213", nombre: "Parv 213 Liderazgo Y Gestión De Organizaciones" },
  { id: "parv214", nombre: "Parv 214 Didáctica De Los Lenguajes Artísticos", requisitos: ["parv124"] },
  { id: "parv216", nombre: "Parv 216 Didáctica Del Desarrollo Personal Y Oscila", requisitos: ["parv115"] },
  { id: "parv215", nombre: "Parv 215 Profesionalismo Y Practica Inicial II", requisitos: ["parv125"] },
  { id: "parv217", nombre: "Parv 217 Salud Y Desarrollo Humano" },
  { id: "parv218", nombre: "Parv 218 Taller De Nivelación De Inglés" },

  // Segundo Año - Cuarto Semestre
  { id: "parv221", nombre: "Parv 221 Evaluación Educativa", requisitos: ["parv211"] },
  { id: "parv222", nombre: "Parv 222 Lenguaje Y Comunicación" },
  { id: "parv223", nombre: "Parv 223 Familia Y Derechos De Familia" },
  { id: "parv224", nombre: "Parv 224 Didáctica Para La Comprensión Del Entorno Natural", requisitos: ["parv211"] },
  { id: "parv226", nombre: "Parv 226 Motricidad Infantil" },
  { id: "parv227", nombre: "Parv 227 Profesionalismo Y Practica Intermedia I", requisitos: ["parv215"] },
  { id: "parv225", nombre: "Parv 225 Salud En La Primera Infancia" },
  { id: "parv228", nombre: "Parv 228 Promoción De La Salud", requisitos: ["parv217"] },

  // Tercer Año - Quinto Semestre
  { id: "parv311", nombre: "Parv 311 Métodos De Investigación Cuantitativa" },
  { id: "parv312", nombre: "Parv 312 Territorio, Comunidad Y Trabajo En Redes" },
  { id: "parv314", nombre: "Parv 314 Didáctica Del Lenguaje Oral Y Escrito", requisitos: ["parv221"] },
  { id: "parv315", nombre: "Parv 315 Didáctica Para La Comprensión Del Entorno Sociocultural", requisitos: ["parv221"] },
  { id: "parv316", nombre: "Parv 316 Didáctica De La Motricidad Infantil", requisitos: ["parv226"] },
  { id: "parv317", nombre: "Parv 317 Profesionalismo Y Practica Intermedia II", requisitos: ["parv227"] },
  { id: "parv313", nombre: "Parv 313 Diversidades, Interculturalidades Y Perspectiva De Género" },

  // Tercer Año - Sexto Semestre
  { id: "parv321", nombre: "Parv 321 Métodos De Investigación Cualitativa" },
  { id: "parv322", nombre: "Parv 322 Proyectos Educativos" },
  { id: "parv323", nombre: "Parv 323 Tecnologías E Informática Educativa" },
  { id: "parv324", nombre: "Parv 324 Didáctica Para El Desarrollo Del Pensamiento Matemático", requisitos: ["parv221"] },
  { id: "parv326", nombre: "Parv 326 Diversificación De La Enseñanza" },
  { id: "parv325", nombre: "Parv 325 Profesionalismo Y Practica Intermedia III", requisitos: ["parv317"] },
  { id: "parv327", nombre: "Parv 327 Taller De Integración Perfil UV I" },

  // Cuarto Año - Plan Promoción De La Salud - Séptimo y Octavo
  { id: "parvpds411", nombre: "PARV-PDS 411 Factores Protectores Psicosociales", requisitos: ["comun"] },
  { id: "parvpds412", nombre: "PARV-PDS 412 Motricidad Y Vida Saludable", requisitos: ["comun"] },
  { id: "parvpds413", nombre: "PARV-PDS Alimentación Saludable En La Niñez", requisitos: ["comun"] },
  { id: "parvpds414", nombre: "PARV-PDS 414 Tesis I", requisitos: ["comun"] },
  { id: "parvpds415", nombre: "PARV-PDS 415 Práctica Promoción Salud I", requisitos: ["comun"] },
  { id: "parvpds421", nombre: "PARV-PDS 421 Educación Para La Salud En La Primera Infancia", requisitos: ["comun"] },
  { id: "parvpds422", nombre: "PARV-PDS 422 Contextos Educativos Saludables Y Sostenibles", requisitos: ["comun"] },
  { id: "parvpds423", nombre: "PARV-PDS 423 Tesis II", requisitos: ["parvpds414"] },
  { id: "parvpds424", nombre: "PARV-PDS 424 Práctica Promoción Salud II", requisitos: ["parvpds415"] },
  { id: "parvpds425", nombre: "PARV-PDS 425 Taller De Integración Perfil UV II", requisitos: ["parv327"] },

  // Cuarto Año - Plan Comunicación y Trastornos del Lenguaje
  { id: "parvctl411", nombre: "PARV-CTL 411 Bases Anatómicas Del Crecimiento", requisitos: ["comun"] },
  { id: "parvctl412", nombre: "PARV-CTL 412 Evolución Del Lenguaje Oral", requisitos: ["comun"] },
  { id: "parvctl413", nombre: "PARV-CTL 413 Evolución Del Lenguaje Escrito", requisitos: ["comun"] },
  { id: "parvctl414", nombre: "PARV-CTL 414 Tesis I", requisitos: ["comun"] },
  { id: "parvctl415", nombre: "PARV-CTL 415 Práctica Comunicación Y Trastornos I", requisitos: ["comun"] },
  { id: "parvctl421", nombre: "PARV-CTL 421 Trastornos Del Lenguaje", requisitos: ["comun"] },
  { id: "parvctl422", nombre: "PARV-CTL 422 Contextos Educativos Saludables Y Sostenibles", requisitos: ["comun"] },
  { id: "parvctl423", nombre: "PARV-CTL 423 Tesis II", requisitos: ["parvctl414"] },
  { id: "parvctl424", nombre: "PARV-CTL 424 Práctica Comunicación Trastornos II", requisitos: ["parvctl415"] },
  { id: "parvctl425", nombre: "PARV-CTL 425 Taller De Integración Perfil UV II", requisitos: ["parv327"] },

  // Quinto Año - Noveno Semestre
  { id: "parv511", nombre: "Parv 511 Práctica Profesional", requisitos: ["parvpds425", "parvctl425"] },
  { id: "parv512", nombre: "Parv 512 Taller Práctica Profesional", requisitos: ["parvpds425", "parvctl425"] },
  { id: "parv513", nombre: "Parv 513 Taller De Integración Perfil UV II", requisitos: ["parvpds425", "parvctl425"] }
];
