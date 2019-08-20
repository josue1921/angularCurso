angular.module("MyFirstApp", [])
  .controller("FirstController",function($scope,$http){
    $scope.posts = [];
    $scope.newPosts = {};
    $http.get("https://jsonplaceholder.typicode.com/posts")
         .then(
                (response) => $scope.posts = response.data,
                (errResponse) => console.log(errResponse)
          );
    $scope.addPost = () => {
      $http.post("https://jsonplaceholder.typicode.com/posts/", {
        title: $scope.newPosts.title,
        body: $scope.newPosts.body,
        userId: 1
      }).then((response) => {
        $scope.posts.push(response.data);
        console.log(response);
      },
        (errResponse) => console.log(errResponse)
      )
    }
  });
