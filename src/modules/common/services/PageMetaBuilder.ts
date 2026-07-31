import {PageMeta} from '../navigation/entities/Page';

export interface PageMetaParams {
	title?: string | string[];
	favicon?: string;
	includeTitleSuffix?: boolean;
}

export interface PageMetaBuilderParams {
	defaultPageMeta: PageMeta;
	suffixSeparator?: string;
}

export class PageMetaBuilder {
	private readonly defaultPageMeta: PageMeta;
	private readonly suffixSeparator: string;

	constructor({defaultPageMeta, suffixSeparator = ' • '}: PageMetaBuilderParams) {
		this.defaultPageMeta = defaultPageMeta;
		this.suffixSeparator = suffixSeparator;
	}

	public build({title, favicon, includeTitleSuffix = true}: PageMetaParams): PageMeta {
		const titleParts = typeof title === 'undefined' ? [] : typeof title === 'string' ? [title] : [...title];
		if (includeTitleSuffix) {
			titleParts.push(this.defaultPageMeta.title);
		}

		return new PageMeta(titleParts.join(this.suffixSeparator), favicon ?? this.defaultPageMeta.favicon);
	}
}
