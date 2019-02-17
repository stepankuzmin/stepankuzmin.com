---
title: Geospatial Semantic Web
date: 2012-02-20
description: A short review of Geospatial extension for Semantic Web (in russian)
template: default
---

В данной статье приводится краткое введение в проблему представления и обработки пространственных данных в семантической паутине, описываются существующие технологии и стандарты.

## Введение

Стремительный рост Всемирной паутины привёл к пониманию того, что существующие методы поиска и обработки пространственной информации малоэффективны. Отчасти, это связанно с тем, что широко используемая в данный момент геореляционная модель представления данных накладывает определённые ограничения на обработку распределённой геоинформации. Недостатком геореляционной модели данных является неприспособленность реляционных таблиц для семантического анализа и полнотекстового поиска в распределённых базах пространственных данных[^1]. Однако эти задачи довольно легко решаются с помощью использования модели пространственных данных, основанной на технологиях стандарта семантической паутины (Semantic Web). Появление семантической паутины предполагает качественное улучшение методов извлечения информации за счёт использования семантики данных в процессе поиска[^2]. Такое развитие технологий требует особого подхода к организации пространственных данных — необходимо чтобы, семантика такого вида данных описывалась надлежащим образом[^3].

## Краткий обзор технологий и стандартов

На данный момент существует несколько, ещё не стандартизированных окончательно, технологий для описания и обработки пространственных данных в семантической паутине. Существует четыре способа представления семантики пространственных данных[^4]:

- Естественный язык с минимумом разметки. При этом поисковые системы могут обрабатывать только небольшие подмножества естественного языка (например, основные инструкции поиска) и поддерживают небольшой набор техник полнотекстовой индексации естественного языка.

- Простые метаданные, в которых семантику описывает некоторый набор ключевых слов (например языки основанные на XML). Несмотря на то, что пользователям необходимо взаимодействовать с метаданными во время извлечения информации, семантика метаданных определяется документами или, например, поисковыми системами.

- Модели представления данных. Самая популярная модель представления данных --- Resource Description Framework (RDF). RDF представляет утверждения о ресурсах в виде, пригодном для машинной обработки. Концептуальная структура приводится в описании терминов сущностей, отношений и атрибутов. Семантика модели представления данных также определяется интерфейсами, документами и поисковыми системами.

- Логическая семантика обеспечивает соответствие между терминами и объектами реального мира, позволяя производить автоматические рассуждения. Также как метаданные и модели представления данных, логическая семантика принципиально определяется интерфейсами, документами и поисковыми системами.

Базовым инструментом описания семантики пространственной информации являются метаданные. В настоящее время существует ряд стандартов на метаданные электронных карт и геоинформации в международном и национальном масштабах, ведутся работы по дальнейшему развитию системы международных стандартов и их взаимодействию с национальными стандартами, в которых активное участие принимает и наша страна[^5].

Прежде всего, необходимо описать онтологию для представления пространственных данных[^6]. Работа над этим ведётся в рамках разработки основной онтологии и словаря OWL для представления пространственных свойств ресурсов Всемирной паутины. В рамках разработки этого стандарта было решено использовать синтаксис похожий на модель объектов в GeoRSS (например, описание прямоугольников, точек, линий, и полигонов). В стандарт также включается описание отношений пространственных объектов (идентичность, пересекаемость, непересекаемость и прочее). Подробнее об этом можно узнать из отчёта W3C Incubator Group от 23 октября 2007 года[^7].

GeoSPARQL — это расширение SPARQL, представляющее собой язык запросов к пространственным данным, представленным по модели RDF[^8]. Создан на основе существующих стандартов W3C (RDF, OWL, SPARQL) и OGC (Simple Features, Spatial Relations). Расширяет точки доступа SPARQL (SPARQL-endpoints) возможностью манипулировать пространственными данными. Предоставляет основу для пространственных рассуждений (spatial reasoning). Цель стандарта OGC GeoSPARQL состоит в поддержке представления и обработки пространственных данных в семантической паутине. Стандарт определяет словарь представления пространственных данных в RDF и расширение SPARQL для обработки пространственных данных. Например, так выглядит GeoSPARQL запрос на выборку всех аэропортов расположенных вблизи Лондона:

```sparql
PREFIX co: <http://www.geonames.org/countries/#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
SELECT ?link ?name ?lat ?lon
WHERE  {
  ?link gs:within(51.139725 -0.895386 51.833232 0.645447) .
  ?link gn:name ?name .
  ?link gn:featureCode gn:S.AIRP .
  ?link geo:lat ?lat .
  ?link geo:long ?lon
}
```

Этот запрос можно выполнить на сайте GeoSPARQL[^9], созданного и поддерживаемого компанией KONA на основе популярного фреймворка Apache Jena и собственной разработки[^10]. Результат будет примерно таким:

| link                               | name                  | lat     | lon     |
| ---------------------------------- | --------------------- | ------- | ------- |
| <http://sws.geonames.org/2647216/> | "Heathrow"            | "51.47" | "-0.45" |
| <http://sws.geonames.org/6691396/> | "Heathrow Terminal 5" | "51.47" | "-0.45" |

## Заключение

Исследования в области Geospatial Semantic Web нацелены на повышение эффективности и точности обработки пространственных данных в сети. Представление пространственных данных в сети, реализованное на основе методов и стандартов Semantic Web, таких, как GeoRSS и GeoRDF, позволяет описывать данные на языке, приближенном к естественному. Такая модель хорошо представляет разнородные пространственные данные и обеспечивает значительно большую скорость выполнения транзакций. Технология Geospatial Semantic Web предоставляет возможность создания логически объединённых децентрализованных пространственных баз данных и позволяет осуществлять более эффективный поиск требуемой пространственной информации.

[^1]: Калантаев П.А. «Семантическая организация пространственных данных».
[^2]: Jan Oliver Wallgrub, Mehul Bhatt «An Architecture for Semantic Analysis in Geospatial Dynamics».
[^3]: John Hebeler, Matthew Fisher, Ryan Blace, Andrew Perez-Lopez «Semantic Web Programming».
[^4]: Egenhofer M.J. «Toward the semantic geospatial web».
[^5]: Лунева Н.В. «Инструменты текстового отображения семантики геопространственной информации».
[^6]: Yandong Wang, Jingjing Dai, Jizhen Sheng, Kai Zhou, Jianya Gong «Geo-ontology design and its logic reasoning».
[^7]: W3C Incubator Group Report 23 October 2007 <http://www.w3.org/2005/Incubator/geo/XGR-geo-20071023/>
[^8]: Robert Battle, Dave Kolas «Enabling the Geospatial Semantic Web with Parliament and GeoSPARQL».
[^9]: <http://geosparql.org/>
[^10]: Geospatial Reasoning for the Semantic Web <http://code.google.com/p/geospatialweb/>