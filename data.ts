const sneakers = {
    nike1: {
        name: 'Jordan Max Aura 4',
        mainPreview: 'nike1.webp',
        previews: [
            'nike1_1.webp',
            'nike1_2.webp',
            'nike1_3.webp',
            'nike1_4.jpg',
        ],
        price: 125,
        description: 'Эта обувь нового поколения, вдохновленная обручами, берет пример со своих предшественников. Классические детали проявляются в литом брендинге на подошве, вышитой графике на язычке и видимом Air в пятке. Смелый резиновый протектор и амортизация, напоминающая облака, позволят вам легко стоять на ногах. Так чего же вы ждете? Выходите на улицу и отправляйтесь в полет.',
        additional: {
            'Цвета': 'Cool Grey/White/Black/Wolf Grey',
            'Стиль': 'DQ8404-005'
        }
    },
    nike2: {
        name: 'Nike Blazer Mid \'77 Vintage',
        mainPreview: 'nike2.webp',
        previews: [
            'nike2_1.webp',
            'nike2_2.webp',
            'nike2_3.webp',
            'nike2_4.jpg',
        ],
        price: 105,
        description: 'В 70-х годах компания Nike была новой обувью в квартале. Настолько новой, что мы все еще пробивались на баскетбольную сцену и тестировали прототипы на ногах нашей местной команды. Конечно, с годами дизайн улучшился, но название осталось. Nike Blazer Mid \'77 - винтажная классика с самого начала.',
        additional: {
            'Цвета': 'Black/Sail/Sail',
            'Стиль': 'BQ6806-002'
        }
    },
    nike3: {
        name: 'Nike Air Max 270',
        mainPreview: 'nike3.webp',
        previews: [
            'nike3_1.webp',
            'nike3_2.webp',
            'nike3_3.webp',
            'nike3_4.jpg',
            'nike3_5.webp',
        ],
        price: 160,
        description: 'Легендарный воздух поднимается вверх. Наши первые Air Max для стиля жизни - это стиль, комфорт и много воздуха. Огромное окно в пятке позволяет продемонстрировать одну из наших величайших инноваций и одновременно ощутить мягкую амортизацию. Добавьте к этому легкий верх, низкий воротник и свежие неоновые цвета - и вы получите идеальные кроссовки для повседневного веселья.',
        additional: {
            'Цвета': 'Bright Crimson/Hyper Pink/Black/Racer Blue',
            'Стиль': 'DZ4407-600'
        }
    },
    nike4: {
        name: 'Nike Air Force 1 \'07',
        mainPreview: 'nike4.webp',
        previews: [
            'nike4_1.webp',
            'nike4_2.webp',
            'nike4_3.webp',
            'nike4_4.webp',
            'nike4_5.webp',
        ],
        price: 110,
        description: 'Сияние продолжает жить в Nike Air Force 1 \'07, OG для бейсбола, которые привносят свежие нотки в то, что вы знаете лучше всего: прочные накладки, чистая отделка и идеальное количество вспышек, чтобы вы сияли.',
        additional: {
            'Цвета': 'White/White',
            'Стиль': 'CW2288-111'
        }
    },
    nike5: {
        name: 'Nike Dunk Low',
        mainPreview: 'nike5.webp',
        previews: [
            'nike5_1.webp',
            'nike5_2.webp',
            'nike5_3.webp',
            'nike5_4.webp',
            'nike5_5.webp',
        ],
        price: 110,
        description: 'Созданная для игры на твердом покрытии, но перенесенная на улицы, икона бейсбола 80-х возвращается с идеально блестящими накладками и классическими цветами команды. Благодаря своему культовому дизайну Nike Dunk Low возвращают винтаж 80-х на улицы, а мягкий воротник с низкой посадкой позволяет играть в любом месте с комфортом.',
        additional: {
            'Цвета': 'White/White/Black',
            'Стиль': 'DD1503-101'
        }
    }
}

export interface Sneakers {
    name: string
    mainPreview: string
    previews: string[]
    price: number
    description: string
    additional: any
}

export function getSneakers(id: string): Sneakers {
    // @ts-ignore
    return sneakers[id]
}