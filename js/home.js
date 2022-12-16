//Modal content
const projects = {
    "cmvc": {
        name: "Sistema da Câmara de Vereadores de Vitória da Conquista", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/projeto-cmvc.webp",
        tecs: ["Angular", "SSR", "Java", "Spring Framework", "MySql", "NodeJS", "Tomcat"],
        content: `
        <p>Projeto que abarcou desafios de atender as leis de transparência e acessibilidade para portais públicos governamentais.</p>
        `
    },
    "chef": {
        name: "Sistema para Restaurantes", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/projeto-chef.webp",
        tecs: ["Angular", "PWA", "Java", "Spring Framework", "MySql", "Tomcat", "NFe"],
        content: `
        <p>Projeto para auxiliar na gestão de vendas, financeira, pessoal e de estoque e atendimento de bares e restaurantes.</p>
        <p>Com foco na usabilidade e responsividade e desafios como lidar com várias impressoras ao mesmo tempo.</p>
        `
    },
    "bloco": {
        name: "Sistema para Indústria de Blocos", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/projeto-bloco.webp",
        tecs: ["Angular", "PWA", "Java", "Spring Framework", "MySql", "Tomcat", "NFe", "SPED"],
        content: `
        <p>Projeto para gestão total de uma fábrica de itens de concreto. Com relatórios de BI e módulos de produção, proposta, pedido, faturamento e entrega.</p>
        `
    },
    "cursinho": {
        name: "Sistema e App para Pré-vestibular", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/projeto-cursinho.webp",
        tecs: ["Ionic", "Angular", "PWA", "Java", "Spring Framework", "MySql", "Tomcat", "API de Pagamentos"],
        content: `
        <p>Projeto que envolveu App híbrido para Android e IOS, plataforma web para alunos e sistema gerencial.</p>
        <p>Com funções para realização de simulados, elaboração de cursos, envio e correção de redações e diversas outras.</p>
        `
    },
    "ifba": {
        name: "Sistema para Processo Seletivo da Pós-Graduação", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/projeto-ifba.webp",
        tecs: ["React", "Next.JS", "SSG", "SSR", "Firebase", "Serverless API", "Cloud Firestore", "Vercel"],
        content: `
        <p>Desenvolvido no meu TCC, com o objetivo de atender as inscrições e controle de um processo seletivo de pós-graduação de um instituto federal.</p>
        <p>Com o desafio de ser gratuito, várias estratégias como geração incremental de páginas estáticas foram utilizados.</p>
        `
    },
    "nfe": {
        name: "API para Emissão de Notas Fiscais e SPED Fiscal", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/projeto-nfe.webp",
        tecs: ["Java", "Spring Framework", "NFe", "SPED Fiscal"],
        content: `
        <p>API para emissão de NFe, NFCe, SPED Fiscal e outros documentos para projetos internos.</p>
        <p><i>(Imagem ilustrativa - Retirada de um módulo desenvolvido para preencher dados e emitir notas)</i></p>
        `
    },
    "sitenfe": {
        name: "Emissor NFe", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/site-emissor.webp",
        tecs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        content: `
        <p>Landpage para emissor gratuito de notas fiscais com vantagens, funções e tabela de preços.</p>
        `
    },
    "sitesfabricasoftware": {
        name: "Fábrica de Software", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/site-argus.webp",
        tecs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        content: `
        <p>Landpage para fábrica de software, com CTA's, depoimentos e produtos.</p>
        `
    },
    "sitepsi": {
        name: "Pessoal para Psicóloga", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/site-psi.webp",
        tecs: ["HTML", "SCSS", "Typecript", "Next.JS", "Tailwind CSS"],
        content: `
        <p>Landpage pessoal para psicóloga com serviços e formas de atendimento.</p>
        `
    },
    "sitechef": {
        name: "Landpage para Sistema para Restaurantes", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/site-chef.webp",
        tecs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        content: `
        <p>Landpage para sistema para restaurantes e bares, com CTA's, depoimentos, vantagens, funções e tabela de preços.</p>
        `
    },
    "sitegas": {
        name: "Empresa de Gás", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/site-gas.webp",
        tecs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        content: `
        <p>Landpage para empresa de gás natual.</p>
        `
    },
    "siteporta": {
        name: "Empresa de Portas Automáticas", img: "https://arguscdn.nyc3.cdn.digitaloceanspaces.com/bemhur/site-prime.webp",
        tecs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        content: `
        <p>Landpage para empresa de portas de enrolar automática, com solicitação de orçamento, CTA's e informações sobre as lojas e serviços.</p>
        `
    }
};

