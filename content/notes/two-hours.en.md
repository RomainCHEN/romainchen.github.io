---
title: 'The two hours I spent writing exercises were not the problem'
date: '2026-07-28'
summary: 'I built a tool to save time on lesson prep and found out that time was never what I was short of.'
---

For about sixteen months I taught two small Cambridge KET classes, six children in total, and every week I sat down and wrote a set of practice exercises by hand. It took roughly two hours. When I started building software to help, the pitch I gave myself was the obvious one: two hours is a lot, get it down to ten minutes.

That turned out to be the wrong problem, and noticing why has shaped everything I have built since.

## What was actually wrong

Three things bothered me about those handmade exercise sets, and speed was not among them.

The first was that I could not control difficulty. I could aim for "slightly easier than the real paper" and simply miss, and I would only find out during the lesson, by watching a child stall on question three. There was no mechanism between my intention and the outcome.

The second was supply. Official past papers are finite and they run out quickly, so the same texts came round again, and a text a student has already seen tests memory rather than reading.

The third was that the topics were stale. A passage about writing letters to a pen pal does not fail because it is linguistically wrong. It fails because a nine-year-old has no reason to care, and a child who does not care is not doing the cognitive work the exercise was designed to provoke.

None of these is a speed problem. One is a control problem, one is a supply problem, and one is a motivation problem.

## Why "make it faster" is a trap

Here is the thing about generating exercises with a language model: it is easy to do and almost impossible to evaluate. You get plausible output in seconds. It looks like an exam question. It has the right shape.

And then what? If you judge it by reading it, you are testing your own ability to spot problems by eye, which is exactly the ability that failed you when you wrote the exercises by hand. Plausible is not the same as usable, and nothing about a fluent draft tells you whether the distractors are doing any work.

So I stopped trying to make the tool fast and started trying to make it *answerable*. Two things I had never recorded became things the system records by default: what I changed about the draft before I let it near a classroom, and how the questions behaved once children actually answered them.

The first one is the part I find most interesting. When a teacher approves a generated item, the original draft is frozen first, and the difference between the two is stored: how much moved, and which part of the item it was, whether the passage, the question stem, the options or the answer key. Aggregate that across enough items and you get something I have never seen stated with evidence: which kinds of exam questions a model is actually bad at, as opposed to which ones look risky.

## Showing a number instead of enforcing it

One design decision I keep coming back to. Every generated text is checked against the wordlist for its level, and the system reports what proportion of content words fall outside it. It tolerates up to ten per cent, and it does not block anything.

That tolerance is deliberate. Proper nouns, topic vocabulary and ordinary word formation all legitimately fall outside a base wordlist, so a stricter rule would reject perfectly good material and teach the teacher to ignore the warning. Showing the figure and letting a person decide respects the fact that the check is narrower than it looks: it knows about words, and it knows nothing about whether the syntax is too hard or the cultural references land.

I would rather have a guardrail that admits its scope than one that pretends to be a verdict.

## What I still cannot tell you

Whether any of this works. The instruments are built and the study is written: task timing against each teacher's own manual baseline, a usability scale, a workload scale, a content-quality rubric, and interviews. I have not run it.

That is an uncomfortable thing to publish, and it is also the honest state of the project. The gap between "I built the thing that would measure this" and "I measured it" is the whole distance between a side project and research, and I would rather name it than paper over it.
