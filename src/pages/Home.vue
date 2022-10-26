<template>
  <main class="page home-page">
    <MainScreen class="home-page__main-screen wrapper-maxwidth wrapper-padding"/>
    <!--    <TrainingsScreen class="trainings-screen screen"/>-->
    <WorkersSlider class="home-page__workers-screen screen"/>
    <Form class='home-page__form wrapper-maxwidth wrapper-padding' @submit="formSubmit">
      <template #title>
        <h3 class="form__title">Напишите нам, если вам нужна консультация</h3>
      </template>
      <template #inputs>
        <div class="form__row">
          <input class="form__input" type="text" placeholder="ФИО" name="name"
                 id="digest-name">
          <input class="form__input" type="text" placeholder="Компания" name="company"
                 id="digest-company">
        </div>
        <div class="form__row">
          <input class="form__input" type="text" placeholder='Номер телефона'
                 name="phone" id="digest-phone">
          <input class="form__input" type="text" placeholder="E-mail" name="email"
                 id="digest-email">
        </div>
        <textarea class="form__input" placeholder=Сообщение
                  name="phone" id="digest-phone"/>
      </template>
      <template #button-text>Отправить</template>
    </Form>
  </main>
</template>
<!--    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet dolore molestiae odit sunt voluptatum. Accusamus culpa ipsam itaque odio saepe. Aliquam commodi ea exercitationem minus omnis perspiciatis quam quisquam recusandae sint, vel! Accusamus asperiores culpa debitis eum ex nobis odio tempora, voluptatibus! Architecto dicta ex facilis in nam ratione rerum. Aspernatur cupiditate distinctio ducimus excepturi hic nihil quibusdam tempore? A, aliquam asperiores assumenda consectetur debitis, earum eum excepturi explicabo fuga ipsam iusto laboriosam libero nam nobis nostrum officia quam quia quo quos repellat sequi temporibus unde voluptate voluptatem voluptatum. Commodi iste nihil numquam quia reprehenderit suscipit voluptatum. Autem eos esse in iste qui, sapiente sunt unde? Aliquam commodi deserunt ipsa ipsum laboriosam minima nostrum quod sequi! Alias, at autem beatae consequatur dolor enim nemo omnis pariatur praesentium ut! Alias consequuntur cupiditate error ex labore magni perspiciatis reiciendis reprehenderit sed vel? Atque dolores fuga id iste magni mollitia, nisi obcaecati porro possimus reprehenderit sed sit soluta temporibus, vitae voluptates voluptatibus voluptatum. Ad aliquid blanditiis ducimus ea eligendi, expedita fugiat id illum in inventore libero maiores mollitia nesciunt numquam, odio optio pariatur qui quibusdam quis rem, reprehenderit rerum soluta sunt? Alias corporis debitis dolore ducimus facere iste labore minus necessitatibus placeat quam quas qui totam ut vero, vitae. Adipisci consequuntur est laudantium magnam minus, natus officia omnis quasi quidem vitae! Adipisci beatae cupiditate, fugiat in incidunt iste itaque labore laboriosam, laudantium modi, natus odio optio quam quas rem repellendus sit? Accusamus animi aperiam atque beatae consequatur culpa cum enim id iure, iusto minus nobis odio possimus quisquam repellat sed veritatis? Aliquam architecto culpa cumque dolores ducimus ea earum esse illum impedit ipsa ipsam laboriosam magnam minima minus, molestias nobis non obcaecati officiis omnis perferendis quis sequi similique tempora voluptatibus voluptatum. Aperiam esse, nihil quasi sapiente totam vel veritatis? Amet blanditiis commodi enim eos fugit hic molestias nemo nulla possimus qui quis reiciendis sapiente sequi sit suscipit tempore, totam ullam velit, voluptates voluptatum? Adipisci animi, aut commodi deleniti enim eos fugiat laudantium natus necessitatibus odio provident quibusdam vitae voluptate! Cupiditate id in libero necessitatibus nobis officiis reiciendis repellendus sunt unde veritatis! A ad adipisci alias architecto, assumenda blanditiis culpa, dignissimos dolore doloremque eaque fugiat minus molestias natus numquam officia omnis provident quis quos reiciendis, sequi voluptas voluptates voluptatum? Delectus ea eius explicabo optio suscipit voluptatem? Accusamus animi aperiam corporis error et, exercitationem expedita explicabo ipsa laudantium maxime, nisi numquam quis quod rem vero! Animi dolores ducimus eius esse excepturi explicabo natus, sunt vel! Consequuntur excepturi inventore optio sunt? Accusamus, adipisci aliquam aperiam architecto at cum dicta, dolorem doloribus eligendi error et laudantium minima, natus necessitatibus neque nesciunt officia pariatur quidem quo ratione repellat vero voluptate? Adipisci consectetur consequuntur doloribus et hic nihil omnis placeat quasi, repellendus ullam. Expedita quas quibusdam ratione. Asperiores, at aut deserunt ea, error hic molestias nobis nulla officiis optio quis quo rerum veniam vitae voluptas. Alias porro, recusandae. Beatae consectetur enim harum illum nisi nostrum, numquam perferendis soluta. Ab amet animi delectus illo, laboriosam magni nulla quasi qui quia reiciendis, sapiente sed tempore, ut. Ea necessitatibus quidem repellendus tenetur unde? Amet aspernatur aut, beatae delectus distinctio doloremque dolores eaque in magni nesciunt perspiciatis, provident quia quod reiciendis, repellat soluta velit. Ab adipisci cumque dolorem eligendi eum explicabo harum in neque quam reiciendis. Ad adipisci amet, autem consectetur debitis dignissimos est expedita id illum inventore ipsum iusto laudantium magnam minima odit pariatur perferendis quas quia quod quos repudiandae saepe sed tenetur ullam veritatis vitae voluptas voluptates! Ad alias animi autem cumque delectus deleniti, doloremque doloribus eos et eveniet exercitationem facilis harum illum nesciunt nulla optio possimus praesentium quidem quisquam quos ratione sequi sunt temporibus totam unde ut, voluptas. Eligendi fuga ipsa molestias nobis placeat sapiente. Dicta dolor eligendi facilis fuga, magni neque quae quam qui quia. Aliquid at aut beatae, ea eius error eum exercitationem, facilis harum illum iure iusto laboriosam nam natus nisi obcaecati officia perferendis qui quidem ratione repellat sed similique suscipit tenetur ullam veritatis voluptas! Adipisci asperiores consequatur dicta distinctio dolore eaque eos excepturi fugiat, id, impedit iusto laboriosam maiores molestias, nam neque porro possimus quasi quis reiciendis rerum sint soluta suscipit totam unde velit vero voluptates! Accusamus ad adipisci alias aperiam assumenda atque consectetur delectus dignissimos dolorem dolorum eveniet facere illo in inventore iste, laboriosam laudantium maiores natus necessitatibus obcaecati optio perferendis possimus quam quibusdam quis quisquam quod recusandae repudiandae saepe suscipit tempora, velit veritatis vitae? Dignissimos doloremque doloribus, exercitationem fugiat hic nobis praesentium quisquam quos temporibus. A atque dignissimos dolore eum minima quaerat quia quisquam sunt suscipit tempore! A accusamus delectus eaque enim excepturi facere in molestias neque, non obcaecati officia pariatur ratione repellendus reprehenderit sunt. Consequatur distinctio dolores eos ipsum laborum magni porro vero. Alias atque beatae cum debitis dicta doloremque dolores dolorum facere, ipsam labore laboriosam necessitatibus nemo nobis officia porro quisquam quo rerum sequi suscipit totam vel veniam voluptates voluptatum! Aliquam animi, aperiam autem corporis cum eaque excepturi facere id illo impedit ipsam iste, laborum laudantium maxime molestiae natus neque non odit quisquam soluta velit vero vitae voluptas. Cum eligendi ex exercitationem, libero magnam nam quisquam! Atque blanditiis cupiditate, dolorem doloremque facilis labore neque, nihil obcaecati pariatur reprehenderit, saepe voluptate voluptates. Assumenda aut distinctio harum optio tempore. Ad cupiditate error hic illo modi provident quae quas tenetur. Consectetur corporis incidunt laboriosam minima numquam ratione saepe tempora totam. Animi, corporis dolorum esse illum odit repellendus sit! Aliquam cupiditate, exercitationem hic impedit iusto laborum maiores maxime, minus nam nobis obcaecati perspiciatis, praesentium quas quibusdam repellendus sapiente sequi sit temporibus ullam ut vel veritatis vero voluptates? Accusantium aperiam cum eius, fugit impedit ipsam obcaecati qui tempora veritatis vitae. Atque dolore doloremque, fugiat natus officiis omnis perferendis veritatis. Aperiam, blanditiis deleniti distinctio dolorum eaque eum ex magnam maxime, minima recusandae sequi similique ut voluptatem voluptatibus, voluptatum? Beatae eaque exercitationem optio quasi quibusdam! Doloremque eligendi ex ipsa minima quasi quisquam recusandae sequi voluptates voluptatum. Dolores facere labore nesciunt nobis, praesentium quo rerum temporibus voluptate voluptatem. Officia, suscipit, voluptates. Consectetur consequatur corporis deleniti dignissimos dolore pariatur vero!-->
<!--    <Filters class="Filters wrapper-maxwidth"/>-->
<!--    <BlogScreen class="screen blog-screen"/>-->

