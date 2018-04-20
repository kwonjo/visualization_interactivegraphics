## Making a word cloud with tm package and LDA
install.packages("tm")
install.packages("SnowballC")
install.packages("wordcloud")
install.packages("RColorBrewer")
install.packages("topicmodels")

library(tm)
library(SnowballC)
library(wordcloud)
library(RColorBrewer)
library(topicmodels)

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
#docs <- tm_map(docs, removeWords, c( "a"))

dtm <- DocumentTermMatrix(docs)
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
png("wordcloud.png", width=12,height=8, units='in', res=300)
par(mar = rep(0, 4))
wordcloud(words = d$word, freq = d$freq, min.freq = 3,
          max.words=100, scale=c(3, 0.5), random.order=F, rot.per= 0, 
          colors=brewer.pal(8, "Dark2"))

##Run Latent Dirichlet Allocation (LDA) using Gibbs Sampling
#set burn in
burnin <-1000
#set iterations
iter<-2000
#thin the spaces between samples
thin <- 500
#set random starts at 5
nstart <-5
#use random integers as seed 
seed <- list(254672,109,122887,145629037,3)
# return the highest probability as the result
best <-TRUE
#set number of topics 
k <-5
#run the LDA model
ldaOut <- LDA(dtm, k, method="Gibbs", control=
                list(nstart=nstart, seed = seed, best=best, burnin = burnin, iter = iter, thin=thin))
terms(ldaOut, 20)
ldaOut.terms <- as.matrix(terms(ldaOut,10))
#view the topic assignment for each document
topics(ldaOut)
#create a matrix and write to csv
ldaOut.topics <-as.matrix(topics(ldaOut))
write.csv(ldaOut.topics,file=paste("LDAGibbs",k,"DocsToTopics.csv"))

#Find probabilities associated with each topic assignment
topicProbabilities <- as.data.frame(ldaOut@gamma) 
write.csv(topicProbabilities,file=paste("LDAGibbs",k,"TopicProbabilities.csv"))
#investigate topic probabilities data.frame
summary(topicProbabilities)
str(topicProbabilities)
