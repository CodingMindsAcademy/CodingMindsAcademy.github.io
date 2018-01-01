var courseData = {
  'courseTitle' : 'Innovative Programming with MIT Scratch | Coding Minds Academy',
  'courseDescription' : 'Learn to create games and animations with Scratch.',
  'topTitleLine1' : 'Innovative Programming',
  'topTitleLine2' : 'with MIT Scratch',
  'topGradeLevel' : 'Grade 2-6',
  'topIntroText' : 'Scratch is a visual programming language designed by MIT. With Scratch, you can create your own interactive stories, games, and animations, and share them with the rest of the world. Scratch helps young people think creatively, logically, and work collaboratively, which are essential skills in the 21st century.',

  'bgTitle':'Innovative Programming with MIT Scratch',
  'bgImageUrl':'img/my/scratch/scratchbg2.jpg',
  'bgText':'Learn programming and create games and animations while having fun.',
  'bgLearnMoreText':'Learn More about MIT Scratch',
  'bgLearnMoreLink':'https://www.youtube.com/embed/jXUZaf5D12A?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'Learn Scratch, turn your ideas into reality, and share your creations with people from around the world.',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Delightful Intro to Programming',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'2 - 6',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginner',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Learn One of the World\'s Most Popular Programming Platforms',
    'text':'Scratch is a specially designed education platform created by the renowned MIT Media Lab to teach young students about computer programming.',
    'imageUrl':'img/my/scratch/scratch1.png'
  },

  'promotion2':{
    'enabled':true,
    'title':'Challenge Your Creativity',
    'text':'Millions of people are creating their own Scratch programs and more than 2,500 programs are shared in the online community. Join the world and use Scratch to demonstrate your creative thinking.',
    'imageUrl':'img/my/scratch/scratch2.png'
  },

  'promotion3':{
    'enabled':true,
    'title':'Learn Programming with Fun',
    'text':'Scratch perfectly integrates programming concepts into animations and game development. When you finish your work of art, you\'ve unwittingly grasped the basic concepts of programming (including variables, loops, and functions), laying a solid foundation to learn real programming.',
    'imageUrl':'img/my/scratch/scratch3.png'
  },

  'promotion4':{
    'enabled':true,
    'title':'Share Your Creations',
    'text':'Post your programs and share it with MIT Scratch\'s community so fellow programmers from around the world can view and appreciate your creativity.',
    'imageUrl':'img/my/scratch/scratch4.png'
  },

  'promotion5':{
    'enabled':true,
    'title':'Learn More Than Just Programming',
    'text':'The ability to _____ is very valuable in today\'s society because learning to program also establishes experiences in logical thinking, computational thinking, innovation, and imagination. Students simultaneously gain problem-solving skills and confidence. ',
    'imageUrl':'img/my/scratch/scratch5.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTitle' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Gears',
      'text':'Master the basic programming language and algorithms'
    },
    {
      'icon':'icon-Coding',
      'text':'Build your own multimedia content from animations to movies to games'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Understand computers and stimulate a passion for programming'
    },
    {
      'icon':'icon-Server',
      'text':'Learn and practice problem-solving skills'
    },
    {
      'icon':'icon-Idea',
      'text':'Develop scientific innovation and teamwork skills'
    },
    {
      'icon':'icon-Key',
      'text':'Learn the ability to adapt to new environments and participate in Scratch competitions'
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
      'date':'TBD',
      'time':'Mon 3:20-4:50PM',
      'location':'Irvine, CA'
    }
  ],

  'registrationEnabled':false,
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

  'engUrl':'scratch.html',
  'cnUrl':'scratchc.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
