myApp.controller('HeaderCtrl', function($scope, $location){

		// Fonction du burger menu
		$scope.defineCurrent = function(url){

			$(this).addClass('currentPage');
			console.log($(this));

			$location.path('/supports/' + url)
		}

		
		function toggleCurrentBtn(btn){

			$(btn).click(function(){
				$('.currentPage').removeClass('currentPage');
				$(this).addClass('currentPage');
			})

		};

		toggleCurrentBtn('#homeBtn');
		toggleCurrentBtn('#portfolioBtn');
		toggleCurrentBtn('#contactBtn');
		



});