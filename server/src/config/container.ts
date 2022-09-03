import { Container } from "inversify";
import { cleanUpMetadata,interfaces as inversifyExpressInterfaces, TYPE as InversifyExpressInjectionTokens } from "inversify-express-utils";
import { AppController } from "../modules/app";

cleanUpMetadata();

const container = new Container();

container.bind<inversifyExpressInterfaces.Controller>(InversifyExpressInjectionTokens.Controller).to(AppController);

export { container };