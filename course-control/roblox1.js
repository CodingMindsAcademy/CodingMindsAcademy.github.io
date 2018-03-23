var courseData = {
  'courseTitle' : 'Game Development with Roblox Studio | Coding Minds Academy',
  'courseDescription' : 'Learn programming fundamentals and create your own games with Roblox Studio!',
  'topTitleLine1' : 'Game Development',
  'topTitleLine2' : 'with Roblox Studio',
  'topGradeLevel' : 'Grades 3 - 5',
  'topIntroText' : 'Roblox is a massively multiplayer online game creation platform with over six thousand users online every month. Roblox Studio allows users to develop their own games and share it with others in the community.',

  'bgTitle':'Game Development with Roblox Studio',
  'bgImageUrl':'img/my/roblox1/bg.jpg',
  'bgText':'Become a game developer, and publish your games.',
  'bgLearnMoreText':'Learn More about Roblox Studio',
  'bgLearnMoreLink':'https://www.youtube.com/embed/RU0Sxhc0WIk?t=5&autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'Learn programming with game development. Build your own game without limits.',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Game Development',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'3 - 5',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginning to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'From Game Player to Developer',
    'text':'Being addictive to games? No worries. Let\'s motivate them to learn by showing them that they can create their own games and turn their ideas into reality with Roblox Studio.',
    'imageUrl':'img/my/roblox1/r1.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'Learn about 3D models',
    'text':'While creating their own games with Roblox Studio, students will also encounter and learn about 3D modeling.',
    'imageUrl':'img/my/roblox1/r2.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'Learn While Creating',
    'text':'Roblox uses a programming language known as Lua. As students develop their own games, they also pick up computer science concepts, computational thinking skills, and programming fundamentals.',
    'imageUrl':'img/my/roblox1/r3.png'
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
      'text':'Understanding the process of developing games'
    },
    {
      'icon':'icon-Coding',
      'text':'The basics of Lua programming language'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Understanding of (3D) game modeling and algorithms'
    },
    {
      'icon':'icon-Server',
      'text':'Knowledge about Internet and game communications'
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
      'date':'6/25 - 6/29',
      'time':'1:00PM - 4:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'7/16 - 7/20',
      'time':'9:00AM - 12:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'8/13 - 8/17',
      'time':'1:00PM - 4:00PM',
      'location':'Irvine, CA'
    }
  ],

  'registrationEnabled':true,
  'registrationTitle':'Registration',
  'priceTitle':'Price',
  'price':'$445',
  'allCreditCards':'',
  'priceItems':[
    'Try the first session for FREE',
    'Learn from the professionals',
    '1:6 teacher to students ratio',
    'Always learn by doing and having fun'
  ],
  'registrationLink':'https://jinshuju.net/f/Nfh8W6',
  'registerNow':'REGISTER NOW',

  'faq':{
    'enalbed':false
  },

  'locations':[
    {
      'name' : 'Irvine Classroom',
      'address1' : '980 Roosevelt, Suite 210',
      'address2' : 'Irvine, CA 92620',
      'addressMap' : '980 Roosevelt, Irvine, CA 92620'
    },
  ],

  'promotionText':'Interested in learning programs with fun?',
  'promotionButtonText':'Contact Us',
  'promotionUrl':'page-contact-us.html',

  'engUrl':'roblox1.html',
  'cnUrl':'roblox1c.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
