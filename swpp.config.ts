import { defineConfig } from 'swpp-backends';

defineConfig({
    crossEnv: {
        CACHE_NAME: 'xiaojie_box_cache'
    },
    // crossDep: {
    //     matchCacheRule: (url, $eject) => url.host === 'box.yangjie.site' && url.pathname.match(/\.(js|css|html|jpg|png|json)$/)
    // }
})