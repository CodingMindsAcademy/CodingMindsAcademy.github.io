#!/bin/bash

# Ask the user for their name
echo Please input the source course name?
read srccourse

srcenghtml=$srccourse".html"
srcengjs="course-control/"$srccourse".js"
srccnhtml=$srccourse"c.html"
srccnjs="course-control/"$srccourse"c.js"

echo Please input the target course name?
read trgcourse

trgenghtml=$trgcourse".html"
trgengjs="course-control/"$trgcourse".js"
trgcnhtml=$trgcourse"c.html"
trgcnjs="course-control/"$trgcourse"c.js"

echo Copying $srcenghtml to $trgenghtml
cp $srcenghtml $trgenghtml
echo Copying $srcengjs to $trgengjs
cp $srcengjs $trgengjs
echo Copying $srccnhtml to $trgcnhtml
cp $srccnhtml $trgcnhtml
echo Copying $srccnjs to $trgcnjs
cp $srccnjs $trgcnjs





