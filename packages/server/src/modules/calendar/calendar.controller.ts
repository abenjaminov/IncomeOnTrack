import {BaseHttpController, controller} from "inversify-express-utils";

@controller("/calendar")
export class CalendarController extends BaseHttpController {

  constructor() {
    super();
  }

}
