var courseData = {
  'courseTitle' : 'Minecraft World Building and Instruction Programming | Coding Minds Academy',
  'courseDescription' : 'Through the creation of the learning world, Minecraft command-line command control, and MakeCode graphical programming platform, gradually bring your child into the programming world.',
  'topTitleLine1' : 'Minecraft',
  'topTitleLine2' : 'World Building and Instruction Programming',
  'topGradeLevel' : 'Grade K - 2',
  'topIntroText' : 'Today\'s youths have a wide range of interests, but if you want to find a common interest, then it must be Minecraft. This course is based on Minecraft games. Through introduction of the creation of the world, the control of Minecraft command-line commands, and the MakeCode graphical programming platform, the children are progressively brought into the programming world.',

  'bgTitle':'Minecraft World Building and Instruction Programming',
  'bgImageUrl':'img/my/minecraftbasic/bg.jpg',
  'bgText':'Learning programming in a Minecraft will be an ideal learning experience for kids',
  'bgLearnMoreText':'Learn More about the Minecraft: Education Edition',
  'bgLearnMoreLink':'https://www.youtube.com/embed/3rKuSlgqePo?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'Minecraft is a sandbox video game and arguably one of the most popular games in the world. This course utilizes the popular video game to introduce students to the programming world.',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Game Development',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'K - 2',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginners',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Build your own world and enter the world of programming.',
    'text':'The world-famous Minecraft game provides unlimited space for children\'s creativity. Build the world you want and the door to science and technology opens for you.',
    'imageUrl':'img/my/minecraftbasic/mc2.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'Learn programming fundamentals through command-line instructions',
    'text':'Minecraft provides players with a list of game control commands. By learning these commands, you can accomplish the effects that are not achieved in the game but rather, in real life. By learning these basic instructions, you can unknowingly establish the basis of programming fundamentals and computational thinking.',
    'imageUrl':'img/my/minecraftbasic/mc1.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'Graphical programming from elementary school',
    'text':'Today\'s programming skills are extremely valuable. Every school has started to teach students to learn from preschool. The Minecraft MakeCode programming platform makes this a reality.',
    'imageUrl':'img/my/minecraftbasic/mc3.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Share your creations',
    'text':'Share your projects to the rest of the world. Your project might end up being featured!',
    'imageUrl':'img/my/minecraftbasic/mc4.jpg'
  },

  'promotion5':{
    'enabled':true,
    'title':'Learning is more than just programming',
    'text':'Having programming skills is a component of today\'s social culture, because learning programming is cultivating logical thinking, computing power, innovation and imagination. While the children are programming to solve problems, they gain confidence at the same time!',
    'imageUrl':'img/my/minecraftbasic/mc5.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTitle' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Gears',
      'text':'Modeling a personalized world'
    },
    {
      'icon':'icon-Coding',
      'text':'Learn command-line command controls and programming'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Master the basics of graphic programming'
    },
    {
      'icon':'icon-Server',
      'text':'Learn how to learn to solve problems in practice'
    },
    {
      'icon':'icon-Idea',
      'text':'Ability to cultivate scientific innovation and teamwork'
    },
    {
      'icon':'icon-Key',
      'text':'Adapting to new environments'
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
      'date':'6/18-6/22',
      'time':'9:00AM-12:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'7/9-7/13',
      'time':'1:00PM-4:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'8/13-8/17',
      'time':'9:00AM-12:00PM',
      'location':'Irvine, CA'
    }
  ],

  'registrationEnabled':false,
  'registrationTitle':'Registration',
  'priceTitle':'Price',
  'price':'$445',
  'allCreditCards':'',
  'priceItems':[
    'Try the first session for FREE',
    'Learn from the professionals',
    '1:4 teacher to students ratio',
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
      'address1' : '930 Roosevelt, Suite 236',
      'address2' : 'Irvine, CA 92620',
      'addressMap' : '930 Roosevelt, Irvine, CA 92620'
    },
  ],

  'promotionText':'Interested in learning programs with fun?',
  'promotionButtonText':'Contact Us',
  'promotionUrl':'page-contact-us.html',

  'engUrl':'mcbuild.html',
  'cnUrl':'mcbuildc.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
