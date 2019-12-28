echo please input mlab username:
read username
echo please input mlab password:
read password
mongo ds247569.mlab.com:47569/shareworks-prod -u $username -p $password < getIrvine.js > ../course2020Spring1.js
mongo ds247569.mlab.com:47569/shareworks-prod -u $username -p $password < getArcadia.js >> ../course2020Spring1.js
mongo ds247569.mlab.com:47569/shareworks-prod -u $username -p $password < getOnline.js >> ../course2020Spring1.js

mongo ds247569.mlab.com:47569/shareworks-prod -u $username -p $password < advice_page.js > ../id_coursecodes.js
echo Finished
echo MAKE SURE to clean TWO(22222222) files above, mongo script would print some message.