# Dashboard screenshots

Drop screenshots here and they appear in the **Dashboards** section of the site.

Filenames are declared in the `dashboards` array at the top of
`src/components/Dashboards.jsx`. Current state:

| File | Card | Present? |
| --- | --- | --- |
| `superstore-model-evaluation.png` | Superstore Profitability & Risk Modelling | yes |
| `superstore-discount-profitability.png` | Superstore Discount Tiers | yes |
| `clinic-appointments.png` | Clinic Appointments — Cleaning & EDA | no |
| `car-sales-dashboard.png` | Car Sales Analysis Dashboard | no |
| `stock-revenue-dashboard.png` | Stock Price & Revenue Analysis | no |
| `stakeholder-report.png` | Monthly Stakeholder Report | no |

The two Superstore images were pulled from the `images/` folder of
[superstore-profitability-analysis](https://github.com/basanta999s-ship-it/superstore-profitability-analysis).

A card with no image shows a neutral tile with its tool name instead of a broken
image, so the section stays presentable until every screenshot is in place.

## Tips

- **Aspect ratio:** cards crop to 16:10 from the top. A wide screenshot of the
  whole dashboard works better than a tall one.
- **Size:** roughly 1600px wide is plenty. Keep files under ~500KB so the page
  stays fast — PNG for crisp charts and text, JPG if the file gets large.
- **Content:** blur or replace anything confidential before publishing. This
  folder is served publicly at `https://basanta999s-ship-it.github.io/dashboards/`.

## Adding or renaming a card

Edit the `dashboards` array in `src/components/Dashboards.jsx`. Each entry takes
`title`, `tool`, `src`, `blurb`, and optionally `href` / `hrefLabel` for the link
shown under the description.
