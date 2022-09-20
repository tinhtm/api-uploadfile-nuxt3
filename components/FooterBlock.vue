<script setup name="FooterBlock">
    const toogleDisclaimers = ref(false);
    const emit = defineEmits(['openCS']);
    function openCustomerService() {
    emit('openCS');
    }
    const social = reactive([
        {
			value: "youtube", 
			urlImage: 'https://drberg-dam.imgix.net/icons/icon-filled-popular_logos-youtube.svg?w=32', 
			link:'https://www.youtube.com/c/DrEricBergDC',
			show: true,
		},
        {
			value: "facebook",
			urlImage: 'https://drberg-dam.imgix.net/icons/icon-filled-popular_logos-facebook.svg?w=32',
			link:'https://www.facebook.com/drericberg',
			show: true,
		},
        {
			value: "twitter",
			urlImage: 'https://drberg-dam.imgix.net/icons/icon-filled-popular_logos-twitter.svg?w=32', 
			link:'https://twitter.com/drericbergdc',
			show: true,
		},
        {
			value: "pinterest",
			urlImage: 'https://drberg-dam.imgix.net/icons/icon-filled-popular_logos-pinterest.svg?w=32',
			link:'https://www.pinterest.com/drericberg',
			show: true,
		},
        {	
			value: "instagram",
			urlImage: 'https://drberg-dam.imgix.net/icons/icon-filled-popular_logos-instagram.svg?w=32',
			link:'https://www.instagram.com/drericberg',
			show: true,
		}
    ]);
    const info = reactive({
        reference: {
            about: {
                text: 'About',
                value: [
                    {inner: 'Dr. Berg ', link:'https://www.drberg.com/dr-eric-berg/bio'},
                    {inner: 'Careers ', link:'https://careers.drberg.com/?utm_source=shop.drberg.com&utm_medium=footer'},
                ]
            },
            orderShiping: {
                text: 'Orders and shipping',
                value:[
                    {inner: 'My account  ', link:'https://shop.drberg.com/customer/account/login/'},
                    {inner: 'Shipping methods', link:'https://shop.drberg.com/shipping-policy'},
                    {inner: 'Refunds', link:'https://shop.drberg.com/return-policy'},
                ]
            },
            support: {
                text: 'Support',
                value: [
                    {inner: 'Hours of operation', link:'https://shop.drberg.com/return-policy#contact-us'},
                    {inner: 'Contact us ', link:'https://shop.drberg.com/return-policy#contact-us'},
                    {inner: 'Official resellers ', link:'https://shop.drberg.com/pages/official-resellers-socialmedia.html#resellers  '},
                    {inner: 'Official social media ', link:'https://shop.drberg.com/pages/official-resellers-socialmedia.html#social'},
                    {inner: 'Wholesale applicatio ', link:'https://shop.drberg.com/pages/wholesale-application.html'},
                ]
            },
            legal: {
                text: 'Legal',
                value: [
                    {inner: 'Terms and conditions', link:'https://shop.drberg.com/terms-and-conditions'},
                    {inner: 'Privacy policy', link:'https://shop.drberg.com/privacy-policy-cookie-restriction-mode'},
                ]
            },
            ourNetWork: {
                text: 'Our network',
                value: [
                    {inner: 'Dr. Berg Shop', link:'https://shop.drberg.com/?utm_source=drberg.com&utm_medium=footer'},
                    {inner: 'Dr. Berg Courses', link:'https://courses.drberg.com/?utm_source=drberg.com&utm_medium=footer'},
                ]
            },
        },
        address: '4501 Ford Avenue, Alexandria, VA 22302.',
        phone: '703-354-7336'
    });
    const props = defineProps({
        hideDisclaimers: {
          type: Boolean,
          default: () => false
        }
    })
