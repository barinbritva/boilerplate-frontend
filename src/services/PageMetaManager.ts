import {PageMeta} from '../entities/Page';

export class PageMetaManager {
	public apply(data: PageMeta) {
		document.title = data.title;
	}
}
