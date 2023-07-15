// Select all sessions between 2 dates
import {Consts} from "../../common";

export const GetSessionsQuery = `
select *,
       cl.name as "clientName",
       case when date > '2023-07-13' then true else false end as isFuture
from "incomeOnTrackDb".public."Session" se
left join "incomeOnTrackDb".public."Client" cl on cl.id = se."clientId"
${Consts.repositories.whereClausePlaceholder}`
