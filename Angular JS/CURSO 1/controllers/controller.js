angular.module("MyFirstApp", [])
  .controller("FirstController" , ["$scope", function ( s ){
    s.nombre = "Josue";
    s.nuevoComentario = {};
    s.comentarios = [
      {
        comentario: "Iniciando curso de angular JS",
        username: "josuesanchezc"
      },
      {
        comentario: "Mi primer pagina web con angular JS",
        username: "angelRiveri"
      },
      {
        comentario: "Iniciando curso de angular JS 2",
        username: "edwin"
      },
      {
        comentario: "Mi primer pagina web con angular JS 2",
        username: "salinas"
      }
    ];
    s.agregarComentario = function() {
      s.comentarios.push( s.nuevoComentario );
      s.nuevoComentario = {};
    }
  }]);
