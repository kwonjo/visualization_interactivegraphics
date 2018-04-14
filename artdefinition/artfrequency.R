## Making a word cloud with tm package
install.packages("tm")
install.packages("SnowballC")
install.packages("wordcloud")
install.packages("RColorBrewer")
library(tm)
library(SnowballC)
library(wordcloud)
library(RColorBrewer)

# Read the text file
setwd("/Users/jkwon/Desktop/Jo2018/2018interactivegraphics/p5_visualization/artdefinition")
text <- readLines("art.txt", warn=F)
docs<-Corpus(VectorSource(text))
inspect(docs)
# Remove punctuation, numbers
docs <- tm_map(docs, removePunctuation)
docs <- tm_map(docs, removeNumbers)
# Remove english common stopwords
docs <- tm_map(docs, removeWords, stopwords("english"))
inspect(docs)
# specify your stopwords as a character vector
docs <- tm_map(docs, removeWords, c("a"))

dtm <- TermDocumentMatrix(docs)
m <- as.matrix(dtm)
v <- sort(rowSums(m),decreasing=TRUE)
d <- data.frame(word = names(v),freq=v)
head(d, 10)
frequency <- head(d, 100)
write.table(frequency, "artfre100.txt", sep="\t", row.names=F)

findFreqTerms(dtm, lowfreq = 4)           # frequent terms

barplot(d[1:100,]$freq, las = 3, names.arg = d[1:100,]$word,
        col ="lightblue", main ="Most frequent Top 100 words",
        ylab = "Word frequencies")

set.seed(1234)
wordcloud(words = d$word, freq = d$freq, min.freq = 3,
          max.words=80, scale=c(3, 0.5), random.order=F, rot.per= 0.15, 
          colors=brewer.pal(8, "Dark2"))
