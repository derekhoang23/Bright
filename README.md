# Bright
Financial Advisory SaaS

## Description

A financial managed portfolio with assets suggestions based on users risk level. Allocation for money will change
from values 1-4, 5-7, 8-10 on slider bar. In reality, these values should be computated in the server for different percentages
on each investment field. On home page, the pie chart and table chart will dynamically render based on changing the slider.
Upon submitting the slider bar change, it will redirect you to the portfolio details where it shows static portfolio values and
what you wish to allocate to. These values are dynamically changed on the bar graph when submitting the slider bar risk level.
If you wish to complete the target allocation upon reading suggestion details, submit and in reality should update your current
portfolio details on the database.

## How to Start
run 'npm install' in command line of root directory of project

run 'npm start-dev' in command line of root directory of project

open up http://localhost:8080/Home on Browser

## Code Description
Things that should be done, but not enough time:

. change webpack.config to production mode
. bundle all .css files into one and load onto html
. currently selectively injecting css files to any React component, this speeds development
. action types could be move onto one file to make it cleaner
. action creators can be filed better according to their functionality and which state they update
