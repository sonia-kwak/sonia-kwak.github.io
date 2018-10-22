---
date: "2014-12"
title: "Data Visualization of Guitar Songs"
description: "What if we could plot a guitar song in one single image?"
tags: ['data visualization','d3','music','academic']
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
![Thinking Machine, by Martin Wattenberg](./chess1.png)
![Thinking Machine, by Martin Wattenberg](./chess2.png)  
```

### Static visualization of patterns in music

```grid|1
![The Shape of Song, by Martin Wattenberg](./shapeofsong1.png)
```

### Global flight patterns

```grid|1
![BBC News](./airplanes1.png)
``` 

#Music theory


#Technology

- GuitarPro -> MusicXML  -  Input of the songs
- D3  -  Data Visualization library
- HTML, CSS, Javascript

```grid|2
![](./guitarpro.png) 
![](./musicxml.png)
``` 

D3 is a Javascript library oriented to Data Visualization. Isn’t a graphics library, but helps managing SVGs and DOMs. It has hundreds of samples online, good documentation, several books published.


#Results


###Neck position

```grid|1
![Steve Vai - For The Love Of God](./stevevai-fortheloveofgod.png)
```
```grid|1
![Jimi Hendrix - Purple Haze](./jimihendrix-purplehaze.png)
```
```grid|1
![Paco de Lucia - Entre Dos Aguas](./pacodelucia-entredosaguas.png)
```

###Scale

We can very easily recognize the scale used. The most probable scales used are automatically calculated.


```grid|1
![Santana - Black Magic Woman](./santana-blackmagicwoman.png)
```

```grid|1
![](./scales.png)
```

###Complexity
You can get impressed by something so simple can be so beautiful

```grid|1
![Pink Floyd - Comfortably Numb](./pinkfloyd-comfortablynumb.png)
```

...and yet something that seemed simple aren’t that much

```grid|1
![Maurice Ravel - Bolero](./boleroravel.png)
```

Some music styles are more complex than others. Let's compare, for example, the performance of two acclaimed artists of different styles: a classic Rock band, and a legendary Jazz guitar player.

```grid|1
![Led Zeppelin - Stairway To Heaven (Rock)](./ledzeppelin-stairwaytoheaven.png)
```

```grid|1
![Pat Metheny - Have You Heard (Jazz)](./patmetheny-haveyouheard.png)
```

###Indian classical music

Identifies:
Mukhya swar (Prominent note)
Samvadi (2nd most Prominent note)
Varjit swar (Prohibited note)

Path Identifies Pakad.

```grid|1
![Raag bhairvi](./raagbhairvi.png)
```


##Further work

- Extend the concept to other instruments
- Study the most common sequences of notes used
- Add support for Chords
- Apply machine learning techniques to identify prominent paths
- Experiment with colours to put more visual information
- Dynamically select the part of song to be visualized 
- Add support for special notes like bends, tremolos, open strings, etc.
