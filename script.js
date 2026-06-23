document.addEventListener("DOMContentLoaded", () => {
    
    // 1. GERENCIAMENTO DAS PÁGINAS (ABAS)
    const links = document.querySelectorAll(".nav-link");
    const paginas = document.querySelectorAll(".page");

    links.forEach(link => {
        link.addEventListener("click", () => {
            const targetPage = link.getAttribute("data-page");
            
            // Validação simples caso o atributo venha incorreto
            if (!targetPage) return;

            // Remove o estado ativo de todos
            links.forEach(l => l.classList.remove("active"));
            paginas.forEach(p => p.classList.remove("active"));

            // Adiciona o estado ativo no botão atual e na página alvo
            link.classList.add("active");
            const activePage = document.getElementById(targetPage);
            if (activePage) activePage.classList.add("active");
        });
    });

    // 2. ADICIONANDO CORES COM BASE NAS REGRAS DO CSS
    // Em vez de misturar estilos no JS, apenas gerenciamos as classes do CSS.
    const caixasDestaque = document.querySelectorAll(".destaque-box");

    caixasDestaque.forEach(caixa => {
        const tipo = caixa.getAttribute("data-destaque");

        if (tipo === "campo") {
            caixa.classList.add("box-campo");
        } else if (tipo === "cidade") {
            caixa.classList.add("box-cidade");
        }
    });
});
