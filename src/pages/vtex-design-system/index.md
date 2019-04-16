---
date: "2018-02"
date2: "Now"
title: "VTEX Design System"
minibio: "Developing a common language to align and scale product design solutions for the entire company, and beyond."
description: "Styleguide was the company's Design System, the home for all our reusable patterns, components and assets related to product design in VTEX. It aimed to be a common language of tools and processes to facilitate how we collaborated and shared knowledge across teams and projects."
tags: ['UI/UX','work','process']
team: "Cristiano Dalbem, Breno Calazans, Kevin Chevalier, Guilherme Freitas, Lucas Bebber, Eric Reis, Raphael Simoens, Jonatas Maia, Gabriel Galc, et al."
cover: './cover.png' 
forceOrder: 1
---
 

## Context
[VTEX](https://vtex.com/) is a brazilian SaaS technology company focused on ecommerce solutions that have a daily impact on the work of thousands of people around the world. More than 2500 leading brands of varying sizes and segments, with operations in 26 countries and in global expansion, rely on VTEX for the online sales of their products.
 
The main touchpoint of our product with the store owners is the Admin. It's where our clients configure and manage everything related to their operations, and where they'll spend most of their days.

### The problem

The birth of our Design System was only possible because of the confluence of several conditions in the company.

* We were growing insanely fast, and so were the teams. New designers and developers were joining every day, thus sharing knowledge in a structured and scalable way was starting to be obligatory if we wanted to keep going fast.

* The company was developing for a few years already [VTEX IO](https://vtex.io/), a serverless platform for running e-commerce applications that. It was starting to get in a mature phase, so we were for the first time ready to start dogfooding and using it to run our own Admins.

* There were early sketches of a VTEX App Store, a place where our big ecosystem of partners could easily develop, spread and monetize ecommerce extensions - all powered by IO.

* For the first time the company was investing on branding, with a new logo, visual identity, and a more professional communication. This was a great opportunity for refreshing the UI look & feel as well.

With this momentum we started seeing legacy systems being rewritten, so they could run under new platform. For the growing Product Design team it was an awesome opportunity to improve UX across the admins, but the team was still small for the demand and we needed to scale our design solutions.

## Process

### We know what you did last Design System

The first thing that called my attention when we started discussing this project was the fact that something similar had already existed in the company. A few years ago some Designers that were not working with us anymore started a similar initiative which clearly did not work out, so we started looking back at that moment with a critical and open-minded view to make sure we wouldn't repeat the errors of the past.

Building on top of those insights we agreed on some important working principles:

* To quickstart we would use the same tech stack as VTEX IO, and we would bootstrap our system with [Tachyons](https://tachyons.io/), a CSS Framework that already had a Design System-like structure.

* We chose [Styleguidist](https://react-styleguidist.js.org/) to be the tool for building our component library and documentations automatically. In the past the team had started developing their own tool in house, but we didn't have time for that.

* The current Design Principles were mostly unknown in the company, which was a sign that they weren't very representative. Part of creating this new design system would be to revise them.

* Building a glossary of all components and variations being used in the platform is cool, but it's just too much work for all the hundreds of screen we had. Most importantly, we didn't feel it was so important being retrocompatible in that sense, and looking ahead was more important than looking back.
  
* References should go beyond general-purpose systems like Material, or plain component libraries like Bootstrap. We need to look at references that were more contextualized, and closest to what we needed to build. 

```grid|1 
![](./bench.png "Some of our favorite references of enterprise Design Systems.")
```

```grid|1 
![](./slides.png "Some slides of the our presentation to the company in one of our Demo Friday sessions. ")
```

### Planning

```grid|1 
![](./maslow.png "We drew inspiration from the famous Maslow Pyramid of Priorities to understand how to focus our energies in the project.")
```


### Documentation

I'm always a big advocate for the need of documentation and guidelines with every tool we provide. With the Styleguide components it wouldn't be different. Even if they were designed for their specific usage, and not for generic purpose, like Bootstrap, it was thought to limit usages that we though wouldn't be desirable. Yet there's a limit of the things we can test automatically in the form of React PropTypes, and the rest depends on some guidance, for instance writing good labels.

Each and every component in the Styleguide should have:
* An intuitive name
* A short description
* *Dos and Don'ts*, where Dos would explicit possible but non-obvious applications and Don'ts should predict and prevent possible misuses.
* Documentation of the React props and their possible values
* Some meaningful, contextualized examples of applications and variations.

```grid|1 
![](./emptystate.png "Example documentation for our EmptyState component.")
```

I found it was very fun writing these docs. It was a exercive of empathy, putting myself on the shoes of lonely devs that didn't have designers (or even beginner designers). It was also a philosophical exercise, trying to understand what even basic components such as Buttons or Checkboxes really were made for.

<!-- ```grid|1 
![](./docs.png)
``` -->

<!-- ![](./emptystate_full.png "Example documentation for our EmptyState component.") -->

<video-container> 
    <video autoPlay controls loop width="100%" type="video/mp4">
        <source src="./styleguide.mp4" type="video/mp4">
    </video> 
</video-container>

### Design kit

The VTEX Design Team used to use [Figma](https://www.figma.com/), a modern web-based UI/UX design tool that has lots of features built-in, including: multiplayer, file versioning, reusable component and styles libraries and interactive prototyping. All of this made it very easy develop the design system and reuse in all team's designs.

Since it was a very new tool, and we have just transitioned from Sketch, as the main advocate of it I organized workshops in the company to have everybody on board. I also often helped everyone answering questions and just sharing good practices with the reusing components, designing new ones to be easily reusable and keeping everything organized and documented.
 
```grid|1
![](./styleguide_figma.png "The system components implemented in Figma.")
``` 

# Components

<!-- Part of our weekly rituals included meetings where people would bring new ideas or contributions and Designers and Developers gave their feedbacks. Since it was a highly collaborative work it was important to have such a free space where people could bring their ideas, but at the same time it wasn't like if anyone could do anything. -->

I contributed closely with the design and even the development of several of Styleguide components. Here are some further details about my favorite ones: the **Table**, the **Filters** and the **Conditions Builder**. All of them had contributions of other team members as well, but I consider I played an important part on them.


## Table

After basic atomic components such as buttons and inputs, tables are the most used components in Admin screens in almost every digital product. Going through the legacy Admin screens it was clear it wasn't different for us. Most of them were comprised of mostly a big fat table and some controls such as column sorting, search, filtering, importing and exporting. So we started gathering forces from designers and developers of different teams to create our own, awesome Table component.

```grid|1
![](./four_admins.png "4 examples of admins that we designed in different times of the company and almost felt like 4 different platforms.") 
```

We did an extensive benchmark research in digital products and found out that powerful table components were ubiquitous, either in B2C as B2B products.

```grid|1
![](./table_bench.png "Benchmarking other digital products for the Table component.")
```  

For this daunting task, we split the component in subcomponents that we would address one by one, making sure we were intentional in every design detail without being overwhelmed by its complexity.

<!-- ```grid|1
![](./table.png)
```  -->

```grid|1
![](./table_docs.png)
```

As with everything about Styleguide, the development was totally guided by demands in our projects, to make sure we only designed and implemented things that were really necessary. Because of that the development had to be halted a priorities changed a few times, which is fairly natural to any project like this.

After a few months we had a working, feature-full version that was already being used by several projects in the company. At the time of this writing at least 10 projects are already reusing it, and more are certainly to come.

```grid|1
![](./promotionsadmin.png "Example application of the Table component in the shining new Promotions Admin. It showcases almost all of current features: search, filter, toolbar, line and bulk actions, reorderable headers, custom cells and pagination.")
``` 

## Filters

Along with tables, another very important part of any admin are filters. We wanted to design  a standard filter solution for VTEX that would be powerful enough to work with the overwhelming quantity and complexity of filters needed.

```grid|1
![](./filters_table.png)
```

A quick look around the platform revealed we had half a dozen different variations of filters. Even worst, all of them revolved around the same drawer-like interaction that in our studies we found out not to be the most adequate for our needs.

```grid|1
![](./filters_legacy.png)
```

We studied a couple of different interaction modes for filters and analyzed the pros and cons of each one.

```grid|1
![](./table_filter_interactions.png)
```  

The direction we chose to take focused in solving the following problems:
* **Screen real-estate**: some of our products offered from dozens to hundreds of possible filter variations, and we couldn't try to fit them all in the screen.
* **Live preview**: solutions with drawers made it hard to see the result of filtering directly along with the changing data, which made it harder to use.
* **Discoverability**: we designed a simple Select component that had search and categories built-in to make it really easy to find filters.
* **Flexibility**: we designed the Statement component to be a standard protocol for the most diverse filters imaginable, at the same time it was a common language to be reused with other components.

```grid|1
![](./statements.png "A Statement is an abstract component that has a "subject", a list of possible "verbs" and "objects", and is used inside components like the Filter Bar and the Conditions Builder.")
```

One way of using our filters system is by using the Filter Bar component, which already solves common interactions like turning filters on and off, creating new filters and clearing them.

```grid|1
![](./FilterBar.png "Final design of the Filter Bar component.") 
``` 


## Conditions builder

Conditions are statements that have boolean relationships. They are often seen being used in things liks filters, but also in more complex applications like IF-THEN programmable logics.

Looking at other digital products we found out this was a more common pattern than we initially thought, *especially* on the more advanced products. Some were truly inspiring, while others not that much. One common pitfall was giving control to each boolean operator individually, which can lead the user into creating unintentional precedence mistakes (e.g. in `a OR b AND c` the `AND` has precedence, but the user might not know that). Others had poor visual design, which made it look overwhelming and more complex it actually was.

```grid|1  
![](./conditions_bench.png "Benchmark for the Conditions Builder")
``` 

We designed a Conditions Builder to be a common pattern for adding multiple conditions with simple (first level) boolean relationships. To chose the boolean operator there's a single global control, which prevents the precedence problem. It also helps users that are not used with boolean logic: either you chose that `all` conditions should be met or that `any` condition should be met. 

Each line is made of a Statement, that same component used in the Filter component.

```grid|1 
![](./conditions.png)
```
 
<!-- It can also be extended to allow nesting of conditions, enabling the user to express complex booleans equations in an intuitive way.

```grid|1
![](./conditions_advanced.png)
```  -->

# Links

<links-list
    items='[
        {
            "label": "VTEX Design System website",
            "url": "https://styleguide.vtex.com"
        },
        {
            "label": "Github",
            "url": "https://github.com/vtex/styleguide/"
        }
    ]'>
</links-list>