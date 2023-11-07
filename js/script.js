document.getElementById("scrollHome").addEventListener("click", function() {
    // Получите ссылку на блок, к которому хотите прокрутиться
    var targetBlock = document.getElementById("home");
    
    // Используйте метод scrollIntoView для прокрутки к этому блоку
    targetBlock.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollCompany").addEventListener("click", function() {
    // Получите ссылку на блок, к которому хотите прокрутиться
    var targetBlock = document.getElementById("company");
    
    // Используйте метод scrollIntoView для прокрутки к этому блоку
    targetBlock.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollMembers").addEventListener("click", function() {
    // Получите ссылку на блок, к которому хотите прокрутиться
    var targetBlock = document.getElementById("members");
    
    // Используйте метод scrollIntoView для прокрутки к этому блоку
    targetBlock.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollRules").addEventListener("click", function() {
  // Получите ссылку на блок, к которому хотите прокрутиться
  var targetBlock = document.getElementById("rules");
  
  // Используйте метод scrollIntoView для прокрутки к этому блоку
  targetBlock.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollServices").addEventListener("click", function() {
  // Получите ссылку на блок, к которому хотите прокрутиться
  var targetBlock = document.getElementById("services");
  
  // Используйте метод scrollIntoView для прокрутки к этому блоку
  targetBlock.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollGoods").addEventListener("click", function() {
  // Получите ссылку на блок, к которому хотите прокрутиться
  var targetBlock = document.getElementById("goods");
  
  // Используйте метод scrollIntoView для прокрутки к этому блоку
  targetBlock.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollInvesting").addEventListener("click", function() {
  // Получите ссылку на блок, к которому хотите прокрутиться
  var targetBlock = document.getElementById("investing");
  
  // Используйте метод scrollIntoView для прокрутки к этому блоку
  targetBlock.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollСonnection").addEventListener("click", function() {
    // Получите ссылку на блок, к которому хотите прокрутиться
    var targetBlock = document.getElementById("block2");
    
    // Используйте метод scrollIntoView для прокрутки к этому блоку
    targetBlock.scrollIntoView({ behavior: "smooth" });
});

//change lang

// Задайте язык по умолчанию (например, английский)
let currentLanguage = 'ru';

