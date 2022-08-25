<script setup name="HeaderBlock">
    const openMenu = ref(false);
    const openNavigation = ref(false);
    const clickMenu = () => {openMenu.value = !openMenu.value;}
    const clickNavigation = () => {openNavigation.value = !openNavigation.value;}
</script>
<template>
    <header>
    <nav class="nav__container">
        <div class="header">
            <div class="header-left">
			    <button class="navigation navigation-menu" @click="clickNavigation">
                    <img src="https://drberg-dam.imgix.net/icons/icon-line-navigation-hamburger_menu.svg?w=24&h=24" alt="navigation" width="24" height="24">
                </button>
				<NuxtLink to="/"> 
                    <picture>
                        <source media="(max-width: 639px)" srcset="https://drberg-dam.imgix.net/dr-berg-images/logo-48-small.svg">
                        <img loading="lazy" src="https://drberg-dam.imgix.net/dr-berg-images/logo-48-full.svg" alt="Dr. Berg Logo" class="h-[44px]">
                    </picture>
                </NuxtLink>
            </div>
            <div class="header-right">
                <button class="navigation navigation-grid" @click="clickMenu">
                    <div class="svg__box">
                        <svg width="24px" height="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                        <path fill="#2A363E" d="M6.5,2.3v3.5c0,0.4-0.3,0.8-0.8,0.8H2.3c-0.4,0-0.8-0.3-0.8-0.8V2.3c0-0.4,0.3-0.8,0.8-0.8h3.5
	                    C6.2,1.5,6.5,1.8,6.5,2.3z M13.8,1.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8V2.3
	                    C14.5,1.8,14.2,1.5,13.8,1.5z M21.8,1.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8V2.3
	                    C22.5,1.8,22.2,1.5,21.8,1.5z M5.8,9.5H2.3c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5
	                    C6.5,9.8,6.2,9.5,5.8,9.5z M13.8,9.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5
	                    C14.5,9.8,14.2,9.5,13.8,9.5z M21.8,9.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5
	                    C22.5,9.8,22.2,9.5,21.8,9.5z M5.8,17.5H2.3c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5
	                    C6.5,17.8,6.2,17.5,5.8,17.5z M13.8,17.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5
	                    C14.5,17.8,14.2,17.5,13.8,17.5z M21.8,17.5h-3.5c-0.4,0-0.8,0.3-0.8,0.8v3.5c0,0.4,0.3,0.8,0.8,0.8h3.5c0.4,0,0.8-0.3,0.8-0.8v-3.5
	                    C22.5,17.8,22.2,17.5,21.8,17.5z"></path>
                        </svg>
                    </div>                      
                </button>
                <div v-if="openMenu" class="menu menu-outside">
                    <ul>
                        <li><a href="https://drberg.com/?utm_source=careers.drberg.com&amp;utm_medium=network-icon" target="_blank">drberg.com</a></li>
                        <li><a href="https://shop.drberg.com/?utm_source=careers.drberg.com&amp;utm_medium=network-icon" target="_blank">shop.drberg.com</a></li>
                        <li><a href="https://courses.drberg.com/?utm_source=careers.drberg.com&amp;utm_medium=network-icon" target="_blank">courses.drberg.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

        <button class="navigation navigation-menu nav-icon">
               <img src="https://drberg-dam.imgix.net/icons/icon-line-navigation-hamburger_menu.svg?w=24&h=24" alt="navigation" width="24px" height="24px">
        </button>

    <div class="nav-bar" :class="{'active': openNavigation}">
        <div class="nav-bar__overlay" v-if="openNavigation"></div>
        <div class="menu flex flex-row items-start">
            <div class="flex items-center mr-5 xsm:mr-[54px] h-[80px]">
                <button class="navigation !mr-[0px] navigation-menu-sidebar" @click="openNavigation = !openNavigation"><img src="https://drberg-dam.imgix.net/icons/icon-line-navigation-close.svg?w=24&h=24" alt="Close" width="24px" height="24px"></button>
            </div>
            <div>
				<NuxtLink to="/" class="h-[80px] flex items-center"> 
                <img src="https://drberg-dam.imgix.net/dr-berg-images/logo-48-small.svg" loading="lazy" alt="Dr. Berg small logo" class="h-[44px]">
				</NuxtLink>
                <ul>
                    <li class="active"><NuxtLink to="/"> Home</NuxtLink></li>
                    <li class=""><NuxtLink to="/open-positions">Open positions</NuxtLink></li>
                    <li class=""><NuxtLink to="/contact-us">Connect with us</NuxtLink></li>
                    <li class=""><NuxtLink to="/about">About</NuxtLink></li>
                </ul>
            </div>
        </div>
    </div>

