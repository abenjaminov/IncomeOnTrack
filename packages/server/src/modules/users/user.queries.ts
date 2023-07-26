import {Consts} from "../../common";

export const GetUsersQuery = `
    SELECT * 
    from public."User" usr
    ${Consts.repositories.whereClausePlaceholder}
 `