// Функция для смены языка
function toggleLanguage() {
  const main = document.getElementById('main');
  const subMain = document.getElementById('subMain');
  const languageToggle = document.getElementById('changeLang');
  const scrollCompany = document.getElementById('scrollCompany'); // Здесь 'content' - это элемент, содержащий текст на сайте.
  const companyMain = document.getElementById('companyMain');
  const companySubMain = document.getElementById('companySubMain');
  const scrollMembers = document.getElementById('scrollMembers');
  const scrollRules = document.getElementById('scrollRules');
  const rulesMain = document.getElementById('rulesMain');
  const rulesSubMain = document.getElementById('rulesSubMain');
  const scrollServices = document.getElementById('scrollServices');
  const servicesMain = document.getElementById('servicesMain');
  const servicesSubMain = document.getElementById('servicesSubMain');
  const scrollGoods = document.getElementById('scrollGoods');
  const scrollInvestors = document.getElementById('scrollInvesting');
  const scrollСonnection = document.getElementById('scrollСonnection');

  if (currentLanguage === 'en') {
    // Если текущий язык - английский, переключаем на русский
    main.innerHTML = "Фурия"
    subMain.innerHTML = "Компания по созданию систем быстрых крепежей и БПЛА модульной сборки"
    scrollCompany.innerHTML = 'О компании'; // Замените текстом на русском
    companyMain.innerHTML = 'О компании';
    companySubMain.innerHTML = 'Мы - [название вашей компании], ваш надежный партнер в сфере [указать сферу вашей деятельности]. Мы посвящаем себя созданию [указать цель или миссию компании] и обеспечиваем клиентов [указать преимущества вашей компании].<br><br>Наши преимущества:<br>Профессионализм: Наши сотрудники обладают многолетним опытом и экспертизой в области [указать сферу деятельности], что позволяет нам предоставлять высококачественные услуги.<br>Инновации: Мы всегда на шаг впереди в отношении технологических и индустриальных инноваций, что позволяет нам предоставлять клиентам самые передовые решения.<br>Поддержка клиентов: Наша компания ценит каждого клиента, и мы гордимся своим превосходным обслуживанием. Мы всегда готовы выслушать вас и предложить индивидуальные решения.<br>Устойчивость и надежность: Мы стремимся к долгосрочным отношениям с клиентами и партнерами, и наша компания заботится о устойчивости и надежности во всем, что мы делаем.'
    scrollMembers.innerHTML = 'Команда';
    scrollRules.innerHTML = 'Правила';
    rulesMain.innerHTML = 'Правила';
    rulesSubMain.innerHTML = 'Соблюдение законов и этических стандартов:<br> Всегда действуйте в соответствии с законами и нормами этики. Обеспечивайте прозрачность и честность во всех деловых отношениях.<br> Качество продукции и услуг:<br> Стремитесь к высокому качеству ваших продуктов или услуг. Регулярно анализируйте и улучшайте их, чтобы удовлетворить потребности клиентов.<br> Клиентоориентированность:<br> Слушайте и понимайте потребности клиентов. Создавайте продукты и услуги, которые удовлетворяют эти потребности.<br> Управление ресурсами:<br> Эффективно управляйте ресурсами компании, включая бюджет, время и человеческие ресурсы. Оптимизируйте процессы, чтобы повысить эффективность и уменьшить издержки.<br> Инновации и адаптация:<br> Стремитесь к постоянным инновациям и адаптации к изменяющимся рыночным условиям. Будьте открыты к новым идеям и технологическим изменениям.'
    scrollServices.innerHTML = 'Услуги';
    servicesMain.innerHTML = 'Услуги';
    servicesSubMain.innerHTML = 'Производство БПЛА: Компания может разрабатывать, производить и собирать различные типы беспилотных летательных аппаратов, включая мультироторные и фиксированные крылья, а также специализированные модели для разных целей.<br> Проектирование и настройка: Клиенты могут заказать разработку индивидуальных БПЛА, а также настройку существующих моделей под свои конкретные потребности.<br> Интеграция с датчиками и оборудованием: Компания может предоставлять услуги по интеграции различных датчиков, камер, радаров и другого оборудования в БПЛА для выполнения конкретных задач, таких как наблюдение, измерение и т.д.<br> Программное обеспечение и управление: Разработка специализированного программного обеспечения для управления и контроля БПЛА, а также обработки данных, полученных от них.<br> Обучение и сертификация: Предоставление обучения пилотам, операторам и техническому персоналу, а также помощь в получении соответствующих сертификатов и разрешений для эксплуатации БПЛА.'
    scrollGoods.innerHTML = 'Товары';
    scrollInvestors.innerHTML = 'Инвесторование';
    scrollСonnection.innerHTML = 'Связь';
    languageToggle.innerHTML = 'RU';
    currentLanguage = 'ru';
  } else {
    // Если текущий язык - русский, переключаем на английский
    main.innerHTML = "Fury"
    subMain.innerHTML = "Company creating quick fastening systems and modular UAVs"
    scrollCompany.innerHTML = 'Company'; // Замените текстом на русском
    companyMain.innerHTML = 'Company';
    companySubMain.innerHTML = 'We are [name of your company], your reliable partner in the field of [specify your field of activity]. We are dedicated to creating [insert company purpose or mission] and providing clients with [insert your companys benefits].<br><br>Our Strengths:<br>Professionalism: Our employees have years of experience and expertise in [insert industry], which allows us to provide high quality services.<br>Innovation: We are always one step ahead in terms of technological and industrial innovation, which allows us to provide customers with the most advanced solutions.<br>Customer Support: Our company values every customer and we pride ourselves on our excellent service. We are always ready to listen to you and offer customized solutions.<br>Sustainability and reliability: We are committed to long-term relationships with customers and partners, and our company is committed to sustainability and reliability in everything we do.'
    scrollMembers.innerHTML = 'Team';
    scrollRules.innerHTML = 'Rules';
    rulesMain.innerHTML = 'Rules';
    rulesSubMain.innerHTML = 'Compliance with Laws and Ethical Standards:<br> Always act in accordance with laws and ethical standards. Ensure transparency and honesty in all business dealings.<br> Product and Service Quality:<br> Strive for high quality in your products or services. Review and improve them regularly to meet customer needs.<br> Customer Focus:<br> Listen to and understand customer needs. Create products and services that meet these needs.<br> Resource Management:<br> Effectively manage company resources, including budget, time and human resources. Optimize processes to improve efficiency and reduce costs.<br> Innovation and Adaptation:<br> Strive to continually innovate and adapt to changing market conditions. Be open to new ideas and technological changes.'
    scrollServices.innerHTML = 'Services';
    servicesMain.innerHTML = 'Services';
    servicesSubMain.innerHTML = 'UAV Manufacturing: The company can design, manufacture and distribute various types of unmanned aerial vehicles, including multi-rotor and fixed wing, as well as specialized models for different purposes.<br> Design and Customization: Customers can order the development of a specific UAV, as well as the standard of existing models for <br> Integration with sensors and equipment: The company can provide services to provide various sensors, cameras, radars and other equipment in the UAV to perform specific tasks such as surveillance, measurement, etc.<br> Software. and management: Development of specialized software for the management and control of UAVs, as well as processing of data received from them.<br> Training and certification: Providing training to pilots, operators and technical personnel, as well as assistance in obtaining the appropriate certificates and permits for the operation of UAVs.'
    scrollGoods.innerHTML = 'Goods';
    scrollInvestors.innerHTML = 'Investing';
    scrollСonnection.innerHTML = 'Connection';
    languageToggle.innerHTML = 'EN';
    currentLanguage = 'en';
  }
}

// Присвоение функции обработчика события для кнопки
document.getElementById('changeLang').addEventListener('click', toggleLanguage);

document.addEventListener("DOMContentLoaded", function() {
  var zindex = 10;

  var cards = document.querySelectorAll("div.card");
  var cardsContainer = document.querySelector("div.cards");

  cards.forEach(function(card) {
    card.addEventListener("click", function(e) {
      e.preventDefault();

      var isShowing = false;

      if (card.classList.contains("show")) {
        isShowing = true;
      }

      if (cardsContainer.classList.contains("showing")) {
        // A card is already in view
        var showingCard = document.querySelector("div.card.show");
        showingCard.classList.remove("show");

        if (isShowing) {
          // This card was showing - reset the grid
          cardsContainer.classList.remove("showing");
        } else {
          // This card isn't showing - bring it to the front
          card.style.zIndex = zindex;
          card.classList.add("show");
        }

        zindex++;
      } else {
        // No cards in view
        cardsContainer.classList.add("showing");
        card.style.zIndex = zindex;
        card.classList.add("show");
        zindex++;
      }
    });
  });
});
