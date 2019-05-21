/*
    1. Attribute的命名使用Java规则，第一个字母小写
    2. 这个JSON我们给它保持到最精简的版本，因为下面要推倒重建
    3. 这个JSON应该可以从CSV文件生成，所以我drop了courseId，等于所有内容就直接包括在这一个文件里面
    4. Notifications OpenID，我们可以再建一个CSV管理，然后在生成的时候把这两个merge到一起
*/

var stuFbDb = {
  "stui001": {
    "name": "Shiyu",
    "course": [
      {
        "CourseName": "Python AI",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Mon AI",
        "instructor": "Dr. Yu Sun",
        "ProjectTitle": "Automated Drawing",
        "ProjectLink": "https://www.sharemyworks.com/projects/5b359e81e1096c0031e84ddc",
        "feedback": "Very good student. Test"
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "o7Rll52iGkXc83E2sV3Onv7pYK0A"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "o7Rll52iGkXc83E2sV3Onv7pYK0A"
      }
    ]
  },
  "stui002": {
    "name": "Ethan Kim",
    "course": [
      {
        "CourseName": "Python I",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 1 PM - 2:30 PM",
        "instructor": "Mr. Alec Diaz",
        "ProjectTitle": "Tic-Tac-Toe",
        "ProjectLink": "I didn't know that I needed to collect the URLs for all of the students' projects, I do have the code on my computer for both students in this class though.",
        "feedback": "Ethan is an enthusiastic and fun student and it's been a pleasure to teach him. During lessons, he was always listening and focused, and put a lot of effort into doing in-class exercises. When working together to create his Tic-Tac-Toe project, I was impressed by the work that he did on his own time. He built a very cool stage for the Tic-Tac-Toe game by himself. When we were implementing the logic of the game, he was always able to solve coding problems and come up with creative solutions for building certain parts of the game."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui003": {
    "name": "Ethan (not sure of last name)",
    "course": [
      {
        "CourseName": "Python I",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 1 PM - 2:30 PM",
        "instructor": "",
        "ProjectTitle": "Dodgeball",
        "ProjectLink": "Same reason as Ethan Kim",
        "feedback": "Ethan is a very motivated student who always showed great interest in anything we were doing. During lessons, he was always attentive and focused. His thoughtful questions often surprised me and displayed his motivation for truly understanding the material in-depth. When creating his Dodgeball project, Ethan always followed along while making sure he understood what we were doing. Despite being his first programming class, he was not afraid to try creating a rather difficult game, which he succeeded at."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui004": {
    "name": "Thomas",
    "course": [
      {
        "CourseName": "Python II",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 2:45 PM - 4:15 PM",
        "instructor": "Mr. Alec Diaz",
        "ProjectTitle": "Sky Wars",
        "ProjectLink": "Same as Python I class, didn't know I needed to collect the sharemyworks URLs",
        "feedback": "Thomas is a motivated and creative student who shines when he applies himself. He always made class fun for everyone by allowing us to play his game and give feedback on it. His final project was inventive and I was impressed with how much of the game he had done all by himself. Thomas also participated in class a lot - answering and asking questions, competitions, and small games."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui005": {
    "name": "Barry",
    "course": [
      {
        "CourseName": "Python II",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 2:45 PM - 4:15 PM",
        "instructor": "",
        "ProjectTitle": "UHC (Ultra Hardcore)",
        "ProjectLink": "Same reason as all Python II students",
        "feedback": "Barry is a motivated student who was always extremely interested in anything happening in class. While making his project, every class, he made sure to share with me all the progress he made on his own, and asking for help with anything if he needed it. This always showed me his dedication to his project. He also always asked what he could improve in his game. Barry's motivation and interest in programming shows in his work."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui006": {
    "name": "Derek",
    "course": [
      {
        "CourseName": "Python II",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 2:45 PM - 4:15 PM",
        "instructor": "Mr. Alec Diaz",
        "ProjectTitle": "Parkour/PvP",
        "ProjectLink": "Same reason as all Python II students",
        "feedback": "Derek is a highly-motivated and hardworking student. Every class, Derek always came prepared with questions for his project. He would always try to implement something in his game first, then ask only if he needed the help. I was impressed with Derek's drive to complete his game, every week I saw that he added a lot of new things. He also always spent class time working hard on his project, making use of the limited time he had every week to get help for his project."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui007": {
    "name": "Peilin",
    "course": [
      {
        "CourseName": "Python II",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 2:45 PM - 4:15 PM",
        "instructor": "Mr. Alec Diaz",
        "ProjectTitle": "Walls",
        "ProjectLink": "Same reason as all Python II students",
        "feedback": "Peilin is a bright and hardworking student who constantly impressed me. Every week, Peilin made lots of progress on his game both in class and outside of class. No surprise, he was the first student to complete finish his project! He allowed all of his classmates to try his game, which we all agreed was a lot of fun. When Peilin had problems with his game and asked for help, I only had to point him in the right direction and he was always able to figure out the rest on his own."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui008": {
    "name": "Jerry",
    "course": [
      {
        "CourseName": "Python II",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 2:45 PM - 4:15 PM",
        "instructor": "Mr. Alec Diaz",
        "ProjectTitle": "Silent Knight",
        "ProjectLink": "Same reason as all Python II students",
        "feedback": "Jerry is a hardworking, motivated, and creative student. He was the only student to choose to create a game in Pygame, which is always a challenge. Jerry always showed a lot of enthusiasm for his project, creating a Discord server and website for his game! Every time we worked together, Jerry always had many ideas for new things to add into his game. While we only had time to implement a few of his many ideas, his project still turned out impressive. "
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui009": {
    "name": "Ryan",
    "course": [
      {
        "CourseName": "MakeCode Minecraft & Javascript",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 11:00am - 12:30pm",
        "instructor": "Mr.Travis Yu",
        "ProjectTitle": "Water House",
        "ProjectLink": "https://minecraft.makecode.com/57576-58709-27069-99449",
        "feedback": "Ryan is a very bright kid. He is a super quick learner and loves to participate in class. He not only focuses on the lesson but also tries to go ahead and beyond with the things he is learning. He likes trying new things on his own because he is very curious when it comes to new lessons. From what I can tell with the weeks I had with him, he has improved on his thinking skills and is never discouraged from answering questions. "
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stuo010": {
    "name": "Alex ",
    "course": [
      {
        "CourseName": "MakeCode Minecraft & Javascript",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 11:00am - 12:30pm",
        "instructor": "Mr.Travis Yu",
        "ProjectTitle": "The Bedrock fortress",
        "ProjectLink": "https://minecraft.makecode.com/11351-94228-75031-64834",
        "feedback": "Alex is a very knowledgeable kid. He loves to answer questions in class and knows a lot about things that are related to the topic.  He has a curious mind and is definitely a good student. Whenever I have questions, he is the first one to answer me. He seems to love learning about coding and how it interacts with Minecraft. He does not waste time with building with his own hands and loves to rather make it with code. "
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stuo011": {
    "name": "Daniel",
    "course": [
      {
        "CourseName": "MakeCode Minecraft & Javascript",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 11:00am - 12:30pm",
        "instructor": "Mr.Travis Yu",
        "ProjectTitle": "Aquarium",
        "ProjectLink": "https://minecraft.makecode.com/47708-82293-09953-20969",
        "feedback": "Daniel is very respectful in class. He likes expressing his creativity in Minecraft by learning how to construct things. He does not seem to have any trouble with understanding the lessons. He is a very good kid and always comes in with a good attitude. He is almost never discouraged when asked to do something in code. In fact, he usually finishes very quickly. He has a tendency to build upon things we create in class which shows the creativity has has such as the aquarium."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stuo012": {
    "name": "David",
    "course": [
      {
        "CourseName": "MakeCode Minecraft & Javascript",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 11:00am - 12:30pm",
        "instructor": "Mr.Travis Yu",
        "ProjectTitle": "Maze",
        "ProjectLink": "https://minecraft.makecode.com/63000-31808-15067-18397",
        "feedback": "David is very diligent. He does not let himself give up when he is stuck. He always asks and answers questions in class. David has helped his other classmates whenever they have questions. He is also usually one of the first students to grasp the concepts. Also like his fellow students, he loves creating things in Minecraft. David is definitely a student that listens and understands very quickly. "
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui013": {
    "name": "Heaven",
    "course": [
      {
        "CourseName": "Roblox l",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Wed 1:55 - 3:25",
        "instructor": "Mr. Ethan Liao",
        "ProjectTitle": "Monster Arena",
        "ProjectLink": "Project Link: https://makecode.com/_XDCTYFhokgj5  /  Video Link: https://www.youtube.com/watch?v=ogwcW4zUarU",
        "feedback": "Heaven is passionate about Minecraft and he brings a ton of motivation and creativity to the table. He is one of the more talkative students in the class and he was able to answer a lot of the harder questions during the lessons. When presented with a difficult problem, he can approach it methodically and eventually come up with a well-thought out solution which is uncommon among the students in his age group. He was a pleasure to have in the classroom and I will miss having him as a student."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "o7Rll52iGkXc83E2sV3Onv7pYK0A"
      }
    ]
  },
  "stui014": {
    "name": "Andrew",
    "course": [
      {
        "CourseName": "",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "",
        "instructor": "",
        "ProjectTitle": "TNT Nuggets",
        "ProjectLink": "Project: https://makecode.com/_5LyY3gETedg0 / Video: https://www.youtube.com/watch?v=Ime2ir-7rWM",
        "feedback": "Andrew always brings a ton of energy and excitement into the classroom and he was a true pleasure to have in the classroom. Although he can get distracted often, when he is focused, he is very smart and he is able to pick up coding concepts with ease. He has a ton of creativity and great ideas and that is shown especially through his project. He is always interacting with the other students and he is well-liked by those around him. I will miss having Andrew in the classroom!"
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stuo015": {
    "name": "Emma",
    "course": [
      {
        "CourseName": "",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "",
        "instructor": "",
        "ProjectTitle": "Enderman Challenge",
        "ProjectLink": "Project: https://makecode.com/_hL37Cv64be5x / Video: https://www.youtube.com/watch?v=M2v_l3LYK2U",
        "feedback": "Emma is probably the most focused student in the classroom. Whenever a new concept is introduced, she is almost always the first one to understand it and complete the in-class exercises. She extremely polite and considerate towards the teachers and the students and she is personally one of my favorite students to have in the classroom. She puts out amazing work through her assignments and her project and she is able to ask insightful questions during the lessons. Her project was pretty creative and I like that she made it about something that she was passionate about (which are Endermen!)."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui016": {
    "name": "Leo",
    "course": [
      {
        "CourseName": "Roblox l",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Wed 3:25-4:55",
        "instructor": "Mr. Ethan Liao",
        "ProjectTitle": "Skateboard Obby",
        "ProjectLink": "https://www.roblox.com/games/2956999908/Lucass-Coding-Minds-Project",
        "feedback": "Lucas is one of my best students in all my classes. He joined the class after most of the students were already familiar with the tools of ROBLOX Studio. At first, he wasn\u2019t very familiar with coding, but he picked up the coding concepts relatively easily and caught up completely. The way he approaches problems are well-thought out and methodical. My favorite thing about Lucas is that he asks very good and insightful questions during class and that reflected well into the project that he created."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stuo017": {
    "name": "Michael",
    "course": [
      {
        "CourseName": "",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "",
        "instructor": "",
        "ProjectTitle": "Car Racing",
        "ProjectLink": "https://www.roblox.com/games/2957043766/Michaels-Coding-Minds-Project",
        "feedback": "Michael is one of the more independent students in the classroom and although he doesn\u2019t ask many questions, he is constantly producing good results which are shown especially in his in-class exercises and in his car racing project. He picks up new concepts relatively quickly compared to the other students and he is usually the first one to finish assignments during class."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stuo018": {
    "name": "Alex",
    "course": [
      {
        "CourseName": "",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "",
        "instructor": "",
        "ProjectTitle": "The Impossible Obby",
        "ProjectLink": "https://www.roblox.com/games/2858624179/Obby",
        "feedback": "Alex is a pleasure to have in the classroom. He is always smiling and cracking jokes and he is quite popular and talkative among the other students. He brings a lot of fun and joy into the classroom and personally, he is a student I look forward to teaching every week. He is one of the more participative students in the classroom and he is often answering questions or asking insightful questions of his own. His project was impressive with Leo and he contributed a ton of great ideas."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stuo019": {
    "name": "Leo",
    "course": [
      {
        "CourseName": "",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "",
        "instructor": "",
        "ProjectTitle": "The Impossible Obby",
        "ProjectLink": "https://www.roblox.com/games/2858624179/Obby",
        "feedback": "Leo was one of the students who already knew how to use ROBLOX Studios and I was worried that he would get bored during class time since he already knew all of the material that were being covered. However, he was able to help the students in answering the difficult questions and he was able to make an impressive obstacle course in ROBLOX as his project. He was able to implement harder coding concepts into his game with little help and I am very proud of the work that he has put in the class."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui020": {
    "name": "Derek",
    "course": [
      {
        "CourseName": "Minecraft Programming with MakeCode",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Wed 2 - 3:30 ",
        "instructor": "M. Ethan Liao / Ms. Palak Gajera",
        "ProjectTitle": "Minecraft Maze",
        "ProjectLink": "Makecode: https://makecode.com/_LhC8co6UJ7qs\nWorld Save: https://drive.google.com/open?id=1o03iBM-nMfInwaAiU1VHjtpuCGw7KBXC: \nHow to run:\nDownload and click on the file when finished installing\nOpen up the world\nType in \u201c/code\u201d and copy and paste the Javascript from \u201cMakecode\u201d link into the Javascript inside of Makecode.\nType in \u201cstart\u201d and the game will start\nGood luck!\n",
        "feedback": "Derek is usually very focused when told to do work. In the beginning we gave out candies for incentive , but even if there was no candies he would be willing to do work if told to. He would also help other kids figure out issues with their projects or game if he was done early with his work . He was always eager to answer questions during in class activities and often invited teachers to test out his project and games. Overall, Derek improved a lot during the course and towards the end even did his maze project by himself. He also would want to make his projects always better and would ask for extra time to perfect his work, which is very refreshing to see."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui021": {
    "name": "Ellison",
    "course": [
      {
        "CourseName": "Minecraft with makecode",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Wed 2 - 3:30pm",
        "instructor": "Mr. Ethan Liao, Ms. Palak Gajera",
        "ProjectTitle": "Minecraft Maze",
        "ProjectLink": "Makecode: https://makecode.com/_hzD6qi9w6Csc\nWorld Save: https://drive.google.com/open?id=1Hz67cpDPnw-GAiewtA-i3sXIEOMoezxu\nHow to run:\nDownload and click on the file when finished installing\nOpen up the world (can be in creative or survival mode)\nType in \u201c/code\u201d and copy and paste the Javascript from \u201cMakecode\u201d link into the Javascript inside of Makecode.\nType in \u201cstart\u201d and stand on the Light Blue Wool\nBegin!\n",
        "feedback": "Ellison was always a pleasure to have! She would be quite throughout the lesson, but interactive when need to be such as when answering in class question. She was always focused on completing her work and I rarely needed to ask her to follow the instructions. Even when going over lectures in class she would usually listen and grasp the concepts really well. She also completed her homework and remembered to bring worksheets to class. She is also very collaborative and would often work with other students in class to make new games and projects. "
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui022": {
    "name": "Miyu",
    "course": [
      {
        "CourseName": "Minecraft with makecode",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Wed 2 - 3:30pm",
        "instructor": "Mr. Ethan Liao, Ms. Palak Gajera",
        "ProjectTitle": "Slime Arena",
        "ProjectLink": "https://makecode.com/_ggYLzH9Fr2Cf (world save not necessary)\nHow to run:\nDownload and click on the file when finished installing\nOpen up a world in Blocks of Grass (can be a new world)\nType in \u201c/code\u201d and copy and paste the Javascript from \u201cMakecode\u201d link into the Javascript inside of Makecode.\nType in \u201cslimeArena\u201d and the game will start\nGood luck!\n \n",
        "feedback": "Miyu progressed a lot over the span of this class. She became really focused and work oriented as time went by. She would also do her homework and bring it to class to go over it. She would also often ask questions when a topic was unclear, which is a really good trait to have and helped her absorb the material thoroughly. Miyu is also very creative and often had very creative ideas when it came to making her projects. She was also interactive with other students and performed well in teams. "
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui023": {
    "name": "Jonathan",
    "course": [
      {
        "CourseName": "Minecraft with makecode",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Wed 2 - 3:30pm",
        "instructor": "Mr. Ethan Liao, Ms. Palak Gajera",
        "ProjectTitle": "Minecraft Maze",
        "ProjectLink": "Makecode: https://makecode.com/_AciYjz5o7Lbw\nWorld Save: https://drive.google.com/open?id=15sj_YA4f1zqvKp_chK9GoChI9fKLbx5A\nHow to run:\nDownload and click on the file when finished installing\nOpen up the world\nType in \u201c/code\u201d and copy and paste the Javascript from \u201cMakecode\u201d link into the Javascript inside of Makecode.\nType in \u201cstart\u201d and the game will start\n\n",
        "feedback": "Johnathan was really active and always quick with everything. He would often grasp the concepts well and finish his work quickly. He also did his homework and brought it to class to get it checked. He was always eager to show his peers his project and often included them by making them test out his work. He was also creative and always wanted to add extra features and make his project perfect!"
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui024": {
    "name": "Daniel",
    "course": [
      {
        "CourseName": "Roblox RED",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Monday 5:00 - 6:30",
        "instructor": "Mr. Matt Haase",
        "ProjectTitle": "RED Math Learning ",
        "ProjectLink": "https://www.roblox.com/games/3177146740/Red-Math-Learning-Final-Day",
        "feedback": "Daniel was a pleasure to teach. He was always first to answer questions related to the logic behind our code, specifically when working with the random generation of math questions. He took on a lead role in designing the website and took it upon himself to find images and fonts that he felt appropriate for the site. Overall, Daniel was very hard working and put in more hours than most students would normally put in on a project of this magnitude."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui025": {
    "name": "Raymond",
    "course": [
      {
        "CourseName": "Roblox RED",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Monday 5:00 - 6:30",
        "instructor": "Mr. Matt Haase",
        "ProjectTitle": "RED Math Learning",
        "ProjectLink": "https://www.roblox.com/games/3177146740/Red-Math-Learning-Final-Day",
        "feedback": "Raymond took on a role as more of a lead designer. His ideas and thoughts on the layout, flow, and creative aspect of the game drove the other students during the lessons. He took time to assist with coding and focused on creating a product that was not only useful for learning, but also fun and engaging for any user. Raymond was a pleasure to teach and completed his assignments as instructed to ensure there were no hold-ups when designing later aspects of the project."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui026": {
    "name": "Eric",
    "course": [
      {
        "CourseName": "Roblox RED",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Monday 5:00 - 6:30",
        "instructor": "Mr. Matt Haase",
        "ProjectTitle": "RED Math Learning",
        "ProjectLink": "https://www.roblox.com/games/3177146740/Red-Math-Learning-Final-Day",
        "feedback": "Eric was a fantastic learner. He worked individually with me at times to make sure he could understand the code. He took it upon himself to ensure that the project was clean and organized and not only that the game worked currently, but that the game could be easily updated whenever needed. Eric has a bright mind for coding and a gift for organization and keeping projects structured, a very rare trait in students."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "o7Rll52iGkXc83E2sV3Onv7pYK0A"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui027": {
    "name": "Tingyu",
    "course": [
      {
        "CourseName": "Roblox 2",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Thursday 3:30 - 5:00",
        "instructor": "Mr. Matt Haase",
        "ProjectTitle": "PUBG Roblox Clone",
        "ProjectLink": "https://www.roblox.com/games/3087682550/Destructionator ",
        "feedback": "Tingyu has been working on 2 separate projects in our classes. His first project, which was individual is a large-scale battle-royale game. He focused intently on duplicating a game he enjoys in his personal time. One major issue with his game was the \"game-loop\" which stuctured how the different rounds of the game would work. I saw him work intently to understand how the loop work and ensure it was possibly to play. His second project, a group project, placed Tingyu in a more assistive role. He scripted some basic functionality for a \"shop\" in the game which used logic to check if players had enough money to purchase items."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui028": {
    "name": "Paris",
    "course": [
      {
        "CourseName": "Roblox 2",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Thurs 3:30 - 5:00",
        "instructor": "Mr. Matt Haase",
        "ProjectTitle": "Tech Store Adventure",
        "ProjectLink": "https://www.roblox.com/games/3061820524/PK-Lounge",
        "feedback": "Paris is a quick learner with a knack for creativity. She constantly displays the willingness to learn and will work for large periods of the class to make sure she understands a topic. She works with her fellow classmates on a game where she implemented scripts for surface text on objects. There were used for signs in the project. When we discuss topics in class I can tell she is listening and focused."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui029": {
    "name": "Richard",
    "course": [
      {
        "CourseName": "Python Programming with Minecraft",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 1:00-2:30PM",
        "instructor": "Mr. Zachary Wiesenthal",
        "ProjectTitle": "Minecraft Parkour with Lava",
        "ProjectLink": "https://repl.it/@ZachWiesenthal/Parkour",
        "feedback": "Richard is an excellent student that continued to surpass my expectations. He was able to follow along with the concepts well. I gave him slightly harder problems than usual and he was often able to solve them. He wrote a sorting function, made a parkour game in Minecraft where lava chased the user, and made rock paper scissors."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui030": {
    "name": "Kevin",
    "course": [
      {
        "CourseName": "Roblox 2",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Thurs 3:30 - 5:00",
        "instructor": "Mr. Matt Haase",
        "ProjectTitle": "Tech Store Adventure",
        "ProjectLink": "https://www.roblox.com/games/3061820524/PK-Lounge",
        "feedback": "Kevin has been a huge creative influence for the class. On the first day he had an idea to make a project based around a pre-existing game, but with a twist. He worked diligently with the modeling tools in Roblox to create a hidden layer to what seems like a simple game. Kevin added scripts to coins for ease of collection and coded some of the objects in our world to be clickable for the \"shop\" aspect of our game. He passed his code on to a fellow classmate so that she could use it to make the rest of the shop. A great example of teamwork and reusable code."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui031": {
    "name": "Amy",
    "course": [
      {
        "CourseName": "Python Programming with Minecraft",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 1:00 - 2:30PM",
        "instructor": "Mr. Zachary Wiesenthal",
        "ProjectTitle": "Randomly Generated Math Quiz",
        "ProjectLink": "https://repl.it/@ZachWiesenthal/Math-Quiz",
        "feedback": "Amy was a great student with lots of energy. She picked up quickly on the python concepts that we learned. She was especially good at using input and if-statements and made a few projects using these concepts. She made rock-paper-scissors, a math quiz, a text adventure game, and several other projects. She had a positive attitude and I hope she continues with programming. "
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui032": {
    "name": "Wilson",
    "course": [
      {
        "CourseName": "Lego Mindstorms I",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Sat 9:30-11:00",
        "instructor": "Ms. Celine Mangahas",
        "ProjectTitle": "Candy Fishing Game",
        "ProjectLink": "https://photos.app.goo.gl/oRyD2aviL3GbKoDdA",
        "feedback": "Wilson works well with others and learns fairly quick. He is very eager to build new robots as well as programming for them. He can finish the job without making a fuss over it. His project, the Candy Fishing Game, showed a lot of creativity and critical thinking when there weren't enough parts to finish his original idea. Overall, Wilson was a good student that is always willing to learn."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stui033": {
    "name": "Michael",
    "course": [
      {
        "CourseName": "Lego Mindstorms II",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Sat 11:15 - 12:45",
        "instructor": "Ms. Celine Mangahas",
        "ProjectTitle": "Laundry Folding Machine",
        "ProjectLink": "https://photos.app.goo.gl/1cPnLsnqr6zo6Tg78",
        "feedback": "Michael has always shown ingenuity and a willingness to learn since day 1. He works well with others and shows traits of creativity and leadership when he had other classmates. He understood each topic and concept and incorporated his own flair to each lesson and challenge presented to him. His project, the Laundry Folding Machine, was a difficult project he managed to build and test on his own with some help. Michael was a great student who always looked for solutions and the bright side of a problem."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "o7Rll52iGkXc83E2sV3Onv7pYK0A"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stua034": {
    "name": "Aaron",
    "course": [
      {
        "CourseName": "Python Programming with Pygame",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Saturday 9:30AM",
        "instructor": "Mr. John Chi-Wei Wang",
        "ProjectTitle": "Star shooting game.",
        "ProjectLink": "I didn't record the link.",
        "feedback": "Aaron demonstrates a great potential as a young computer scientist. When we discuss the topics in the class, he is always listening and focused and will be the first to raise question and respond to asked questions as well. He displays the willingness to learn and eager to learn; Aaron is also the only student that complete most of his code for the recent competition independently and require very little supervision.  I have a high hope for Aaron, A lot of his characters echoes who someone will have a success in the computer science field based on my past encounter.  Most importantly, Aaron is motivated to learn. "
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "o7Rll5-yKyNpPfPrS0UfKDqYhRk8"
      }
    ]
  },
  "stui035": {
    "name": "Tiger",
    "course": [
      {
        "CourseName": "App Inventor",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Friday 5:00pm - 6:30pm",
        "instructor": "Mr. Andrew Chen",
        "ProjectTitle": "Quiz App",
        "ProjectLink": "The student has access to his project through ShareMyWorks.",
        "feedback": "Tiger is an energetic student and is always willing to try something once. Although he can be a tad distracted at times, it is truly a joy to have a student who tries so hard even when he is not sure how to reach his goal. As I started the session with a rather large class, I appreciate his patience when it comes to asking for help. Tiger has truly been a joy to teach and I would enjoy having him in my classroom again in the future."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "o7Rll5-yKyNpPfPrS0UfKDqYhRk8"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "o7Rll52iGkXc83E2sV3Onv7pYK0A"
      }
    ]
  },
  "stui036": {
    "name": "Daniel",
    "course": [
      {
        "CourseName": "App Inventor",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "Friday 5:00pm - 6:30pm",
        "instructor": "Mr. Andrew Chen",
        "ProjectTitle": "Roblox Parent App",
        "ProjectLink": "The project as available in the student's ShareMyWorks account.",
        "feedback": "Daniel is a student that really enjoys competition. He always attempt to raise his hand first for any question even if the answer he supplies is wrong. This is a very good quality to have. I do wish more students would do this more often. He also seems to be very open minded in the way that he is able to take criticism of his ideas and process them without bias. This is a skill that will serve him well."
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  },
  "stuo037": {
    "name": "Henry Zhao",
    "course": [
      {
        "CourseName": "",
        "season": "2019\u5e74\u6625\u5b63",
        "CourseTime": "",
        "instructor": "",
        "ProjectTitle": "Maze game",
        "ProjectLink": "I didn't know know that we need to record the URL",
        "feedback": "Henry is a quick learner; what is special about Henry is his understanding of the materials that covered during the class session (it is very important that the student not only copy the code that from the instructor but understand the logic and the usage) and Henry does it. He always participated in the class discussion.  His understanding was rewarded in his recent competition which resulted in the first place in his grade level. The project he used in the competition is complex and advance; the material is even advance towards a community college student; however, Henry understood most of it.  Henry also participated with other classmate as well. I have a high hope for Henry.  At such young age, Henry shows great potential.  "
      }
    ],
    "notifications": [
      {
        "suffix": "\u5988\u5988",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u7238\u7238",
        "openId": "_UNIQUE_OPEN_ID"
      },
      {
        "suffix": "\u5bb6\u957f",
        "openId": "_UNIQUE_OPEN_ID"
      }
    ]
  }
}