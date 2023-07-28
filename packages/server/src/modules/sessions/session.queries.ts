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
from public."Session" se
left join public."Client" cl on cl.id = se."clientId"
${Consts.repositories.whereClausePlaceholder}
order by se."date" asc, se.id desc
`

export const GetLastTwelveMonthPaymentsQuery = `
select cast(extract(month from "datePayed") as INTEGER) as month_payed, cast(extract(year from "datePayed") as INTEGER) as year_payed, sum(payment) as total_payment 
from public."Session"
where "datePayed" is not null and "userId" = :userId
group by year_payed, month_payed
order by year_payed desc, month_payed desc
limit 12`
