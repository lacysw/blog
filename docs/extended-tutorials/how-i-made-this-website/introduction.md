---
sidebar_position: 1
---

# Introduction

This tutorial aims to serve as an introduction to hosting a simple personal website using a static site generator ([because](https://www.sitepoint.com/static-site-generators/) [apparently](https://theunlikelydeveloper.com/build-a-static-website/) [there](https://www.youtube.com/watch?v=6ElI2ZJ4Uro) [aren’t](https://www.youtube.com/watch?v=Qms4k6y7OgI) [enough](https://www.youtube.com/watch?v=pY0vWYLDDco) [of](https://www.makeuseof.com/tag/static-site-generator-build-website/) [those](https://www.prosvetova.com/blog/2020-09-28-how-i-set-up-my-blog-using-a-static-site-generator) [already](https://www.youtube.com/watch?v=pxua_1vyFck)). If you like how this website appears and performs, keep reading — all of the steps I followed, from setting up a development environment and registering a domain to pushing my build to Firebase (my web host) are documented in the following few pages.

I'll be reviewing the steps to build a website using [Docusaurus v2](https://docusaurus.io/), [Node](https://nodejs.org/en/) and [Ubuntu](https://ubuntu.com/) as a build environment; [VS Code](https://code.visualstudio.com/) and [GitHub](https://github.com/) as editing and version control environments; and [Google Domains](https://domains.google/) and [Firebase](https://firebase.google.com/) for domain management and web hosting, respectively. I respect your time, and if you are already familiar with some or all of these technologies, I recommend you either navigate directly to the sections that interest you via the sidebar or consider using a more concise guide.

If you made it to this point, I'm sure you have some questions... I'll try to answer some of them preemptively.

> *You decided to use <technology\>; why?*

I am using...
- Docusaurus, because of its simplicity. Assuming a fresh development environment, one only has to install Node and run three short commands to go from nothing to a fully functional, locally-hosted website prepared for editing. *No, I do not work for Facebook (the maintainers of Docusaurus). I simply like their SSG.*
- Ubuntu Server, because it is beginner-friendly and well-maintained. However, you can just as well follow this guide running any system with Node version 14+ and network connectivity, including Windows and macOS.
- VSCode, because I am familiar with it and I appreciate its extension marketplace. You could complete this tutorial using any IDE or text editor you fancy. You could even redirect all of the JavaScript/Markdown/HTML edits you need using string redirects via the CLI, but I am not liable for any mental health-related damages you may incur by doing so.
- GitHub is not necessary but I recommend using it because it keeps your files safe and makes it easy to roll back to old versions of your code in case something breaks. GitHub also allows for extra features, such as GitHub action site deploys.
- Firebase, because the [*Spark* Plan](https://firebase.google.com/pricing) is free and it has painless integration with Google Domains. However, any web host may be used — [Digital Ocean](https://www.digitalocean.com/solutions/website-hosting/) and [Netifly](https://www.netlify.com/), especially, are great options too... More on these later.

> *How much does this cost?*

My current payment scheme is as follows, as a US resident in December 2021, the time of this publication:

- USD 12 per year as a US resident to Google Domains to rent *swlacy.com*.
- USD 6 per month to Google Workspaces for single-address email routing through *swlacy.com*. While that may seem steep for one address, I have an additional 100 free alias addresses; for example, my contact email address as listed on this site is [contact@swlacy.com](mailto:contact@swlacy.com), which is an alias of my main address.
- $0 (free) for website hosting on Google Firebase as a subscriber to [Firebase's *Spark Plan*](https://firebase.google.com/pricing). The Spark Spark Plan currently provides for one gibibyte of hosting storage, ten gibibytes of network egress per month, among other features, which is far more than enough for me right now (my `build` folder currently sits at 11 megabytes)

Note that the pricing scheme may have changed since I uploaded this post. If this is the case, please feel free to let me know by [emailing me](mailto:contact@swlacy.com) — your support is greatly appreciated. 

> *Why shouldn't I use Hugo/Gatsby/Jekyll/etc. for my website instead of Docusaurus, like most others? Isn't Docusaurus meant for collaborative work?*

You can — these are all great frameworks. I simply prefer how Docusaurus works. It's easy to adapt into a blog-like format while retaining the features that allow for straightforward article hosting for my publications. Like many products and services in tech, there is no silver bullet; what utilities you use should be chosen by you alone with respect to your needs.

*Thanks for sticking with me — let's get to work.*

---

*Feedback? [I can be reached via email](mailto:contact@swlacy.com?subject=Feedback).*