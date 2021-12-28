---
sidebar_position: 2
---

# Setting Up Your Development Environment
Of course, you can't reasonably develop a website without first configuring the tools to do so. As mentioned in the previous section, Ubuntu Server will be used to host the development environment. I write code regularly and host a variety of services on my local network, so I have a physical computer running Ubuntu Server on bare metal, which I use SSH to access. If you would also like to use Ubuntu on bare metal, you may do the same by [following this guide](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview) or by creating a virtual instance using the [hypervisor of your choice](https://www.serverwatch.com/best-server-virtualization-software/) or [Multipass](https://multipass.run/) (which is very simple). Alternatively, if you don't have access to another computer and cannot/would prefer not to use virtualization for whatever reason, you may use your physical computer, but note that all commands will assume use of *Ubuntu 20.04.3 LTS*.

Now, [configure SSH](https://linuxize.com/post/how-to-enable-ssh-on-ubuntu-20-04/) and connect to your Ubuntu instance.

## Install Software on the Remote Ubuntu Instance
Node.js can be found on Canonical's Snap store, on [nodejs.org](https://nodejs.org/en/download/), as a [Docker image](https://hub.docker.com/_/node), and in a variety of other locations and formats. Note that the version of Node.js in Ubuntu's default repositories is too old to use with Docusaurus, so **do not** use `apt` to acquire the package.

For simplicity, I used the Snap package by executing `snap install node`. Yes, I know Snaps are controversial, but the Node.js Snap works just fine (on my computer).

Git should be preinstalled. if you don't have a GitHub and would like to use GitHub, follow [these instructions](https://docs.github.com/en/get-started/quickstart/set-up-git).

Follow [the instructions from the Docusaurus website](https://docusaurus.io/docs), **without** executing `npx docusaurus start`. Optionally, [initialize a git repository and push the created files to GitHub](https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line). Before we can access the website at http://localhost:3000, we need to set up SSH port forwarding. Luckily, VSCode's SSH extension will take care of this for us.

## Install Software on the Local Computer
VSCode may be downloaded from https://code.visualstudio.com/download, or from the package manager of your choice. I understand that some are not comfortable with Microsoft's telemetry in VSCode, so [VSCodium](https://vscodium.com/) (an open source, "detelemetrized" binary of VSCode) is also available. Once VSCode/VSCodium has been downloaded, follow [these instructions](https://code.visualstudio.com/docs/remote/ssh) on setting up the Remote Development extension. Then, connect to the Ubuntu instance you previously set up via the Remote Development extension and navigate in VSCode to the directory you generated the default Docusaurus site.

## Start Docusaurus
Open a new terminal in VSCode while connected to the Ubuntu instance with Ctrl+Shift+\`; in the terminal, enter the directory of the Docusaurus site and execute `npx docusaurus start`. After a moment, open the VSCode command palette with Ctrl+Shift+P, type ">Ports: Focus on Ports View" in the command palette, and press Enter/Return. Something similar to the table below should be shown:
|Port|Local Address|
|--|--|
|3000|localhost:3000|
If not, ensure the previous instructions have all been followed in order. At this point, navigating to http://localhost:3000 should display the default Docusaurus page.

*Congrats! You're getting ever-closer to hosting your own Docusaurus-powered website.*

---

Questions, comments, or other feedback? [I can be reached over email](mailto:contact@swlacy.com).