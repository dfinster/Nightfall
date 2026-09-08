# Nightfall for Micro.blog

A dark, typography-led journal theme: charcoal and soft light blue with sans-serif text. Desktop side navigation becomes a compact header on phones. Uses system fonts and a small optional script; no theme framework or externally hosted font dependency.

## Included

- Full-text micro-posts and titled essays; explicit `<!--more-->` excerpts.
- Markdown footnotes with backlinks, keyboard-operable previews, and unique per-post anchors even without JavaScript.
- Responsive native video and YouTube/Vimeo embeds, optional captions, and visible fallback links.
- Year-grouped archive, category pages and chips, photo grid, pagination, and reading time on longer posts.
- RSS/JSON feed discovery, IndieWeb metadata, Micro.blog conversations, custom CSS/footer and plug-in includes through Micro.blog’s shared templates.
- Skip link, visible focus rings, reduced-motion support, print styles, semantic post markup, and metadata.

## Install on Micro.blog

This ZIP contains theme source, not a blog-content import. Your live blog has not been modified.

1. Unzip the download. Create a GitHub repository and put the **contents of `nightfall/`** at its root (`layouts/`, `static/`, `config.json`, and `theme.toml` must be at repository root). The `exampleSite/` directory is only for local previews.
2. In Micro.blog, open **Design → Edit Custom Themes → New Plug-in**. Enter Nightfall as the title and your repository’s clone URL. Choose the intended blog and add the plug-in. Interface labels may vary.
3. Uninstall the previous visual theme plug-in so its templates do not compete. If your dashboard offers a base design selector, choose **Blank**. Keep Micro.blog’s underlying shared Blank templates; Nightfall inherits its feeds, discovery metadata, and custom-footer partial.
4. Use a current Hugo version offered by Micro.blog. Local validation used Hugo **0.147.9**; older versions have not been validated.
5. Add/reorder navigation in Micro.blog’s Pages area. Add Archive and Photos using its built-in pages; a Categories navigation link can point to `/categories/`. Nightfall renders these pages; it does not add navigation items in your account automatically.
6. Rebuild the blog and check a post, `/archive/`, `/photos/`, and both feeds. A Micro.blog test blog is useful for checking your content and installed plug-ins first.

A no-GitHub alternative is to create a custom theme and add each `layouts/` and `static/` file with exactly its relative path, plus `config.json`. Select that custom theme over Blank. Do not paste these templates into Edit CSS.

## Footnotes

Write in the Markdown editor:

```markdown
There is more to this story.[^detail]

[^detail]: A little extra context, with a [link](https://micro.blog/).
```

Click a reference to open a preview; Close or Escape returns focus to the reference. Standard references/backlinks work without JavaScript. Keep a referenced footnote before an explicit `<!--more-->` break, or omit the break for that post, so its note remains in the excerpt.

## Video embedding

Micro.blog’s normal uploaded `<video>` HTML works directly. Preserve `controls` and use `playsinline`:

```html
<video controls playsinline preload="metadata" src="YOUR_UPLOADED_VIDEO_URL"></video>
<p><a href="YOUR_UPLOADED_VIDEO_URL">Watch or download the video</a></p>
```

For YouTube or Vimeo, paste the provider’s iframe embed HTML and add a descriptive `title`, plus a watch link below it. Nightfall sizes YouTube and Vimeo iframes responsively. No autoplay is added.

The included optional Hugo shortcode provides these conveniences:

```go-html-template
{{< nightfall-video provider="youtube" id="VIDEO_ID" title="An evening walk" >}}
{{< nightfall-video provider="vimeo" id="VIDEO_ID" title="A short film" >}}
{{< nightfall-video src="YOUR_UPLOADED_VIDEO_URL" title="At the lake" caption="September, just before sunset." >}}
```

Use only the video ID in `id`, not the full URL. For a local file video, `poster="IMAGE_URL"` is also supported. Add caption tracks using ordinary HTML `<track>` elements when needed; the shortcode does not generate subtitles.

**Blog versus timeline:** iframe players are supported on the blog, but Micro.blog’s timeline filters iframes. Keep a normal watch link in the post body for timeline readers. Hugo shortcodes may appear as text in some clients/timeline paths; ordinary HTML plus a watch link is the most portable posting method. This theme does not unlock video-upload entitlements in your Micro.blog plan. External providers receive requests when their players load; YouTube uses the nocookie host and Vimeo requests `dnt=1`, which is not a guarantee of zero tracking.

## Customize

In **Design → Edit CSS**, override the tokens:

```css
:root {
  --bg: #111716;
  --surface: #1a2321;
  --ink: #b6ccdf;
  --muted: #91a9bd;
  --accent: #97bfe1;
  --width: 720px;
}
```

Your Micro.blog profile picture appears above the site title on desktop and beside it on phones, using `Site.Params.author.avatar`. If no avatar is configured, the title appears on its own. Set your profile picture in Micro.blog before rebuilding. Site title, description, menu links, custom footer, and author details come from your Micro.blog settings. Conversations follow each post’s `include_conversation` setting. Theme CSS does not style the contents of third-party iframes. Pagination follows Hugo’s configured page size.

For an inline photo gallery:

```html
<div class="photo-grid">
  <img src="FIRST_IMAGE_URL" alt="Describe the first photograph" loading="lazy">
  <img src="SECOND_IMAGE_URL" alt="Describe the second photograph" loading="lazy">
</div>
```

## Local development

Create a Hugo site with this directory as `themes/nightfall` and clone `https://github.com/microdotblog/theme-blank` as `themes/theme-blank`. Copy `exampleSite/content/` and `exampleSite/hugo.json` into the site root, then run `hugo server`. The example’s author, posts, and menus are fictional demo content; replace them before publishing. Micro.blog injects site configuration and shared templates in production.

## Validation and limits

Built successfully with Hugo 0.147.9 using the current Micro.blog Blank templates. Generated HTML checks confirm unique footnote IDs and valid reference/backlink targets. JavaScript syntax validation passed. Browser interaction and visual checks could not run because the browser download timed out, so mobile appearance, preview/Escape behavior, and live media playback still need browser verification. Actual playback depends on the media URL, provider permissions, and network access; it has not been certified on a live Micro.blog account. No analytics, newsletter form, or search backend is bundled. Existing plug-ins can use the platform’s CSS/JS/HTML hooks, but individual plug-ins still need testing.

## Design references

Feature selection is based on recurring capabilities in maintained themes and Micro.blog’s platform conventions, not a measured popularity ranking. This is original theme code, not a fork of those designs.

- [Tiny Theme: performance, responsive design, customization and platform support](https://tiny.micro.blog/)
- [Tiny Theme: explicit Read More excerpts](https://tiny.micro.blog/2024/03/22/adding-a-read.html)
- [Minimism: compact navigation, dark mode and accent customization](https://github.com/asitkhanda/theme-minimism)
- [Micro.blog Marfa: reference theme integration](https://github.com/microdotblog/theme-marfa)
- [Micro.blog shared Blank templates](https://github.com/microdotblog/theme-blank)
- [Theme configuration parameters](https://help.micro.blog/t/parameters-in-themes/61)
- [Theme installation discussion](https://help.micro.blog/t/plugin-themes-github-themes-blank-theme-im-confused/1114)
- [Timeline HTML rules](https://help.micro.blog/t/timeline-display-rules/29)

License: MIT. See LICENSE.
