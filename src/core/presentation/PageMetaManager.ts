import {PageMeta} from './PageMeta';

export class PageMetaManager {
	public apply(data: PageMeta) {
		document.title = data.title;
	}
}