</header>
</template>

<style lang="scss">
header {
		@apply relative;
		.nav__container {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			background-color: white;
			z-index: 8;
			transition: transform 0.3s;

			&.unshow {
				transform: translateY(-80px);
			}
		}

		nav {
			&.active {
			
			}

			@apply flex justify-center h-[80px] px-[20px] xsm:px-[30px] xlg:pl-[44px] py-[18px];
		    .header {
			  @apply flex flex-row justify-between items-center relative max-w-full w-full;
			.header-left {
			  @apply flex flex-row items-center;
			}

			.navigation {
			  @apply mr-[20px] w-[44px] h-[44px] flex justify-center items-center rounded-[50%];
			  &:hover {
				@apply bg-neutrals-10;
			  }
			}


			.navigation-grid {
			  @apply mr-[0px];
			}

			.header-right {
			  &.active {
				.navigation-grid {
				  svg {
					path {
					  @apply fill-navigation;
					}
				  }
				}

				.menu {
				  @apply block;
				}
			  }
			.menu-outside{
				@apply z-10 bg-[#ffffff];
				ul{
				   li{
					  display:block;
					  a{
						display:block;
						line-height: 41px;
						@apply pl-5;
					   }
					 }
				   }
			}
			  .menu {
				@apply w-[200px] absolute;
				box-shadow: 0 2px 3px #00000029;
				padding-bottom: 10px;
				padding-top: 10px;
				border-radius: 5px;
				right: 0;

				ul {
				  li {
					@apply text-neutrals font-normal block items-center;
					&:hover {
					  @apply bg-neutrals-10;
					}

					@apply h-[40px];
					a {
					}
				  }
				}
			  }
			}
		  }
		}

		.navigation-grid {
			position: relative;
		}

		.svg__box {
			position: absolute;
		}

		.ripple {
			position: absolute;
			border-radius: 50%;
			transform: scale(0);
			animation: ripple 400ms linear;
			background-color: rgba(255, 255, 255, 0.7);
		}

		.nav-bar {
			position: fixed;
			left: -100vw;
			top: 0px;
			z-index: 10;
			background: #fff;
			height: 100vh;
			display: block !important;

			@apply flex-row justify-between items-start;
            &.active {
                left: 0;
            }
			.nav-bar__overlay {
				@apply fixed top-0 left-0 right-0 bottom-0 z-[-1] opacity-80;
				background: #2a363e;
			}

			&.active {
				-webkit-animation-name: animation;
				-webkit-animation-duration: 0.2s;
				animation-name: animation;
				animation-duration: 0.2s;
				display: block;
				left: 0px;
				overflow: hidden;
				opacity: 1;

				.nav-bar__overlay {
					display: block;
				}
			}

			&.unshow {
				animation-duration: 0.5s;
				position: fixed;
				z-index: 1;
				height: 100%;
				left: 0;
				transform: translateX(-1000px);
				transition-duration: 0.5s;
				opacity: 0;

				.nav-bar__overlay {
					display: none;
				}
			}

			.menu {
				@apply w-full flex-row bg-neutrals-5 px-[20px] h-full;
				max-width: 639px;

				ul {
					margin-top: 20px;

					li {
						@apply flex flex-row justify-between items-center h-[44px];
            &.active {
              a {
                @apply text-navigation;
              }
            }

            a {
              @apply text-neutrals font-bold text-xl;
            }
					}
				}
			}
		}

		.logo-small {
			@apply xsm:hidden h-[44px];
		}

		.logo-full {
			@apply hidden xsm:block h-[44px];
		}
	}

	.nav-icon {
		@apply fixed top-[12px] left-[14px] xsm:left-[24px] xlg:left-[38px] px-[15px] py-[15px] z-[9] border border-[#D3D6D7] rounded-full bg-[#ffffff] hidden;

		&.active{
			@apply xlg:block;
		}
	}
</style>
