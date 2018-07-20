# uncertainty

## Visual language and methods for the estimation and visual expression of uncertainty and error

Any time that data is used to better understand the world--for any reason, from any source--there exists the possibility of error. The 2016 Brexit vote and November 2016 U.S. election are powerful examples of troves of data pointing to the wrong outcome. Data is inherently uncertain, and to some extent every estimate is vulnerable. But the visual display of uncertainty and sources of error is difficult, which mostly results in neglecting to communicate this vulnerability. 

This work (in progress) is to adopt and extend an existing visual language for the explicit purpose of visual expression of uncertainty and error. The system proposed by Jacques Bertin in his 1967 book *Semiology of Graphics* is adopted with minor adaptations as the basis for communication of graphical elements and their placements in the planar system. Bertin identifies six visual variables in the planar dimensions: size, value, texture, color, orientation, and shape. There are three types of signification--point, line, and area--that are the elementary figures of geography. Example variations on the visual variables by type of signification are illustrated by Bertin:
![Bertin, 19xx](https://github.com/aaronxhill/uncertainty/raw/master/img/bertin.png)

These illustrations are in the process of being replicated using the JavaScript Library [P5.js](https://p5js.org/) to serve as a foundation for experimentation with visual variables and geography toward the communication of uncertainty in data. The definition of "area" has been expanded to allow for differentiation between Cartesian and geographic coordinate systems. The source code for each classification can be found in the following table:

. | point | line | area (c) | area (g)
--- | --- | --- | --- | ---
shape | [ps](https://github.com/aaronxhill/uncertainty/blob/master/cells/ps.js) | [ls](https://github.com/aaronxhill/uncertainty/blob/master/cells/ls.js) | cs | [gs](https://github.com/aaronxhill/uncertainty/blob/master/cells/gs.js)
orientation | [po](https://github.com/aaronxhill/uncertainty/blob/master/cells/po.js) | [lo](https://github.com/aaronxhill/uncertainty/blob/master/cells/lo.js) | [co](https://github.com/aaronxhill/uncertainty/blob/master/cells/co.js) | go
color | [pc](https://github.com/aaronxhill/uncertainty/blob/master/cells/pc.js) | lc | [cc](https://github.com/aaronxhill/uncertainty/blob/master/cells/po.js) | [gc](https://github.com/aaronxhill/uncertainty/blob/master/cells/gc.js)
texture | [pt](https://github.com/aaronxhill/uncertainty/blob/master/cells/pt.js) | [lt](https://github.com/aaronxhill/uncertainty/blob/master/cells/lt.js) | [ct](https://github.com/aaronxhill/uncertainty/blob/master/cells/ct.js) | gt
value | pv | lv | cv | gv
size | [pz](https://github.com/aaronxhill/uncertainty/blob/master/cells/pz.js) | lz | [cz](https://github.com/aaronxhill/uncertainty/blob/master/cells/cz.js) | gz

Drafts of these classifications can be viewed at [www.visualizeuncertainty.io](http://www.visualizeuncertainty.io/).

The next phase introduces variables of animation and interactive design and new ways of simulating and estimating distributions so they can be shown visually.

#### Related Reading

<div class="csl-bib-body" style="line-height: 2; padding-left: 2em; text-indent:-2em;">
  <div class="csl-entry">Bertin, J., &amp; Berg, W. J. (2010). <i>Semiology of graphics: diagrams, networks, maps</i> (1st ed). Redlands, Calif: ESRI Press : Distributed by Ingram Publisher Services.</div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-1-58948-261-6&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Semiology%20of%20graphics%3A%20diagrams%2C%20networks%2C%20maps&amp;rft.place=Redlands%2C%20Calif&amp;rft.publisher=ESRI%20Press%20%3A%20Distributed%20by%20Ingram%20Publisher%20Services&amp;rft.edition=1st%20ed&amp;rft.aufirst=Jacques&amp;rft.aulast=Bertin&amp;rft.au=Jacques%20Bertin&amp;rft.au=William%20J.%20Berg&amp;rft.date=2010&amp;rft.tpages=438&amp;rft.isbn=978-1-58948-261-6&amp;rft.language=eng"></span>
  <div class="csl-entry">Satyanarayan, A., Moritz, D., Wongsuphasawat, K., &amp; Heer, J. (2017). Vega-Lite: A Grammar of Interactive Graphics. <i>IEEE Transactions on Visualization and Computer Graphics</i>, <i>23</i>(1), 341–350. https://doi.org/10.1109/TVCG.2016.2599030</div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.1109%2FTVCG.2016.2599030&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Vega-Lite%3A%20A%20Grammar%20of%20Interactive%20Graphics&amp;rft.jtitle=IEEE%20Transactions%20on%20Visualization%20and%20Computer%20Graphics&amp;rft.volume=23&amp;rft.issue=1&amp;rft.aufirst=Arvind&amp;rft.aulast=Satyanarayan&amp;rft.au=Arvind%20Satyanarayan&amp;rft.au=Dominik%20Moritz&amp;rft.au=Kanit%20Wongsuphasawat&amp;rft.au=Jeffrey%20Heer&amp;rft.date=2017-01&amp;rft.pages=341-350&amp;rft.spage=341&amp;rft.epage=350&amp;rft.issn=1077-2626"></span>
  <div class="csl-entry">Torres, N. (2016, November 11). Why It’s So Hard for Us to Visualize Uncertainty. Retrieved March 20, 2017, from https://hbr.org/2016/11/why-its-so-hard-for-us-to-visualize-uncertainty</div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Why%20It%E2%80%99s%20So%20Hard%20for%20Us%20to%20Visualize%20Uncertainty&amp;rft.identifier=https%3A%2F%2Fhbr.org%2F2016%2F11%2Fwhy-its-so-hard-for-us-to-visualize-uncertainty&amp;rft.aufirst=Nicole&amp;rft.aulast=Torres&amp;rft.au=Nicole%20Torres&amp;rft.date=2016-11-11"></span>
  <div class="csl-entry">Wilkinson, L. (2005). <i>The Grammar of Graphics</i>. New York: Springer-Verlag. https://doi.org/10.1007/0-387-28695-0</div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-0-387-24544-7&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=The%20Grammar%20of%20Graphics&amp;rft.place=New%20York&amp;rft.publisher=Springer-Verlag&amp;rft.series=Statistics%20and%20Computing&amp;rft.aufirst=Leland&amp;rft.aulast=Wilkinson&amp;rft.au=Leland%20Wilkinson&amp;rft.date=2005&amp;rft.isbn=978-0-387-24544-7&amp;rft.language=en"></span>
</div>

