// CREAR MODULO
angular.module('prueba', []);

// LLAMA A UN MODULO
angular.module('prueba').controller('ControllerPrincipal', ControllerPrincipal);

function ControllerPrincipal($scope) {
  $scope.mensaje = "Hola Kat";
  $scope.aumentar = aumentar;
  $scope.lista = [
    {
      name: 'bryam.pe',
      periodo: '1y'
    },
    {
      name: 'bryamrodriguez.pe',
      periodo: '2y'
    }
  ];

  function aumentar() {
    $scope.contador++;
  }
}

HOISTING