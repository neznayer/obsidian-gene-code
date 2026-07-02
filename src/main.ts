import { Plugin } from "obsidian";
import { render } from "@gene-code/core";

export default class GeneCodePlugin extends Plugin {
	onload() {
		this.registerMarkdownCodeBlockProcessor("gene-code", (source, el) => {
			const svg = render(source);

			if (svg === null) {
				this.renderError(el, "Invalid or unsupported gene-code diagram.");
				return;
			}

			// Parse the renderer's SVG string into a real DOM node instead of
			// assigning innerHTML. DOMParser produces a detached document, and we
			// adopt only the resulting <svg> element into the note.
			const parsed = new DOMParser().parseFromString(
				svg,
				"image/svg+xml",
			);
			const svgEl = parsed.querySelector("svg");

			if (!svgEl || parsed.querySelector("parsererror")) {
				this.renderError(el, "Failed to render gene-code diagram.");
				return;
			}

			const wrapper = el.createDiv({ cls: "gene-code-diagram" });
			wrapper.appendChild(document.adoptNode(svgEl));
		});
	}

	private renderError(el: HTMLElement, message: string) {
		el.createEl("pre", { cls: "gene-code-error", text: message });
	}
}
