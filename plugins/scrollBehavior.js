export default defineNuxtPlugin((nuxtApp) => {
    const scroll = async (to) => {
        const findEl = async (to, x = 0) => {
            return (
            document.querySelector(to) ||
            new Promise((resolve) => {
                if (x > 0) {
                 return resolve(document.querySelector("#app"));
                }
                setTimeout(() => {
                    resolve(findEl(to, 1));
                }, 100);
            })
            );
        };
    
        if (to) {
            const el = await findEl(to);
            if ("scrollBehavior" in document.documentElement.style) {
             return window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            } else {
             return window.scrollTo(0, el.offsetTop);
            }
        }
        return { left: 0, top: 0, behaviour: "smooth" };
    };
    return {
        provide: {
            scroll: scroll
        }
    }
})