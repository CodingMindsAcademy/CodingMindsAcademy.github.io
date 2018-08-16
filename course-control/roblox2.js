var courseData = {
  'courseTitle' : 'Advanced Roblox Game Development and Lua Programming | Coding Minds Academy',
  'courseDescription' : 'Learn programming fundamentals and create your own games with Roblox Studio!',
  'topTitleLine1' : 'Roblox',
  'topTitleLine2' : 'Game Development and Lua Programming',
  'topGradeLevel' : 'Grade 7 - 12',
  'topIntroText' : 'Roblox is a massively multiplayer online game creation platform with over six thousand users online every month. Roblox Studio allows users to develop their own games and share it with others in the community.',

  'bgTitle':'Advanced Roblox Game Development and Lua Programming',
  'bgImageUrl':'img/my/roblox1/bg2.jpg',
  'bgText':'Become a game developer, and publish your games.',
  'bgLearnMoreText':'Learn More about Roblox Studio',
  'bgLearnMoreLink':'https://www.youtube.com/embed/RU0Sxhc0WIk?t=5&autoplay=1',

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
    'title':'From Gamer to Developer',
    'text':'Being addictive to games? No worries. Let\'s motivate them to learn by showing them that they can create their own games and turn their ideas into reality with Roblox Studio.',
    'imageUrl':'img/my/roblox1/r1.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'Learn programming algorithms',
    'text':'Through the design and implementation of game logic and creativity, understand the principles and foundations of computer algorithms and lay the foundation for advanced programming learning.',
    'imageUrl':'img/my/roblox1/r6.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'Game Development and Programming',
    'text':'Roblox uses the programming language, Lua, to complete various challenges, allowing you to fully master Lua\'s advanced programming concepts and techniques while you complete your own game.',
    'imageUrl':'img/my/roblox1/r7.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Share Your Projects',
    'text':'Roblox allows users to share their creations with others throughout the world.',
    'imageUrl':'img/my/roblox1/r4.jpg'
  },

  'promotion5':{
    'enabled':true,
    'title':'Focus on Imagination and Creativity',
    'text':'Learning programming is not the ultimate goal. We focus on pushing the kids\' imagination and creativity.',
    'imageUrl':'img/my/roblox1/r5.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTitle' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Gears',
      'text':'Understanding the process of game development'
    },
    {
      'icon':'icon-Coding',
      'text':'The basics of Lua programming language'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Understanding of algorithms and design ideas'
    },
    {
      'icon':'icon-Server',
      'text':'Understanding of (3D) game modeling and algorithms'
    },
    {
      'icon':'icon-Idea',
      'text':'Train students to adapt to new environments'
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

  'locations':[
    {
      'name' : 'Irvine Classroom',
      'address1' : '930 Roosevelt, Suite 236',
      'address2' : 'Irvine, CA 92620',
      'addressMap' : '930 Roosevelt, Irvine, CA 92620'
    },
    {
      'name' : 'Rancho Cucamonga Classroom',
      'address1' : '6080 Haven Ave',
      'address2' : 'Rancho Cucamonga, CA 91737',
      'addressMap' : '6080 Haven Ave, Rancho Cucamonga, CA 91737'
    }
  ],

  'promotionText':'Interested in learning programs with fun?',
  'promotionButtonText':'Contact Us',
  'promotionUrl':'page-contact-us.html',

  'engUrl':'roblox2.html',
  'cnUrl':'roblox2c.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
