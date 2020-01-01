---
author: biguru
comments: true
date: 2014-12-03 17:22:16+00:00
layout: post
link: https://biguru.wordpress.com/2014/12/03/a-brief-introduction-to-statistics-part-2-probability-and-distributions/
slug: a-brief-introduction-to-statistics-part-2-probability-and-distributions
title: A Brief Introduction to Statistics - Part 2 - Probability and Distributions
wordpress_id: 138
categories:
- Statistics
tags:
- bayes theorem
- conditional probability
- law of large numbers
- probability
- random variable
---

Probability concepts form the foundation for statistics.

![Odds-Probability](/post/odds1.png?w=300)

**A formal definition of probability**:  

The probability of an outcome is the proportion of times the outcome would
occur if we observed the random process an inﬁnite number of times.  
This is a corollary of the law of large numbers:  
As more observations are collected, the proportion of occurrences with a particular outcome converges to the probability of that outcome.

**Disjoint** (mutually exclusive) events as events that cannot both happen at the same time. i.e. If A and B are disjoint, **P(A and B) = 0**  
**Complementary** outcomes as mutually exclusive outcomes of the same random process whose probabilities add up to 1.  
If A and B are complementary, **P(A) + P(B) = 1**

If A and B are **independent**, then having information on A does not tell us anything about B (_and vice versa_).  
If A and B are **disjoint**, then knowing that A occurs tells us that B cannot occur (_and vice versa_).  
Disjoint (mutually exclusive) events are always dependent since if one event occurs we know the other one cannot.  

A **probability distribution** is a list of the possible outcomes with corresponding probabilities that satisfies three rules:

  1. The outcomes listed must be disjoint.
  2. Each probability must be between 0 and 1.
  3. The probabilities must total 1.


Using the **general addition rule**, the probability of union of events can be calculated.  
If A and B are _not mutually exclusive_:  
**P(A or B) = P(A) + P(B) − P(A and B)**  

If A and B are _mutually exclusive_:  
**P(A or B) = P (A) + P (B)**, since for mutually exclusive events **P(A and B) = 0**

If a probability is based on a single variable, it is a **marginal probability**.  
The probability of outcomes for two or more variables or processes is called a **joint probability**.  

The **conditional probability** of the outcome of interest A given condition B is
computed as the following:
**P(A|B) = P(A and B) / P(B)**  

Using the multiplication rule, the probability of intersection of events can be calculated.  
If A and B are independent,**P(A and B) = P(A) × P(B)**  
If A and B are dependent, **P(A and B) = P(A|B) × P(B)**  
The rule of complements also holds when an event and its complement are conditioned on the same information:  
**P(A|B) = 1 − P(A' |B)** where A' is the complement of A  

**Tree diagrams** are a tool to organize outcomes and probabilities around the structure of the data. They are most useful when two or more processes occur in a sequence and each process is conditioned on its predecessors.  

<font color ="blue">**Bayes Theorem:**</font>  

P(A1|B) = P(B|A1 )P(A1 ) / { P(B|A1 )P(A1 ) + P(B|A2 )P(A2 ) + · · · + P(B|Ak )P(Ak )} where A1, A2 , A3 , ..., and Ak represent all possible outcomes of the ﬁrst variable and P(B) is the outcome of second variable.  
Drawing a tree diagram makes it easier to understand how two variables are connected.  
Use Bayes’ Theorem only when there are so many scenarios that drawing a tree diagram would be complex.

The **standardized (Z) score** of a data point as the number of standard deviations it is away from the mean:  
**Z=(x−μ)/σ** where μ=mean, and σ=standard deviation.  

If the tail (skew) is on the left (negative side), we have a negatively skewed distribution and a negative Z score of the median.  
In a right skewed distribution the Z score of the median is positive.

A random process or variable with a numerical outcome is called a **random variable**, denoted by a capital letter, e.g. X. The mean of the possible outcomes of X is called the **expected value**, denoted by E(X).

The most common distribution is the normal curve or **normal distribution**.  
Many variables are nearly normal, but none are exactly normal. Thus the normal distribution, while not perfect for any single problem, is very useful for a variety of problems.  
The normal distribution with mean 0 and standard deviation 1 is called the standard normal distribution.  
An often-used thumb rule is the **68-95-99.5 rule**, i.e. about 68%, 95%, and 99.7% of
observations fall within 1, 2, and 3, standard deviations of the mean in the normal distribution, respectively.

A Bernoulli random variable has exactly two possible outcomes, usually labeled success(1) and failure(0).  
If X is a random variable that takes value 1 with probability of success p and 0 with probability 1 − p, then X is a Bernoulli random variable with:

  * mean µ = p	
  * and standard deviation σ = sqrt(p(1 − p))

The binomial distribution describes the probability of having exactly k
successes in n independent Bernoulli trials with probability of a success p.  
The number of possible scenarios for obtaining k successes in n trials is given by the choose function  
**(n choose k) = n!/(k!(n − k)!)**  
The probability of observing **exactly k successes in n independent trials** is given by:  
**(n choose k) p<sup>k</sup> (1 − p)<sup>(n−k)</sup> = (n!/(k!(n − k)!)) p<sup>k</sup> (1-p)<sup>(n-k)</sup>**  

Additionally, the mean, variance, and standard deviation of the number of observed successes are:  
**µ = np, σ<sup>2</sup> = np(1 − p), σ = sqrt(np(1-p))**  

To check if a random variable is binomial, use the following four conditions:  
	
  1. The trials are independent.
  2. The number of trials, n, is fixed.
  3. Each trial outcome can be classified as a success or failure.
  4. The probability of a success, p, is the same for each trial.  

The binomial formula is cumbersome when the sample size (n) is large, particularly when we consider a range of observations. In some cases we may use the normal distribution as an easier and faster way to estimate binomial probabilities.  
A thumb rule to use in such cases is to check the conditions:  
**np ≥ 10 and n(1−p) ≥ 10**  
The negative binomial distribution describes the probability of observing the k-th success on the n-th trial:  
**(n-1 choose k-1) p<sup>k</sup>(1-p)<sup>(n-k)</sup>**  
where p is the probability an individual trial is a success. All trials are assumed to be independent.  

The Poisson distribution is often useful for estimating the number of rare events in a large population over a unit of time. Suppose we are watching for rare events and the number of observed events follows a Poisson distribution with rate λ.  
**P(observe k rare events) = λ<sup>k</sup> e<sup>-λ</sup> / k!**  
where k may take a value 0, 1, 2, and so on. e≈2.718, the base of natural logarithm.  
A random variable may follow a Poisson distribution if the event being considered is **rare**, the population is large, and the events occur independently of each other.  

![ProbabilityStudies](/post/probability.jpg?w=300)
