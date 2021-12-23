---
sidebar_position: 1
---

# Introduction

This tutorial aims to serve as an introduction to hosting a simple personal website using a static site generator ([because](https://www.sitepoint.com/static-site-generators/) [apparently](https://theunlikelydeveloper.com/build-a-static-website/) [there](https://www.youtube.com/watch?v=6ElI2ZJ4Uro) [aren’t](https://www.youtube.com/watch?v=Qms4k6y7OgI) [enough](https://www.youtube.com/watch?v=pY0vWYLDDco) [of](https://www.makeuseof.com/tag/static-site-generator-build-website/) [those](https://www.prosvetova.com/blog/2020-09-28-how-i-set-up-my-blog-using-a-static-site-generator) [already](https://www.youtube.com/watch?v=pxua_1vyFck)). If you like how this website appears and performs, keep reading – all of the steps I followed, from setting up a development environment and registering a domain to pushing my build to Firebase (my web host) are documented in the following few pages.

*Please note that this tutorial is aimed at beginners to intermediate computer users*. I'll be reviewing the steps to build a website using [Docusaurus](https://docusaurus.io/), [Node.js](https://nodejs.org/en/) and [Ubuntu](https://ubuntu.com/) as a build environment; [VS Code](https://code.visualstudio.com/) and [GitHub](https://github.com/) as editing and version control environments; and [Google Domains](https://domains.google/) and [Firebase](https://firebase.google.com/) as a domain management/DNS and web host, respectively, from *beginning to end*. I respect your time, and if you are already familiar with some or all of these technologies, I recommend you either navigate directly to the sections that interest you via the sidebar or consider using a more concise guide.

If you made it to this point, I'm sure you have some questions... I'll try to answer some of them preemptively.

**You decided to use <technology\>; why?** I am using...
- Docusaurus (plus Node.js), because of its simplicity. Assuming a fresh development environment, one only has to install Node.js and run three short commands to go from nothing to a fully functional, locally-hosted website prepared for editing. *No, I do not work for Facebook (the maintainers of Docusaurus). I simply like their SSG.*
- Ubuntu Server, because it is beginner-friendly and well-maintained. You can follow most of this guide running any system that can run Node.js version 14+ and has network connectivity, including Windows and MacOS.
- VSCode, because I am familiar with it and I appriciate its extension marketplace. You could complete this tutorial using any IDE or text editor you fancy. You could even redirect all of the JavaScript/Markdown/HTML edits you need using string redirects via the CLI, but I am not liable for any mental health-related damages you may incur by doing so.
- GitHub is not necessary but I recommend using it because it keeps your files safe and makes it easy to roll back to old versions of your code in case something breaks.
- Firebase, because its [*Spark* Plan](https://firebase.google.com/pricing) is free and it has great integration with Google Domains, which I use because it is simple and cheap to set up... More on these two later.

**How much does this cost?** $12.00 USD per year as a US resident, as of December 2021, the time of this publication. You can also add an email address through Google Domains, which is covered later, for an additional $6.00 USD per month. Note that the pricing scheme may have changed since I uploaded this post, unbeknownst to me. if this is the case, please feel free to let me know by [emailing me](mailto:contact@swlacy.com?subject=Google%20Domains/Firebase%20Pricing%20Has%20Changed%20(/website-hosting/introduction)) — your support is greatly appreciated. 

**Why shouldn't I use Hugo/Gatsby/Jekyll/etc. for my website instead of Docusaurus, like most others? Isn't Docusaurus meant for collaborative work?** You can — these are all great frameworks. I simply prefer how Docusaurus works; further, it's easy to adapt into a blog-like format. It doesn't have to be used solely for documentation.

*Thanks for sticking with me — let's get to work.*

---

[Suggest an improvement](mailto:contact@swlacy.com?subject=Suggestion%20Regarding%20docs/website-hosting/introduction)