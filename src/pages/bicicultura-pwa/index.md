---
date: "2018"
title: "Bicicultura PWA"
description: "A simple web app for checking the schedule for the biggest brazilian conference on bike culture."
tags: ['side-project','activism','pwa', 'volunteer']
roles: "Front-end Development, UX Design"
cover: './desktop1.png'
--- 

## Context
Bicicultura is the biggest event about cycling culture in Brazil, and is hold every year in a different city. The event aims to bring together discussions and workshops on the diverse theme of urban mobility, touching the cultural, social, political, artistic, economic and environmental. It's organized by UCB, the biggest organization on ciclism in the country, and is helped by local groups. 

In the past year the event was held in Recife, which I had the pleasure to visit per invitation to present my project Bike de Boa. In 2018 the event would be held in Rio de Janeiro, the city where I just moved to, and I had a personal will to contribute not only with another presentation but also with the organization. The group Transporte Ativo and its leader Zé Lobo are highly influential in the cicloativism scene and I was fortunate to know them already from a past partnership.

## Problem
The idea of developing an app for the event appeared chatting with the organization and seemed like a great opportunity for using my skills to help them. The official website was a simple Wordpress page, and I thought the user experience of checking the event schedule was far from great.

There were budget limitations for improving the website, but the most critical part is that they wouldn't be able to afford even printing the schedule to offer the participants. Their solution was to provide a link to download a PDF of that same website version, which didn't help a lot.

<video autoplay loop type="video/mp4">
    <source src="./schedule_desktop.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>

```grid|1
![](./schedule_desktop.png)
``` 

We devised then that the main objective of an even app would be to improve the experience for the event participants on checking the schedule. This task would need to be supported either for users in their desktops, when they are at home planning the visit, but mainly the mobile case, for checking the schedule during the event. An offline experience would be critical as well, since the Museum didn't have wi-fi and many brazilians can't afford decent 3G plans.


## Development
Since I didn't have much time available for the project and I was the only developer and designer I needed to be very mindful of the technologic solutions, priorizing powerful frameworks and tools and reusing pre-made solutions.

The natural technology choice for me was to build PWA (Progressive Web App). Not only I'm very used to web technologies, but being a PWA I could offer everything a native app but without the need to develop the same solution multiple times. The main advantages I would be leveraging would be then:

* Offline support
* Ability to add the app to the home screen
* Full screen experience (no address bar)
* Cross-platform and cross-device with a single source code.

```grid|3
![](./mobile_install1.png)
![](./mobile_install2.png)
![](./mobile_install4.png)
``` 

Today the easiest way to develop a simple PWA is using React, which also has a vibrant community that develops open-source tools that I could reuse. I used the create-react-act boilerplate for automating everything about the project build phase.

For the UI I chose to use a React UI lib that implemented the Material Design System. This choice was also natural since an unique visual identity was not much of a priority. Moreover users would be using this app for the first time and only for a few days, so it was interesting to employ the Material well-known patterns and visual style to reduce cognitive work of understanding the app. Still, some very basic customization was done mainly with the Typography and Color Pallete to mirror the event visual identity.  

## Solution

```grid|1
![](./appicon.png)
```

```grid|1
![](./mobile_schedule_now.png)
```


<video autoplay loop type="video/mp4">
    <source src="./app_desktop.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>


## Results

The app was highlighted in all the major event communications, both digital and physical, which was super important for reaching the target audience. I was delighted to see people using the app on their phones all the time during the event. I even caught one or two suggesting the app to others that were still checking the old PDF schedule in their small phone screens. 

<results-banner
    data='{
        "event total visitors": "427",
        "app total users": "500",
        "pageviews": "1,636",
        "app installs": "32"
    }'>
</results-banner>

```grid|2
![](./website_schedule_desktop.png "Before")
![](./desktop_schedule.png "After")
```


## Links

* App: http://bicicultura.rio/app
* GitHub: https://github.com/cmdalbem/app-bicicultura-2018