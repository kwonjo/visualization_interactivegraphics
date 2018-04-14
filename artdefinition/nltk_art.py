
# coding: utf-8

# # NLTK

# In[1]:


import nltk


# # Wordnet

# In[37]:


from nltk.corpus import wordnet


# In[49]:


myword = wordnet.synsets("art")


# In[50]:


print(myword[1].definition())


# In[51]:


print(myword[0].examples())


# In[52]:


import sys
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.text import Text


text = open("art.txt", "r").read()
tokens = word_tokenize(text)
textList = Text(tokens)
textList


# In[53]:


textList.concordance('art')


# In[54]:


textList.similar("art")


# In[60]:


textList.dispersion_plot(["art", "see", "paint", "make"])


# In[58]:


textList.dispersion_plot(["Art", "paint"])


# In[61]:


len(textList)

