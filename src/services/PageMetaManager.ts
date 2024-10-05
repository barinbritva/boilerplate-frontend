import {Meta} from '../entities/Page';

export class PageMetaManager {
	public apply(data: Meta) {
		document.title = data.title;
	}
}
