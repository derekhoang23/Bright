# Bright
Financial Advisory SaaS

## Description

A financial managed portfolio with assets suggestions based on users risk level

## How to Start
run 'npm install' in command line of root directory of project
run 'npm start-dev' in command line of root directory of project
open up http://localhost:8080/Home on Browser

## Code Description
This project is in development mode. The webpack config is set up to hot reload any
changes to React, Redux, CSS without worry about refreshing the browser. This project could also add in webpack config production mode when ready to deploy. It just needs a little extra configuraton.
The redux store is configured to handle any async and sync actions from either user or upon  before mounting React Components and after Initial render of React Components. During any of the
life cycles it could also be used to call server to exchange data. Currently it is reading from local json file.

## Upon Completion
Pie Chart of dynamic risk level change needs to be dynamically changed along with risk level slider bar. On submission, it should redirect to /portfoliodetails dynamically with bar chart values updated based on risk level. Allocation of money on should be calculated based on risk level to its appropiate portfolio fields. CSS and layout need to be cleaned up.
