function mostrarInfo(curso) {
  const info = {
    prog: 'En este curso aprenderás programación básica en Python.',
    mat: 'Este curso cubre álgebra, funciones y cálculo.',
    fis: 'Aprenderás fundamentos de la física clásica.',
  };

  document.getElementById('infoCurso').innerText = info[curso];
}