<!--    <button @click="openModal('directions')">Directions modal</button>-->
<!--    <button @click="openModal('post')">Post modal</button>-->
<script setup>
import MainScreen from '@/components/Screens/Main.vue';

// import TrainingsScreen from '@/components/Screens/Trainings.vue';
// import Filters from '@/components/Filters.vue';
// import BlogScreen from '@/components/Screens/Blog.vue';
import WorkersSlider from '@/components/Screens/WorkersSlider.vue';
import Form from '@/components/Form.vue';

// import SecondaryCheckbox from "@/components/Checkbox/Secondary.vue";
// import {openModal} from "@/logics/modals.js";

const formSubmit = () => console.log("Form submit function");
</script>

<style lang="scss">
.home-page {
  width: 100%;
  margin: 0;


  &__workers-screen {
    margin: 185px 0 296px;
    @media screen and (max-width: $notebook_start) {
      margin: auto-calculate($notebook_start, $notebook, 185px, 92.5px) 0 auto-calculate($notebook_start, $notebook, 296px, 148px);
    }
    @media screen and (max-width: $notebook) {
      margin: auto-calculate($notebook, $tablet, 90px, 45px) 0 auto-calculate($notebook, $tablet, 140px, 70px);
    }
    @media screen and (max-width: $tablet) {
      margin: 45px 0 70px;
    }
  }

  &__form {
    margin-bottom: 92px;
    @media screen and (max-width: $notebook_start) {
      margin-bottom: auto-calculate($notebook_start, $notebook, 92px, 46px)
    }
    @media screen and (max-width: $notebook) {
      margin-bottom: auto-calculate($notebook_start, $notebook, 46px, 23px)
    }
    @media screen and (max-width: $tablet) {
      margin-bottom: 25px;
    }
  }
}
</style>