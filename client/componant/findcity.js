angular.module('app')
   .component('findcity' , {
	controller : ($scope, $location) => {
		$scope.find = () => {
			var city = $('#cityname').val()
			$.ajax({ 
				type : 'POST',
				url : 'http://127.0.0.1:3000/cities' ,
				data :  {name :city},
				success : function(data) {
					window.currentCity = data;
                    alert('click on info page to view information about : ' + name)
					//$location.path('cityinfo');
					//appendMap(); 
				}, 
				error : ()=> {
					console.log('error')
				}
			}) 
		}
	},
   	templateUrl : `../templates/findcity.html`
   })









