let app = angular.module("RembrandtApp", []);
app.controller("PaintingController",function($scope){
    $scope.paintingCount = 0;
    $scope.paintings = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg",

    ];

    $scope.previous=function(){
        if($scope.paintingCount <= 0){
            alert('Use the next button to move to the next image');
            return;
        }
        $scope.paintingCount = $scope.paintingCount -1;
    };

    $scope.next=function(){
        if($scope.paintingCount >= $scope.paintings.length -1){
            alert('This is the end point');
            return;
        }
        $scope.paintingCount = $scope.paintingCount +1;
    };
});


const previousButton = document.querySelector('.btn-danger');
const nextButton = document.querySelector('.btn-success');
const imageElement = document.querySelector('.big');
console.log(imageElement);


previousButton.addEventListener('click', function(){
    imageElement.className = "event";
    imageElement.classList.add('sweetlandia');
});

nextButton.addEventListener('click', function(){
    imageElement.className = "swing";
    imageElement.classList.add('sweetlandia');
});