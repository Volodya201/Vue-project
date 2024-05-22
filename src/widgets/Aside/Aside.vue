<template>
    <aside class="aside">
        <ul class="aside-ul">
            <li>
                <router-link class="aside-link" to="/">Главная</router-link>
            </li>
            <li>
                <router-link class="aside-link" to="/categories">Категории</router-link>
            </li>
            <li>
                <router-link class="aside-link" to="/products">Товары</router-link>
            </li>
            <li>
                <router-link class="aside-link" to="/advantages">Преимущества</router-link>
            </li>
            <li>
                <router-link class="aside-link" to="/orders">Заказы</router-link>
            </li>
            <li>
                <router-link class="aside-link" to="/contacts">Контакты</router-link>
            </li>
        </ul>
    </aside>
</template>


<style scoped lang="scss">
    .aside {
        background: linear-gradient(#030319, #222345);
        grid-area: aside;
        &-ul {
            margin: 0;
            padding: 0;
        }
        &-link {
            display: block;
            padding: 14px;
            color: #fff;
            text-decoration: none;
            font-size: 20px;
            transition: all 0.3s linear;
            &:hover {
                background-color: #11122C;
            }
        }
    }

    
    
</style>