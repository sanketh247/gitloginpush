Feature: Git Hub Login Feature

Background: 
Given The URL of Git Hub

@Regression
Scenario Outline: Login Scenario
When User enters <username> as username
And User enters <password> as password
And User Clicks on SignIn
Then User navigates to <result>

Examples:
|username|password|result|
|sanketh247|gopala247|Git Hub|
|sanketh246|gopala247|Sign In Git Hub|