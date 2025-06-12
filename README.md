# CSS security?

### Hi Mary or other Star Tribune staff,

I thought I would present an idea I had while preparing to apply for the Software Engineer position.

What better way than to demo my skills in code.

## My Question

### Why only use CSS to stop a user from accessing the full article?

_preface_:
I realize this is a small edge case of readers, --_software developers, unwilling or too lazy to pay for access_-- but still...

#### It's pretty easy to:

1. Right Click > `inspect` Green "SIGN UP TO READ" pop-up.

which brings you to somewhere in here:

```TSX
<div class="lazy-transclude"><article class="pn-article ng-scope">
  <div class="pn-article__inner">
    <div class="pn-article__copy-wrapper">
```

2. Right click `<div class="lazy-transclude">` and `Delete element`
3. Ctrl + F: "overflow"
   quickly finds:

   ```TSX
   <div data-is-root-theme=[...]>
   	<div class="overflow-hidden" [...]>
   ```

4. Remove `"overflow-hidden"` ( `<div class="" [...]>`)
   gives uninhibited access to the full article.

## My Solution

Use logic in React, rather than CSS to prevent simple tampering and ensure readability of code (can't exactly see your current code base to compare though :)

#### Link to [starTrib.tsx](/src/pages/StarTrib.tsx) (within this github repo)

\*Next.js is new to me, but I thought I'd give it a whirl.

TLDR:

> ```TSX
> const StarTrib: React.FC = () => {
> 	return(
>		{isLoggedIn ? 
> 		(
> 			<p>{fullArticle}</p>
> 		) : (
> 			<p> SIGN UP TO READ THIS STORY</p>
> 	)}
> }
> export default starTrib
> ```

