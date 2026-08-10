(() => {
  const language = new URLSearchParams(window.location.search).get("lang");
  if (language !== "ru") return;

  document.documentElement.lang = "ru";
  document.title = "Дарья и Марк | Будапешт, 3 октября 2026";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", "Свадьба Дарьи и Марка — 3 октября 2026 года в Будапеште.");

  const setText = (selector, text) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  };

  const setTexts = (selector, texts) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (texts[index] !== undefined) element.textContent = texts[index];
    });
  };

  const setDetails = (details, title, html) => {
    if (!details) return;
    const heading = details.querySelector("summary h3");
    const content = details.querySelector(".accordion__content");
    if (heading) heading.textContent = title;
    if (content) content.innerHTML = html;
  };

  const mapLink = (query, label) =>
    `<a class="place-link" href="https://www.google.com/maps/search/?api=1&amp;query=${query}" target="_blank" rel="noopener noreferrer">${label}</a>`;

  setText(".hero__name--daria", "Дарья");
  setText(".hero__ampersand", "и");
  setText(".hero__name--mark", "Марк");
  setText(".hero__details span", "03.10.2026, Будапешт");
  setTexts(".rsvp-button span", ["Подтвердить присутствие", "Подтвердить присутствие"]);
  document
    .querySelectorAll('.rsvp-button, .site-menu a[href*="docs.google.com/forms"]')
    .forEach((link) => {
      link.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSftayp0xA6nUyEkMLbOqSPjk2_yV1SPnaCFAgoDOGTMmQi5dg/viewform?usp=publish-editor";
    });
  setText(".hero > .scroll-cue span", "Наше приглашение");

  const languageSwitch = document.querySelector(".language-switch");
  if (languageSwitch) {
    languageSwitch.textContent = "English";
    languageSwitch.href = "?lang=en";
    languageSwitch.lang = "en";
    languageSwitch.hreflang = "en";
  }

  setText('.site-menu > a[href="#invitation"]', "Наше приглашение");
  setText('.site-menu > a[href="#schedule"]', "Программа");
  setText('.site-menu > a[href="#wedding-details"]', "О свадьбе");
  setText('.site-menu > a[href="#plan-your-stay"]', "Спланируйте поездку");

  const menuCategories = [
    ["Location", "Место проведения"],
    ["What to wear", "Что надеть"],
    ["Gifts", "Подарки"],
    ["Languages of the day", "Языки праздника"],
    ["Photos and videos", "Фото и видео"],
    ["Good to know", "Полезно знать"],
    ["Questions and contacts", "Вопросы и контакты"],
    ["Where to stay", "Где остановиться"],
    ["Travelling to Budapest", "Как добраться до Будапешта"],
    ["Our Budapest favourites", "Наши любимые места"],
  ];

  menuCategories.forEach(([english, russian]) => {
    const link = document.querySelector(`[data-accordion-label="${english}"]`);
    if (!link) return;
    link.textContent = russian;
    link.dataset.accordionLabel = russian;
  });

  setText(".invitation__letter h2", "Мы женимся!");
  setText(".invitation__salutation", "Дорогой гость / Дорогая гостья!");
  const invitationParagraphs = document.querySelectorAll(".invitation__message > p");
  if (invitationParagraphs[1]) {
    invitationParagraphs[1].textContent =
      "Вы получили это приглашение, потому что Вы нам очень дороги. Для нас было бы большим счастьем, если бы Вы стали частью одного из самых важных дней в нашей жизни — начала нашей семейной истории.";
  }
  if (invitationParagraphs[2]) {
    invitationParagraphs[2].textContent =
      "Мы с радостью приглашаем Вас на нашу свадьбу, которая состоится 3 октября 2026 года в Continental Citygolf Club в Будапеште.";
  }
  if (invitationParagraphs[3]) {
    invitationParagraphs[3].textContent =
      "Мы искренне надеемся, что Вы сможете быть рядом с нами в этот особенный день, разделить нашу радость и помочь создать воспоминания, которые останутся с нами на всю жизнь.";
  }
  if (invitationParagraphs[4]) {
    const detailsNote = document.createElement("p");
    detailsNote.textContent =
      "Ниже Вы найдёте всю необходимую информацию о месте проведения, программе и других деталях праздника.";
    invitationParagraphs[4].before(detailsNote);
  }
  if (invitationParagraphs[4]) {
    invitationParagraphs[4].innerHTML = "С любовью,<span>Дарья и Марк</span>";
  }
  setText(".invitation .section-cue span", "Программа");

  setText(".schedule .section-heading h2", "Как пройдёт этот день");
  setTexts(".timeline__event h3", [
    "Сбор гостей",
    "Церемония",
    "Коктейль",
    "Вечерняя программа",
    "Доброй ночи",
  ]);
  setTexts(".timeline__event p", [
    "Встреча гостей и небольшой аперитив для праздничного настроения.",
    "Мы скажем друг другу «да» и обменяемся клятвами.",
    "Напитки и общение перед тем, как мы соберёмся на ужин.",
    "Ужин, танцы и множество сюрпризов.",
    "Праздник подходит к завершению.",
  ]);
  setText(".schedule .section-cue span", "Другие детали и наши рекомендации");

  setText("#wedding-details .section-heading h2", "О свадьбе");
  setText("#plan-your-stay .section-heading h2", "Спланируйте поездку");

  const weddingDetails = document.querySelectorAll("#wedding-details details");
  const stayDetails = document.querySelectorAll("#plan-your-stay details");

  setDetails(
    weddingDetails[0],
    "Место проведения",
    `<div class="accordion-location__copy">
      <strong>Continental Citygolf Club</strong>
      <address>Perényi út 6, 1037 Будапешт, Венгрия</address>
      <a class="text-link" href="https://www.google.com/maps/search/?api=1&amp;query=Continental+Citygolf+Club,+Per%C3%A9nyi+%C3%BAt+6,+1037+Budapest,+Hungary" target="_blank" rel="noopener noreferrer">Открыть в Google Maps <span aria-hidden="true">↗</span></a>
    </div>
    <img class="accordion-location__image" src="golf-course-watercolor.png?v=4" alt="Акварельное поле для гольфа с красным флажком и мячом">
    <div class="accordion-location__details">
      <p><strong>Наша свадьба пройдёт в Continental Citygolf Club — красивом месте в черте Будапешта. И церемония (если позволит погода), и вечерний приём состоятся здесь, поэтому после приезда можно просто расслабиться и наслаждаться праздником — переезжать между площадками не придётся.</strong></p>
      <p><strong>До места легко добраться на Uber, Bolt или такси из любой части Будапешта. Поездка из центра обычно занимает около 20 минут и стоит примерно 10–15 CHF в зависимости от трафика. Такси доступны в городе круглосуточно. Все лицензированные такси в Будапеште жёлтого цвета, а официальные тарифы указаны на кузове. В Uber и Bolt действуют те же тарифы.</strong></p>
      <p><strong>Можно приехать и на общественном транспорте. Ближайшая автобусная остановка — Perényi út, автобусы 160, 260 и 260A; ближайшая трамвайная остановка — Váradi utca, трамваи 17, 19 и 41. От обеих остановок до площадки совсем недалеко пешком. Билеты можно купить в автоматах на крупных остановках или в приложении <a href="https://bkk.hu/en/bpgodownload/" target="_blank" rel="noopener noreferrer">BudapestGO</a>.</strong></p>
    </div>`,
  );

  setDetails(
    weddingDetails[1],
    "Что надеть",
    `<p><strong>У нас нет строгого дресс-кода: главное, чтобы вам было комфортно и вы могли вместе с нами наслаждаться этим особенным днём. Однако по венгерской традиции белый и красный цвета символически принадлежат невесте, поэтому просим выбрать одежду других цветов.</strong></p>
     <p><strong>Церемония, если позволит погода, пройдёт на открытом воздухе, на поле для гольфа, а вечерняя программа и ужин — в помещении. Если вы планируете надеть обувь на каблуках, рекомендуем взять защитные насадки на каблуки, поскольку вам предстоит ходить по траве. В начале октября в Будапеште обычно около 17–20°C днём и 9–12°C вечером. Советуем взять лёгкую куртку или накидку для церемонии и вечера.</strong></p>`,
  );

  setDetails(
    weddingDetails[2],
    "Подарки",
    `<p><strong>Ваше присутствие — всё, чего мы могли бы пожелать, и мы не ожидаем подарков. Если вам всё же захочется нас порадовать, мы будем очень благодарны за вклад в наше свадебное путешествие и приключения, которые ждут нас после свадьбы.</strong></p>`,
  );

  setDetails(
    weddingDetails[3],
    "Языки праздника",
    `<p><strong>Свадьба будет проходить преимущественно на английском.</strong></p>
     <p><strong>Во время церемонии будет доступен перевод на русский язык. В течение вечера также можно будет обратиться за помощью с переводом речей и других важных моментов.</strong></p>
     <p><strong>Наш ведущий свободно говорит на английском, венгерском и испанском и с радостью поможет гостям на любом из этих языков.</strong></p>`,
  );

  setDetails(
    weddingDetails[4],
    "Фото и видео",
    `<p><strong>Мы будем рады увидеть этот день вашими глазами! Но во время церемонии просим убрать телефоны и камеры и просто разделить этот момент с нами.</strong></p>
     <p><strong>После церемонии снимайте столько фотографий и видео, сколько захотите.</strong></p>
     <p><strong>Мы будем особенно рады, если в течение дня вы снимете несколько коротких видео. Это могут быть видео с вами, другими гостями, смешные или трогательные моменты, танцы, речи, части программы или просто детали, которые привлекли ваше внимание. Они не должны быть идеальными или заранее продуманными — мы будем рады любым видео.</strong></p>
     <p><strong>После свадьбы мы хотим собрать эти фрагменты и создать свадебный фильм из воспоминаний, запечатлённых дорогими нам людьми. Для нас это станет одним из самых ценных и личных видео.</strong></p>
     <p><strong>Одни из самых дорогих нам снимков — вовсе не профессиональные, а смешные, спонтанные и несовершенные кадры. Мы с радостью добавим к ним воспоминания с нашей свадьбы.</strong></p>
     <p><strong>После свадьбы мы поделимся ссылкой на общий альбом, куда каждый сможет загрузить любимые фото и видео. Нам не терпится заново пережить этот день вашими глазами и увидеть маленькие моменты, которые мы могли пропустить. 🤍</strong></p>`,
  );

  setDetails(
    weddingDetails[5],
    "Полезно знать",
    `<h4>Будет ли открытый бар?</h4>
     <p><strong>Напитки будут доступны в течение всего дня, начиная с приветственного приёма. Примерно с 17:00 и до конца вечера будет работать полноценный открытый бар с винами, пивом, коктейлями, крепкими и безалкогольными напитками.</strong></p>
     <h4>Какая еда будет на свадьбе?</h4>
     <p><strong>Вечер начнётся с ужина за столом, включая суп. Остальные блюда будут поданы в формате шведского стола: закуски, горячие блюда, гарниры, салаты и десерты, включая вегетарианские варианты.</strong></p>
     <h4>Можно ли учесть пищевые ограничения?</h4>
     <p><strong>Если у вас есть аллергии, непереносимость продуктов или особые предпочтения в питании, пожалуйста, укажите это при заполнении RSVP — мы постараемся всё учесть.</strong></p>
     <h4>Есть ли парковка?</h4>
     <p><strong>У площадки есть бесплатная парковка. Если вы планируете приехать на машине, пожалуйста, укажите это при заполнении RSVP, чтобы мы могли зарезервировать достаточное количество мест.</strong></p>`,
  );

  setDetails(
    weddingDetails[6],
    "Вопросы и контакты",
    `<div class="accordion__content--contacts">
      <p>Если у вас возникнут вопросы о программе свадьбы или расписании дня, пожалуйста, свяжитесь с нашим ведущим:</p>
      <div class="contact-card">
        <p class="contact-card__name">Dávid Bánki</p>
        <p class="contact-card__role">Ведущий свадьбы</p>
        <p><a class="place-link" href="tel:+36303843213">+36 30 384 3213</a></p>
        <p><a class="place-link" href="mailto:hello@moderncm.hu">hello@moderncm.hu</a></p>
      </div>
      <p>По вопросам, связанным с площадкой, парковкой или организацией на месте, пожалуйста, свяжитесь с координатором площадки:</p>
      <div class="contact-card">
        <p class="contact-card__name">Jázmin Eszter Nasinszky</p>
        <p class="contact-card__role">Координатор площадки</p>
        <p><a class="place-link" href="mailto:event3@continentalgolf.hu">event3@continentalgolf.hu</a></p>
      </div>
    </div>`,
  );

  setDetails(
    stayDetails[0],
    "Где остановиться",
    `<p><strong>Площадка удобно расположена в городе, поэтому до неё легко добраться почти из любой части Будапешта.</strong></p>
     <p><strong>Для ориентира: поездка от базилики Святого Иштвана в самом центре города занимает примерно 20 минут, в зависимости от трафика.</strong></p>
     <p><strong>Для знакомства с городом советуем остановиться в центральных районах: V (Belváros–Lipótváros), VI (Terézváros), VII (Erzsébetváros), VIII (Józsefváros) или IX (Ferencváros). Лучше выбирать жильё внутри кольцевой дороги, по которой ходят трамваи 4 и 6. Мы особенно рекомендуем районы V, VIII или IX рядом с <a class="place-link" href="https://maps.app.goo.gl/pWGo4LjBff7EBBo6A" target="_blank" rel="noopener noreferrer">Венгерским национальным музеем</a> или <a class="place-link" href="https://maps.app.goo.gl/y6HkKQ7w1C3aZtycA" target="_blank" rel="noopener noreferrer">Kálvin tér</a>.</strong></p>`,
  );

  setDetails(
    stayDetails[1],
    "Как добраться до Будапешта",
    `<h4>Самолётом — наш рекомендуемый вариант</h4>
     <p><strong>Для большинства гостей из Швейцарии проще всего лететь из Базеля авиакомпанией Wizz Air. При раннем бронировании билеты туда и обратно часто стоят около 50–70 CHF, а прямой перелёт занимает всего 1 час 45 минут.</strong></p>
     <h4>Дневным поездом</h4>
     <p><strong>Если вы предпочитаете спокойное путешествие, прямой дневной поезд из Цюриха идёт около 10–11 часов. Поездка комфортная и живописная, а билеты при раннем бронировании начинаются примерно от 55 CHF.</strong></p>
     <h4>Ночным поездом</h4>
     <p><strong>Есть и прямой ночной поезд. Звучит романтично, но мы рекомендуем его только настоящим поклонникам спальных поездов: места довольно компактные, а хорошо выспаться удаётся не всегда.</strong></p>`,
  );

  setDetails(
    stayDetails[2],
    "Наши любимые места в Будапеште",
    `<p><strong>Если вы впервые в Будапеште, обязательно посетите ${mapLink("Hungarian+Parliament+Building+Budapest", "Венгерский парламент")}, ${mapLink("Fishermans+Bastion+Budapest", "Рыбацкий бастион")} и ${mapLink("Buda+Castle+Budapest", "Будайскую крепость")}, а также ${mapLink("St+Stephens+Basilica+Budapest", "базилику Святого Иштвана")}. И, если получится, прогуляйтесь по ${mapLink("Danube+Promenade+Budapest", "набережной Дуная на закате")}.</strong></p>
     <p><strong>Марк также подготовил ознакомительный маршрут по Будапешту — он описан в этом <a class="place-link" href="https://docs.google.com/document/d/1d7oPLBQVXQ3byNUz3j5-g2MvmA7-sXpk5NvQfuglRtE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">документе Google</a>.</strong></p>
     <p><strong>${mapLink("Metropolitan+Ervin+Szabo+Library+Budapest", "Библиотека Эрвина Сабо")} — одно из наших любимых скрытых сокровищ. Это скорее дворец, чем библиотека, где можно спокойно выпить кофе, почитать или поработать. Годовой абонемент стоит всего 400 форинтов (около 1 CHF) — это самый доступный способ попасть внутрь. Здесь также есть бесплатный Wi-Fi.</strong></p>
     <p><strong>За лучшим кюртёшкалачем отправляйтесь в ${mapLink("Molnars+Kurtoskalacs+Budapest", "Molnár's kürtőskalács")} — это отличное место для отдыха после прогулки по городу.</strong></p>
     <p><strong>${mapLink("Szimpla+Kert+Budapest", "Szimpla Kert")} — первый руин-бар Будапешта и одно из самых известных мест ночной жизни. Да, здесь очень много туристов, но не без причины. Можно зайти сюда на один напиток, а затем исследовать другие руин-бары этого района.</strong></p>
     <p><strong>Проедьте несколько остановок на трамвае №2: его маршрут идёт вдоль Дуная и считается одним из самых живописных трамвайных маршрутов Европы.</strong></p>
     <p><strong>Ещё несколько мест, которые нам недавно понравились: ${mapLink("Ramen+Nikko+Budapest", "Ramen Nikko")} (рамен рядом с библиотекой), <a class="place-link" href="https://maps.app.goo.gl/QQa83RA5o7HcJLvy8" target="_blank" rel="noopener noreferrer">Tifliso Restaurant</a> (грузинская кухня), <a class="place-link" href="https://maps.app.goo.gl/bnrz5hqKJuRGTYFVA" target="_blank" rel="noopener noreferrer">In Town Hot Pot</a> (хот-пот в Чайна-тауне), <a class="place-link" href="https://maps.app.goo.gl/dN4o5twtYV36JFta8" target="_blank" rel="noopener noreferrer">Kőleves kert</a> и <a class="place-link" href="https://maps.app.goo.gl/z4F7JMohFb2nz2g3A" target="_blank" rel="noopener noreferrer">Gettó Gulyás</a> (венгерская кухня), а также <a class="place-link" href="https://maps.app.goo.gl/gA3WpG43NeQnMXrt9" target="_blank" rel="noopener noreferrer">Tuk Tuk Bár</a> (отличные коктейли). Это лишь несколько вариантов — дальше доверьтесь любопытству и Google Maps, а в вопросах кофе и высокой кухни — Робину.</strong></p>`,
  );

  setText(".footer > p", "Не можем дождаться, когда отпразднуем вместе с вами!");

  document.querySelector(".hero")?.setAttribute("aria-label", "Свадьба Дарьи и Марка");
  document.querySelector(".timeline")?.setAttribute("aria-label", "Программа свадебного дня");
  document.querySelector(".menu-toggle")?.setAttribute("aria-label", "Открыть меню");
  document.querySelector(".site-menu")?.setAttribute("aria-label", "Навигация по свадебному сайту");
})();
