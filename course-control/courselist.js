var courseList = {
	'eng' : [
		{
			'name':'Robotics and Programming with SRPK',
			'imageUrl':'img/my/sprk-learn-5.jpg',
			'gradeLevel':'Grade 2-6',
			'text':'Learn how to program and control a robot, and enter the world of coding',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'page-class-sprk.html',
			'registerTitle':'REGISTER',
			'registerUrl':'page-class-sprk.html'
		},
		{
			'name':'3D Game Programming with Unity3D',
			'imageUrl':'img/my/unity3d/unity3d-1.jpg',
			'gradeLevel':'Grade 7-12',
			'text':'Learn the professional 3D game programming. Grow from a game player to a developer.',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'unity3d.html',
			'registerTitle':'REGISTER',
			'registerUrl':'unity3d.html'
		},
		{
			'name':'Mobile App Programming with MIT App Inventor',
			'imageUrl':'img/my/app-dev-2.jpg',
			'gradeLevel':'Grad 7-12',
			'text':'Learn how to program and develop mobile apps. Become the next young entrepreneurs',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'page-class-mobile.html',
			'registerTitle':'REGISTER',
			'registerUrl':'page-class-mobile.html'
		},
		{
			'name':'Python Programming: Build Real World Applications',
			'imageUrl':'img/my/python-learn-3.jpg',
			'gradeLevel':'Grade 7-12',
			'text':'Learn the most popular programming language in the industry',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'page-class-python.html',
			'registerTitle':'REGISTER',
			'registerUrl':'page-class-python.html'
		},
		{
			'name':'AP CS Boot Camp: Intro to Java Programming',
			'imageUrl':'img/my/coding-space.png',
			'gradeLevel':'Grade 8-12',
			'text':'Build the solid Java programming skills, and aster the AP CS and exam',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'apcs.html',
			'registerTitle':'REGISTER',
			'registerUrl':'apcs.html'
		},
		{
			'name':'AP CSP Boot Camp with APP Inventor',
			'imageUrl':'img/my/mobile-learn-0.png',
			'gradeLevel':'Grade 8-12',
			'text':'Learn the newest College Board AP Course CS Principles with App Inventor',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'apcsp.html',
			'registerTitle':'REGISTER',
			'registerUrl':'apcsp.html'
		},
	]
}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseListController', function($scope) {
    $scope.courseList = courseList.eng;
  });