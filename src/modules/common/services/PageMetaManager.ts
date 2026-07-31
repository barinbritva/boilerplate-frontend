import {PageMeta} from '../navigation/entities/Page';

export class PageMetaManager {
	public apply(data: PageMeta) {
		document.title = data.title;
	}
}
