#Big-O notation

##Motivation

- compare functions in terms of their growth.
	* including functions describing algorithm steps.
- ignore irrelevant details.
	* low-order terms.
	* constant factors.
- basis for informal engineering designs.
	* how big will my data grow?
	* will my existing solution still work adequately at scale.

##Big-O
f(x) = O(g(x)) or f(x) E O(g(x))

informally:
	f(x) grows no faster than g(x)

Heuristically: 
	as x -> oo, f(x) is bounded above by some constant times g(x)

Formally:
	Some maths greek that's on the slides

##Big-Omega

Informally:
	f(x) grows no slower than g(x)

##Big-Theta

Both big-O and big-OMEGA.

f(x) grows like g(x)

##little-o

f(x) grows much slower than g(x)


#READINGS

CLRS; section 17.4, chapter 3
DPV; section 0.3

##Problems from CLRS

	1-1 Comparison of running times
	3-2 Relative asymptotic growths
	3-3 Ordering by asymptotic grows rates

##DPV Excercises

0.1, 0.2

BIG-O QUIZ ON MOODLE
