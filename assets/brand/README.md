# Brand assets

Source: `C:\Users\MCC-user\Desktop\ahmed_saadi_logo_assets` (the supplied
"A+S" monogram / "Ahmed Saadi" lockup exports).

## What was used, and why

| Supplied file | Used? | Reason |
| --- | --- | --- |
| `logo-symbol-light-transparent.png` | **source for everything** | cleanest raster of the monogram |
| `logo-lockup-light-transparent.png` | **source for the lockup** | clean edges |
| `logo-symbol-dark-transparent.png` | no | visibly degraded raster (blocky edges, mushy `+`) |
| `logo-lockup-dark-transparent.png` | no | same, plus a different aspect ratio (365x53 vs 369x50) that would nudge the logo when switching themes |
| `*-preview.png/jpg`, `*.jpg` | no | preview mocks with baked-in backgrounds, not web assets |

Both themes are therefore derived from the **light geometry**: every pixel
keeps its alpha and gets the exact theme token as RGB. Two benefits:

1. the fringe of the original cut-out background (paper-white behind the light
   art) no longer shows as a halo on other surfaces — edges are just clean
   antialiasing;
2. light and dark files are pixel-identical in shape, so switching theme
   changes colour only.

## Tokens used

| Asset | Light | Dark |
| --- | --- | --- |
| monogram | `--oxblood` `#6B1A1A` | `--oxblood` `#D96969` |
| wordmark | `--ink` `#1A1A1A` | `--ink` `#F5F0E8` |
| favicon plate | `--bg` `#F5F0E8` | `--bg` `#151217` |

## Files

| File | Size | Used by |
| --- | --- | --- |
| `brand-mark-light.png` / `brand-mark-dark.png` | 98x50 | `.logo-mark` in the navbar (displayed 51x26) |
| `brand-lockup-light.png` / `brand-lockup-dark.png` | 369x50 | `.footer-brand` (displayed 221x30) |
| `favicon-light.png` / `favicon-dark.png` | 64x64 | `<link id="favicon">`, swapped by `js/theme.js` |
| `apple-touch-icon.png` | 180x180 | iOS home screen |

To restyle the logo, re-export a **single-colour** monogram on transparency and
recolour it to the tokens above; keep both theme files at the same dimensions.
