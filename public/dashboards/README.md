# Dashboard screenshots

Drop screenshots here and they appear in the **Dashboards** section of the site.

Expected filenames (these are what `src/components/Dashboards.jsx` looks for):

| File | Shown as |
| --- | --- |
| `car-sales-dashboard.png` | Car Sales Analysis Dashboard |
| `stock-revenue-dashboard.png` | Stock Price & Revenue Analysis |
| `stakeholder-report.png` | Monthly Stakeholder Report |

Any card whose file is missing shows a labelled placeholder instead of a broken
image, so the section stays presentable until every screenshot is in place.

## Tips

- **Aspect ratio:** cards crop to 16:10 from the top. A wide screenshot of the
  whole dashboard works better than a tall one.
- **Size:** roughly 1600px wide is plenty. Keep files under ~500KB so the page
  stays fast — PNG for crisp charts and text, JPG if the file gets large.
- **Content:** blur or replace anything confidential before publishing. This
  folder is served publicly at `https://basanta999s-ship-it.github.io/dashboards/`.

## Adding or renaming a card

Edit the `dashboards` array at the top of `src/components/Dashboards.jsx`. Each
entry takes `title`, `tool`, `src`, and `blurb`.
