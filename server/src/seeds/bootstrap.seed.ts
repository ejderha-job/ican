import {Factory, Seeder} from "typeorm-seeding";
import {Categories} from "../categories/categories.entity";
import {Connection} from "typeorm";
import {Countries} from "../countries/countries.entity";

const items = [
    {
        title: "Курьерские услуги",
        subcategories: ["Услуги пешего курьера", "Услуги курьера на легковом авто", "Купить и доставить", "Другая посылка"]
    },
    {
        title: "Репетиторы и обучение",
        subcategories: [
            "Русский язык и литература",
            "Английский язык",
            "Французский язык",
            "Немецкий язык",
            "Испанский язык",
            "Другие иностранные языки"
        ]
    },
    {
        title: "Уборка и помощь по хозяйству",
        subcategories: []
    },
    {
        title: "Ремонт и строительство",
        subcategories: [
            "Мастер на час",
            "Ремонт под ключ",
            "Сантехнические работы",
            "Электромонтажные работы",
            "Отделочные работы",
            "Потолки",
            "Полы"
        ]
    },
    {
        title: "Красота и здоровье",
        subcategories: ["Услуги косметолога",
            "Эпиляция",
            "Брови и ресницы",
            "Услуги визажиста",
            "Тату и пирсинг"]
    },
    {
        title: "Компьютерная помощь",
        subcategories: ["Ремонт компьютеров и ноутбуков", "Установка и настройка операц. систем, программ", "Удаление вирусов"]
    },
    {
        title: "Дизайн",
        subcategories: ["Фирменный стиль, логотипы, визитки", "Дизайн сайтов и приложений"]
    }
]

export default class BootstrapSeed implements Seeder {
    public async run(factory: Factory): Promise<any> {
        factory(Categories)().create({})
    }
}