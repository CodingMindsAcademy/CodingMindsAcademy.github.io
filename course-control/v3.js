var courseData = {
  'courseTitle' : 'Programming with Unity3D | Coding Minds Academy',
  'courseDescription' : 'Learn the professional 3D game programming. Grow from a game player to a developer.',
  'topTitleLine1' : 'Game Programming',
  'topTitleLine2' : 'with Unity3D',
  'topGradeLevel' : 'Grade 7 - 12',
  'topIntroText' : 'This course teaches how to make the professional 3D games from scratch without any programming background.',

  'bgTitle':'Game Programming with Unity3D',
  'bgImageUrl':'img/my/unity3d/bg-5.jpg',
  'bgText':'Become a game developer, and publish your games.',
  'bgLearnMoreText':'Learn More about Unity3D',
  'bgLearnMoreLink':'https://www.youtube.com/embed/MwYq_YA59uQ?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'Learn programming with game development. Build your own game without limits.',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Game Development',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'7 - 12',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginning to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Be a Professional',
    'text':'Game development is a challenging field, but Unity3D make it feasible for students.',
    'imageUrl':'img/my/unity3d/unity3d-1.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'From Game Player to Developer',
    'text':'Being addictive to games? No worries. Let\'s motivate them to learn by showing them that they can make games.',
    'imageUrl':'img/my/unity3d/unity3d-2.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'Beyound Games',
    'text':'Have you heard about the popular technologies such as AR (Augmented Reality) and VR (Virtual Reality)? You can make AR/VR apps using Unity3D easily.',
    'imageUrl':'img/my/unity3d/unity3d-3.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Compete in Science Fair',
    'text':'The projects made using Unity3D could be used to participate in Science Fairs. Find a problem, solve the problem using the technology, and win the Science Fair.',
    'imageUrl':'img/my/unity3d/unity3d-4.jpg'
  },

  'promotion5':{
    'enabled':true,
    'title':'Be a Game Entrepreneur',
    'text':'The successful game industry always belongs to the young generation. Start early and create your own game startup.',
    'imageUrl':'img/my/unity3d/unity3d-5.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTitle' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Gears',
      'text':'The fondation of Unity3D development'
    },
    {
      'icon':'icon-Coding',
      'text':'The basics of C# programming language'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Understanding of game modeling and algorithms'
    },
    {
      'icon':'icon-Server',
      'text':'Knowledge about Internet and game communications'
    },
    {
      'icon':'icon-Idea',
      'text':'AR and VR applications development skills'
    },
    {
      'icon':'icon-Key',
      'text':'Preparation of Science Fair projects'
    },
  ],

  'highlightsTitle':'Course Highlights',
  'highlights':[
    {
      'icon':'icon-Fashion',
      'title':'Always Having Fun',
      'text':'Fun programming is our top priority when designing all the content'
    },
    {
      'icon':'icon-Administrator',
      'title':'Learn with Professionals',
      'text':'Gain extra experiences about the real industry and research'
    },
    {
      'icon':'icon-Hand',
      'title':'Live Interactions',
      'text':'Get your question answered in class and compete with your classmates'
    },
    {
      'icon':'icon-Air-Balloon',
      'title':'Well-Designed Assignments and Projects',
      'text':'Learn by doing is the key for CS study, all the assignments and projects are design for the goals'
    },
    {
      'icon':'icon-Idea',
      'title':'Focus on Imagination and Creativity',
      'text':'Learning programming is not the ultimate goal. We focus on pushing the kids\' imagination and creativity'
    },
    {
      'icon':'icon-Key',
      'title':'Apply Colleges with More Experiences',
      'text':'Programming is just the first step. Build projects, attend science fairs will help you get into the top unversities'
    },
  ],

  'sessionsTitle':'Schedule',
  'sessionsTimeTitle':'Time',
  'sessionsDateTitle':'Date',
  'sessionsLocationTitle':'Location',
  'sessions':[
    {
      'date':'1/8 - 3/12 (10 Weeks)',
      'time':'Mon 3:20-4:50PM',
      'location':'Irvine, CA'
    },
    {
      'date':'1/10 - 3/14 (10 Weeks)',
      'time':'Wed 3:20-4:50PM',
      'location':'Irvine, CA'
    },
  ],

  'registrationEnabled':true,
  'registrationTitle':'Registration',
  'priceTitle':'Price',
  'price':'$595',
  'allCreditCards':'All credit cards are supported',
  'priceItems':[
    'Try the first session for FREE',
    'Learn from the professionals',
    '1:6 teacher to students ratio',
    'Always learn by doing and having fun'
  ],
  'registrationLink':'https://codingminds.wufoo.com/forms/p1cux67e0ufz4uh/',
  'registerNow':'REGISTER NOW',

  'faq':{
    'enalbed':false
  },

  'promotionText':'Interested in learning programs with fun?',
  'promotionButtonText':'Contact Us',
  'promotionUrl':'page-contact-us.html',

  'engUrl':'course-layout-version-3.html',
  'cnUrl':'course-layout-version-3-cn.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
