let app = angular.module("ComposersList", []);
app.controller("ComposerController",function($scope){
    $scope.pieces = [
        {"pic":"images/bach.jfif", "composer":"Bach","title":"Goldberg"},
        {"pic":"images/bach.jfif", "composer":"Bach","title":"Harpsichord"},
        {"pic":"images/bach.jfif", "composer":"Bach","title":"Brandenburg"},
        {"pic":"images/bach.jfif", "composer":"Bach","title":"Air on G"},
        {"pic":"images/bach.jfif", "composer":"Bach","title":"Cantata"},
        {"pic":"images/beethoven.jfif", "composer":"Beethoven","title":"Symphony"},
        {"pic":"images/beethoven.jfif", "composer":"Beethoven","title":"Fur"},
        {"pic":"images/beethoven.jfif", "composer":"Beethoven","title":"Moonlight"},
        {"pic":"images/beethoven.jfif", "composer":"Beethoven","title":"Violin"},
        {"pic":"images/beethoven.jfif", "composer":"Beethoven","title":"Egmont"},
        {"pic":"images/mozart.jfif", "composer":"Mozart","title":"Eine"},
        {"pic":"images/mozart.jfif", "composer":"Mozart","title":"Piano"},
        {"pic":"images/mozart.jfif", "composer":"Mozart","title":"Don Giovanni"},
        {"pic":"images/mozart.jfif", "composer":"Mozart","title":"Jupiter"},
        {"pic":"images/mozart.jfif", "composer":"Mozart","title":"Clarinet"}
    ]
   
});