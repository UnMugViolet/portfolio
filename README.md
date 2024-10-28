# <img src="https://lh6.googleusercontent.com/proxy/O0jtLgr-_kq0MLNcfc-mNens2PSj9oDn4296O8SgMRO2hv4SrTtKjTZN6iecZPdxD67l6YUk26QL0raQ818tXOioabNh1mYpQxQfHw" width="30px" > PorfolioXp


[![Quality Gate Status](https://sonarqube.rocketegg.systems/api/project_badges/measure?project=PortfolioXp&metric=alert_status&token=sqb_c0b5f74b6c031ae2f329c6c588e3c8bc48556788)](https://sonarqube.rocketegg.systems/dashboard?id=PortfolioXp)
[![Lines of Code](https://sonarqube.rocketegg.systems/api/project_badges/measure?project=PortfolioXp&metric=ncloc&token=sqb_c0b5f74b6c031ae2f329c6c588e3c8bc48556788)](https://sonarqube.rocketegg.systems/dashboard?id=PortfolioXp)
![GitHub package.json ](https://img.shields.io/github/package-json/v/UnMugViolet/portfolio/main)
![GitHub repo size](https://img.shields.io/github/repo-size/UnMugViolet/portfolio)
![GitHub License](https://img.shields.io/github/license/UnMugViolet/portfolio)

## 🌐 Website

###[https://pauljaguin.com](https://pauljaguin.com)

## 👷 Disclaimers

**This is an ongoing project and it is not done yet**.
If you encounter any bugs it will be really helpfull if you could provide the origin of that bug, the browser you used and the device.

**This design was not made by me**.
All the icons, wallpaper and sounds belong to windows corporation, so there's nothing I've created here. All I did was copy and apply the design for the web.

**The music component is broken**.
It is for now "normal". I am still waiting for my spotify extension request to be approuved. That could allow users that are not on the whitelist to login to the spotify portal and use the player. I'll be working on a way to look at my playlist without the spotify API for those that do not have an account.

_(If you want to test it feel free to ask using the contact form providing your email used on your Spotify account, I will add you to the whitelist and email you back)_

## ✨ Features

- Loading Screen & Login
- Internationalisation 🇬🇧 En / 🇫🇷 Fr
- Play Minesweeper
- Reach me by email
- See my projects
- Notepad
- MyCv
- My Images
- My Calendar
- Listen to my playlist using Spotify API _(still not working yet)_
- Manage the volume in the website

## ⚡️ Consumption

Since WindowsXp design was not really meant to be eco friendly _(thanks to the billions of linear gradients)_
I did my best to make it as lightweight as possible.

[Link to Website Carbon Calculator website](https://www.websitecarbon.com/website/pauljaguin-com-office/)

## 🎨 Webdesign

The original design was made by the windows xp team, there is nothing I've done here but copying it for my use using web languages.

The design part was pretty straight forward on Figma, I used it more like a place where I could put ressources.
You can still use the components created in the Figma Design they are free and no need to quote.

[Link to Figma](https://www.figma.com/design/8tPMCpOidM1YSSAZt516iK/Portfolio?node-id=0-1&t=JnfahWXeIxcdy3UJ-1)


<br/>
<br/>

I used after that the docker image of windows xp, that helps a lot to see all the small interactions there is :

[Link to Dockurr repo](https://github.com/dockur/windows)


## ⌨️ Deployement

The deployment is made using a Jenkins pipeline with Sonarqube on my personal server _see projects->Homeserver_ on my porfolio for more details. 

## 🔨 Usage

```sh
npm install
```

### Compile with Hot-Reload and Scss for Development

```sh
npm run dev:all
```

### Compile and Minify for Production

```sh
npm run build
```
