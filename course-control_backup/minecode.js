var courseData = {
  'courseTitle' : 'Minecraft Programming with MakeCode | Coding Minds Academy',
  'courseDescription' : 'Learn the block programming and make changes on your favorite game.',
  'topTitleLine1' : 'Minecraft Programming',
  'topTitleLine2' : 'with MakeCode',
  'topGradeLevel' : 'Grade 3 - 6',
  'topIntroText' : 'Learn the latest kids-coding platform - MakeCode from Microsoft, and become a Minecraft game developer to change the game in your dream way.',

  'bgTitle':'Minecraft Programming with MakeCode',
  'bgImageUrl':'img/my/minecode/minecodebg.jpg',
  'bgText':'Learn programming using the most popular game for kids - Minecraft',
  'bgLearnMoreText':'Learn More about MakeCode',
  'bgLearnMoreLink':'https://www.youtube.com/embed/3rKuSlgqePo?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'Learn programming with MakeCode. Build your own version of the Minecraft.',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Game Development',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'3 - 6',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginning to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'4 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'No More Minecraft Game Addiction',
    'text':'Minecraft is a fun game, but kids can be addicted to playing it. With MakeCode, kids can start learning programming inside the fun game.',
    'imageUrl':'img/my/minecode/minecode2.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'Learn the Real Programming Concepts',
    'text':'MakeCode makes learning a lot of fun. You will learn the professional programming concepts while playing and making changes on the Minecraft game.',
    'imageUrl':'img/my/minecode/minecode1.png'
  },

  'promotion3':{
    'enabled':true,
    'title':'Challenge Your Imagination',
    'text':'With the open platform provided by Minecraft, you can program anything you want with your imagniation, and change the game into a version you have never seen before.',
    'imageUrl':'img/my/minecode/minecode3.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Publish and Share Your Game',
    'text':'Publish your own game in the Internet, and share it with the whole world. You could become famous as a young game developer.',
    'imageUrl':'img/my/minecode/minecode4.jpg'
  },

  'promotion5':{
    'enabled':true,
    'title':'It\'s Not Just About Programming',
    'text':'Computational thinking and programming skill are important in today\'s society. The kids gain confidence as they learn how to solve problems using programming.',
    'imageUrl':'img/my/minecode/minecode5.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTtile' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Gears',
      'text':'Learn the MakeCode programming platform'
    },
    {
      'icon':'icon-Coding',
      'text':'Master the basic block programming'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Trigger their passion of programming'
    },
    {
      'icon':'icon-Server',
      'text':'The ability to solve problems using technology'
    },
    {
      'icon':'icon-Idea',
      'text':'Creativity and team-work'
    },
    {
      'icon':'icon-Key',
      'text':'The ability to adapt to new content and environment'
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

  'sessionsEnabled':false,
  'sessionsTitle':'Schedule',
  'sessionsTimeTitle':'Time',
  'sessionsDateTitle':'Date',
  'sessionsLocationTitle':'Location',
  'sessions':[
    {
      'date':'6/25 - 6/29',
      'time':'9:00AM - 12:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'7/16 - 7/20',
      'time':'1:00PM - 4:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'8/6 - 8/10',
      'time':'9:00AM - 12:00PM',
      'location':'Arcadia, CA'
    },
    {
      'date':'8/13 - 8/17',
      'time':'9:00AM - 12:00PM',
      'location':'Irvine, CA'
    },
  ],

  'registrationEnabled':true,
  'registrationTitle':'',
  'priceTitle':'Registration',
  'price':'',
  'allCreditCards':'',
  'priceItems':[
    'Try the first session for FREE',
    'Learn from the professionals',
    '1:4 teacher to students ratio',
    'Always learn by doing and having fun'
  ],
  'registrationLink':'https://csfoundation.wufoo.com/forms/m8vsgm21cz06w0/',
  'registerNow':'REGISTER NOW',

  'faq':{
    'enalbed':false
  },

  'locations':[
    {
      'name' : 'Irvine Classroom',
      'address1' : '970 Roosevelt, Suite 202',
      'address2' : 'Irvine, CA 92620',
      'addressMap' : '970 Roosevelt, Irvine, CA 92620'
    },
    {
      'name' : 'Arcadia Classroom',
      'address1' : '7 W Foothill Blvd',
      'address2' : 'Arcadia, CA 91006',
      'addressMap' : '7 W Foothill Blvd, Arcadia, CA 91006'
    }    
  ],

  'promotionText':'Interested in learning programs with fun?',
  'promotionButtonText':'Contact Us',
  'promotionUrl':'page-contact-us.html',

  'engUrl':'minecode.html',
  'cnUrl':'minecodec.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
