import Controller from '../controller/controller';
import IApp from './IApp';

class App implements IApp {
    controller: Controller;

    constructor() {
        this.controller = new Controller;
    }
    
    start() {
        console.log(`Выполнены все пункты задания\n
        1) Главная страница содержит все товары магазина, а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке +10\n
        2) Карточка товара содержит его изображение, название, количество данного товара на складе, год выхода на рынок, цвет, производитель и т.д., находится ли товар в корзине +10\n
        3) Добавление товаров в корзину +20
        кликая по карточке с товаром или по кнопке на нем, товар можно добавлять в корзину или удалять. Карточки добавленных в корзину товаров внешне отличаются от остальных +10
        на странице отображается количество добавленных в корзину товаров. При попытке добавить в корзину больше 20 товаров, выводится всплывающее уведомление с текстом "Извините, все слоты заполнены" +10\n
        4) Сортировка +20
        Сортируются только те товары, которые в данный момент отображаются на странице
        сортировка товаров по названию в возрастающем и убывающем порядке +10
        сортировка товаров по году их выхода на рынок в возрастающем и убывающем порядке +10\n
        5) Фильтры в указанном диапазоне от и до +30
        фильтры по количеству +10
        фильтры по году выпуска на рынок +10
        для фильтрации в указанном диапазоне используется range slider с двумя ползунками. При перемещении ползунков отображается их текущее значение, разный цвет слайдера до и после ползунка +10
        Range slider можно создать на основе input[type=range] - пример или использовать для этой цели библиотеку noUiSlider, или другую на ваш выбор\n
        6) Фильтры по значению +30
        Выбранные фильтры выделяются стилем.
        фильтры по производителю +5
        фильтры по цвету +5
        фильтры по размеру (в случае с Демо - по количеству камер) +5
        можно отобразить только популярные товары +5\n
        7) Можно отфильтровать товары по нескольким фильтрам одного типа +10
        Если для выбранной Вами тематики интернет-магазина указанные выше фильтры неактуальны, Вы можете добавить свои фильтры в зависмости от категории товара. Для нескольких фильтров одного типа отображаются товары, которые соответствуют хоть одному выбранному фильтру. Например, можно отобразить Samsung и Apple; или белые, синие и красные товары; или товары с 2 и 3 камерами.
        Можно отфильтровать товары по нескольким фильтрам разного типа +20
        Для нескольких фильтров разного типа отображаются только те товары, которые соответствуют всем выбранным фильтрам.
        Например, можно отобразить только красные товары. Или популярные белые и красные товары впоступившие на рынок в 2010-2020 годах.
        Если товаров, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, например, "Извините, совпадений не обнаружено"\n
        8) Сброс фильтров +20
        есть кнопка reset для сброса фильтров +10
        Кнопка reset сбрасывает только фильтры, не влияя на порядок сортировки или товары, добавленные в избранное.
        После использования кнопки reset фильтры остаются работоспособными
        при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к первоначальным, range slider закрашивается одним цветом +10\n
        9) Сохранение настроек в local storage +30
        выбранные пользователем фильтры, порядок сортировки, добавленные в избранное товары сохраняются при перезагрузке страницы. Есть кнопка сброса настроек, которая очищает local storage +10\n
        10) Поиск +30
        при открытии приложения курсор находится в поле поиска +2
        автозаполнение поля поиска отключено (нет выпадающего списка с предыдущими запросами) +2
        есть placeholder +2
        в поле поиска есть крестик, позволяющий очистить поле поиска +2
        если нет совпадения последовательности букв в поисковом запросе с названием товара, выводится уведомление в человекочитаемом формате, например "Извините, совпадений не обнаружено" +2
        при вводе поискового запроса на странице остаются только те товары, в которых есть указанные в поиске буквы в указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается +10
        Поиск ведётся только среди товаров, которые в данный момент отображаются на странице.
        если очистить поле поиска, на странице отображаются товары, соответствующие всем выбранным фильтрам и настройкам сортировки +10`);
        
    }
}

export default App;