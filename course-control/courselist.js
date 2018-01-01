var courseList = {
	'eng' : [
		{
			'name':'Minecraft Programming with MakeCode',
			'imageUrl':'img/my/minecode/minecodebgsm.jpg',
			'gradeLevel':'Grade 2-6',
			'text':'Learn programming using the game kids all love',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'minecode.html',
			'registerTitle':'REGISTER',
			'registerUrl':'minecode.html'
		},
		{
			'name':'Robotics and Programming with SRPK',
			'imageUrl':'img/my/sprk-learn-5.jpg',
			'gradeLevel':'Grade 2-6',
			'text':'Learn how to program and control a robot, and enter the world of coding',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'sprk.html',
			'registerTitle':'REGISTER',
			'registerUrl':'sprk.html'
		},
		{
			'name':'Innovative Programming with MIT Scratch',
			'imageUrl':'img/my/scratch/scratchbg.png',
			'gradeLevel':'Grade 2-6',
			'text':'Learn programming and create games and animations while having fun',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'scratch.html',
			'registerTitle':'REGISTER',
			'registerUrl':'scratch.html'
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
			'name':'Python Programming with Minecraft',
			'imageUrl':'img/my/pythonmine/pyminebghp.jpg',
			'gradeLevel':'Grade 7-12',
			'text':'Learn the most pupular programming Python using the most popular game Minecraft',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'python-minecraft.html',
			'registerTitle':'REGISTER',
			'registerUrl':'python-minecraft.html'
		},
		{
			'name':'Mobile App Programming with MIT App Inventor',
			'imageUrl':'img/my/app-dev-2.jpg',
			'gradeLevel':'Grade 7-12',
			'text':'Learn how to program and develop mobile apps. Become the next young entrepreneurs',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'mobile.html',
			'registerTitle':'REGISTER',
			'registerUrl':'mobile.html'
		},
		{
			'name':'Python Programming: Build Real World Applications',
			'imageUrl':'img/my/python-learn-3.jpg',
			'gradeLevel':'Grade 7-12',
			'text':'Learn the most popular programming language in the industry',
			'detailsTitle':'EXPLORE',
			'detailsUrl':'python.html',
			'registerTitle':'REGISTER',
			'registerUrl':'python.html'
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
