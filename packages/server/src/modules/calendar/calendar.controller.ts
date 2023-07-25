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

  @httpGet("/:year/:monthIndex/:clientId?", authenticateUserTokenMiddleware, zodValidationMiddleware(ZGetCalendarRequest))
  private async getCalendar(
    @requestParam("year") year: number,
    @requestParam("monthIndex") monthIndex: number,
  @requestParam("clientId") clientId?: string
  ) {
    const result = await this.calendarService.getCalendar(monthIndex, year, clientId);

    return this.json(result);
  }

}
