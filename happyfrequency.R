## Making a word cloud with English text ##
rm(list=ls())
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

# Remove english common stopwords
docs <- tm_map(docs, removeWords, stopwords("english"))
#http://jmlr.csail.mit.edu/papers/volume5/lewis04a/a11-smart-stop-list/english.stop
inspect(docs)

dtm <- TermDocumentMatrix(docs)
m <- as.matrix(dtm)
v <- sort(rowSums(m),decreasing=TRUE)
d <- data.frame(word = names(v),freq=v)
head(d, 10)
frequency <- head(d, 50)
write.table(frequency, "happyfre.txt", sep="\t", row.names=F)

findFreqTerms(dtm, lowfreq = 4)           # frequent terms

barplot(d[1:50,]$freq, las = 3, names.arg = d[1:50,]$word,
        col ="lightblue", main ="Most frequent Top 50 words",
        ylab = "Word frequencies")

set.seed(1234)
wordcloud(words = d$word, freq = d$freq, min.freq = 3,
          max.words=100, scale=c(4, 0.5), random.order=F, rot.per= 0.15, 
          colors=brewer.pal(7, "Accent"))

