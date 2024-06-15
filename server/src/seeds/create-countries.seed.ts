import {Factory, Seeder} from "typeorm-seeding";
import {Countries} from "../countries/countries.entity";

export default class CreateCountriesSeed implements Seeder {
    public async run(factory: Factory): Promise<any> {
        await factory(Countries)().createMany(10)
    }
}