---
date: "2014-12"
title: "Data Visualization of Guitar Songs"
description: "What if we could plot a guitar song in one single image?"
tags: ['data visualization','music','academic']
roles: "Development, Design"
team: "Cristiano Dalbem, Shivani Shah"
cover: "./cover.png"
---


Final project for the course on Advanced Human Computer Interaction.

What if we could plot a guitar song in one single image? And what if it could at the same time be beautiful and generate interesting insights about the performer's style?

Made with web technology, including the D3.js dataviz library, and some basic music theory.
 

#Inspiration

### Visualizing Chess moves on board.

```grid|2
![](./chess1.png "Thinking Machine, by Martin Wattenberg")
![](./chess2.png "Thinking Machine, by Martin Wattenberg")
```

### Static visualization of patterns in music

![](./shapeofsong1.png "The Shape of Song, by Martin Wattenberg")

### Global flight patterns

![](./airplanes1.png "BBC News")

#Music theory


#Technology

- GuitarPro -> MusicXML  -  Input of the songs
- D3  -  Data Visualization library
- HTML, CSS, Javascript
 
```grid|1
![](./musicxml.png)
```

D3 is a Javascript library oriented to Data Visualization. Isn’t a graphics library, but helps managing SVGs and DOMs. It has hundreds of samples online, good documentation, several books published.


#Results


###Neck position

![](./stevevai-fortheloveofgod.png "Steve Vai - For The Love Of God")
![](./jimihendrix-purplehaze.png "Jimi Hendrix - Purple Haze")
![](./pacodelucia-entredosaguas.png "Paco de Lucia - Entre Dos Aguas")

###Scale

We can very easily recognize the scale used. The most probable scales used are automatically calculated.


![](./santana-blackmagicwoman.png "Santana - Black Magic Woman")

![](./scales.png)

###Complexity
You can get impressed by something so simple can be so beautiful

![](./pinkfloyd-comfortablynumb.png "Pink Floyd - Comfortably Numb")

...and yet something that seemed simple aren’t that much

![](./boleroravel.png "Maurice Ravel - Bolero")

Some music styles are more complex than others. Let's compare, for example, the performance of two acclaimed artists of different styles: a classic Rock band, and a legendary Jazz guitar player.

![](./ledzeppelin-stairwaytoheaven.png "Led Zeppelin - Stairway To Heaven (Rock)")

![](./patmetheny-haveyouheard.png "Pat Metheny - Have You Heard (Jazz)")

###Indian classical music

Identifies:
Mukhya swar (Prominent note)
Samvadi (2nd most Prominent note)
Varjit swar (Prohibited note)

Path Identifies Pakad.

![](./raagbhairvi.png "Raag bhairvi")


##Further work

- Extend the concept to other instruments
- Study the most common sequences of notes used
- Add support for Chords
- Apply machine learning techniques to identify prominent paths
- Experiment with colours to put more visual information
- Dynamically select the part of song to be visualized 
- Add support for special notes like bends, tremolos, open strings, etc.
