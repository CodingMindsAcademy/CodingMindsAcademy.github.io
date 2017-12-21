var courseList = {
	'cn': [
		{
			'name':'和SPRK机器人一起学习编程-带领你的机器人完成挑战',
			'imageUrl':'img/my/sprk-learn-5.jpg',
			'gradeLevel':'3-6年级',
			'text':'学习如何通过编程控制SPRK机器人，打开神奇计算机编程世界的大门',
			'detailsTitle':'查看详情',
			'detailsUrl':'sprk-cn.html',
			'registerTitle':'我要注册',
			'registerUrl':'sprk-cn.html'
		},
		{
			'name':'Unity3D游戏开发体验-从游戏玩家到游戏开发员',
			'imageUrl':'img/my/unity3d/unity3d-1.jpg',
			'gradeLevel':'7-12年级',
			'text':'学习世界最流行的游戏开发引擎，让你在中学就可以挥洒创意，创作出你自己想玩的游戏。',
			'detailsTitle':'查看详情',
			'detailsUrl':'unity3dc.html',
			'registerTitle':'我要注册',
			'registerUrl':'unity3dc.html'
		},
		{
			'name':'MIT手机APP发明家-动手编写自己的APP做小小创业者',
			'imageUrl':'img/my/app-dev-2.jpg',
			'gradeLevel':'7-12年级',
			'text':'厌倦了每天玩自己的手机APP？那就学习如动手编程制作自己的手机APP，做下一个年轻的创业者',
			'detailsTitle':'查看详情',
			'detailsUrl':'mobile-cn.html',
			'registerTitle':'我要注册',
			'registerUrl':'mobile-cn.html'
		},
		{
			'name':'Python编程实践-动手编写真正的计算机应用程序',
			'imageUrl':'img/my/python-learn-3.jpg',
			'gradeLevel':'9-12年级',
			'text':'学习当今最流行的编程语言，开发任何你想制作的应用程序',
			'detailsTitle':'查看详情',
			'detailsUrl':'python-cn.html',
			'registerTitle':'我要注册',
			'registerUrl':'python-cn.html'
		},
		{
			'name':'AP CS基础训练营',
			'imageUrl':'img/my/coding-space.png',
			'gradeLevel':'8-12年级',
			'text':'帮助零编程基础的高中同学准备AP CS课程和考试所需要的扎实的编程基本功',
			'detailsTitle':'查看详情',
			'detailsUrl':'apcs-cn.html',
			'registerTitle':'我要注册',
			'registerUrl':'apcs-cn.html'
		},
		{
			'name':'AP CSP手机APP编程训练营',
			'imageUrl':'img/my/mobile-learn-0.png',
			'gradeLevel':'8-12年级',
			'text':'College Board的最新AP课程Computer Science Principles',
			'detailsTitle':'查看详情',
			'detailsUrl':'apcsp-cn.html',
			'registerTitle':'我要注册',
			'registerUrl':'apcsp-cn.html'
		},
	]
}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseListController', function($scope) {
    $scope.courseList = courseList.cn;
  });