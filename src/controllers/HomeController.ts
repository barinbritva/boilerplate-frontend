import { Meta, Page } from '../entities/Page';
import {ControllerResult} from '../interfaces/ControllerResult';
import { HomePage } from '../views/pages/HomePage';
import {AuthorizedZoneController} from './AuthorizedZoneController';

export class HomeController extends AuthorizedZoneController {
	public override handle(): Promise<ControllerResult> | ControllerResult {
		return new Page(HomePage, {templateProps: this.getBaseProps()}, new Meta('Home'));
	}
}
