import {BaseHttpController, controller, httpGet, requestParam} from "inversify-express-utils";
import {inject} from "inversify";
import {InjectionTokens} from "../../config";
import {ICalendarService} from "./calendar.interface";
import {authenticateUserTokenMiddleware} from "../../common/middleware";
import {zodValidationMiddleware} from "../../common/middleware/zod-validation.middleware";
import {ZGetCalendarRequest} from "@income-on-track/shared";

@controller("/api/calendar")
export class CalendarController extends BaseHttpController {

  constructor(
    @inject(InjectionTokens.calendarService) private calendarService: ICalendarService,
  ) {
    super();
  }

  @httpGet("/:year/:monthIndex", authenticateUserTokenMiddleware, zodValidationMiddleware(ZGetCalendarRequest))
  private async getCalendar(
    @requestParam("year") year: number,
    @requestParam("monthIndex") monthIndex: number
  ) {
    const result = await this.calendarService.getCalendar(monthIndex, year);

    return this.json(result);
  }

}
