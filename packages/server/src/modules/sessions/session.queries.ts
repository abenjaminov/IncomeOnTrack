// Select all sessions between 2 dates
import {Consts} from "../../common";
import {SessionState} from "@income-on-track/shared";

export const GetSessionsQuery = `
select se.*,
       cl.name as "clientName",
       case 
        when se."datePayed" is not null then '${SessionState.payed}'
        when se."date" > now() then '${SessionState.future}' 
        else '${SessionState.debt}' 
       end as "sessionState"
from "incomeOnTrackDb".public."Session" se
left join "incomeOnTrackDb".public."Client" cl on cl.id = se."clientId"
${Consts.repositories.whereClausePlaceholder}
order by se."date" asc, se.id desc
`
