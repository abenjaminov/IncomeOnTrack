// where Client.id in ('AZtJjyTaedwkTabHya3Pv') and Client."isActive" = true and Client.name ilike '%c%' and Client."userId" = '123'
import {Consts} from "../../common";

export const GetClientsQuery = `
  with client_debts as (
    select "clientId", SUM(payment) as debt from "incomeOnTrackDb".public."Session" se
    where "datePayed" is null and "userId" = :userId
    group by "clientId"
  )
  select Client.*, coalesce(cb.debt, 0) as debt 
  from "incomeOnTrackDb".public."Client" Client
  left join client_debts cb on cb."clientId" = Client.id
  ${Consts.repositories.whereClausePlaceholder}
  order by Client."createdAt" desc
`