//Console message
window.onload = function () {
    console.log("%c ---------------------------", 'color: #899878');
    console.log("%cOlá, tudo bom?", 'color: #222725');
    console.log("%cFique a vontade para explorar por aqui, todo o projeto está diponível no meu github", 'color: #222725');
    console.log("%chttps://github.com/BemHurGanem/portfolio", 'color: #433b4d')
    console.log("%c ---------------------------", 'color: #899878');

    const projectsSection = document.getElementById("projectsSection");
    const projectImgs = projectsSection.getElementsByTagName("img");
    for (let img of projectImgs) {
        img.setAttribute("src", img.getAttribute("data-url"));
    }

    //For each modal click, open the modal and put the correct content in
    const modals = document.querySelectorAll('[data-modal]');

    modals.forEach(function (trigger) {
        trigger.addEventListener('click', function (event) {
            event.preventDefault();
            const modal = document.getElementById(trigger.dataset.modal);

            if (trigger.getAttribute('data-modal').startsWith("modal-project")) {
                const projectID = trigger.getAttribute('data-project');
                const projectInfo = projects[projectID];

                const modalProjectName = document.getElementById("modalProjectName");
                modalProjectName.innerHTML = projectInfo.name;

                const modalProjectImg = document.getElementById("modalProjectImg");
                modalProjectImg.setAttribute("src", projectInfo.img);
                modalProjectImg.setAttribute("alt", "Imagem representativa do " + projectInfo.img);

                const modalProjectTecs = document.getElementById("modalProjectTecs");
                let tecsHTML = "";
                for (let tec of projectInfo.tecs) {
                    tecsHTML += "<div class='tec-tag'>" + tec + "</div>";
                }
                modalProjectTecs.innerHTML = tecsHTML;

                const modalProjectContent = document.getElementById("modalProjectContent");
                modalProjectContent.innerHTML = projectInfo.content;
            }

            modal.classList.add('open');
            const exits = modal.querySelectorAll('.modal-exit');
            exits.forEach(function (exit) {
                exit.addEventListener('click', function (event) {
                    event.preventDefault();
                    modal.classList.remove('open');
                });
            });


        });
    });

    //Project filter and animations
    const softwaresFilter = document.getElementById('softwaresFilter');
    const sitesFilter = document.getElementById('sitesFilter');
    const softwares = document.getElementsByClassName('software');
    const sites = document.getElementsByClassName('site');

    softwaresFilter.addEventListener('click', function (event) {
        //Switch filters
        sitesFilter.classList.remove("active");
        softwaresFilter.classList.add("active");

        //Add a closing class do fade-out the project card, and after it finish, makes display none and animete in the filtered cards
        for (let i = 0; i < sites.length; i++) {
            const site = sites.item(i);
            site.classList.add("closing");
            site.addEventListener(
                "animationend",
                () => {
                    site.classList.remove("closing");
                    site.classList.remove("show-site");
                    site.classList.add("invisible");
                    const software = softwares.item(i);
                    software.classList.remove("invisible");
                    software.classList.add("show-software");
                },
                { once: true }
            );
            
        }
    });

    sitesFilter.addEventListener('click', function (event) {
        softwaresFilter.classList.remove("active");
        sitesFilter.classList.add("active");

        for (let i = 0; i < softwares.length; i++) {
            const software = softwares.item(i);
            software.classList.add("closing");
            software.addEventListener(
                "animationend",
                () => {
                    software.classList.remove("closing");
                    software.classList.remove("show-software");
                    software.classList.add("invisible");
                    const site = sites.item(i);
                    site.classList.remove("invisible");
                    site.classList.add("show-site");
                },
                { once: true }
            );
        }
    });
}

