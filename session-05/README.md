# Launching a wesbsite

For our final code lab, we’ll be covering some logistics in what goes into making a website live.

🎥 **We recorded a walkthrough of this README on April 29, 2020.** Find that video [here](https://drive.google.com/open?id=1qDX1-zQ7J_EWG5QSJ3y_A24N1JRm9pdP).


# Background

We think of the Web as a bunch of interlinked pages, but it’s really a collection of conversations between **web servers** and **web clients**.

**Web servers** are Internet-connected computers running server software, so called because they serve web documents as requested. Servers are typically always on and always connected.

We often also run **local servers**, meaning they run on the same computer that you’re working on. **Local** simple means your own computer; **remote** means somewhere else, on any computer but the one right in front of you.

A **web client** simply refers to the browser (Google Chrome, Firefox, Safari, Mobile Safari etc..) that can access these documents on the server and render them. Each browser has its own rendering engine to translate marked up content (such as HTML, image files, etc.) and formatting information (such as CSS, etc.) to what you see on your screen.

## Protocols
Protocols are standardized ways in which information (files, data, etc) can be passed from one computer to another.

Types of protocols:
- Email (POP, SMTP, IMAP)
- FTP (File Transfer Protocol) and SFTP (Secure File Transfer Protocal)
- HTTP (HyperText Transfer Protocol)
- IP (Internet Protocol)
- SSH protocol (Secure Shell)

# Launch
In order to launch a website, you need to secure 1. a hosting environment and 2. a domain name.
If you consider building a website as building house, consider your hosting environment as the land to build your house, and your domain name as your personal address.

## Hosting

There are different types of hosting options:
- **Shared:** your site is on the same server as many others 
- **Dedicated:** user gets own server and full control over it
- **Virtual Dedicated:** resources are divided up in a way that does not affect the underlying hardware 
- **Grid / Clustered:** The hosting is distributed across different machines.
- **Reseller:** Allows clients to become web hosts themselves.

### Shared Hosting Providers
- [Dreamhost](https://www.dreamhost.com/hosting/shared/)
- [Bluehost](http://www.bluehost.com/)
- [Inmotion Hosting](https://www.inmotionhosting.com/)
- [Media Temple](https://mediatemple.net/)
- [Pair](https://www.pair.com/)
- [Nearly Free Speech](https://www.nearlyfreespeech.net/)

For static sites:
- [Github Pages](https://pages.github.com/)


## Domains
An IP (Internet Protocol) is a machine-readable specific identification number assigned to a device (computer, printer, etc) within a particular computer network, such as `198.7.247.225`.

A DNS, or Domain Name Server translates human-readable domain names (such as `risd.edu`) to computer-readable IP addresses. DNS providers allow you to register and manage domains.

A TLD, or Top-level Domain, is the last two / three letters after the `.`, such as `edu`, `com`, `org`, managed by ICANN (Internet Corporation for Assigned Names and Numbers). There are new TLDs released periodically. 

### Subdomains
Subdomains are extensions of the main domain (such as `notices.risd.gd`). Once you’ve registered and purchased a domain name, you can add additional subdomain addresses under the primary domain. This is useful when you’d like to create multiple websites under one domain.

[risd.gd](https://risd.gd/), for example, uses subdomains for its more specific websites related to the graphic design department.

Often, subdomains are also used to have separate environments — or copies — of your website: one for development, one for a preview, one for the live production environment. This way, you can test out new features or styles on your website without putting your live website "under construction."

### Some Domain name providers
- [Namecheap](http://www.namecheap.com/)
- [Gandi.net](https://www.gandi.net/en-US)
- [Google Domains](https://domains.google/)
- [GoDaddy](https://www.godaddy.com/)
- Check prices and availability at [Domcomp](https://www.domcomp.com/)

P.S.: a story about [keeping your domain name.](http://therealjonas.com/)


### Thing to consider when choosing a provider

- Renewal rate after first year. The price advertised is usually not the yearly renewal rate.
- Storage and bandwidth supported
- Number of domains allowed
- Number of email accounts allowed, email storage
- Server-side language support (PHP, Ruby, Python, Perl, SSI etc…)
- If you’re using a database-based CMS, the number of MySQL Databases allowed
- SSL configurations
- Energy source

## Transfer
There are several methods to pushing your local files to the remote server.

### Terminal
Using your terminal, you can navigate to the folder that is the root of your website.
From there you can use various terminal-based commands to setup your remote connection and push your files accordingly. Some common command-line tools are:
- [`git`](https://help.github.com/en/github/using-git/getting-started-with-git-and-github)
- [`rsync`](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps)
These programs use `ssh` / `https` protocols to connect to a remote server and transfer files.

### FTP Software
FTP programs, or clients, provide an interface for uploading your web files to your remote server.

Popular ones include:
- [Fetch](https://fetchsoftworks.com/)
- [Interarchy](https://interarchy.com/)
- [Cyberduck](https://cyberduck.io/)
- [Filezilla](https://filezilla-project.org/)

### Hosting Service Control Panel
Most shared hosting services have a control panel or admin interface that allows you to upload files to their server when you are logged into their website. That said, this interface may not the easiest way to navigate your server files.

# Workflow

## Before launch
- Test, test, test!
	- check your site on all major browsers — you can also try tools like [Browser Shots](http://browsershots.org/) and [Browser Stack](https://www.browserstack.com/)
	- for iPhones, use your Desktop inspector while connecting to your iPhone (on Safari)
- Validate
	- [HTML validator](https://validator.w3.org/)
- Don’t forget your favicon

## Launch
- Push your files to the remote server via one of the methods above
- Connect the domain name to your serverspace

## Post launch
- Monitor site 

# Demo
## Github + Custom Domain @ Namecheap
1. Push your code to your repository
	- Include an `index.html` file as your homepage
2. Enable [Github Pages](https://pages.github.com/) in your repostiory settings
3. Test via the provided URL (`https://username.github.io` or `https://username.github.io/repository`)
4. Register your domain name at a DNS provider
5. Add your domain name to your Github Repository settings under Github Pages
6. Create either an `ALIAS`, `ANAME`, or `A` record with your DNS provider (Different DNS Providers may use different methods.)
For example, for Namecheap, create the following `A` records to point to Github’s servers.
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
7. Add a `CNAME` file (with no file format extension) with your domain name to your repository

More details [here](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site).

## Shared Hosting @ Dreamhost + FTP
1. Setup your hosting system.
2. Download / open your FTP client
3. Use the (S)FTP details provided by your hosting provider to access your remote server
4. Upload your website files to the remote server via your FTP client
5. If your domain registrar is the same as your hosting system, you should be all set. If not, register your domain name, and follow the hosting provider’s instructions to connect your domain name to your web space. (It will be similar to steps 4—6 for Github above.) 

# Further Resources
- [Code Lab Lecture Slide](https://docs.google.com/presentation/d/1_6LeYPWzoSjFBiTLR7v7vH-cE_HkqUus1JfOibOGQkw/edit?usp=sharing)
- [Github: Getting Started](https://docs.google.com/document/d/1vk6vJiTXhBOPzLV6Qt5Xkc3Q-IgyIl4uN5zsw0bEttY/edit?usp=sharing)

