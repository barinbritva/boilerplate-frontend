import {PageMeta} from '../../../core/presentation/PageMeta';

export class PageMetaManager {
	public apply(data: PageMeta) {
		document.title = data.title;
	}
}
