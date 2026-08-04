import {PageMeta} from './PageMeta.js';

export class PageMetaManager {
	public apply(data: PageMeta) {
		document.title = data.title;
	}
}
