/*! uCtrl-Website - v0.0.1 - 2014-11-28 */
"use strict";angular.module("teamModule").controller("teamList",["$rootScope","$scope","$http",function(a,b,c){b.team={},b.team.software=[{firstName:"",lastName:"",email:"",post:"",text:"",picture:""}],b.team.hardware=[{firstName:"",lastName:"",email:"",post:"",text:"",picture:""}],c.get("data/team.json").then(function(c){b.team=c.data,window.setTimeout(function(){a.$emit("memberLoaded")},500)}),b.position=function(a){return""==a&&(a="N.A."),a}}]);