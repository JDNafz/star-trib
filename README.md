
# The Minnesota Star Tribune

Hi Mary or other Star Tribune staff, 

I thought I would present an idea I had while preparing to apply for the Software Engineer position.

What better way than to demo my skills in code.

## My Question

*preface*: 

I realize this is a small edge case of readers, --*software developers, unwilling or too lazy to pay for access*-- but still...

### Why only use CSS to stop a user from accessing the full article?

#### It's pretty easy to:
1. Right Click > `inspect` the in your face pop up.

which brings you to:

```TSX
<div class="lazy-transclude"><article class="pn-article ng-scope">
  <div class="pn-article__inner">
    <div class="pn-article__copy-wrapper">
```
2. Right click and delete `<div class="lazy-transclude">` 
3. Ctrl + F: "overflow" the 3rd result
	> (first one not in the mess of compiled CSS) 
	
	shows

	```TSX
	<div data-is-root-theme=[...]>
		<div class="overflow-hidden" [...]>
	```
4. Remove `"overflow-hidden"` ( `<div class="" [...]>`)
	gives uninhibited access to the full article.

## My Solution
Use logic in React, rather than CSS to prevent simple tampering and ensure readability of code (can't exactly see your current code base to compare though :)

#### Link to [starTrib.jsx](url) (within this github repo)

*Next.js is new to me, but I thought I'd give it a whirl.