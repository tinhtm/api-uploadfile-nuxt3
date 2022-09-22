 <script setup name="DescriptionBlock">
    const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {
                description: "<p>We are hiring a customer service representative for Dr. Berg Nutritionals to help customers with all billing, shipping, refund and order-related issues for all of our products and services. You will also be asked to resolve concerns and escalate complaints or questions to the right department so that the customer is satisfied. To do well in this role you need to be able to remain calm when customers are frustrated and have experience with customer service and online computer systems.</p><h3><strong>Customer Service Representative Responsibilities:</strong></h3><ul><li><p>Maintaining a positive, empathetic, and professional attitude toward customers at all times.</p></li><li><p>Responding promptly to customer inquiries.</p></li><li><p>Communicating with customers through our CRM, by taking calls, responding to emails and our text message system.</p></li><li><p>Acknowledging and resolving customer complaints.</p></li><li><p>Issuing refunds or processing reshipments when needed.</p></li><li><p>Escalating customer questions to the appropriate department.</p></li><li><p>Keeping records of customer interactions, transactions, comments, and complaints.</p></li><li><p>Communicating and coordinating with colleagues as necessary.</p></li><li><p>Providing feedback on the efficiency of the customer service process.</p></li><li><p>Ensure customer satisfaction and provide professional customer support over the phone and with written communication.</p></li></ul><h3><strong>Customer Service Representative Requirements:</strong></h3><ul><li><p>High school diploma</p></li><li><p>Fluent in English (multiple languages a plus!)</p></li><li><p>Great spelling and grammar skills.</p></li><li><p>Ability to stay calm when customers are stressed or upset.</p></li><li><p>Comfortable using computers and CRM software.</p></li><li><p>Experience working with online customer support.</p></li><li><p>Experience with Magento is a plus.</p></li></ul>",
                ctaLink: {
                    showLink: true,
                    text: "Join Our team",
                    url: "/open-positions/customer-service-representative/submit-form",
                    target: "_self"
                }
            }
        },
    }
   })
</script>
 <template>
    <div class="description-block mt-7">
        <div class="body" id="detail-job" v-html="data.description"></div>
        <div>
            <p v-if="data.ctaLink.showLink" class="join-team-btn">
                <button class="rippleAffect" @click="$redirect(data.ctaLink.url)">
                    {{data.ctaLink.text}}
                </button>
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.join-team-btn {
    @apply flex flex-row justify-start items-center mt-[30px] mb-[60px];
    button {
        @apply border-solid border-[1px] w-[139px] h-[48px] rounded-[24px] bg-navigation text-neutrals-5 text-[16px] font-bold;
                
        &.rippleAffect {
            background-position: center;
            transition: background 0.5s;
            border-radius: 125px;


            &:hover {
                background: #33a7b9 radial-gradient(circle, transparent 1%, #0091a8 1%) center/15000%;
            }

            &:active {
                background-color: rgba(255, 255, 255, 0.7);
                background-size: 100%;
                transition: background 0s;
            }
        }
    }
}
</style>