# Design Brief: Interface to Arts Database

#### A resource for designers and data visualization practitioners who are looking for new ways to visually express uncertainty in data

This database has more than 400 images of works of fine art from museum collections and galleries across several countries, curated and analyzed for inspiration and information on effective ways to visually communicate uncertainty, ambiguity, and vulnerability. The selected artworks were chosen for their unique ability to convey ***uncertainty*** using a range of approaches and techniques. This project is for the design of an interface to this database.  

## Background

Any time that data is used to better understand the world--for any reason, from any source--there exists the possibility of error. The 2016 Brexit vote and November 2016 U.S. election are powerful examples of troves of data pointing to the wrong outcome. Data is inherently uncertain, and to some extent every estimate is vulnerable. In data visualization, the representation of uncertainty and error estimation is often difficult to display effectively. Constraints on the number of dimensions that can be expressed visually as well as limitations of statistical graphing software often lead to data visualizations that (inadvertently) omit and/or poorly convey the uncertainty and vulnerability of the underlying data. Here's a good short read that elaborates on the nature of the problem:  
[https://hbr.org/2016/11/why-its-so-hard-for-us-to-visualize-uncertainty](https://hbr.org/2016/11/why-its-so-hard-for-us-to-visualize-uncertainty)

#### Uncertainty, defined

From *The Grammar of Graphics*, Leland Wilkinson, Second Edition (2005), p. 451:  
> The word *uncertainty* derives from the Latin adjective *certus* (determined, fixed, settled), which itself is derived from the verb *cernere* (to discern or perceive, usually with the eyes). This etymology is relevant to our perspective on graphics and aesthetics because we encounter uncertainty when we are unable to perceive without doubt (*sine dubio*).

## Existing work on the visualization of uncertainty

A lot of work has been done to advance the visualization of uncertainty; most of the progress comes from the scientific visualization community. I'm including some images from [this book](http://a.co/cj3BMAR), from a chapter that fairly exhaustively reviews the work in the field to date. I am including these images because I think they capture the essence of the kind of work that is being done; they also show evidence of the absence of a strong graphic designer.  

### Examples of work from the scientific visualization community:  

![](http://www.sci.utah.edu/~kpotter/Library/Papers/brodlie:2012:RUDV/brodlie_2012_RUDV_03.png)

![](http://www.sci.utah.edu/~kpotter/Library/Papers/brodlie:2012:RUDV/brodlie_2012_RUDV_06.png)

![](http://www.sci.utah.edu/~kpotter/Library/Papers/brodlie:2012:RUDV/brodlie_2012_RUDV_08.png)

![](http://www.sci.utah.edu/~kpotter/Library/Papers/brodlie:2012:RUDV/brodlie_2012_RUDV_07.png)

### Examples of work in the mainstream:  

Although most of the progress is being made in the scientific community, we're starting to see some examples in the mainstream. Here are a few good examples of the kinds of things people are doing:  
[http://flowingdata.com/2018/01/08/visualizing-the-uncertainty-in-data/](http://flowingdata.com/2018/01/08/visualizing-the-uncertainty-in-data/)

*The New York Times* has been experimenting with a (controversial) [needle to show uncertainty](https://www.nytimes.com/2017/12/14/reader-center/nyt-needle-election.html). It was first used in the November 2016 election and was largely pilloried by the internet--mostly because it was misunderstood. But they have since used it twice more, including the recent [special election in Pennsylvania](https://www.nytimes.com/2018/03/13/upshot/needle-forecast-pennsylvania-special-election.html). Here's what it looked like:  

![](nytneedle.gif)

View animated version at: [https://thumbs.gfycat.com/CarefulVastAnura-size_restricted.gif](https://thumbs.gfycat.com/CarefulVastAnura-size_restricted.gif)

## The role of design

Despite all this progress, and despite a clear need to show uncertainty in graphs, is still rarely done. And when it is done, there is evidence that it is largely misunderstood. I have a hypothesis that part of the problem is the much-too-small role that design plays in the creation of this work. For starters, the graphic design is often not done by a professional designer.  

Also, ***how*** uncertainty is visualized is deeply rooted in statistical methods and probability theory. This is not a bad thing, in that these methods and foundations and extremely rigorous. But there is a great deal of evidence that only a sliver of the general population has a proper understanding of and ability to interpret probability, statistical distributions, variance, standard errors, confidence intervals, noise, generalizability and other common mathematical estimates of uncertainty. These hard-to-understand statistical concepts are not magically made more accessible and comprehensible when they are represented visually. 

That is not to say we should just discard these rigorous estimates of uncertainty. After all, Tufte says *graphical competence demands three quite different skills: the substantive, statistical, and artistic.* Yet when it comes to visualizing uncertainty, I would argue that most work is too heavily influenced by the substantive and statistical points of view. What if we were to revisit this problem through the lens of artistic expression? 

## The purpose of the arts database and its interface

The contents of the database (400+ images and metadata of works of fine art from museum collections and galleries) were chosen because they are thought (by me and my [research assistant and collaborator](http://www.clarechurchouse.com/)) to contain effective visual expressions of uncertainty, ambiguity, and vulnerability. We compiled these images to have a corpus of works of art from which we could learn about ways to visually express uncertainty, beyond the common methods used in graphing and plotting software. We are now ready to make this available publicly to be used as a resource for designers and data visualization practitioners. 

## Graph languages and grammars

Many attempts have been made to come up with a standard language or grammar of graphics, one that could be universally applied and would encompass all possibilities. None of these attempts have been successful enough to earn widespread support and adoption. This poses a problem for data visualization, because we don't have a common language or system through which we can communicate and specify. This is evident in the choices of words to describe visual techniques for the expression of uncertainty (emphasis in red for especially vivid language): 

![](/brodlie_words.png)

#### A graph system and language: 

I have chosen to use the system proposed by Jacques Bertin in his 1967 book *[Semiology of Graphics](http://a.co/5Tsgx7w)* (with minor adaptations) as the basis for communication of graphical elements and their placements in the planar system. Bertin identifies six visual variables in the planar dimensions: size, value, texture, color, orientation, and shape. There are three types of signification--point, line, and area--that are the elementary figures of geography. Example variations on the visual variables by type of signification are illustrated by Bertin:
![Bertin, 19xx](https://github.com/aaronxhill/uncertainty/raw/master/img/bertin.png)

#### Minor adaptations to Bertin's model, as used for this project:

### The plane, defined

A **POINT** represents a location on the plane that has no theoretical length or area. This signification is independent of the size and character of the mark which renders it visible. 

A **LINE** signifies a phenomenon on the plane which has measurable length but no area. This signification is independent of the width and characteristics of the mark which renders it visible. 

An **AREA** signifies something on the plane that has a measurable size. This signification applies to the entire area covered by the visible mark. 

### Retinal variables, defined

**PLACEMENT** given location on the planar dimensions

**SIZE** variations in height, width, area

**VALUE** the various degrees between white and black

**TEXTURE** variation in the fineness or coarseness of an area having a given value; includes blur

**COLOR** hue, using the repertoire of colored sensations which can be produced at equal value

**ORIENTATION** various orientations, ranging from the vertical to the horizontal in a distinct direction 

**SHAPE** a mark with a constant size can nonetheless have an infinite number of different shapes

With this system, we can economically and clearly communicate about visual elements (whether in graphs or art). Some examples of the system applied to works of art in the database:

![](/Bertin_art.png)  

#### Optional reading: Appendix 1, selection from Bertin's book describing the properties of the graphic system

# Designing the interface

The purpose of the interface is to allow designers and data visualization practitioners to filter and select a small subset of the images in the database. The subset should return the images most relevant their search. For example, if someone were creating a line graph and interested various visual variables to express uncertainty, such as texture and color, they should be able to easily and intuitively find images that exhibit these characteristics. 

## Working prototype

There is a working prototype at:  
**[http://www.visualizeuncertainty.io/artreview/](http://www.visualizeuncertainty.io/artreview/)**

![](prototype.png)

___

## Context

A big design challenge is how to provide context to the naive user. The images are encoded using the Bertin system, which means that knowledge of this system is necessary to be able to apply filters and make selections. However, the Bertin system is not widely adopted or used, even in the data visualization community. This poses a major UX/UI challenge. How much education in the system is needed, and how should it be delivered? Should there be a "how to use this tool" resource? If so, what would that look like and how would it work? Or, should the "how to" be easily intuited, through clever interface and cues (labels, iconography, abstractions, etc.)? Or something in between? 

## Filters and actions

There are ten filters. Three are for the signifiers on the plane (P, L, A) for point, line, area. The remaining seven filters are for the visual variables (pl, sh, or, co, tx, va, sz) for placement, shape, orientation, color, texture, value, size. There are two other clickable elements: (x) is to reset/clear the selection and (n) is to display the number (n) of images. 

The filters are not binary. Each filter has as many of five levels of magnitude. The lowest level (in very light purple in the prototype) indicates that there is little (but more than zero) of the essence of that filter item. Stepping upward sequentially to the highest level (in the darkest purple) indicates a very strong impression of that attribute. The color range of the five filter levels of magnitude: 

### <span style="color:#f2f0f7">🀫</span> <span style="color:#cbc9e2">🀫</span> <span style="color:#9e9ac8">🀫</span> <span style="color:#756bb1">🀫</span> <span style="color:#54278f">🀫</span>

#### Filter states:

The filter "buttons" each have 12 states:  
1. Not selectable because visual variables cannot be selected if none of the signifiers on the plane (point, line, or area) have been selected. In the prototype, these are colored gray.  
2. The filter is not applied, but it is selectable. Color: black.  
3. The filter is applied to the lowest level of magnitude, color: <span style="color:#f2f0f7">🀫</span>  
4. The filter is applied to the lowest level of magnitude, color: <span style="color:#f2f0f7">🀫</span> with a black bar border around the circle, which means that filtering for this this selection can go no deeper than this magnitude.  
5. The filter is applied to the second lowest level of magnitude, color: <span style="color:#cbc9e2">🀫</span>  
6. The filter is applied to the second lowest level of magnitude, color: <span style="color:#cbc9e2">🀫</span> with a black bar border around the circle, which means that filtering for this this selection can go no deeper than this magnitude.     
7.  The filter is applied to the middle level of magnitude, color: <span style="color:#9e9ac8">🀫</span>  
8. The filter is applied to the middle level of magnitude, color: <span style="color:#9e9ac8">🀫</span> with a black bar border around the circle, which means that filtering for this this selection can go no deeper than this magnitude.    
9. The filter is applied to the second highest level of magnitude, color: <span style="color:#756bb1">🀫</span>  
10. The filter is applied to the second highest level of magnitude, color: <span style="color:#756bb1">🀫</span> with a black bar border around the circle, which means that filtering for this this selection can go no deeper than this magnitude.  
11. The filter is applied to the highest level of magnitude, color: <span style="color:#54278f">🀫</span> with a black bar border around the circle, which means that filtering for this this selection can go no deeper than this magnitude.  
12. Not selectable because there are no images left with these characteristics. Color: gray.  

#### Button actions:

* For buttons in the state of 1 or 12, there is no reaction.  
* For buttons in the state of 2, 3, 5, 7, and 9, the filter will be applied by one level of magnitude and a new selection is made.  
* For buttons in the state of 4, 6, 8, 10, and 11, the filter will be reset (because it can no longer increase in magnitude).  

## Views

When the (n) button is clicked to display images of the selection, each image is clickable and displays a larger version of the image, metadata, and related images. For example:  
[http://www.visualizeuncertainty.io/views/206.html](http://www.visualizeuncertainty.io/views/206.html)

These views are part of the interface design of this project. Their design should be consistent with the filtering tool. 

## Departure from the prototype 

There is nothing about the design of the interface in the prototype that must remain. Anything is possibility at this point. I gave no thought to the "buttons" being circles. Or whether they should even be buttons at all. Or the layout, or proportions, or colors. Or the use of the letters as indicators of function (P, L, A, pl, sh, or, co, tx, va, sz). I have given the design of the interface very little attention, instead focusing on getting the filtering and selection system working properly. I wouldn't read into any of choices I made; the prototype is purely for a working filter so we can see how it responds to selections. Let's start completely from scratch.  

### UX considerations: 

* The (n) button will display the number of images selected, even if it's a lot of images (300+). This would be a UX nightmare. How should we deal with that? Not allow them to display that many? A warning? Pagination? Load on scroll?  
* The signifiers (P, L, A) are different than the seven visual variables. Should these different types of filters have different visual cues?  
* When a user clicks on an image in the filter results, it leads to the detailed view ([an example here](http://www.visualizeuncertainty.io/views/206.html)). But when a user goes back in the browser, the filter is reset. What should be the state of the filter on returning? How should the filter and the views be organized to seem more consistent and coherent?  
* This interface should be responsive: functional and engaging for both the desktop and mobile views.  
* I will include additional filters in a future version. So the design of the filters needs to be able to easily expand to accommodate other filters.  
