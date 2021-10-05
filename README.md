# Mysterious Organism (Tutorial Challenge Project)

You’re part of a research team that has found a new **mysterious organism** at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that **simulate the DNA** of P. aequor for your research team to study.

## Technologies

- JavaScript ES6
- Node.js

## Features

```Javascript
- console.log(pAequorFactory(specimenNum,mockUpStrand())) 
    // Tt prints one pAequor specimen object with the specimen number and a random strand of dna. One 
    // parameter is required which is the specimen number for the specimenNum .
- console.log(pAequor(num)) 
    // It prints a number of pAequor specimen objects with a specimen number and a random strand of dna. 
    // One parameter is required which is the number of specimen objects you want to create for the num.
- let x=pAequorFactory(1,mockUpStrand()); let y=pAequorFactory(2,mockUpStrand())
  console.log(x.compareDNA(y)) 
    // It computes how many bases are identical and in the same locations. Two parameters are required which 
    // are the first specimen for x and the second specimen for y. 
- let z=pAequor(num); 
  console.log(mostRelated(z)) 
    // It finds the two most related specimen objects of pAequor in a number of it.
- console.log(x.willLikelySurvive())
    // It will evaluate to true if the specimen’s dna contains at least 60% 'C' or 'G' bases. Otherwise, it 
    will evaluate to false.
- console.log(x.complementStrand())
    // It computes the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 
    // 'C's match with 'G's and vice versa.

```

## Sources

This is a tutorial challenge project from Chapter 4.10.1 in Full-Stack Engineer Career Path from [Codecademy](https://www.codecademy.com/).