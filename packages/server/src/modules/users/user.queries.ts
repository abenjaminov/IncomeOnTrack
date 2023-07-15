import {Consts} from "../../common";

export const GetUsersQuery = `
    SELECT * 
    from "incomeOnTrackDb".public."User" usr
    ${Consts.repositories.whereClausePlaceholder}
 `