</script>
<template>
    <footer class="footer">
    <div class="footer_container">
      <div v-if="hideDisclaimers" class="footer_container-disclaimers">
        <section
          class="footer_container-disclaimers_action"
          @click.stop="toogleDisclaimers = !toogleDisclaimers"
        >
          <p>*Disclaimers </p>
          <svg 
            aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="linkedin-in"
          class="icon-rotate"
          :class="{'active': !toogleDisclaimers}"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
            <path 
            fill="#2A363E" 
            d="M8.4,20.2c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l6.4-6.4L7.7,5.6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l7.2,7.1c0.2,0.2,0.3,0.4,0.3,0.7s-0.1,0.5-0.3,0.7l-7.2,7.2C8.9,20.1,8.7,20.2,8.4,20.2z" 
            style="transform: ;">
          </path>
        </svg>
        </section>
        <section
          class="footer_container-disclaimers_content"
          v-if="toogleDisclaimers"
        >
          <p>
            Disclaimer: The dietary and other substances, and/or materials,
            equipment or devices discussed on this site may not have undergone
            evaluation and/or testing by the United States Food and Drug
            Administration or like agency of any other country. Risks that might
            be determined by such testing are unknown.
            <NuxtLink to="//www.drberg.com/legal/earnings-disclaimer" class="active-hover cursor-pointer font-bold">
              Click here
            </NuxtLink>
            
            to read the full disclaimer text.
          </p>
          <p>
            These statements have not been evaluated by the FDA. This product is
            not intended to diagnose, treat, cure or prevent any disease.
            Information on this site is provided for informational purposes
            only, it is not meant to substitute medical advice provided by your
            physician or any other medical professional. You should not use the
            information contained on this site for diagnosing or treating a
            health problem, disease, or prescribing any medication. Please read
            product label before use. Best results are only achieved when
            combined with diet and exercise program. Results not typical for any
            or all claims.
          </p>
        </section>
      </div>

      <div class="footer_container-brand">
    <NuxtLink to="/">
			<img
			src="https://drberg-dam.imgix.net/dr-berg-images/logo-48-full.svg?h=48&w=260&q=50&auto=compress,format"
			alt="Dr. Berg's Logo Full"
			loading="lazy"
			class="footer_container-brand-logo"
			height="48"
			width="260"
			/>
		</NuxtLink>
		<section class="footer_container-brand-social">
			<template v-for="item in social" :key="item.value">
				<slot 
					:name="item.value" 
					:item="item"
				>
          <NuxtLink :to="item.link" target="_blank">
						<img
							:src="item.urlImage"
							loading="lazy"
							class=""
							height="32"
							width="32"
						/>
					</NuxtLink>
				</slot>
			</template>
		</section>
    </div>
    <!-- <div class="footer_container-infomation list-info">
      <template v-for="items in info.reference">
        <div class="text-left mb-5">
          <p><strong>{{items.text}}</strong></p>
          <p v-for="(item, index) in items.value" :key="`${items.text}_${index}`">
            <a
            :href="item.link"
            target="_blank"
            class="active-hover"
            >{{item.inner}}</a
            >
          </p>
        </div>
      </template>
    </div> -->
	  <div class="footer_container-address">
		<p>	The Health & Wellness Center, Inc.</p>
		<p> <b>Address:</b> {{info.address}}</p>
		<p><b>Phone:</b> {{info.phone}}</p>
	  </div>
	  <p class="pt-[10px]">&copy; Copyright 2022. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  @apply w-full bg-neutrals-10 px-5 py-10;
  &_container {
    @apply container;
    &-disclaimers {
      @apply border-y-[1px] border-neutrals-20 py-5;
      &_action {
        @apply cursor-pointer flex gap-x-5 items-center;
		.icon-rotate{
			@apply w-[20px] h-[20px] duration-700 cursor-pointer select-none rotate-[-90deg];
			&.active {
				@apply rotate-90;
			}
		}
      }
      &_content {
      }
    }
	&-brand {
		@apply mb-[30px] flex flex-col lg:flex-row lg:items-center gap-5;
		&-logo {
			@apply w-[260px];
		}
		&-social {
			@apply flex items-center gap-5;
		}
	}
	&-infomation {
		@apply flex flex-col lg:flex-row justify-between
	}
	&-address{
		@apply flex flex-col lg:flex-row lg:items-center gap-1;
	}
  }
}
</style>
