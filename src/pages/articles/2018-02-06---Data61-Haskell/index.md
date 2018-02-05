---
title: Learning Haskell
date: "2018-02-06T09:55:00.000"
layout: post
draft: false
path: "/posts/haskell-workshop/"
category: "Programming"
tags:
  - "Haskell"
  - "Functional Programming"
description: "My experience at the Data61 Haskell Workshop"
---

A few weeks ago I had the absolute pleasure to attend a completely free 3-day workshop on Haskell, driven by the [Queensland Functional Programming lab](https://qfpl.io/), with approval from my employer REA Group. For the past few months I have been keenly interested in learning more about Functional Programming and have been meaning to delve into a more _pure_ language such as Haskell since I began working in Scala within my current position.

The workshop was structured as two streams, an introduction to Haskell stream which required no prior functional programming exposure, and an applied Haskell course for those who had dabbled in Haskell and wished to further upskill. All of the materials for the course are publicly available on Github and can be accomplished without attending a workshop in-person ([Introduction to Functional Programming](https://github.com/data61/fp-course), [Applied Functional Programming](https://github.com/qfpl/applied-fp-course)).

I was struck by how fast-paced the workshop was, quickly jumping into the different syntax structures that are found within Haskell, with the fundamentals of the Haskell language being explained by the end of the first morning. This whirlwind tour through the language itself left the bulk of the workshop to be about the meat of Haskell, functional programming concepts such as writing pure, total and deterministic functions and implementing type classes for different data types.

The biggest takeaway I had from the workshop overall was the methodical introduction of new 'type classes', and how each exercise would take the previous learnings and build upon them to introduce new functionality to your data types.

For a programmer with an Objected Oriented Programming background, you may imagine a type class as a generic interface for implementing data type functionality. We define a generic template/type class with a broad function signature, and when we are writing a new data type and wish to use that functionality we will implement the functions for that specific data type, ensuring that the implementations adhere to any potential Type class [laws](https://stackoverflow.com/questions/15003974/why-do-all-haskell-typeclasses-have-laws).

For example, the `Functor` type class is defined in Haskell as,

```haskell
class Functor f where
    fmap :: (a -> b) -> f a -> f b
```

At first this block of characters and symbols will appear intimidating, but the core concept behind Functor is actually pleasantly simple.

Imagine `f` as a programming construct which can hold any amount of data values, a simple example being a list of the values, `(1, 2, 3)`. For that construct to have an instance of the type class `Functor`, a function `fmap` must be defined which takes two arguments `(a -> b)` and `f a`. In Haskell, all functions are [curried](https://wiki.haskell.org/Currying), as such the return type of the `fmap` function is `f b`.

The initial argument with an arrow (`->`) represents a function which maps any input of a type `a` to a type `b`. The second argument on the other hand is our programming context `f` which 'wraps' an amount of data with the type `a`. From the information I have provided thus far, it may be evident what the `fmap` function is expected to do, we take a provided function which maps all inputs `a` to `b`, and an `f` construct of type `a`, and then produce an `f` of type `b`!

Note: the Functor type class actually has another function with a similar signature to `fmap` which must also be implemented but it has been excluded for the sake of brevity.

I hope to write more content about my Haskell and functional programming learnings in the near future, I am especially keen to tackle the Applied Haskell course linked prior!