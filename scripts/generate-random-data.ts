import 'reflect-metadata';
import {DBService} from "@income-on-track/server/src/common";
import {nanoid} from "nanoid";
import addMinutes from 'date-fns/addMinutes';

(async () => {
  process.env.DB_CONNECTION_STRING='postgres://postgres:100295@localhost:5432/incomeOnTrackDb'

  const dbService = new DBService();

  const userId = 'HQLDGACFis';
  
  await dbService.getDatabase().query(`DELETE FROM public."Client"`)

  const clientIds = []

  // Create 20 random clients
  for(let i = 0; i < 20; i++) {
    const id = nanoid()
    const name = `Client ${i}`
    const isActive = Math.random() > 0.1
    // Default payment between 100 and 200
    const defaultPayment = Math.floor(Math.random() * 100) + 100
    const now = new Date().toISOString();
    clientIds.push(id)
    const query = `INSERT INTO public."Client" (id, name, "isActive", "defaultPayment", "userId", "createdAt", "updatedAt") VALUES ('${id}', '${name}', ${isActive}, '${defaultPayment}', '${userId}', '${now}', '${now}');`
    await dbService.getDatabase().query(query)
  }

  await dbService.getDatabase().query(`DELETE FROM public."Session"`)

  let startDate = new Date('2023-01-01T00:00:00.000Z')
  const entireYearlyTimeInMinutes = 60 * 24 * 365
  const sessionCount = 300
  const timeBetweenSessions = entireYearlyTimeInMinutes / sessionCount

  // Create 270 random sessions for random clients, add random time for each session starting in 2023 Jan 01
  for(let i = 0; i < sessionCount; i++) {
    const id = nanoid()
    const clientId = clientIds[Math.floor(Math.random() * clientIds.length)]
    // Add random time to start date
    const payment = Math.floor(Math.random() * 100) + 100
    const notes = `Notes ${i}`
    const issuedReceipt = Math.random() > 0.1
    const now = new Date().toISOString();
    const query = `INSERT INTO public."Session" (id, "clientId", date, payment, notes, "issuedReceipt", "userId", "createdAt", "updatedAt") VALUES ('${id}', '${clientId}', '${startDate.toISOString()}', '${payment}', '${notes}', ${issuedReceipt}, '${userId}', '${now}', '${now}');`
    await dbService.getDatabase().query(query)
    startDate = addMinutes(startDate, timeBetweenSessions);
  }

  process.exit();
})()
