/*
    1. Attribute的命名使用Java规则，第一个字母小写
    2. 这个JSON我们给它保持到最精简的版本，因为下面要推倒重建
    3. 这个JSON应该可以从CSV文件生成，所以我drop了courseId，等于所有内容就直接包括在这一个文件里面
    4. Notifications OpenID，我们可以再建一个CSV管理，然后在生成的时候把这两个merge到一起
*/

var stuFbDb = 
{
    'stui201Clark': {
        'name': 'Clark',
        'course': [{
            'CourseName': 'Raspberry PI',
            'season': '2019年春季',
            'CourseTime': '周六',
            'instructor': 'Mr. Matthew',
            'ProjectTitle': '',
            'ProjectLink': '',
            'feedback': '',
            'comment': [{'week': '第一周', 
                         'weeklycomment':'Clark was very fast on the coding side. He quickly assembled his circuit and began coding python. He was very curious about why the LEDs in parallel worked vs the LEDs in series and we had a quick discussion about the limitations of the current flowing through them.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Clarks circuit drawing was very well made. He showed a firm grasp of ohm’s law and its application in the circuit drawing question.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第二周', 
                         'weeklycomment':'Clark was interested in using the switches to design a new circuit with a on/off LED switch. The major issue with this is we require some more advanced concepts to cover this, so we will move into this in later lessons.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'All homework questions were answered correctly. Would like to see a few more labels on his circuit drawings, but otherwise perfect.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第三周', 
                         'weeklycomment':'Clark individually coded his lock and I was very impressed at his implementation of checking the password. I see great promise in his speed and understanding of coding principles.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Clark answered everything on the homework correctly, but I would like to see a bit more explanation in his short answer questions.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第四周', 
                         'weeklycomment':'Clark was very interested in today’s lesson. He was partially distracted with adding a buzzer, which we will do next week.',
                         'hwscore':'3.5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Clark missed a question on the servo motor we used. He also missed the concept that we use PWM signals to convert from analog to digital signals. Otherwise, his homework was well written and all correct.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第五周', 
                         'weeklycomment':'Clark thoroughly enjoyed this week’s lesson. He had fun using the buzzer to change the frequency and make different music.',
                         'hwscore':'4.5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Clark missed one question on transistors and had a minor mistake on active/passive buzzers. His duty cycle answer was perfectly correct.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第六周', 
                         'weeklycomment':'Clark needs to focus on debugging his assignments. He quickly write the code and assembles the diagram, but just needs to take the time to test and debug any issues that arise.',
                         'hwscore':'4/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Clark answered all the questions he answered correctly, but skipped 1 multiple choice questions. I’m sure if he answered them he would have had a perfect score.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第七周', 
                         'weeklycomment':'Clark got his circuit working after some hard effort. He had to debug his circuit a bit with some assistance but got it working eventually.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Clarks final homework question was very clean and concise. He had the most optimized answer for the assignment given, which is very impressive.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第八周', 
                         'weeklycomment':'Clark got his circuit working perfectly, but had his Pi mixed up with someone else’s. Once he switched the pis his code was the first to work and he modified the difficulty of his game using changes to the code he came up with himself.',
                         'hwscore':'4/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Clark has a firm understanding of the topics',
                         'hwcommentEnable':true                        
                        },
                        {'week': '总评', 
                         'weeklycomment':'Clark was the first to get his circuit working. He began working on a simple color guessing game and implemented lists and conditional statements in code to get it working. Throughout the class Clark has constantly pushed the limits of what he can learn. If he completes part of an assignment he will work to add parts to it and make it better or more complex.',
                         'hwscore':'',
                         'hwscoreEnable':false,
                         'hwcomment':'',
                         'hwcommentEnable':false 
                         }]
                         
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

    'stui202Charlie': {
        'name': 'Charlie',
        'course': [{
            'CourseName': 'Raspberry PI',
            'season': '2019年春季',
            'CourseTime': '周六',
            'instructor': 'Mr. Matthew',
            'ProjectTitle': '',
            'ProjectLink': '',
            'feedback': '',
            'comment': [{'week': '第一周', 
                         'weeklycomment':'Charlie is new to Raspberry Pi but handled the programming very well. He needed slight assistance assembling the circuit but quickly caught on. He is very quiet in class and I can tell he is focused on testing the code and understanding the circuit on a fundamental level, rather than just memorizing the diagram.',
                         'hwscore':'3.5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Circuit turned in was partially correct.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第二周', 
                         'weeklycomment':'Charlie seems disinterested at times during the lesson, but he completes all the assignments well. He struggled with the OR gate circuit but managed to solve the issue and sped through the construction of the AND gate.',
                         'hwscore':'4/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Missed on multiple choice question, pertaining to NOT gates. Circuit drawing was perfect.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第三周', 
                         'weeklycomment':'Charlie got his keypad working quickly, but crashed his raspberry pi by opening too many windows. After rebooting we got his code working well.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Charlie’s short answer was well written and entirely correct. I am impressed with this turn in.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第四周', 
                         'weeklycomment':'Charlie wrote his code, but had a few minor typos. We diagnosed a simple wire crossing in his circuit before seeing it work properly. He was attentive to the lecture on PWM signals and I appreciated his work today.',
                         'hwscore':'4.5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Charlie missed a few questions regarding the servo motor we used. He should elaborate a little more on short answer questions.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第五周', 
                         'weeklycomment':'Charlie is very fast with writing the code for each project. He tested his buzzer circuit and attempted to program “Pirates of the Caribbean” theme song, but ran out of time.',
                         'hwscore':'4/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Charlie’s homework was actually very well done, but he mixed up active vs passive buzzers. He has them opposite of each other.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第六周', 
                         'weeklycomment':'Charlie has a knack for writing very clean code, he had minor issues with his raspberry pi crashing today, and took a while waiting for a frozen pi.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Charlies homework was well done, but he needs more detail on his short answer questions. ',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第七周', 
                         'weeklycomment':'Charlie was quiet and worked hard during the class. He moved on to the LCD display quickly but had difficulty making it work.',
                         'hwscore':'4.5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Charlie skipped the last question of his homework.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第八周', 
                         'weeklycomment':'Charlie had his Pi mixed up as well, but got it working soon after. He did not have as much time to modify his code, but got the base game working.',
                         'hwscore':'4/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Charlie did very well on this homework compared to the class average. Just missing one trick question about on/off states of our lights.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '总评', 
                         'weeklycomment':'Charlie is one of the fastest coders in the class. He requires some assistance with parts of the code, but works very quickly to write code. He had difficulties throughout the class without hardware, though it was not his fault. He nevertheless persevered and completed his assignments.',
                         'hwscore':'',
                         'hwscoreEnable':false, 
                         'hwcomment':'',
                         'hwcommentEnable':false 
                        }]
                         
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
    
    'stui203Bill': {
        'name': 'Bill',
        'course': [{
            'CourseName': 'Raspberry PI',
            'season': '2019年春季',
            'CourseTime': '周六',
            'instructor': 'Mr. Matthew',
            'ProjectTitle': '',
            'ProjectLink': '',
            'feedback': '',
            'comment': [{'week': '第一周', 
                         'weeklycomment':'Bill is rather quiet in class, but always willing to listen to the lesson. He showed a good understanding of circuits and was attentive to our discussion on current vs resistance.',
                         'hwscore':'4/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Bill answered all the questions correctly, he missed the second part of the last question relating to coding, but his circuit drawing was correct.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第二周', 
                         'weeklycomment':'Bill was initially pretty shy, but quickly warmed up. He has experience with arduino and coding and even recognized the diode we were using. Towards the end of class he assembled the AND gate circuit and was able to diagnose an issue with his own OR gate circuit while I assisted other students.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Bill answered everything on the homework correctly. His circuit was labeled perfectly.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第三周', 
                         'weeklycomment':'Bill worked very well to complete his lock. He needed assistance with coding and next class we will be sure to finish his lock to work fully.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Bill swapped the order of row vs column checking for the final question, but otherwise had a perfect answer for the short answer question.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第四周', 
                         'weeklycomment':'Bill had a makeup lesson and was very attentive to our discussion of PWM signals. We spent a few minutes reviewing python towards the end as felt he wanted to brush up on his coding skills in addition to circuit practice.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Bill has a great understanding of digital vs analog signals. His homework explained the process with great detail. The only student with perfect score on this homework.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第五周', 
                         'weeklycomment':'Bill discovered that covering the output of the buzzer left him with a more resonating, rich sound from his buzzer. Other students followed suit and experimented with different augmentations they could make to their buzzer.',
                         'hwscore':'4.5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Bill answered the questions correctly relating to buzzers and transistors, but missed one question on duty cycles, which is one of the more difficult topics.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第六周', 
                         'weeklycomment':'Bill was the only student that managed to get his joystick working, which was very impressive. He wiring the circuit and wrote the code with minimal issue and was able to debug everything himself. Very impressive.',
                         'hwscore':'4.5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Bill’s homework was very well done. He missed 1 multiple choice question about the I2C interface, but his short answer was perfectly written.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第七周', 
                         'weeklycomment':'Bill worked diligently to get his LCD working, but after some time, moved on to work with ensuring the infrared sensor was working properly.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Bill got his homework perfect. He explained the short answers well and his code snippet was very well done.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第八周', 
                         'weeklycomment':'Bill worked 1-on-1 with the instructor and got his code working. He worked slowly and steadily, which took longer to complete but debugging was very easy.',
                         'hwscore':'4/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Bill missed a few questions, but overall did very well, especially on the more difficult questions.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '总评', 
                         'weeklycomment':'Bill was very quiet throughout the class, but his knowledge spoke for him. His homework assignments were consistently well done and he showed a firm grasp on the topics. I appreciate his work ethic and maturity when working with difficult subjects.',
                         'hwscore':'',
                         'hwscoreEnable':false, 
                         'hwcomment':'',
                         'hwcommentEnable':false 
                        }]
                         
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
    'stui204Ted': {
        'name': 'Ted',
        'course': [{
            'CourseName': 'Raspberry PI',
            'season': '2019年春季',
            'CourseTime': '周六',
            'instructor': 'Mr. Matthew',
            'ProjectTitle': '',
            'ProjectLink': '',
            'feedback': '',
            'comment': [{'week': '第一周', 
                         'weeklycomment':'Ted was VERY inquisitive when discussing the lecture. He related the raspberry pi and its ability to process data to modern smartphones and even questioned why we need more storage space or processing power. Very impressive.',
                         'hwscore':'4.5/5',
                         'hwscoreEnable':true,                         
                         'hwcomment':'Ted misread the final question and forgot to draw a circuit. His code was correct.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第二周', 
                         'weeklycomment':'Ted was very receptive to the lesson and nailed even the difficult logic circuits. He was able to construct a truth table for a question similar to the homework in class.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Perfect drawing of the circuit required. Ted answered all questions correctly.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第三周', 
                         'weeklycomment':'Ted crashed his raspberry pi by opening too many windows, but after we booted it back up his keypad worked. We need to finish his lock code.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'All answers were correct, but I would like to see more specific examples when answering the short answer question.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第四周', 
                         'weeklycomment':'Ted listened well during our discussion. He had a good guess on what Digital Inputs were, and after it was explained to the class he quickly related the information to his homework.',
                         'hwscore':'4/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Ted’s got all the correct answers for the digital vs analog questions. He missed one question on the production of our micro servo, one which many of the class struggled with.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第五周', 
                         'weeklycomment':'ed had a makeup class. He was very interested in the operation of the buzzer when used to make music. He had forgotten some of the material on PWM since he wasn’t here last week, but he quickly caught up and remembered everything.',
                         'hwscore':'5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Ted was the only student to score a perfect on this homework. His understanding of the two buzzer types was perfect.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第六周', 
                         'weeklycomment':'Ted struggled to wire the circuit correctly. His code had some typos as well, we were unable to get his joystick working, but with a little more time we could have gotten his working.',
                         'hwscore':'4.5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Ted came to me the following class and asked me many questions and was able to get a better grasp on the homework. I was very happy to see him strive to be the best student he can be and work hard.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第七周', 
                         'weeklycomment':'Ted got his infrared sensor working well, but had some trouble with the I2C interface on the LCD display.',
                         'hwscore':'4.5/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Ted struggled again with the harder parts of the homework, but he put in the time after class to ask questions about it. After our brief discussion he seems to understand it much better.',
                         'hwcommentEnable':true                        
                        },
                        {'week': '第八周', 
                         'weeklycomment':'Ted stayed after class a few minutes to make sure he understood the topic from today’s class. He is a great student who constantly works hard',
                         'hwscore':'3/5',
                         'hwscoreEnable':true,
                         'hwcomment':'Ted did not have his assignment physically with him, but showed me the answers and discussed them with me. Again showing his dedication and willingness to learn. Very good!',
                         'hwcommentEnable':true                        
                        },
                        {'week': '总评', 
                         'weeklycomment':'Ted, although new to many of the coding and circuit concepts showed tremendous growth throughout the class. He initially had very little understanding of the code, but constantly came to me during and after class ',
                         'hwscore':'',
                         'hwscoreEnable':false,
                         'hwcomment':'',                          
                         'hwcommentEnable':false                     
                        }]


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