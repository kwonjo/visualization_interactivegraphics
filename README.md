# [Happiness Project](https://kwonjo.github.io/algorithms_interactivegraphics/)

![Happiness Project](/images/project2.png)

## What is the project about?

This project defines "happiness" with five happy tracks that I chose from Billboard chart's top 20 "happy" tracks. 



## How did I come up with the idea?




## How was this piece created?

## 1. [Top 20 'Happy' Songs of All Time](https://www.billboard.com/articles/list/5915801/top-20-happy-songs-of-all-time)
 was used for text analysis. I chose five songs that made me happy from the top 20. The reason for this selection was that I believe that this is my definition of happiness and not the definition from the Billboard chart. In addition, some of the songs in the top 20 did not give a happiness vibe such as Avril Lavigne's "My Happy Ending." 

![billboardchart](/images/happysongs.png) 

*The ranking is based on actual performance on the weekly Billboard Hot 100 chart.*

## 2. R was used for text analysis
R's tm, SnowballC, wordcloud packages allow text analysis and creation of word clouds. 

This is following R codes that I used: 

```{r}
## Making a word cloud with English text
# Install and load packages
install.packages("tm")
install.packages("SnowballC")
install.packages("wordcloud")
install.packages("RColorBrewer")
library(tm)
library(SnowballC)
library(wordcloud)
library(RColorBrewer)

# Read the text file
setwd("/Users/jkwon/Desktop/Jo2018/2018interactivegraphics/p5_algorithms/happyfile")
text <- readLines("combinehappy.txt", warn=F)
docs<-Corpus(VectorSource(text))
inspect(docs)

dtm <- TermDocumentMatrix(docs)
m <- as.matrix(dtm)
v <- sort(rowSums(m),decreasing=TRUE)
d <- data.frame(word = names(v),freq=v)

# Top 50 words/lyrics
frequency <- head(d, 50)
write.table(frequency, "happyfre.txt", sep="\t", row.names=F)

# Bar graph for top 50
barplot(d[1:50,]$freq, las = 3, names.arg = d[1:50,]$word,
        col ="lightblue", main ="Most frequent Top 50 words",
        ylab = "Word frequencies")

# Wordcloud for words with a frequency above 2
set.seed(1234)
wordcloud(words = d$word, freq = d$freq, min.freq = 3,
          max.words=100, scale=c(4, 0.5), random.order=F, rot.per= 0.15, 
          colors=brewer.pal(7, "Accent"))

```

## 3. [Color Selection](https://www.pantone.com/color-of-the-year-2018-tools-for-designers)
![pantone](/images/color2018.png)

Every year Pantone introduces the color of the year and the color of the year 2018 is ultra violet(18-3838).I have always had the interest in Pantone's selections and this year's color was attractive to me. The "Floral Fantasies" selection seemed interesting and I have wanted to incorporate it in some of my work. I have used violet, peach, and lettuce green for this piece. This project was a great opportunity to use similar shades of what Pantone has suggested. 

## 4. The use of interaction 

This project used algorithms and chance operations. The use of chance operations seemed to limit the user interaction with the piece. As a result, I used a "if-else" statement to allow some interaction from the user. When the mouse is pressed, the sound track will play and a smiley :) with changing eye colors will appear on the canvas. 

```javascript
    //Mouse pressed
    if(mouseIsPressed){
        //trigger sound
        mySound.play();
        mySound.setVolume(0.12);

        //smiley face
        stroke(153, 204, 153);
        strokeWeight(3);
        ellipseMode(CENTER);
        //change eye color
        fill(random(255), random(255), random(255));
        ellipse(100, 230, 10, 10);
        ellipse(165, 230, 10, 10);
        noFill(); 
        arc(130, 280, 100, 120, 0.2, PI - 0.2);
    }else{
        noStroke();
    }
```

## 5. Classes in p5js 

A class is defined to enable the words from the top 50 frequency to move around the screen randomly.

```javascript
class Word{ 
        constructor(tempX, tempY, tempWidth, tempHeight, tempShade, tempSpeed, tempText){
        this.x = tempX;
        this.y = tempY;
        this.w = tempWidth;
        this.h = tempHeight;
        this.shade = tempShade;
        this.speed = tempSpeed;
        this.text = tempText;
    }

    //display 
    display(){
        text(this.text, this.x, this.y);
    }

    move(){
    this.x += random(0,1);
    this.y += random(-45, 45);
  }
  
}
```