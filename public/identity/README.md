## identity

The identity (branding image/logo/graphic) for `uncertainty.io` is the title for the landing page, meant to convey the essence of the topic: the visualization of uncertainty in data. The basis for identity is the word "uncertainty." The typeface is FreeSans.ttf, interpreted geometrically** and the resulting shapes are treated as "data", which is the basis for multiple generative typefaces for the word *uncertainty*.

**NOTE: This is done using the Geomerative library in Processing to interpret a font and expose its shapes (paths, handles, and points).
For example, here are the points for FreeSans.ttf [[raw data](https://github.com/aaronxhill/uncertainty/blob/master/public/identity/js/vu_raw_data.js).)]:  
![](https://github.com/aaronxhill/uncertainty/raw/master/assets/u_raw_data.png)

### The system for the generative typeface

Rules for this generative typeface: 

1. The "data" from the word *uncertainty* must be treated as though it were uncertain data in a visualization.  
2. The rendering of the variations of the typeface must happen in [D3.js](https://d3js.org/), a popular JavaScript library for interactive data visualization. This constraint is deliberate; the identity then also serves as a proof of concept that artistic expression is possible in data visualization software.  

Following the Bertin model, the "points" in the typeface will serve to mark the three types of signification--point, line, and area. For **point**, the points are simply points. For **line**, the points are separated into pairs that become starting and ending points for lines; for example, points A, B, and C become pairs that can mark three lines: AB, BC, and CA. For **area**, the points define the path that outlines the shape of a given letter. One example each for point, line, and area:  

![](https://github.com/aaronxhill/uncertainty/raw/master/assets/P.png) ![](https://github.com/aaronxhill/uncertainty/raw/master/assets/L.png) ![](https://github.com/aaronxhill/uncertainty/raw/master/assets/A.png)

Each of the marks--whether point, line, or area--can be modified with the seven Bertin visual variables:  

**SIZE** variations in height, width, area

**VALUE** the various degrees between white and black

**TEXTURE** variation in the fineness or coarseness of an area having a given value; includes blur

**COLOR** hue, using the repertoire of colored sensations which can be produced at equal value

**ORIENTATION** various orientations, ranging from the vertical to the horizontal in a distinct direction 

**SHAPE** a mark with a constant size can nonetheless have an infinite number of different shapes

**PLACEMENT** given location on the planar dimensions

The first six visual variables listed require no further explanation. The final variable (*placement*) requires some elaboration on ways that it can be used to express uncertainty: 

> Placement in a coordinate system can be altered in various ways that are consistent with the statistical properties of uncertainty in data, both in how uncertainty is estimated and how uncertain data performs relative to a hypothetical "certain" dataset. 

> For example, let's say an election poll estimates that a candidate will receive 60% of the votes. That point estimate (60%) comes with a margin of error to express the uncertainty in the data. "Placement" might be used to animate the various possibilities where the real value might be. So the point might be animated move around within the margin of error (and even outside the margin of error given that 5% of the time the value isn't even within that margin).  

> Another example: weather forecasts are based on thousands of simulations. For example, here's what hurricane simulations look like:  
> ![](http://visunc.sci.utah.edu/images/Cox_UQ_small.jpg)

> Yet by the time laypeople see the graph, it has been abstracted by aggregating the results of those simulations:  
> ![](https://sunbeamwsvn.files.wordpress.com/2016/09/160930_hurricane_matthew_forecast.jpg?w=633)  

> *Placement* might be used instead of the "hurricane cone" abstraction to show the variability of the forecast in different ways.  

> This is where a good working knowledge of statistics comes in handy. Because there are many, many ways that values can vary statistically; those variations can be visualized. For background, here's a good list of the kinds of statistical phenomena that could be represented with *placement*, from [The Grammar of Graphics](http://a.co/4qr4Tiy):  

> * *Variability* is non-constancy. A set of data is variable if it has two or more elements and if any two of its values differ. Data variability leads to uncertainty only if we do not know how it occurs.  
* *Noise* is variability produced by a [stationary stochastic process](https://en.wikipedia.org/wiki/Normal_distribution). Perhaps the most obvious example is Gaussian white noise in a linear system. Noise produces uncertainty because it is random.  
* *Incompleteness* is the presence of missing data. Missing values can be produced by breakdowns in equipment, refusal to answer questions, confidentiality restrictions, and other factors. Missing values produce uncertainty when we cannot reliably impute them.  
* *Indeterminacy* is the existence of more than one set of parameter values satisfying the conditions of a model and its associated data.  
* *Bias* is systematic discrepancy from a standard, as in a biased opinion. Measurement bias is systematic discrepancy between a true value that we attempt to measure and an observed measurement of the value.  
* *Error* is random discrepancy between a measured and true value. Unlike bias, error varies to the left or right of the truth with equal likelihood.  
* *Accuracy* is relative lack of bias and error. If a measurement is representable by the equation measurement = truth + bias + error, then a high level of accuracy reflects a high level of truth in the measurement.  
* *Precision* is relative lack of error. A highly precise measurement can be biased. We associate significant digits (the number of digits in a measurement that are not affected by error) with precision of a measurement.  
* *Reliability* is the repeatability of a measurement over time. The smaller the variance in a series of measurements, the higher their reliability.  
* *Validity* is the association of a measurement with the true process generating what is measured. A valid measurement need not measure a variable itself. It simply needs to measure something perfectly correlated with what is measured under all relevant measuring conditions.  
* *Quality* is a combination of completeness, reliability, and validity.  
* *Integrity* is the presence of information that allows a judge to establish quality. This usually involves an audit trail or lineage for a set of measurements and the context in which they were made.  

## Sources of inspiration

* This [design research tool](https://www.uncertainty.io/art/)
* [https://vimeo.com/144015646](https://vimeo.com/144015646)  
* [https://www.pinterest.com/aaronxhill/generative-type/]  (https://www.pinterest.com/aaronxhill/generative-type/)  

![](http://www.azquotes.com/public/pictures/authors/39/5b/395b9a8caf7212ed9a0777ebc85f7fc8/54e7dcc0dc35f_jacques_bertin.jpg)  
[Jacques](https://medium.com/@karlsluis/before-tufte-there-was-bertin-63af71ceaa62)