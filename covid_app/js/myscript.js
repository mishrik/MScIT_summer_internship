const url = "https://covid19.mathdro.id/api";

let app = angular.module("MyApp", []);
app.controller('MyCtrl', ($scope, $http) => //var attached with scope can be used by MyCtrl can be used with html
{

    //controller body
    $scope.title = "Stay Home, Stay safe!!"; //2 way data binding
    /* //button function
    $scope.changeValue = () =>
    {
        $scope.title = "This is home time";
    }*/
    //calling API
    $http.get(url).then((response) =>
    {
        $scope.covid_data = response.data;

        //console.log(response.data);
    }, (error) =>
    {
        console.log(error);
    }) //first param-success, 2nd- error

    //get country data
    $scope.get_countryData = () =>
    {

        let country = $scope.inp_country;
        if (country == "")
        {
            $scope.c_data = undefined;
            return;
        }
        $http.get(`${ url }/countries/${ country }`).then((response) =>
        {
            $scope.c_data = response.data;

        }, (error) =>
        {
            console.log(error);
        })
    }
});