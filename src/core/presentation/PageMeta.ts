export class PageMeta {
	public readonly title: string;
	public readonly favicon: string = '/favicon.ico';

	constructor(title: string, favicon: string = '/favicon.ico') {
		this.title = title;
		this.favicon = favicon;
	}
}
