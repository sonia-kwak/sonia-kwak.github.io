---
projectType: 'project'
date: "2014-12"
title: "Guitar Songs Dataviz"
minibio: "What if we could plot a guitar song in one single image?"
description: "Final project for the Data Visualization class. What if we could plot a guitar song in one single image?"
tags: ['data visualization','front-end']
roles: "Development, Design"
team: "Cristiano Dalbem, Shivani Shah"
cover: "./cover.png"
---


Final project for the course on Advanced Human Computer Interaction.

What if we could plot a guitar song in one single image? And what if it could at the same time be beautiful and generate interesting insights about the performer's style?

Made with web technology, including the D3.js dataviz library, and some basic music theory.
 

# Inspiration

Visualizing Chess moves on board. Thinking Machine, by Martin Wattenberg.

```grid|2
![](./chess1.png)
![](./chess2.png)
```

Static visualization of patterns in music.

![](./shapeofsong1.png "The Shape of Song, by Martin Wattenberg")

Global flight patterns

![](./airplanes1.png "BBC News")

# Music theory

// todo

# Development

- GuitarPro -> MusicXML  -  Input of the songs
- D3  -  Data Visualization library
- HTML, CSS, Javascript
 
```grid|1
![](./musicxml.png)
```

D3 is a Javascript library oriented to Data Visualization. Isn’t a graphics library, but helps managing SVGs and DOMs. It has hundreds of samples online, good documentation, several books published.


# Results

### Neck position

<jumbo caption="Steve Vai - For The Love Of God">
    <img src="./stevevai-fortheloveofgod.png"/>
</jumbo>

<jumbo caption="Jimi Hendrix - Purple Haze">
    <img src="./jimihendrix-purplehaze.png"/>
</jumbo>

<jumbo caption="Paco de Lucia - Entre Dos Aguas">
    <img src="./pacodelucia-entredosaguas.png"/>
</jumbo>


### Scale

We can very easily recognize the scale used. The most probable scales used are automatically calculated.


<jumbo caption="Santana - Black Magic Woman">
    <img src="./santana-blackmagicwoman.png"/>
</jumbo>

```grid|1
![](./scales.png)
```


### Complexity
You can get impressed by something so simple can be so beautiful

<jumbo caption="Pink Floyd - Comfortably Numb">
    <img src="./pinkfloyd-comfortablynumb.png"/>
</jumbo>

...and yet something that seemed simple aren’t that much

<jumbo caption="Maurice Ravel - Bolero">
    <img src="./boleroravel.png"/>
</jumbo>

Some music styles are more complex than others. Let's compare, for example, the performance of two acclaimed artists of different styles: a classic Rock band, and a legendary Jazz guitar player.

<jumbo caption="Led Zeppelin - Stairway To Heaven (Rock)">
    <img src="./ledzeppelin-stairwaytoheaven.png"/>
</jumbo>

<jumbo caption="Pat Metheny - Have You Heard (Jazz)">
    <img src="./patmetheny-haveyouheard.png"/>
</jumbo>

### Indian classical music

Identifies:
Mukhya swar (Prominent note)
Samvadi (2nd most Prominent note)
Varjit swar (Prohibited note)

Path Identifies Pakad.

<jumbo caption="Raag bhairvi">
    <img src="./raagbhairvi.png"/>
</jumbo>



## Further work

- Improve visual design
- Enable the user to upload their own songs
- Highlight not only most common notes, but also most used intervals and sequences (the riffs)
- Support chords
- Support special notes like bends, tremolos, open strings, etc.
- Apply machine learning techniques to identify prominent paths
- Dynamically select the part of song to be visualized, instead of collapsing it all into one frame only.
- Extend the concept to other instruments


## Links

<links-list
    items='[
        {
            "label": "Website",
            "url": "http://cmdalbem.github.io/guitar-songs-viz/"
        },
        {
            "label": "Github",
            "url": "https://github.com/cmdalbem/guitar-songs-viz"
        }
    ]'>
</links-list>