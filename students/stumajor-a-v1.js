/*
    1. Attribute的命名使用Java规则，第一个字母小写
    2. 这个JSON我们给它保持到最精简的版本，因为下面要推倒重建
    3. 这个JSON应该可以从CSV文件生成，所以我drop了courseId，等于所有内容就直接包括在这一个文件里面
    4. Notifications OpenID，我们可以再建一个CSV管理，然后在生成的时候把这两个merge到一起
*/

var stuFbDba = 
{
    'stua001Matthew': {
        'name': 'Matthew',
        'since': '2018年8月',
        'level': 2,
        'coursesTodo': [
            'cs230',
            'cs410'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Roblox I',
            'season': '2019年春季',
            'CourseTime': 'Thursday 3:30',
            'instructor': 'Mr. Carlos Olea',
            'ProjectTitle': 'Home Sweet Home',
            'ProjectLink': 'https://www.roblox.com/games/3200514323/Home-A-Roblox-Horror-Game',
            'feedback': 'Matthew is energetic and enthusiastic about roblox. He consistently answers questions in class and is adept at understanding and implementing various code examples in class. He also shows an interest in further game development.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua002Jason': {
        'name': 'Jason',
        'since': '2018年8月',
        'level': 2,
        'coursesTodo': [
            'cs230',
            'cs410'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Roblox I',
            'season': '2019年春季',
            'CourseTime': 'Thursday 3:30',
            'instructor': 'Mr. Carlos Olea',
            'ProjectTitle': 'Escape Room',
            'ProjectLink': 'https://www.roblox.com/games/3200753785/Escape-Room',
            'feedback': 'Jason has demonstrated to be a very intelligent student. He always tries to write his own code and push the applications of the knowledge he is given. He is also creative in his application and goals.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua003Vivien': {
        'name': 'Vivien',        
        'since': '2018年8月',
        'level': 2,
        'coursesTodo': [
            'cs230',
            'cs571'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Roblox I',
            'season': '2019年春季',
            'CourseTime': 'Thursday 3:30',
            'instructor': 'Mr. Carlos Olea',
            'ProjectTitle': 'Greek God RPG',
            'ProjectLink': 'https://www.roblox.com/games/3011354888/greek-gods-roleplay',
            'feedback': 'Vivien is an excellent and attentive student. She always does her best and pays attention in class. She works well with others and shows an understanding of the material.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua004Mary': {
        'name': 'Mary',
        'since': '2018年8月',
        'level': 2,
        'coursesTodo': [
            'cs230',
            'cs571'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': ' Roblox II',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30',
            'instructor': 'Mr. Carlos Olea',
            'ProjectTitle': 'heeeelllll',
            'ProjectLink': 'https://www.roblox.com/games/3200841059/heeeelllll',
            'feedback': 'Mary shows aptitude for coding and modeling. With some encouragement, she could become an excellent coder. Mary should practice more modelling by hand.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua005Justin': {
        'name': 'Justin',
        'since': '2018年7月',
        'level': 2,
        'coursesTodo': [
            'cs230',
            'cs410'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Roblox II',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30',
            'instructor': 'Mr. Carlos Olea',
            'ProjectTitle': 'Alpaca = Lamma (Tycoon game)',
            'ProjectLink': 'https://www.roblox.com/games/2992035447/ALPACA-LLAMA',
            'feedback': 'Justin shows a strong understanding of code and concepts. While sometimes needing to focus more, he consistently finishes his code quickly and picks up new concepts easily.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua006Zach': {
        'name': 'Zach',
        'since': '2018年10月',
        'level': 2,
        'coursesTodo': [
            'cs230',
            'cs410'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Roblox II',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30',
            'instructor': 'Mr. Carlos Olea',
            'ProjectTitle': 'ZRacing Game',
            'ProjectLink': 'https://www.roblox.com/games/3200875198/ZRacing-Game',
            'feedback': 'Zach is a very good student who always pays attention. He also frequently asks questions, and because of that has a strong understanding of the material. He is creative and participates often and is an overall excellent student.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua007Joshua': {
        'name': 'Joshua',
        'since': '2019年1月',
        'level': 2,
        'coursesTodo': [
            'cs230',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Roblox I',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30am - 11:00am',
            'instructor': 'Mr Jonathan Sahagun',
            'ProjectTitle': 'Dungeon Breakout',
            'ProjectLink': 'https://www.roblox.com/games/3119145611/Dungeon-Breakout',
            'feedback': 'Joshua is very interested in testing the boundaries of knowledge. Throughout the class he always asked "what if" and "what happens when" questions. Early in the semester he questioned so of the math around physics that would require an understanding of calculus. If he continues to think in this manner of question why things work I believe he will have a very bright future.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua008Rogan': {
        'name': 'Rogan',
        'since': '2019年1月',
        'level': 2,
        'coursesTodo': [
            'cs230',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Roblox I',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30am - 11:00am',
            'instructor': 'Mr Jonathan Sahagun',
            'ProjectTitle': 'Currently working on it',
            'ProjectLink': 'https://www.roblox.com/games/3200886943/Currently-Working-on-it',
            'feedback': 'Rogan is a very creative student. When it came to design parts, he had many ideas. He follows instructions and listens well although he is a bit quiet. He works well the other students.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua009Nelson': {
        'name': 'Nelson',
        'since': '2019年1月',
        'level': 2,
        'coursesTodo': [
            'cs230',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Roblox I',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30am – 11am',
            'instructor': 'Mr Jonathan Sahagun',
            'ProjectTitle': 'Surprise Tycoon',
            'ProjectLink': 'https://www.roblox.com/games/3068627600/Suprise-Tycoon',
            'feedback': 'He is ahead of the class in understanding the material be has some trouble applying when scripting. Meaning he knows what to do but has trouble doing it, for example forgetting the name of the classes or functions. Being ahead gives him some time to familiarize Roblox while the other students catch up. Good student does the work and wants to learn and does well following along with the lesson.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua010Jerry': {
        'name': 'Jerry',
        'since': '2019年1月',
        'level': 2,
        'coursesTodo': [
            'cs230',
        
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Roblox I',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30am – 11am',
            'instructor': 'Mr Jonathan Sahagun',
            'ProjectTitle': 'B',
            'ProjectLink': 'https://www.roblox.com/games/3200894353/B',
            'feedback': 'Jerry works well with other Students. One week, he was the first to solve the first challenge problem of the week. After a very small hint he had his a-ha moment. On the second problem he struggled a small amount be did not give up and kept working. This focus and dedication made him a great student that follows and understand the lessons presented to him.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua011Kevin': {
        'name': 'Kevin',
        'since': '2018年11月',
        'level': 3,
        'coursesTodo': [
            'cs410',
            'cs400'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Unity3D',
            'season': '2019年春季',
            'CourseTime': 'Tuesday 5:30 - 7:00',
            'instructor': 'John Morris',
            'ProjectTitle': 'Get the Treasure',
            'ProjectLink': '',
            'feedback': 'Kevin works very hard is very good at following instructions. Despite his limited video game experience, he was able to come up with an interesting idea for his final project. He worked very hard to acheive what he has with his game. But like most things that are creative, they are always a work in progress and Kevin seemed determined to keep working on his game. \nOn another note, Kevin is easily the most polite child I have ever met, which makes him an absolute pleasure to teach and work with.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua012Frank': {
        'name': 'Frank',
        'since': '2018年10月',
        'level': 3,
        'coursesTodo': [
            'cs425',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Unity3D',
            'season': '2019年春季',
            'CourseTime': 'Tuesday 5:30 - 7:00',
            'instructor': 'John Morris',
            'ProjectTitle': 'War of Cubes',
            'ProjectLink': '',
            'feedback': 'Frank is very good at following instructions and has shown the abilty to apply what he has learned to other things. For his game, I helped him create just a few bits of code, the then took it and created a game that I had not pictured. He was very creative and resourcefull in the creation of his game and it was easily the best game from all the Unity3D classes. There is little doubt that Frank can be successful in video games, if he so chooses, or any techincal field.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua013Frank': {
        'name': 'Frank',
        'since': '2018年8月',
        'level': 3,
        'coursesTodo': [
            'cs425',
            'cs571'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Unity3D',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30-11:00',
            'instructor': 'John Morris',
            'ProjectTitle': 'The Forbiddity Monster',
            'ProjectLink': '',
            'feedback': 'Frank has picked up Unity very quickly, almost better than any other student and yet he is the youngest, very impressive. His game was also very interesting. He created the artwork for his game which few students do. I kept trying to get him to make more art for his game but he was too interested in creating impossible levels and lots of them, so he obviously won. He only required a little bit of help to create the tools he needed to develop his entire game, only now and again asking for help. Frank is a very impressive student that seems destine to do something creative with his life.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua014Cheng': {
        'name': 'Cheng',
        'since': '2019年1月',
        'level': 3,
        'coursesTodo': [
            'cs300',
            'cs425'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Unity3D',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30-11:00',
            'instructor': 'John Morris',
            'ProjectTitle': 'Cubekour',
            'ProjectLink': '',
            'feedback': 'Cheng worked very hard in the class. He told me early on he had difficulty reading and understanding English so I was able to adjust accordingly. Although initially rather shy, he became very good at asking questions when he did not understand or I went too fast. His game was an rather interesting idea that he toiled over for several weeks, always wanting to add something new each week. In the end, he developed a fun little game and platform he could use to develop a fully featured game. '
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua015Jonathan': {
        'name': 'Jonathan',
        'since': '2019年1月',
        'level': 3,
        'coursesTodo': [
            'cs425',
            'cs310'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Unity3D',
            'season': '2019年春季',
            'CourseTime': '9:30-11:00',
            'instructor': 'John Morris',
            'ProjectTitle': 'Block Dash Game',
            'ProjectLink': '',
            'feedback': 'Jonathan seems to enjoy working with Unity very much. He was very excited about creating his own game in Unity. His idea, although a mixture of other games, was unique in how he pulled it together. He took a simple idea and made it into an interesting and fun game. He was always on point and ready to work and I rarely had to debug his code. If he continues working with coding or game development he will be very successful in the future.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua016Iris': {
        'name': 'Iris',
        'since': '2019年1月',
        'level': 2,
        'coursesTodo': [
            'cs310',
            'cs200'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510','cp600'
        ],
        'course': [{
            'CourseName': 'MakeCode & JavaScript',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30-11am',
            'instructor': 'Mr Austin Buenaobra',
            'ProjectTitle': '',
            'ProjectLink': '',
            'feedback': 'Iris was a quick learner and she was very motivated to complete the tasks and assignments. She was very responsive whenever we would go over the worksheets or homework in class. During the session which we built an aquarium, she showed great interest in the topic and the tools needed to accomplish the tasks\n. She was never a distraction in class and did great work.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },

    'stua017Liam': {
        'name': 'Liam',
        'since': '2018年10月',
        'level': 1,
        'coursesTodo': [
            'cs101',
            'cs160'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'MakeCode & JavaScript',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30-11am',
            'instructor': 'Mr Austin Buenaobra',
            'ProjectTitle': '',
            'ProjectLink': '',
            'feedback': 'Iris was a quick learner and she was very motivated to complete the tasks and assignments. She was very responsive whenever we would go over the worksheets or homework in class. During the session which we built an aquarium, she showed great interest in the topic and the tools needed to accomplish the tasks\n. She was never a distraction in class and did great work.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },

    'stua018Dora': {
        'name': 'Dora',
        'since': '2019年1月',
        'level': 1,
        'coursesTodo': [
            'cs101',
            'cs160'           
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Minecraft Education Edition',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30-11:00',
            'instructor': 'Ms. Monica',
            'ProjectTitle': "Dora's House",
            'ProjectLink': 'https://makecode.com/_3dz9ctcy5JXE',
            'feedback': 'Dora showed great excitement every time she came to class. Always prepared to learn and have fun. Dora always got the challenges and finished challenges fast. She was very competitive with the other students and really made class a lot better. She is very smart and very creative. Always listened in class and when asked a question she was the first to raise her hand. She made sure I understood what she was trying to say and what she wanted to do in her projects. She was a pleasure to teach and I know she has a bright future ahead in coding. '
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua019Chris': {
        'name': 'Chris',
        'since': '2018年8月',
        'level': 2,
        'coursesTodo': [
            'cs220',
            'cs200'

        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Scratch',
            'season': '2019年春季',
            'CourseTime': 'Thursday 5:00-6:30pm',
            'instructor': 'Ms. Monica',
            'ProjectTitle': 'Dont blink',
            'ProjectLink': '',
            'feedback': "Chris was very creative and very smart. He always asked ways to get more points in class. Even if he didn't finish challenges first he was looking for other ways to get those points. Always payed attention and when asked to stop playing he always did and payed attention to class instead. Always ready to learn  and ready for class. "
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua020Louie': {
        'name': 'Louie',
        'since': '2018年8月',
        'level': 2,
        'coursesTodo': [
            'cs220',
            'cs200'
        ],
        'compTodo' : [
            'cp100', 'cp200','cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Scratch',
            'season': '2019年春季',
            'CourseTime': 'Thursday ',
            'instructor': 'Ms. Monica ',
            'ProjectTitle': 'Pacman',
            'ProjectLink': '',
            'feedback': 'Louie was a pleasure to have in class and teach. He liked challenges and liked to go to the other students and see what they were working on. He got along with everyone. He understood the topics for each class and knew what he was doing.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua021Austin': {
        'name': 'Austin',
        'since': '2018年8月',
        'level': 2,
        'coursesTodo': [
            'cs220',
            'cs200'            
        ],
        'compTodo' : [
            'cp100', 'cp200','cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Scratch',
            'season': '2019年春季',
            'CourseTime': 'Thursday 5:00-6:30pm',
            'instructor': 'Ms. Monica ',
            'ProjectTitle': 'Marvel Studios’ Avengers-Offical Trailer (Scratch Animation) ',
            'ProjectLink': '',
            'feedback': 'Austin showed great understanding of scratch. After teaching him Scratch and Minecraft he is ready to learn more about coding. He is very creative and knows how to be very detailed when it comes to designing. For his projects he drew everything by hand. Very smart and he finished all the challenges given to the class. '
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua022James': {
        'name': 'James',
        'since': '2018年8月',
        'level': 2,
        'coursesTodo': [
            'cs220',
            'cs200'            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Scratch',
            'season': '2019年春季',
            'CourseTime': 'Thursday 5:00-6:30pm',
            'instructor': 'Ms. Monica',
            'ProjectTitle': 'Pixel World',
            'ProjectLink': '',
            'feedback': 'James loves video games and he will be great a making more. During these past weeks he showed his passion for video games and made fun games on scratch. When asked to stop playing he would stop. Got along with other students and like to talk to them.  He was a great student and showed understanding of the topics taught in class. '
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua023Michael': {
        'name': 'Michael',
        'since': '2019年3月',
        'level': 2,
        'coursesTodo': [
            'cs220',
            'cs200'  

        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'MakeCode & JavaScript',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30-11am',
            'instructor': 'Mr Austin Buenaobra',
            'ProjectTitle': '',
            'ProjectLink': '',
            'feedback': 'Michael was a very motivated learner and he advanced through the lessons and concepts with no difficulty. He displayed willingness to learn new topics but made sure to finish the current task or project before moving on. Michael was always one of the first to volunteer to answer questions or do example problems which shows how interested he was in the course. He did not provide any problems during class and was a well-behaved student all throughout.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua024Eric': {
        'name': 'Eric',
        'since': '2018年8月',
        'level': 3,
        'coursesTodo': [
            'cs430',
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python Programming with Pygame',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30AM',
            'instructor': 'Mr. John Chi-Wei Wang',
            'ProjectTitle': 'mind craft project',
            'ProjectLink': 'https://www.sharemyworks.com/projects/5cd4af22ce28bf0015df6ba1',
            'feedback': 'Eric is a quick learner with a nack for creativity. He constantly displays the willingness to learn and will work for large periods of the class to make sure he understands a topic. He works well with her fellow classmates during class. When we discuss topics in class I can tell he is listening and focused.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua025Aaron': {
        'name': 'Aaron',
        'since': '2018年8月',
        'level': 3,
        'coursesTodo': [
            'cs430',
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python Programming with Pygame',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30AM',
            'instructor': 'Mr. John Chi-Wei Wang',
            'ProjectTitle': 'Star shooting game.',
            'ProjectLink': '',
            'feedback': 'Aaron demonstrates a great potential as a young computer scientist. When we discuss the topics in the class, he is always listening and focused and will be the first to raise question and respond to asked questions as well. He displays the willingness to learn and eager to learn; Aaron is also the only student that complete most of his code for the recent competition independently and require very little supervision.  I have a high hope for Aaron, A lot of his characters echoes who someone will have a success in the computer science field based on my past encounter.  Most importantly, Aaron is motivated to learn. '
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua026Henry': {
        'name': 'Henry',
        'since': '2018年8月',
        'level': 3,
        'coursesTodo': [
            'cs430',
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python Programming with Pygame',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30AM',
            'instructor': 'Mr. John Chi-Wei Wang',
            'ProjectTitle': 'Maze game',
            'ProjectLink': 'https://www.sharemyworks.com/projects/5cd6fdc5660b8200158b2b71',
            'feedback': 'Henry is a quick learner; what is special about Henry is his understanding of the materials that covered during the class session (it is very important that the student not only copy the code that from the instructor but understand the logic and the usage) and Henry does it. He always participated in the class discussion.  His understanding was rewarded in his recent competition which resulted in the first place in his grade level. The project he used in the competition is complex and advance; the material is even advance towards a community college student; however, Henry understood most of it.  Henry also participated with other classmate as well. I have a high hope for Henry.  At such young age, Henry shows great potential.  '
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua027Lucas': {
        'name': 'Lucas',
        'since': '2018年8月',
        'level': 3,
        'coursesTodo': [
            'cs430',
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python Programming with Pygame',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30AM',
            'instructor': 'Mr. John Chi-Wei Wang',
            'ProjectTitle': 'Maze game',
            'ProjectLink': '',
            'feedback': 'Lucas is a quick learner. Lucas slowly show interest for Pygame; but I can finally see his interest towards the topic.  He participated during the class discussion to make sure she understands a topic. He works with her fellow classmates on a maze game. When we discuss topics in class I can tell he is listening and focused.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },

    'stua028Richard': {
        'name': 'Richard',
        'since': '2019年1月',
        'level': 3,
        'coursesTodo': [
            'cs430',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python I',
            'season': '2019年春季',
            'CourseTime': 'Thursday 3:30PM',
            'instructor': 'Dr.Yu Sun',
            'ProjectTitle': 'Calculator Math Game',
            'ProjectLink': 'https://www.sharemyworks.com/projects/5cd4af7cce28bf0015df6ba6',
            'feedback': 'Richard毫无疑问是这学期在Arcadia见到的最优秀的同学。他对编程的反应特别快，而且学习非常踏实认真。他对自己的要求也一直很高，比赛的项目其实已经做的很好，但是还是要再加内容。最近的几期课我给大家讲了一些关于算法的知识（大学计算机课的内容），Richard一点都没有问题。我非常鼓励Richard将来考虑申请计算机专业。'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua029Leheng': {
        'name': 'Leheng',
        'since': '2019年1月',
        'level': 3,
        'coursesTodo': [
            'cs430',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python I',
            'season': '2019年春季',
            'CourseTime': 'Thursday 3:30PM',
            'instructor': 'Dr.Yu Sun',
            'ProjectTitle': 'Super Jumper',
            'ProjectLink': 'https://www.sharemyworks.com/projects/5cd4af76ce28bf0015df6ba5',
            'feedback': 'Leheng上课非常认真，常常是上课第一个完成练习的同学。这次的项目，他的项目是几个同学里面最有特色而且做的最复杂的。他在做项目的过程中不断的问我问题，不停的想办法加上去更多的功能，这点让我印象很深。Leheng对于他喜欢的内容总是愿意不断的挑战自己，我觉得下一阶段需要给Leheng一些更难的题目和内容。'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua030Jerry': {
        'name': 'Jerry',
        'since': '2019年1月',
        'level': 3,
        'coursesTodo': [
            'cs430',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python I',
            'season': '2019年春季',
            'CourseTime': 'Thursday 3:30PM',
            'instructor': 'Dr.Yu Sun',
            'ProjectTitle': 'Super Jumper',
            'ProjectLink': 'https://www.sharemyworks.com/projects/5cd4b646ce28bf0015df6ba8',
            'feedback': 'Jerry对编程很有天赋和兴趣，我记得第一节课的时候Jerry因为年龄小，另外没有太多的基础，有些概念并不是特别明白。但是仅仅过了两周，当他完成了两个复杂的例子之后，立刻找到了感觉。这次的项目，他的项目是几个同学里面最有特色而且做的最复杂的。春假的那一周，Jerry想自己在家里把服务器的所有东西给配置好，这本来是一个很负责的工作，我在微信上告诉Jerry下周把电脑拿过来我来帮他，但是后来Jerry花了一下午的时间把所有的内容都给安装完成了。我觉得Jerry将来选择计算机专业一定能做的很好。'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua031Matt': {
        'name': 'Matt',
        'since': '2019年1月',
        'level': 3,
        'coursesTodo': [
            'cs430',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python I',
            'season': '2019年春季',
            'CourseTime': 'Thursday 3:30PM',
            'instructor': 'Dr.Yu Sun',
            'ProjectTitle': 'PVP Survival',
            'ProjectLink': 'https://www.sharemyworks.com/projects/5cd4b07fce28bf0015df6ba7',
            'feedback': 'Matt is obviously the smartest student I have seen this year in Arcadia! He is always the first one to finish the exercises during the class, and I have to always prepare something extra for him to challenge him a little bit more, otherwise, he will go to play his games. Sometimes, I have to let him slow down a little bit, just because he is too fast and I am a little concerned that the others will lose their confidence ;-) I think Matt has great talent and potential in coding and Computer Science. I look forward to seeing Matt taking more challenges in the near future. '
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua032Harley': {
        'name': 'Harley',
        'since': '2019年1月',
        'level': 3,
        'coursesTodo': [
            'cs430',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python I',
            'season': '2019年春季',
            'CourseTime': 'Thursday 3:30PM',
            'instructor': 'Dr.Yu Sun',
            'ProjectTitle': 'MC Maze',
            'ProjectLink': '',
            'feedback': 'Harley对上课的内容总是很有兴趣和热情，他常常在大家还在做练习的时候，自己已经很快的完成练习，并且开始自己尝试一些新的程序。开始做项目的时候，Harley告诉了我很多很好的想法，他的思路非常开阔，而且做项目的过程中，也是不断的挑战自己要做更难的内容。Harley经常需要我准备一点难的东西来保持他的兴趣。另外，Harley是个非常愿意分享的同学，他常常买吃的东西的时候也不忘记给班上的其他同学也买一些，这样的孩子，我在Irvine和Arcadia从来没有见过，能看得出Harley将来可以干大事情。'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua033Johnny': {        
        'name': 'Johnny',
        'since': '2019年1月',
        'level': 3,
        'coursesTodo': [
            'cs430',
            
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'Python I ',
            'season': '2019年春季',
            'CourseTime': 'Thursday 3:30-5:00pm',
            'instructor': 'Dr. Yu Sun',
            'ProjectTitle': 'Super Parkour',
            'ProjectLink': 'https://www.sharemyworks.com/projects/5cd4af37ce28bf0015df6ba2',
            'feedback': 'Johnny始终对编程和上课内容有着强烈的兴趣。开始的2节课，他没有太多基础，接受的有些慢，但是后来通过完成两个复杂的例子，立刻找到了感觉。到后来的项目阶段，他是第一个确定自己项目想法并完成项目的同学，而且始终做的很专心。Johnny在课堂很认真，所有的练习不论难易都会仔细的完成，这样踏实的同学很难得。'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    },
    'stua034Liam': {
        'name': 'Liam',
        'since': '2018年10月',
        'level': 1,
        'coursesTodo': [
            'cs101',
            'cs160'
        ],
        'compTodo' : [
            'cp100', 'cp200', 'cp400', 'cp510'
        ],
        'course': [{
            'CourseName': 'MakeCode & JavaScript',
            'season': '2019年春季',
            'CourseTime': 'Saturday 9:30-11am',
            'instructor': 'Mr Austin Buenaobra',
            'ProjectTitle': '',
            'ProjectLink': '',
            'feedback': 'Iris was a quick learner and she was very motivated to complete the tasks and assignments. She was very responsive whenever we would go over the worksheets or homework in class. During the session which we built an aquarium, she showed great interest in the topic and the tools needed to accomplish the tasks\n. She was never a distraction in class and did great work.'
        }],
        'notifications': [{
            'suffix': '妈妈',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '爸爸',
            'openId': '_UNIQUE_OPEN_ID'
        },
        {
            'suffix': '家长',
            'openId': '_UNIQUE_OPEN_ID'
        }]
    }
}