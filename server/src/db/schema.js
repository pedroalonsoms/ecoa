// api/login - POST
let _ = {
  email: "A01741437@tec.mx",
  password: "test123",
};
// Codigo 400 => Error (Front automático)
// Codigo 200 => Redirección

// api/student?q="Pedro Al" - GET
_ = {
  results: [
    {
      name: "Pedro Alonso Moreno Salcedo",
      id: "A01741437",
    },
    {
      name: "Pedro Alfonso Test Test",
      id: "A0XXXXXXXX",
    },
    {
      name: "Pedro Alzzz Test Test",
      id: "A0XXXXXXXX",
    },
  ],
};

// api/student/A01741437 - GET
_ = {
  id: {
    id: "A01741437",
    name: "Pedro Alonso Moreno Salcedo",
    response_date: "2023-03-01",
  },
};
// Codigo 400 => Error

// api/facilities - GET
_ = {
  questions: [
    {
      id: "F01",
      name: "¿Qué te pareció TecServices?",
    },
    {
      id: "F02",
      name: "¿Cómo te atendieron en biblio?",
    },
  ],
};

// api/facilities - POST
_ = {
  answers: [
    {
      id: "F01",
      answer: 8.0,
    },
  ],
};

// api/colaborators?q="Pedro Al" - GET
_ = {
  results: [
    {
      name: "Pedro Alonso Moreno Salcedo",
      id: "L0XXXXXXX",
    },
    {
      name: "Pedro Alfonso Test Test",
      id: "L0XXXXXXX",
    },
    {
      name: "Pedro Alzzz Test Test",
      id: "L0XXXXXXX",
    },
    {
      name: "Pedro Alzzz Test Test",
      id: "L0XXXXXXX",
    },
    {
      name: "Pedro Alzzz Test Test",
      id: "A0XXXXXXXX",
    },
  ],
};

// api/colaborators/L0XXXXXXX - GET
_ = {
  name: "Pedro Alonso Moreno Salcedo",
  role: "Director de entrada",
  id: "L0XXXXXXX",
  general_average: 8.0,
};

// api/colaborators/L0XXXXXXX/results - GET
_ = {
  results: [
    {
      id: "F01",
      name: "¿Qué te pareció TecServices?",
      general_average: 8.0,
    },
  ],
};

// api/colaborators/L0XXXXXXX/comments - GET
