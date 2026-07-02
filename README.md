# gene-code for Obsidian

Render lifescience-related diagrams directly in your Obsidian notes, like Mermaid but for lifescience. 

Write a `gene-code` code block and the plugin renders it inline as an SVG figure.

## Usage

### Lollipop gene variant diagram

````markdown
```gene-code
lollipopDiagram
    gene KRAS
    length 189
    domain 5 166 GTPase
    domain 167 185 HVR
    variant G12D 12 missense
    variant G12V 12 missense
    variant G12C 12 missense
    variant G12A 12 missense
    variant G12S 12 missense
    variant G12R 12 missense
    variant G13D 13 missense
    variant G13C 13 missense
    variant V14I 14 missense
    variant L19F 19 missense
    variant Q22K 22 missense
    variant T35fs 35 frameshift
    variant I36M 36 missense
    variant E37* 37 nonsense
    variant A59T 59 missense
    variant Q61H 61 missense
    variant Q61L 61 missense
```
````

### Pedigree diagram

````markdown
```gene-code
pedigreeDiagram
    node gf male unaffected noncarrier
    node gm female unaffected carrier
    couple gf gm
    node uncle male unknown unknown gf-gm
    node dad male unaffected carrier gf-gm
    node mom female unaffected carrier
    couple dad mom
    node childless_a male unaffected noncarrier gf-gm
    node childless_b female unaffected unknown
    couple childless_a childless_b
    node son male affected carrier dad-mom
    node daughter female unaffected carrier dad-mom
    node baby male unaffected noncarrier dad-mom
```
````

Rendering is provided by [`@gene-code/core`](https://github.com/neznayer/gene-code); this plugin is the thin Obsidian integration layer.

## License

[MIT](LICENSE.md) © Anton Zhuravlev
