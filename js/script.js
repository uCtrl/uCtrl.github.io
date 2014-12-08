/*! uCtrl-Website - v0.0.1 - 2014-12-08 */
"use strict";function arrayObjectIndexOf(a,b,c){for(var d=0,e=a.length;e>d;d++)if(a[d][c]===b)return d;return-1}function pagePosition(){scrollRebound?(scrollRebound=!1,navBar.className=window.pageYOffset>250?"navbar navbar-default navbar-fixed-top small":"navbar navbar-default navbar-fixed-top",window.clearTimeout(scrollRefreshInterval),scrollRefreshInterval=setTimeout(function(){scrollRebound=!0,waiting&&(waiting=!1,pagePosition())},300)):waiting=!0}var cookie={set:function(a,b,c){var d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3);var e="expires="+d.toUTCString();document.cookie=a+"="+b+"; "+e},get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1);if(-1!=d.indexOf(a))return d.substring(a.length,d.length)}return""},test:function(a){var b=cookie.get(a);return""==b}},langSelect=$(".selectpicker");window.onscroll=pagePosition;var scrollRebound=!0,waiting=!1,scrollRefreshInterval,navBar=document.getElementById("navBar");pagePosition(),function(){var a=angular.module("app",["ngSanitize","ui.router","loginModule","teamModule","demoModule","pascalprecht.translate"]);a.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/home"),a.state("home",{url:"/home",templateUrl:"views/home/indexContainer.html"}).state("portal",{url:"/portal",templateUrl:"views/portal/portal_container.html"}).state("400",{url:"/400",templateUrl:"views/error/400.html"}).state("401",{url:"/401",templateUrl:"views/error/401.html"}).state("403",{url:"/403",templateUrl:"views/error/403.html"}).state("404",{url:"/404",templateUrl:"views/error/404.html"}).state("405",{url:"/405",templateUrl:"views/error/405.html"}).state("406",{url:"/406",templateUrl:"views/error/406.html"}).state("500",{url:"/500",templateUrl:"views/error/500.html"})}]),a.controller("mainMenu",["$rootScope","$scope","$modal","$state","$translate",function(a,b,c,d,e){b.state=d,a.availableLanguage=[{value:"en",text:"English"},{value:"fr",text:"Français"}],b.selectedLanguage=a.availableLanguage[1].value,a.modalInstance={},a.isLogged=!1,b.modalOpen=function(b){b.stopPropagation(),a.modalInstance=c.open({templateUrl:"views/login/singInContainer.html"})},b.scrollSmooth=function(a){$(".navbar-collapse").collapse("hide"),$.scrollTo("#"+a,800)},b.setLang=function(c){if(void 0===c)c=b.selectedLanguage;else{var d=arrayObjectIndexOf(a.availableLanguage,c,"value");-1!=d&&(b.selectedLanguage=a.availableLanguage[d].value)}cookie.set("lang",c,365),e.use(c),langSelect.selectpicker("render"),a.$emit("changeLang"),setTimeout(function(){$(window).trigger("resize")},500)},a.getLang=function(){return b.selectedLanguage},b.getUserLang=function(){var c=cookie.get("lang");""==c&&(c="en"),b.setLang(c);var d=arrayObjectIndexOf(a.availableLanguage,c,"value");-1!=d&&(b.selectedLanguage=a.availableLanguage[d].value),window.setTimeout(function(){langSelect.selectpicker("refresh")},50)},b.getUserLang()}]),a.controller("footerMenu",["$rootScope","$scope","$location","$anchorScroll","$state",function(a,b,c,d,e){b.scrollTo=function(b,c){var d=e.current.name;e.go(b).then(function(){void 0!==c&&("home"==e.current.name&&"home"!=d?a.$on("memberLoaded",function(){$.scrollTo("#"+c,300)}):$.scrollTo("#"+c,800))})}}])}(),angular.module("app").config(["$translateProvider",function(a){a.translations("en",{logIn:"Log In",goToPortal:"Go To Portal",home:"Home",developers:"Developers",features:"Features",about:"About",getStarted:"Get Started",blog:"Blog",footerLink:"Site Map",footerDescription1:"µCtrl is a home automation project developed by a team of 20 students in computer engineering and electrical engineering at ",footerDescription2:"Université de Sherbrooke",footerDescription3:"It is entirely non-profit, open and free to use",footerKIT:"Keep In Touch",footerSubscribe:"Subscribe to our newsletter:",footerLikeF:"Like us on Facebook",footerLikeT:"Follow us on Twitter",footerLikeG:"Fork us on GitHub",footerContact:"Contact Us",footerLicense:"All Rights Reserved",banner1:"Control your house",banner2:"Easily",aboutTitle:"is a home automation system that works magically",aboutTxt1:"connects to any of your home devices - your power outlets, your lights, your TV, your door locks - and allows you to control them with your computer or your phone",aboutTxt2:"Or automatically",demoTitle:"It Works With You",demoTxt1:"Using",demoTxt2:"Scenarios",demoTxt3:", your entire house can be configured according to your life events",demoBt1:"At Home",demoBt2:"At Work",demoBt3:"On Vacation",demoTvOn:"TV is ON",itWorkTitle:"It Works Automatically",itWorkTxt1:"Don't want to spend time configuring",itWorkTxt2:"Let <strong>μCtrl</strong> do it.",itWorkTxt3:"Let's say you come home every week day at 4 PM and turn on the lights. <strong>μCtrl</strong> will learn it, and will automatically turn the lights on at 4 PM.",itWorkTxt4:"No need to say it. Just do it",itEchoTitle:"It's Environmentally Friendly",itEchoTxt1:"With power consumption calculation, you can monitor how much your electronic devices are using, and set a threshold to prevent over-consumption",itEchoTxt2:"Support a green world",itSecureTitle:"It Helps Your Security",itSecureTxt1:"Using lock devices, you can remotely control you door locks and monitor them remotely",itSecureTxt2:"You can always know if your home is locked and you are notified whenever this changes",itSecureTxt3:"Such a relief",itWorkBt1:"Smart",itWorkBt2:"Green",itWorkBt3:"Secure",compatibilityTitle:"It's Compatible",compatibilityTxt:"It works with any device you may have. Or want",easyTitle:"It's Easy To Use",easyControl:"Control",easyMonitor:"Monitor",easyConfigure:"Configure",easySimple:"One simple app",easyDeskC:"The desktop app is compatible with:",easyModC:"The mobile app is compatible with:",openTechTitle:"It's Entirely Open",openTechTxt1:"From the",openTechTxt2:"hardware design",openTechTxt3:"to the",openTechTxt4:"source code",openTechTxt5:"everything we do is free to explore",openTechGitH:"Check us out on",openTechJIRA:"Follow us on",openTechConf:"Read about us on",openTechTxt6:"Also, everyone can help us and",openTechTxt7:"contribute",jumpTitle:"Ready To Jump In",jumpTxt:"Pack your home with the smartest home automation system available",jumpBtn:"Get Started",followUs:"Follow Us",ModalLoginPortal:"Login to your portal",ModalRegisterPortal:"Register to the µCtrl portal",Close:"Close",Username:"Username",Password:"Password",PasswordConf:"Password confirmation",Register:"Register",FirstName:"First name",LastName:"Last name","Register&Login":"Register and login",ModalRegisterInfo1:"This form allow you to register to the µCtrl web portal service.",ModalRegisterInfo2:"From this portal, you will be able to connect each of your devices and then control them from anywhere!",FormValidFail:"Form validation failed.",FormValidOk:"Form validation pass.",FormValidOkTxt:"Waiting for the portal to be ready.",PassMismatch:"Password mismatch",CorrErrorPls:"Please correct theses errors",err400T:"Error 400 - Bad Request",err400M:"Bad Request. Your browser sent a request that this server could not understand",err401T:"Error 401 - Unauthorized",err401M:"Authorization Required",err403T:"Error 403 - Forbidden",err403M:"Forbidden: You don't have permission to access this file on this server",err404T:"Error 404 - Not Found",err404M:"The requested URL was not found on this server",err405T:"Error 405 - Method Not Allowed",err405M:"A request was made of a resource using a request method not supported by that resource",err406T:"Error 406 - Not Acceptable",err406M:"The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request",err500T:"Error 500 - Internal Server Error",err500M:"A generic error message, given when an unexpected condition was encountered and no more specific message is suitable"}),a.translations("fr",{logIn:"Connexion",goToPortal:"Aller au portail",home:"Accueil",developers:"Développeurs",features:"Fonctionnalités",about:"À propos",getStarted:"Démarrer",blog:"Blogue",footerLink:"Plan du site",footerDescription1:"μCtrl est un projet de domotique développé par une équipe de 20 étudiants en génie informatique et en génie électrique à l'",footerDescription2:"Université de Sherbrooke",footerDescription3:"Ce projet est à but non lucratif, ouvert et libre d'utilisation",footerKIT:"Restez en contact",footerSubscribe:"Abonnez-vous au bulletin d'information :",footerLikeF:"Devenez fan sur Facebook",footerLikeT:"Suivez-nous sur Twitter",footerLikeG:"Participez à notre GitHub",footerContact:"Contactez-nous",footerLicense:"Tous droits réservés",banner1:"Contrôlez votre maison",banner2:"Facilement",aboutTitle:"est un système domotique qui fonctionne comme par magie",aboutTxt1:"se connecte à n'importe lequel de vos appareils domestiques - vos prises de courant, vos lumières, votre téléviseur, vos serrures de porte - et vous permet de les contrôler avec votre ordinateur ou votre téléphone",aboutTxt2:"Ou automatiquement",demoTitle:"Il travaille avec vous",demoTxt1:"En utilisant les",demoTxt2:"Scénario,",demoTxt3:"l'ensemble de votre maison peut être configurée en fonction de vos événements de vie",demoBt1:"Chez soi",demoBt2:"Au travail",demoBt3:"En vacances",itWorkTitle:"Il fonctionne automatiquement",itWorkTxt1:"Vous ne souhaitez pas passer votre temps à configurer",itWorkTxt2:"Laissez <strong>μCtrl</strong> le faire.",itWorkTxt3:"Disons que vous venez à la maison tous les jours de la semaine à 16h00 et allumez les lumières. <strong>μCtrl</strong> l'apprendra et fera automatiquement allumer les lumières à 16h00.",itWorkTxt4:"Pas besoin de le dire. Faites-le tout simplement",itEchoTitle:"Il est écologique",itEchoTxt1:"À l'aide des données de consommation, vous pourrez contrôler quand vos appareils fonctionneront affin de limiter leur consommation",itEchoTxt2:"Soutenez un monde vert",itSecureTitle:"Il aide votre sécurité",itSecureTxt1:"En utilisant des dispositifs de verrouillage, vous pouvez contrôler à distance vous serrures de porte et même les surveiller",itSecureTxt2:"Vous pouvez toujours savoir si votre maison est verrouillée et vous serez averti chaque fois que cela change",itSecureTxt3:"Un vrai soulagement",itWorkBt1:"Intelligent",itWorkBt2:"Vert",itWorkBt3:"Sécuritaire",compatibilityTitle:"Il est compatible",compatibilityTxt:"Il fonctionne avec n'importe quel appareil que vous pourriez avoir. Ou vous voulez",easyTitle:"Il est facile à utiliser",easyControl:"Contrôler",easyMonitor:"Surveiller",easyConfigure:"Configurer",easySimple:"Une simple application",easyDeskC:"L'application bureau est disponible pour :",easyModC:"L'application mobile est disponible pour :",openTechTitle:"Il est entièrement ouvert",openTechTxt1:"Des",openTechTxt2:"plans matériels",openTechTxt3:"au",openTechTxt4:"code source",openTechTxt5:"tout ce que l'on conçoit est ouvert à l'exploration",openTechGitH:"Retrouvez-nous sur",openTechJIRA:"Suivez-nous sur",openTechConf:"Lisez-nous sur",openTechTxt6:"Aussi, tout le monde peut nous aider et",openTechTxt7:"contribuer",jumpTitle:"Prêt à commencer",jumpTxt:"Améliorez votre maison avec le plus intelligent système de domotique disponible",jumpBtn:"Commencez",followUs:"Suivez-nous",ModalLoginPortal:"Connectez-vous à votre portail",ModalRegisterPortal:"Inscrivez-vous au portail μCtrl",Close:"Fermer",Username:"Nom d'utilisateur",Password:"Mot de passe",PasswordConf:"Confirmation du mot de passe",Register:"S'inscrire",FirstName:"Prénom",LastName:"Nom de famille","Register&Login":"Inscription et connexion",ModalRegisterInfo1:"Ce formulaire vous offre la possibilité de s'inscrire au portail web de µCtrl.",ModalRegisterInfo2:"À partir de ce portail, vous serez capable d'y ajouter chacun de vos dispositifs et d'y accéder par la suite de n'importe où!",FormValidFail:"La validation de votre formulaire échoué.",FormValidOk:"La validation de votre formulaire a été acceptée.",FormValidOkTxt:"Préparation de votre portail.",PassMismatch:"Les mots de passe ne sont pas identiques",CorrErrorPls:"Veuillez corriger ces erreurs ",err400T:"Erreur 400",err400M:"La syntaxe de la requête est erronée",err401T:"Erreur 401",err401M:"Une authentification est nécessaire pour accéder à la ressource",err403T:"Erreur 403",err403M:"Le serveur a compris la requête, mais refuse de l'exécuter",err404T:"Erreur 404",err404M:"Ressource non trouvée",err405T:"Erreur 405",err405M:"Méthode de requête non autorisée",err406T:"Erreur 406",err406M:"La ressource demandée n'est pas disponible",err500T:"Erreur 500",err500M:"Erreur interne du serveur"}),a.preferredLanguage("en")
}]),function(){angular.module("teamModule",[])}(),angular.module("teamModule").controller("teamList",["$rootScope","$scope","$http",function(a,b,c){b.team={},b.team.software=[{firstName:"",lastName:"",email:"",post:"",text:"",picture:""}],b.team.hardware=[{firstName:"",lastName:"",email:"",post:"",text:"",picture:""}],c.get("data/team.json").then(function(c){b.team=c.data,window.setTimeout(function(){a.$emit("memberLoaded")},500)}),b.position=function(a){return""==a&&(a="N.A."),a}}]),function(){angular.module("loginModule",["ui.bootstrap"])}(),angular.module("loginModule").controller("loginModal",["$rootScope","$scope","$state",function(a,b,c){function d(){var a=[],c=[];Object.getOwnPropertyNames(b.user).forEach(function(a){b.user[a].length<1?c[c.length]=a:b.user[a]=validator.escape(b.user[a])}),c.length>0?a[a.length]=b.translate("RegisterInputMissing")+c.join(", ")+".":(validator.isAlphanumeric(b.user.username)||(a[a.length]=b.translate("RegisterWrongUsernameFormat")),validator.isAlpha(b.user.firstName)||(a[a.length]=b.translate("RegisterWrongFirstNameFormat")),validator.isAlpha(b.user.lastName)||(a[a.length]=b.translate("RegisterWrongLastNameFormat"))),(b.user.password1.length>0||b.user.password2.length>0)&&b.user.password1!==b.user.password2&&(a[a.length]=b.translate("RegisterWrongPassValidation")),a.length>0?b.passValidation=!1:(b.passValidation=!0,b.disableButtons=!0,a[0]=b.translate("RegisterSuccess")),b.validationMessages=a}function e(a,b){return!(""==a||"123456"!=b)}b.lang={en:{LoginUserAdnPassEmpty:"<strong>Warning!</strong> Username and/or password are empty.",LoginWrongConnexion:"<strong>Warning!</strong> Username and password do not match.",RegisterInputMissing:"Some input were missing: ",RegisterWrongUsernameFormat:"Wrong Username format only accept alphanumerical characters.",RegisterWrongFirstNameFormat:"Wrong First name format only accept alphabetic characters.",RegisterWrongLastNameFormat:"Wrong Last name format only accept alphabetic characters.",RegisterWrongPassValidation:"The password and the password validation were not he same.",RegisterSuccess:"Validation successful."},fr:{LoginUserAdnPassEmpty:"<strong>Attention!</strong> Le nom d'utilisateur et/ou le mot de passe ne sont pas remplis.",LoginWrongConnexion:"<strong>Attention!</strong> Le nom d'utilisateur et le mot de passe ne correspondent pas dans notre base de données.",RegisterInputMissing:"Certaines entrées sont manquantes : ",RegisterWrongUsernameFormat:"Le champ d'entrée du nom d'utilisateur accepte seulement les caractères alphanumériques.",RegisterWrongFirstNameFormat:"Le champ d'entrée du prénom accepte seulement les caractères alphabétiques.",RegisterWrongLastNameFormat:"Le champ d'entrée du nom de famille accepte seulement les caractères alphabétiques.",RegisterWrongPassValidation:"Le mot de passe ainsi que son champ de validation ne correspondent pas.",RegisterSuccess:"Validation réussie."}},b.translate=function(c){var d=a.getLang(),e=arrayObjectIndexOf(a.availableLanguage,d,"value");return-1==e&&(d="en"),b.lang[d][c]},a.currentUser="",a.currentSessionID="",b.user={username:"",password1:"",password2:"",firstName:"",lastName:""},b.passValidation=!0,b.validationMessages="",b.disableButtons=!1,b.templates=[{name:"login",url:"views/login/loginModal.html"},{name:"register",url:"views/login/registerModal.html"}],b.template=b.templates[0],b.register=function(){b.template=b.templates[1]},b.login=function(){b.template=b.templates[0]},b.portalRegister=function(){d(),b.passValidation&&b.portalConnect($("#registerUserNameUCtrl").val(),$("#registerPasswordUCtrl").val())},b.portalConnect=function(d,f){if(void 0===f||void 0===d){var g=$("#userNameUCtrl"),h=$("#passwordUCtrl");d=g.val(),f=h.val()}var i=$("#wrongPasswordUserAlert");return""==f||""==d?void i.html(b.translate("LoginUserAdnPassEmpty")).show():void(e(d,f)?(i.hide(),a.isLogged=!0,c.go("portal"),b.close()):i.html(b.translate("LoginWrongConnexion")).show())},b.close=function(){a.modalInstance.close()}}]),function(){angular.module("demoModule",[])}(),angular.module("demoModule").controller("demo",["$rootScope","$scope",function(a,b){b.state=0,b.elements={btnHome:document.getElementById("demoHome"),btnWork:document.getElementById("demoWork"),btnVacation:document.getElementById("demoVacation"),icLu:$(".ic.lu"),icSd:$(".ic.sd"),icTm:$(".ic.tm"),icTv:$(".ic.tv"),image:document.getElementsByClassName("image b")[0]},b.info={fr:[["Télévision allumée","Musique ouverte","25°C","Lumières allumées"],["Télévision fermée","Musique éteinte","20°C","Lumières éteintes"],["Télévision fermée","Musique éteinte","12°C","Lumières éteintes"]],en:[["TV is on","Music is playing","25°C","Lights are on"],["TV is off","Music is stopped","20°C","Lights are off"],["TV is off","Music is stopped","12°C","Lights are off"]]},b.stateActions=[[" active"," active"," active"," active"],["",""," active",""],["","","",""]],b.change=function(c,d){function e(a){return a==c?"btn-slide active":"btn-slide"}d=d||!1,(b.state!==c&&c>-1&&3>c||d)&&(b.state=c,b.elements.icTv.tooltip("hide").attr("data-original-title",b.info[a.getLang()][b.state][0]).tooltip("fixTitle"),b.elements.icSd.tooltip("hide").attr("data-original-title",b.info[a.getLang()][b.state][1]).tooltip("fixTitle"),b.elements.icTm.tooltip("hide").attr("data-original-title",b.info[a.getLang()][b.state][2]).tooltip("fixTitle"),b.elements.icLu.tooltip("hide").attr("data-original-title",b.info[a.getLang()][b.state][3]).tooltip("fixTitle"),b.elements.icTv.attr("class","ic tv"+b.stateActions[b.state][0]),b.elements.icSd.attr("class","ic sd"+b.stateActions[b.state][1]),b.elements.icTm.attr("class","ic tm"+b.stateActions[b.state][2]),b.elements.icLu.attr("class","ic lu"+b.stateActions[b.state][3]),b.elements.btnHome.setAttribute("class",e(0)),b.elements.btnWork.setAttribute("class",e(1)),b.elements.btnVacation.setAttribute("class",e(2)),b.elements.image.setAttribute("class","image b bg"+(c+1)))},a.$on("changeLang",function(){b.change(b.state,!0)}),b.ini=function(){b.change(b.state,!0)},b.ini()}]);