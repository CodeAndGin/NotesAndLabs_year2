# Perception and Multimedia Computing #

Device dependent colourspaces vs device independent colourspaces

- CIE XYZ

Calibrate displays so that device independant colourspaces can display colours the same on all calibrated dislays. 

## Colour Spaces ##

HSB - a colour is defined with 3 values.

location in 3d space:
x = sB cos h
y = sB sin h
z = B

## RGB -> HSB ##
	max = max (r, g, b)
	min = min (r, g, b)
E.G. -> max (130, 234, 27) = 234

p = pi

h 	= 0 						if (max = min)
	= [(p/3)*(g-b)/(max-min)] mod 2p 	if max = r
	= 2p/3 + (p/3)*(b-r)/(max-min) 	if max = g
	= 4p/3 + (p/3)*(r-g)/(max-min) 	if max = b

s 	= 0						if max = 0
	= 1 - min/max				else

B 	= max (mapped to 0-100% from 255)

## HSB -> RGB ##

h is in radians

i = floor(3h/p) 

f = 3h/p - i

p = B * (1-s)

q = B * (1-f*s)

t = B * (1-(1-f)*s)

(r, g, b) 	= (B, t, p) if i = 0 
			= (q, B, p) if i = 1 
			= (p, B, t) if i = 2 
			= (p, q, B) if i = 3 
			= (t, p, B) if i = 4 
			= (B, p, q) if i = 5

## GOD FUCKING KNOWS ##
