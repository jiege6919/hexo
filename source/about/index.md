---
title: 关于
date:
aside: false
top_img: false
background: "#f8f9fe"
comments: false
type: "about"
---

<div class="author-content-item-tips">心路历程</div>

### 为什么建站

创建这个站的时候，想要就是能够有一个自己能够积累知识、积累兴趣的地方。坚持下来，会让这些成为**积累和沉淀**，未来回头看，多一份回忆。

这里大多都是**生活向**的文章，可能不太会有很多人看，权当做自我记录。

当然，如果某篇文章能够帮助到你，那我也是很开心的。这些就是创造这个小站的本意，也是我分享生活的方式。有幸能和你相遇在这里，相信我们能共同留下一段美好记忆。

### 网站建构

~~几句话说不清楚，网站太多，越来越复杂。总体只有两个顶级域名 **yangjie.site** & **jie-ipv6.cn**~~

只维护 yangjie.site 了，回顾我的域名之旅，最开始的 jiege.xyz => yangjay.cn => yangjie.site

折腾太久了，有些累了，没精力，没动力去玩了

当键入 **yangjie.site**，将发生：yangjie.site:80 => 腾讯云 DNS => 腾讯云轻量服务器 => lucky 反代服务器 => 两次重定向 => www.yangjie.site:443 => (主页)

其中 ipv6 网站，alist | lucky-nas | nas | yangjie.site 在 DNS 解析时 AAAA 自定义主机名优先级大于泛解析，由此实现了 ipv4/ipv6 的分流管理。之前的 ~~jie-ipv6.cn~~ 不该买的

~~当键入 **jie-ipv6.cn** 什么都不会发生，该域名仅用于 Nas 对外服务，例如 DDNS、Alist、Lucky、Qb。域名通过反代服务器对外开放，泛解析~~

### 网站服务器分布

- "家庭宽带（Nas）" : 30%
- ~~"西部数码" : 33%~~
- "腾讯云 轻量服务器" : 70%
- ~~"GitHub" : 10%~~

### ipv6 支持程度

{% checkbox *.yangjie.site (~~ipv6~~) %}
{% checkbox checked, alist | lucky-nas | nas | yangjie.site (~~ipv4~~) %}
